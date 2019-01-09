sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator",
	"sap/m/BusyDialog",
	"sap/ui/model/json/JSONModel",
	"sap/ui/core/ListItem",
	"sap/m/MessageBox",
	"sap/m/BusyIndicator"
], function (Controller, Filter, FilterOperator, BusyDialog, JSONModel, ListItem, MessageBox, BusyIndicator) {
	"use strict";
	var QuoteId, AccountId;
	return Controller.extend("konica.fiori.Prospect_Tasks.controller.Details", {

		onInit: function () {
			this.getOwnerComponent().getRouter("detail").attachRouteMatched(this.onDetailMatched, this);
		},
		onDetailMatched: function (oEvent) {
			var sPath = "/Prospects(QuoteId='";
			if (oEvent.getParameter("name") === "detail") {
				var items = oEvent.getParameters().arguments.objectId.split("-");
				sPath = sPath + items[0] + "',AccountD='" + items[1] + "')";
				var that = this;
				var fnSuccess = function (oData) {
					that.oData = oData;
					QuoteId = oData.QuoteId;
					AccountId = oData.AccountD;
					that.getView().byId("WrokflowMsgTxt").setText(oData.WorkflowMessageText);
					var x = oData.CurrentRole + " - " + oData.CurrentRoleDesc;
					that.getView().byId("CurrentRole").setText(x);
					x = oData.FutureRole + " - " + oData.FutureRoleDesc;
					that.getView().byId("FutureRole").setText(x);
					that.getView().byId("AccountId").setText(oData.AccountD);
					that.getView().byId("QuoteId_Txt").setText(oData.QuoteId);
					that.getView().byId("ReqEmpName").setText(oData.RequestedEmployeeName);
					that.getView().byId("QuoteStatus").setText(oData.QuoteStatusDecs);
					that.getView().byId("BranchNumber").setText(oData.BranchNumber);
					that.getView().byId("ParentAcountId").setText(oData.ParentAcountId);
					that.getView().byId("ReqEmpEmail").setText(oData.RequestedEmployeeEmail);
					that.getView().byId("Comments").setValue(oData.Comments);
					that.getView().setBusy(false);
					if (oData.RecordStatus === "DELETED" || oData.RecordStatus === "COMPLETED" || oData.RecordStatus === "REJECTED") {
						MessageBox.show("No further actions are allowed");
						that.getView().byId("Upgrade").setEnabled(false);
						that.getView().byId("Reject").setEnabled(false);
						that.getView().byId("Complete").setEnabled(false);
					} else {
						that.getView().byId("Upgrade").setEnabled(true);
						that.getView().byId("Reject").setEnabled(true);
						that.getView().byId("Complete").setEnabled(true);
					}

				};
				var fnFailure = function (oError) {
					that.getView().setBusy(false);
					return new Error(oError);
				};
				this.getView().setBusy(true);
				this.getView().getModel().read(sPath, {
					success: fnSuccess,
					failure: fnFailure
				});
				// this.getView().bindElement(sPath);
			}
		},
		onNavPress: function () {
			window.history.go(-1);
		},
		onUpgrade: function () {
			var sQuoteId = QuoteId;
			var sAccountId = AccountId;
			var sComments = this.getView().byId("Comments").getValue();
			if (sAccountId === "") {
				sAccountId = "9999999999";
			}
			var oURLParameters = {
				'QuoteId': sQuoteId,
				'AccountId': sAccountId,
				'Comments': sComments
			};
			var url = window.location.host;
			this.getView().getModel().callFunction("/Upgrade", {
				method: "POST",
				urlParameters: oURLParameters,
				success: function (oData, response) {
					var sUrl = "https://" + url +
						"/sap/bc/ui2/flp#BusinessPartner-maintain?sap-ui-tech-hint=GUI&CHANGE_NUMBER=" +
						sAccountId;
					window.open(sUrl);
				},
				error: function (oError) {
					return new Error(oError);
				}
			});

		},
		onComplete: function () {
			var sQuoteId = QuoteId;
			var sAccountId = AccountId;
			var sComments = this.getView().byId("Comments").getValue();
			if (sAccountId === "") {
				sAccountId = "9999999999";
			}
			var oURLParameters = {
				'QuoteId': sQuoteId,
				'AccountId': sAccountId,
				'Comments': sComments
			};
			this.getView().getModel().callFunction("/Complete", {
				method: "POST",
				urlParameters: oURLParameters,
				success: function (oData, response) {
					if (oData.Type === "E") {
						// var msgBox = new MessageBox();
						MessageBox.error(oData.Error, {
							title: "Error", // default
							onClose: null, // default
							styleClass: "", // default
							initialFocus: null, // default
							textDirection: sap.ui.core.TextDirection.Inherit // default
						});
					} else {
						window.history.go(-1);
					}
				},
				error: function (oError) {
					return new Error(oError);

				}
			});
		},
		afterRejDialogOpen: function (oEvent) {
			sap.ui.getCore().byId("idFragment--RejAccountId").setText(this.oData.AccountD);
			sap.ui.getCore().byId("idFragment--RejReqEmpName").setText(this.oData.RequestedEmployeeName);
			sap.ui.getCore().byId("idFragment--RejReqEmpEmail").setText(this.oData.RejReqEmpEmail);
			sap.ui.getCore().byId("idFragment--RejComments").setValue(this.oData.RejectionComment);

		},
		onReject: function () {
			if (!this.rejDialog) {
				this.rejDialog = sap.ui.xmlfragment("idFragment", "konica.fiori.Prospect_Tasks.frag.RejectDialog", this);
			}
			// sap.ui.getCore().byId("RejAccountId").setText(this.oData.AccountD);
			// var sPathToBind = this.getView().getBindingContext().getPath();
			this.rejDialog.setModel(this.getView().getModel());
			// this.rejDialog.bindElement(sPathToBind);
			this.rejDialog.open();
		},
		onRejCommentsChange: function (oEvent) {
			this.rejComments = oEvent.getParameter("newValue");
		},
		onRejSave: function () {
			if (this.rejComments === "") {
				return;
			}
			this.rejDialog.close();
			var sQuoteId = QuoteId;
			var sAccountId = AccountId;
			var sComments = this.getView().byId("Comments").getValue();
			var RejectionComment = this.rejComments;
			if (sAccountId === "") {
				sAccountId = "9999999999";
			}
			var oURLParameters = {
				'QuoteId': sQuoteId,
				'AccountId': sAccountId,
				'Comments': sComments,
				'RejComments': RejectionComment
			};

			this.getView().getModel().callFunction("/Reject", {
				method: "POST",
				changeSetId: "Testing1",
				urlParameters: oURLParameters,
				success: function (oData, response) {
					window.history.go(-1);
				},
				error: function (oError) {
					//     console.log("testing");
				}
			});
		},
		onCloseDialog: function () {
			if (this.rejDialog) {
				this.rejDialog.close();
			}
		}

	});
});
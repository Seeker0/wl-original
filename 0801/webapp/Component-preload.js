/**
* This file was auto-generated by SAP Web IDE build and includes all
* the source files required by SAPUI5 runtime for performance optimization.
* PLEASE DO NOT EDIT THIS FILE!! Changes will be overwritten the next time the build is run.
*/
jQuery.sap.registerPreloadedModules({
	"version": "2.0",
	"name": "konica/fiori/Prospect_Tasks/Component-preload",
	"modules": {
		"konica/fiori/Prospect_Tasks/Component.js": "sap.ui.define([\n\t\"sap/ui/core/UIComponent\",\n\t\"sap/ui/Device\",\n\t\"konica/fiori/Prospect_Tasks/model/models\"\n], function(UIComponent, Device, models) {\n\t\"use strict\";\n\n\treturn UIComponent.extend(\"konica.fiori.Prospect_Tasks1.Component\", {\n\n\t\tmetadata: {\n\t\t\tmanifest: \"json\"\n\t\t},\n\n\t\t/**\n\t\t * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.\n\t\t * @public\n\t\t * @override\n\t\t */\n\t\tinit: function() {\n\t\t\t// call the base component's init function\n\t\t\tUIComponent.prototype.init.apply(this, arguments);\n\t\t\tthis.getRouter().initialize();\n\t\t\t// set the device model\n\t\t\tthis.setModel(models.createDeviceModel(), \"device\");\n\t\t}\n\t});\n});",
		"konica/fiori/Prospect_Tasks/view/Detail.view.xml": "<mvc:View controllerName=\"konica.fiori.Prospect_Tasks1.controller.Detail\" xmlns:html=\"http://www.w3.org/1999/xhtml\"\n\txmlns:mvc=\"sap.ui.core.mvc\" xmlns=\"sap.m\" xmlns:f=\"sap.ui.layout.form\" xmlns:core=\"sap.ui.core\" xmlns:layout=\"sap.ui.layout\">\n\t<Page title=\"{i18n>DetailTitle}\" showNavButton=\"true\" navButtonPress=\"onNavPress\">\n\t\t<content>\n\t\t\t<VBox class=\"sapUiSmallMargin\" width=\"100%\">\n\t\t\t\t<FlexBox justifyContent=\"Center\">\n\t\t\t\t\t<FlexBox alignContent=\"Center\" alignItems=\"Center\" justifyContent=\"SpaceAround\" width=\"50%\">\n\t\t\t\t\t\t<items>\n\t\t\t\t\t\t\t<Text id=\"WrokflowMsgTxt\" text=\"{WorkflowMessageText}\" class=\"workflowMessage\"/>\n\t\t\t\t\t\t</items>\n\t\t\t\t\t</FlexBox>\n\t\t\t\t</FlexBox>\n\t\t\t\t<f:SimpleForm editable=\"true\" layout=\"ResponsiveGridLayout\" columnsM=\"2\" columnsL=\"2\" title=\"{WorkflowMessageText}\">\n\t\t\t\t\t<f:content>\n\t\t\t\t\t\t<Label text=\"Current Role\">\n\t\t\t\t\t\t\t<layoutData>\n\t\t\t\t\t\t\t\t<layout:GridData span=\"L2 M2\"/>\n\t\t\t\t\t\t\t</layoutData>\n\t\t\t\t\t\t</Label>\n\t\t\t\t\t\t<Text id=\"CurrentRole\" text=\"\">\n\t\t\t\t\t\t\t<layoutData>\n\t\t\t\t\t\t\t\t<layout:GridData span=\"L4 M4\"/>\n\t\t\t\t\t\t\t</layoutData>\n\t\t\t\t\t\t</Text>\n\t\t\t\t\t\t<Label text=\"Future Role\">\n\t\t\t\t\t\t\t<layoutData>\n\t\t\t\t\t\t\t\t<layout:GridData span=\"L2 M2\"/>\n\t\t\t\t\t\t\t</layoutData>\n\t\t\t\t\t\t</Label>\n\t\t\t\t\t\t<Text id=\"FutureRole\" text=\"\">\n\t\t\t\t\t\t\t<layoutData>\n\t\t\t\t\t\t\t\t<layout:GridData span=\"L4 M4\"/>\n\t\t\t\t\t\t\t</layoutData>\n\t\t\t\t\t\t</Text>\n\t\t\t\t\t\t<Label text=\"Requested by\">\n\t\t\t\t\t\t\t<layoutData>\n\t\t\t\t\t\t\t\t<layout:GridData span=\"L2 M2\"/>\n\t\t\t\t\t\t\t</layoutData>\n\t\t\t\t\t\t</Label>\n\t\t\t\t\t\t<Text id=\"ReqEmpName\" text=\"{RequestedEmployeeName}\">\n\t\t\t\t\t\t\t<layoutData>\n\t\t\t\t\t\t\t\t<layout:GridData span=\"L4 M4\"/>\n\t\t\t\t\t\t\t</layoutData>\n\t\t\t\t\t\t</Text>\n\t\t\t\t\t\t<Label text=\"Quote ID\">\n\t\t\t\t\t\t\t<layoutData>\n\t\t\t\t\t\t\t\t<layout:GridData span=\"L2 M2\"/>\n\t\t\t\t\t\t\t</layoutData>\n\t\t\t\t\t\t</Label>\n\t\t\t\t\t\t<Text id=\"QuoteId_Txt\" text=\"{QuoteId}\">\n\t\t\t\t\t\t\t<layoutData>\n\t\t\t\t\t\t\t\t<layout:GridData span=\"L4 M4\"/>\n\t\t\t\t\t\t\t</layoutData>\n\t\t\t\t\t\t</Text>\n\t\t\t\t\t\t<Label text=\"Email\">\n\t\t\t\t\t\t\t<layoutData>\n\t\t\t\t\t\t\t\t<layout:GridData span=\"L2 M2\"/>\n\t\t\t\t\t\t\t</layoutData>\n\t\t\t\t\t\t</Label>\n\t\t\t\t\t\t<Text id=\"ReqEmpEmail\" text=\"{RequestedEmployeeEmail}\">\n\t\t\t\t\t\t\t<layoutData>\n\t\t\t\t\t\t\t\t<layout:GridData span=\"L4 M4\"/>\n\t\t\t\t\t\t\t</layoutData>\n\t\t\t\t\t\t</Text>\n\t\t\t\t\t\t<Label text=\"Quote Status\">\n\t\t\t\t\t\t\t<layoutData>\n\t\t\t\t\t\t\t\t<layout:GridData span=\"L2 M2\"/>\n\t\t\t\t\t\t\t</layoutData>\n\t\t\t\t\t\t</Label>\n\t\t\t\t\t\t<Text id=\"QuoteStatus\" text=\"{QuoteStatusDecs}\">\n\t\t\t\t\t\t\t<layoutData>\n\t\t\t\t\t\t\t\t<layout:GridData span=\"L4 M4\"/>\n\t\t\t\t\t\t\t</layoutData>\n\t\t\t\t\t\t</Text>\n\t\t\t\t\t\t<Label text=\"Branch\">\n\t\t\t\t\t\t\t<layoutData>\n\t\t\t\t\t\t\t\t<layout:GridData span=\"L2 M2\"/>\n\t\t\t\t\t\t\t</layoutData>\n\t\t\t\t\t\t</Label>\n\t\t\t\t\t\t<Text id=\"BranchNumber\" text=\"{BranchNumber}\">\n\t\t\t\t\t\t\t<layoutData>\n\t\t\t\t\t\t\t\t<layout:GridData span=\"L4 M4\"/>\n\t\t\t\t\t\t\t</layoutData>\n\t\t\t\t\t\t</Text>\n\t\t\t\t\t\t<Label text=\"Parent Account\">\n\t\t\t\t\t\t\t<layoutData>\n\t\t\t\t\t\t\t\t<layout:GridData span=\"L2 M2\"/>\n\t\t\t\t\t\t\t</layoutData>\n\t\t\t\t\t\t</Label>\n\t\t\t\t\t\t<Text id=\"ParentAcountId\" text=\"{ParentAcountId}\">\n\t\t\t\t\t\t\t<layoutData>\n\t\t\t\t\t\t\t\t<layout:GridData span=\"L4 M4\"/>\n\t\t\t\t\t\t\t</layoutData>\n\t\t\t\t\t\t</Text>\n\t\t\t\t\t\t<Label text=\"Account Id\">\n\t\t\t\t\t\t\t<layoutData>\n\t\t\t\t\t\t\t\t<layout:GridData span=\"L2 M2\"/>\n\t\t\t\t\t\t\t</layoutData>\n\t\t\t\t\t\t</Label>\n\t\t\t\t\t\t<Text id=\"AccountId\" text=\"{AccountD}\">\n\t\t\t\t\t\t\t<layoutData>\n\t\t\t\t\t\t\t\t<layout:GridData span=\"L4 M4\"/>\n\t\t\t\t\t\t\t</layoutData>\n\t\t\t\t\t\t</Text>\t\t\t\t\t\t\n\t\t\t\t\t\t<Label text=\"Comments\">\n\t\t\t\t\t\t\t<layoutData>\n\t\t\t\t\t\t\t\t<layout:GridData span=\"L12 M12\"/>\n\t\t\t\t\t\t\t</layoutData>\n\t\t\t\t\t\t</Label>\n\t\t\t\t\t\t<TextArea id=\"Comments\" value=\"{Comments}\" rows=\"5\" editable=\"false\">\n\t\t\t\t\t\t\t<layoutData>\n\t\t\t\t\t\t\t\t<layout:GridData span=\"L12 M12\"/>\n\t\t\t\t\t\t\t</layoutData>\n\t\t\t\t\t\t</TextArea>\n\t\t\t\t\t</f:content>\n\t\t\t\t</f:SimpleForm>\n\t\t\t</VBox>\n\t\t\t<FlexBox justifyContent=\"Center\">\n\t\t\t\t<FlexBox alignContent=\"Center\" alignItems=\"Center\" justifyContent=\"SpaceAround\" width=\"50%\">\n\t\t\t\t\t<items>\n\t\t\t\t\t\t<Button id=\"Upgrade\" text=\"Upgrade Prospect\" width=\"100%\" type=\"Accept\" class=\"sapUiSmallMarginEnd\" press=\"onUpgrade\"/>\n\t\t\t\t\t\t<Button id=\"Reject\" text=\"Reject Upgrade\" width=\"100%\" type=\"Reject\" class=\"sapUiSmallMarginEnd\" press=\"onReject\"/>\n\t\t\t\t\t\t<Button id=\"Complete\" text=\"Complete Task\" width=\"100%\" type=\"Emphasized\" press=\"onComplete\"/>\n\t\t\t\t\t</items>\n\t\t\t\t</FlexBox>\n\t\t\t</FlexBox>\n\t\t</content>\n\t</Page>\n</mvc:View>",
		"konica/fiori/Prospect_Tasks/controller/Detail.controller.js": "sap.ui.define([\n\t\"sap/ui/core/mvc/Controller\",\n\t\"sap/ui/model/Filter\",\n\t\"sap/ui/model/FilterOperator\",\n\t\"sap/m/BusyDialog\",\n\t\"sap/ui/model/json/JSONModel\",\n\t\"sap/ui/core/ListItem\",\n\t\"sap/m/MessageBox\",\n\t\"sap/m/BusyIndicator\"\n], function(Controller, Filter, FilterOperator, BusyDialog, JSONModel, ListItem, MessageBox, BusyIndicator) {\n\t\"use strict\";\n\tvar QuoteId, AccountId;\n\treturn Controller.extend(\"konica.fiori.Prospect_Tasks1.controller.Detail\", {\n\n\t\tonInit: function() {\n\t\t\tthis.getOwnerComponent().getRouter(\"detail\").attachRouteMatched(this.onDetailMatched, this);\n\t\t},\n\t\tonDetailMatched: function(oEvent) {\n\t\t\tvar sPath = \"/Prospects(QuoteId='\";\n\t\t\tif (oEvent.getParameter(\"name\") === \"detail\") {\n\t\t\t\tvar items = oEvent.getParameters().arguments.objectId.split(\"-\");\n\t\t\t\tsPath = sPath + items[0] + \"',AccountD='\" + items[1] + \"')\";\n\t\t\t\tvar that = this;\n\t\t\t\tvar fnSuccess = function(oData) {\n\t\t\t\t\tthat.oData = oData;\n\t\t\t\t\tQuoteId = oData.QuoteId;\n\t\t\t\t\tAccountId = oData.AccountD;\n\t\t\t\t\tthat.getView().byId(\"WrokflowMsgTxt\").setText(oData.WorkflowMessageText);\n\t\t\t\t\tvar x = oData.CurrentRole + \" - \" + oData.CurrentRoleDesc;\n\t\t\t\t\tthat.getView().byId(\"CurrentRole\").setText(x);\n\t\t\t\t\tx = oData.FutureRole + \" - \" + oData.FutureRoleDesc;\n\t\t\t\t\tthat.getView().byId(\"FutureRole\").setText(x);\n\t\t\t\t\tthat.getView().byId(\"AccountId\").setText(oData.AccountD);\n\t\t\t\t\tthat.getView().byId(\"QuoteId_Txt\").setText(oData.QuoteId);\n\t\t\t\t\tthat.getView().byId(\"ReqEmpName\").setText(oData.RequestedEmployeeName);\n\t\t\t\t\tthat.getView().byId(\"QuoteStatus\").setText(oData.QuoteStatusDecs);\n\t\t\t\t\tthat.getView().byId(\"BranchNumber\").setText(oData.BranchNumber);\n\t\t\t\t\tthat.getView().byId(\"ParentAcountId\").setText(oData.ParentAcountId);\n\t\t\t\t\tthat.getView().byId(\"ReqEmpEmail\").setText(oData.RequestedEmployeeEmail);\n\t\t\t\t\tthat.getView().byId(\"Comments\").setValue(oData.Comments);\n\t\t\t\t\tthat.getView().setBusy(false);\n\t\t\t\t\tif (oData.RecordStatus === \"DELETED\" || oData.RecordStatus === \"COMPLETED\" || oData.RecordStatus === \"REJECTED\") {\n\t\t\t\t\t\tMessageBox.show(\"No further actions are allowed\");\n\t\t\t\t\t\tthat.getView().byId(\"Upgrade\").setEnabled(false);\n\t\t\t\t\t\tthat.getView().byId(\"Reject\").setEnabled(false);\n\t\t\t\t\t\tthat.getView().byId(\"Complete\").setEnabled(false);\n\t\t\t\t\t} else {\n\t\t\t\t\t\tthat.getView().byId(\"Upgrade\").setEnabled(true);\n\t\t\t\t\t\tthat.getView().byId(\"Reject\").setEnabled(true);\n\t\t\t\t\t\tthat.getView().byId(\"Complete\").setEnabled(true);\n\t\t\t\t\t}\n\n\t\t\t\t};\n\t\t\t\tvar fnFailure = function(oError) {\n\t\t\t\t\tconsole.log(oError);\n\t\t\t\t\tthat.getView().setBusy(false);\n\t\t\t\t};\n\t\t\t\tthis.getView().setBusy(true);\n\t\t\t\tthis.getView().getModel().read(sPath, {\n\t\t\t\t\tsuccess: fnSuccess,\n\t\t\t\t\tfailure: fnFailure\n\t\t\t\t});\n\t\t\t\t// this.getView().bindElement(sPath);\n\t\t\t}\n\t\t},\n\t\tonNavPress: function() {\n\t\t\twindow.history.go(-1);\n\t\t},\n\t\tonUpgrade: function() {\n\t\t\tvar sQuoteId = QuoteId;\n\t\t\tvar sAccountId = AccountId;\n\t\t\tvar sComments = this.getView().byId(\"Comments\").getValue();\n\t\t\tif (sAccountId === \"\") {\n\t\t\t\tsAccountId = \"9999999999\";\n\t\t\t}\n\t\t\tvar oURLParameters = {\n\t\t\t\t'QuoteId': sQuoteId,\n\t\t\t\t'AccountId': sAccountId,\n\t\t\t\t'Comments': sComments\n\t\t\t};\n\n\t\t\tthis.getView().getModel().callFunction(\"/Upgrade\", {\n\t\t\t\tmethod: \"POST\",\n\t\t\t\turlParameters: oURLParameters,\n\t\t\t\tsuccess: function(oData, response) {\n\t\t\t\t\tvar sUrl =\n\t\t\t\t\t\t\"https://ussud1ci.sapmc.minolta.com:8400/sap/bc/ui2/flp#BusinessPartner-maintain?sap-ui-tech-hint=GUI&CHANGE_NUMBER=\";\n\t\t\t\t\tsUrl = sUrl + sAccountId;\n\n\t\t\t\t\twindow.open(sUrl);\n\t\t\t\t},\n\t\t\t\terror: function(oError) {\n\t\t\t\t\tconsole.log(\"testing\");\n\t\t\t\t}\n\t\t\t});\n\n\t\t},\n\t\tonComplete: function() {\n\t\t\tvar sQuoteId = QuoteId;\n\t\t\tvar sAccountId = AccountId;\n\t\t\tvar sComments = this.getView().byId(\"Comments\").getValue();\n\t\t\tif (sAccountId === \"\") {\n\t\t\t\tsAccountId = \"9999999999\";\n\t\t\t}\n\t\t\tvar oURLParameters = {\n\t\t\t\t'QuoteId': sQuoteId,\n\t\t\t\t'AccountId': sAccountId,\n\t\t\t\t'Comments': sComments\n\t\t\t};\n\t\t\tthis.getView().getModel().callFunction(\"/Complete\", {\n\t\t\t\tmethod: \"POST\",\n\t\t\t\turlParameters: oURLParameters,\n\t\t\t\tsuccess: function(oData, response) {\n\t\t\t\t\tif (oData.Type === \"E\") {\n\t\t\t\t\t\t// var msgBox = new MessageBox();\n\t\t\t\t\t\tMessageBox.error(oData.Error, {\n\t\t\t\t\t\t\ttitle: \"Error\", // default\n\t\t\t\t\t\t\tonClose: null, // default\n\t\t\t\t\t\t\tstyleClass: \"\", // default\n\t\t\t\t\t\t\tinitialFocus: null, // default\n\t\t\t\t\t\t\ttextDirection: sap.ui.core.TextDirection.Inherit // default\n\t\t\t\t\t\t});\n\t\t\t\t\t} else {\n\t\t\t\t\t\twindow.history.go(-1);\n\t\t\t\t\t}\n\t\t\t\t},\n\t\t\t\terror: function(oError) {\n\t\t\t\t\tconsole.log(\"testing\");\n\t\t\t\t}\n\t\t\t});\n\t\t},\n\t\tafterRejDialogOpen: function(oEvent) {\n\t\t\tsap.ui.getCore().byId(\"idFragment--RejAccountId\").setText(this.oData.AccountD);\n\t\t\tsap.ui.getCore().byId(\"idFragment--RejReqEmpName\").setText(this.oData.RequestedEmployeeName);\n\t\t\tsap.ui.getCore().byId(\"idFragment--RejReqEmpEmail\").setText(this.oData.RejReqEmpEmail);\n\t\t\tsap.ui.getCore().byId(\"idFragment--RejComments\").setValue(this.oData.RejectionComment);\n\t\t\t\n\t\t\t\n\t\t},\n\t\tonReject: function() {\n\t\t\tif (!this.rejDialog) {\n\t\t\t\tthis.rejDialog = sap.ui.xmlfragment(\"idFragment\", \"konica.fiori.Prospect_Tasks1.frag.RejectDialog\", this);\n\t\t\t}\n\t\t\t// sap.ui.getCore().byId(\"RejAccountId\").setText(this.oData.AccountD);\n\t\t\t// var sPathToBind = this.getView().getBindingContext().getPath();\n\t\t\tthis.rejDialog.setModel(this.getView().getModel());\n\t\t\t// this.rejDialog.bindElement(sPathToBind);\n\t\t\tthis.rejDialog.open();\n\t\t},\n\t\tonRejCommentsChange: function(oEvent) {\n\t\t\tthis.rejComments = oEvent.getParameter(\"newValue\");\n\t\t},\n\t\tonRejSave: function() {\n\t\t\tif (this.rejComments === \"\") {\n\t\t\t\treturn;\n\t\t\t}\n\t\t\tthis.rejDialog.close();\n\t\t\tvar sQuoteId = QuoteId;\n\t\t\tvar sAccountId = AccountId;\n\t\t\tvar sComments = this.getView().byId(\"Comments\").getValue();\n\t\t\tvar RejectionComment = this.rejComments;\n\t\t\tif (sAccountId === \"\") {\n\t\t\t\tsAccountId = \"9999999999\";\n\t\t\t}\n\t\t\tvar oURLParameters = {\n\t\t\t\t'QuoteId': sQuoteId,\n\t\t\t\t'AccountId': sAccountId,\n\t\t\t\t'Comments': sComments,\n\t\t\t\t'RejComments': RejectionComment\n\t\t\t};\n\n\t\t\tthis.getView().getModel().callFunction(\"/Reject\", {\n\t\t\t\tmethod: \"POST\",\n\t\t\t\tchangeSetId: \"Testing1\",\n\t\t\t\turlParameters: oURLParameters,\n\t\t\t\tsuccess: function(oData, response) {\n\t\t\t\t\twindow.history.go(-1);\n\t\t\t\t},\n\t\t\t\terror: function(oError) {\n\t\t\t\t\tconsole.log(\"testing\");\n\t\t\t\t}\n\t\t\t});\n\t\t},\n\t\tonCloseDialog: function() {\n\t\t\tif (this.rejDialog) {\n\t\t\t\tthis.rejDialog.close();\n\t\t\t}\n\t\t}\n\n\t});\n});",
		"konica/fiori/Prospect_Tasks/frag/RejectDialog.fragment.xml": "<core:FragmentDefinition xmlns=\"sap.m\" xmlns:core=\"sap.ui.core\" xmlns:layout=\"sap.ui.layout\" xmlns:f=\"sap.ui.layout.form\">\n\t<Dialog contentWidth=\"1024px\" title=\"Please enter the reason for Rejection message\" draggable=\"true\" contentHeight=\"350px\" afterOpen=\"afterRejDialogOpen\">\n\t\t<VBox class=\"sapUiSmallMargin\" width=\"100%\">\n\t\t\t<f:SimpleForm editable=\"true\">\n\t\t\t\t<f:content>\n\t\t\t\t\t<Label text=\"Requesting User\"/>\n\t\t\t\t\t<Text id=\"RejReqEmpName\" text=\"{RequestedEmployeeName}\"/>\n\t\t\t\t\t<Label text=\"Email\"/>\n\t\t\t\t\t<Text id=\"RejReqEmpEmail\" text=\"{RequestedEmployeeEmail}\"/>\n\t\t\t\t\t<Label text=\"Account Number\"/>\n\t\t\t\t\t<Text id=\"RejAccountId\" text=\"{AccountD}\"/>\n\t\t\t\t\t<Label text=\"Rejection Message\" labelFor=\"RejComments\"/>\n\t\t\t\t\t<TextArea id=\"RejComments\" value=\"{RejectionComment}\" rows=\"5\" width=\"80%\" change=\"onRejCommentsChange\"/>\n\t\t\t\t</f:content>\n\t\t\t</f:SimpleForm>\n\t\t</VBox>\n\t\t<buttons>\n\t\t\t<Button text=\"SAVE\" press=\"onRejSave\" type=\"Accept\"/>\n\t\t\t<Button text=\"CLOSE\" press=\"onCloseDialog\" type=\"Reject\"/>\n\t\t</buttons>\n\t</Dialog>\n</core:FragmentDefinition>",
		"konica/fiori/Prospect_Tasks/view/App.view.xml": "<mvc:View controllerName=\"konica.fiori.Prospect_Tasks1.controller.App\" xmlns:html=\"http://www.w3.org/1999/xhtml\"\n\txmlns:mvc=\"sap.ui.core.mvc\" displayBlock=\"true\" xmlns=\"sap.m\" xmlns:f=\"sap.ui.layout.form\" xmlns:l=\"sap.ui.layout\" xmlns:core=\"sap.ui.core\">\n\t<App id=\"App\"/>\n</mvc:View>",
		"konica/fiori/Prospect_Tasks/view/MainView.view.xml": "<mvc:View controllerName=\"konica.fiori.Prospect_Tasks1.controller.MainView\" xmlns:html=\"http://www.w3.org/1999/xhtml\"\n\txmlns:mvc=\"sap.ui.core.mvc\" displayBlock=\"true\" xmlns=\"sap.m\" xmlns:smartFilterBar=\"sap.ui.comp.smartfilterbar\"\n\txmlns:smartTable=\"sap.ui.comp.smarttable\">\n\t<Page title=\"{i18n>title}\">\n\t\t<content>\n\t\t\t<smartFilterBar:SmartFilterBar id=\"smartFilterBar\" entitySet=\"Prospects\">\n\t\t\t\t<smartFilterBar:controlConfiguration>\n\t\t\t\t\t<smartFilterBar:ControlConfiguration key=\"QuoteId\" index=\"1\" label=\"Quote#\" visibleInAdvancedArea=\"true\" hasValueHelpDialog=\"true\"></smartFilterBar:ControlConfiguration>\t\t\t\t\t\n\t\t\t\t\t<smartFilterBar:ControlConfiguration key=\"AccountD\" index=\"2\" label=\"Account#\" visibleInAdvancedArea=\"true\" hasValueHelpDialog=\"true\"></smartFilterBar:ControlConfiguration>\n\t\t\t\t\t<smartFilterBar:ControlConfiguration key=\"BranchNumber\" index=\"3\" label=\"Branch No\" visibleInAdvancedArea=\"true\"></smartFilterBar:ControlConfiguration>\n\t\t\t\t\t<smartFilterBar:ControlConfiguration key=\"QuoteStatus\" index=\"4\" label=\"Quote status\" visibleInAdvancedArea=\"true\"></smartFilterBar:ControlConfiguration>\n\t\t\t\t\t<smartFilterBar:ControlConfiguration key=\"RequestedEmployeeNumber\" index=\"5\" label=\"Req.Emp\" visibleInAdvancedArea=\"true\"></smartFilterBar:ControlConfiguration>\n\t\t\t\t\t<smartFilterBar:ControlConfiguration key=\"RecordStatus\" index=\"6\" label=\"Record Status\" visibleInAdvancedArea=\"true\"\n\t\t\t\t\t\thasValueHelpDialog=\"true\"></smartFilterBar:ControlConfiguration>\n\t\t\t\t</smartFilterBar:controlConfiguration>\n\t\t\t</smartFilterBar:SmartFilterBar>\n\t\t\t<smartTable:SmartTable id=\"ProspectsTable\" smartFilterId=\"smartFilterBar\" tableType=\"ResponsiveTable\" editable=\"false\" entitySet=\"Prospects\"\n\t\t\t\tuseVariantManagement=\"true\" useTablePersonalisation=\"true\" header=\"Prospects\" showRowCount=\"true\" useExportToExcel=\"true\"\n\t\t\t\tenableAutoBinding=\"true\" initiallyVisibleFields=\"QuoteId,AccountD,BranchNumber,CurrentRole,FutureRole\" dataReceived=\"onDataReceived\">\n\t\t\t\t<Table id=\"ProspInnerTable\" updateStarted=\"onUpdateStarted\">\n\t\t\t\t\t<columns></columns>\n\t\t\t\t\t<items>\n\t\t\t\t\t\t<ColumnListItem type=\"Navigation\" press=\"onItemPress\" vAlign=\"Top\" ></ColumnListItem>\n\t\t\t\t\t</items>\n\t\t\t\t</Table>\n\t\t\t</smartTable:SmartTable>\n\t\t</content>\n\t</Page>\n</mvc:View>",
		"konica/fiori/Prospect_Tasks/controller/App.controller.js": "sap.ui.define([\n\t\"sap/ui/core/mvc/Controller\"\n], function(Controller) {\n\t\"use strict\";\n\n\treturn Controller.extend(\"konica.fiori.Prospect_Tasks1.controller.App\", {\n\t\tonInit: function() {\n\t\t}\n\n\t});\n});",
		"konica/fiori/Prospect_Tasks/controller/MainView.controller.js": "sap.ui.define([\n\t\"sap/ui/core/mvc/Controller\"\n], function(Controller) {\n\t\"use strict\";\n\n\treturn Controller.extend(\"konica.fiori.Prospect_Tasks1.controller.MainView\", {\n\t\tonInit: function() {},\n\t\tonItemPress: function(oEvent) {\n\t\t\tvar objId = \"\";\n\t\t\tif (oEvent) {\n\t\t\t\tvar bindingObj = oEvent.getSource().getSingleSelectControl().getBindingContext().getObject();\n\t\t\t\tobjId = bindingObj.QuoteId + \"-\" + bindingObj.AccountD;\n\t\t\t\tvar router = this.getOwnerComponent().getRouter();\n\t\t\t\trouter.navTo(\"detail\", {\n\t\t\t\t\tobjectId: objId\n\t\t\t\t});\n\t\t\t}\n\t\t},\n\t\tonUpdateStarted: function(oEvent) {\n\t\t\tif (oEvent) {\n\t\t\t\tvar table = this.getView().byId(\"ProspInnerTable\");\n\t\t\t\ttable.updateItems();\n\t\t\t}\n\t\t}\n\n\t});\n});",
		"konica/fiori/Prospect_Tasks/model/models.js": "sap.ui.define([\n\t\"sap/ui/model/json/JSONModel\",\n\t\"sap/ui/Device\"\n], function(JSONModel, Device) {\n\t\"use strict\";\n\n\treturn {\n\n\t\tcreateDeviceModel: function() {\n\t\t\tvar oModel = new JSONModel(Device);\n\t\t\toModel.setDefaultBindingMode(\"OneWay\");\n\t\t\treturn oModel;\n\t\t}\n\n\t};\n});"
	}
});
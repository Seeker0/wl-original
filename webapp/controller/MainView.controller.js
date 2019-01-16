sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("konica.fiori.Prospect_Tasks.controller.MainView", {
		onInit: function() {},
		onItemPress: function(oEvent) {
			var objId = "";
			if (oEvent) {
				var bindingObj = oEvent.getSource().getSingleSelectControl().getBindingContext().getObject();
				objId = bindingObj.QuoteId + "-" + bindingObj.AccountD;
				var router = this.getOwnerComponent().getRouter();
				router.navTo("detail", {
					objectId: objId
				});
			}
		},
		onUpdateStarted: function(oEvent) {
			if (oEvent) {
				var table = this.getView().byId("ProspInnerTable");
				table.updateItems();
			}
		}

	});
});
({
	fireCarAccidentAppEvent  : function(component, event, helper) {
        console.log('fireCarAccidentAppEvent is called');
        //syntax for app event
		var appEvent = $A.get("e.c:carAccidentAppEvent");
		appEvent.setParams({"msg":"Car Accident Notification through Application event. Sending ambulance!!!."});
        appEvent.fire();
    }
})
({
	handleNotification : function(component, event, helper){
        console.log('handleNotification is called');
        var sentMessage= event.getParam("msg");
        console.log('******sentMessage by app event:'+sentMessage);
        component.set("v.msgFromNotifier", sentMessage);
        helper.PlayAmbulanceSiren(component);
    },
    sendAmbulanceMannually: function(component, event, helper) {
        component.set("v.msgFromNotifier", "sending ambulance mannually");
        helper.PlayAmbulanceSiren(component);  
	},
    resetComponent :function(component, event,helper){
        component.set("v.msgFromNotifier", "");
    }
})
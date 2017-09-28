({
    doInit : function(component, event, helper){
        var action = component.get("c.findAccounts");
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                var apexResponse = response.getReturnValue();
                //console.log('***apexResponse:'+ JSON.stringify(apexResponse));
                component.set("v.accList", apexResponse);
                console.log('********Accounts list view loaded successfully');
            }else if(state === "ERROR"){
                alert('Problem with connection. Please try again.');
            }
        });
        $A.enqueueAction(action);
    },
    onSelectMenuItem : function(component, event, helper) { 
        var selectedOption = event.getSource().get('v.value'); 
        var selectedId = selectedOption.split('---')[0]; 	
        console.log('*************selectedId:'+selectedId); 	
        component.set("v.selectedRecord",selectedId); 	
        console.log('*************selectedOption:'+selectedOption); 
        if (selectedOption.endsWith("View")) { 				
            component.set("v.currentView","RecordView"); 
        }else if(selectedOption.endsWith("Edit")){ 				
            component.set("v.currentView","RecordEdit"); 
        } 
    }
    
})
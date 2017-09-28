({ 
    handleRecordChanges: function(component, event, helper) {
        var eventParams = event.getParams(); 
        if(eventParams.changeType === "LOADED") { 
            // record is loaded 
            var fieldsDetails= component.get("v.fieldsInfo"); 
            console.log("fieldsInfo is loaded successfully. TargetField"+ 	JSON.stringify(fieldsDetails)); 
            var recordDetails= component.get("v.recordInfo"); 
            console.log("recordInfo -Target Record"+ JSON.stringify(recordDetails)); 
            console.log('Record loaded successfully'); 
        } 
    },
    saveRecordHandler: function(component, event, helper) {       	
        component.find("recordLoader").saveRecord($A.getCallback(function(saveResult) { 
        	if (saveResult.state === "SUCCESS" || saveResult.state === "DRAFT") { 	   	       
                console.log('Record updated successfully'); 
            }else if (saveResult.state === "ERROR") { 
                console.log('Problem error: ' + JSON.stringify(saveResult.error)); 
            } else { 
                console.log('Unknown problem, state: ' + saveResult.state + ', error: ' + JSON.stringify(saveResult.error)); 
            } 
    	})); 
    },
    goBackToListView : function(component,event,helper){ 	component.set("v.currView","ListView"); 
}

})
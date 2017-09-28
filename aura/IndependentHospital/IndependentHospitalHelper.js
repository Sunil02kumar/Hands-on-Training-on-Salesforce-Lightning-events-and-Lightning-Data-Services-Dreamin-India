({
	PlayAmbulanceSiren : function(component) {
		var rUrl = $A.get('$Resource.LightningEventsResources');
        rUrl = rUrl + '/resources/ambulanceSiren.mp3';
        //var rUrl = 'https://sk02-dev-ed--skforce.ap1.visual.force.com/resource/1504437990000/skforce__AmbulanceSiren';
        console.log(rUrl);
        var domElement = component.find("audioclip").getElement();
        domElement.src=rUrl;
        domElement.play();
	}
})
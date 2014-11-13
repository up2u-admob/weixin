mainInAni = "zoomIn";
mainOutAni = "zoomOut";
itemInAni = "zoomIn";
itemOutAni = "zoomOut";

$(document).ready(function () {   		
	$("#m-mark").click(function(){
		$.mobile.changePage("#subpage1", {transition:"flip"});
	}); 
});
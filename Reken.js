(document).ready(function()){

	var first= (#First).val();
	var second=(#Second).val();
	var actie=(#option).val();
	

	if (actie=="X") {
		first*second;
	}
	else if (actie=="/") {
		first/second;
	}
	else if (actie=="+") {
		first+second;
	}
	else{
		first-second;
	}
}
	
    $("#button").click(function(){
        $('#resultaat').val(actie);






}
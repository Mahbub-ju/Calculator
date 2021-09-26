function insert(num){
	
	var existnum=$("#result").val();
	$("#result").val(existnum + num);
	
}
function clearBtn(){
	$("#result").val(' ');
}
function calculate(){
	var x= eval($("#result").val());
	$("#result").val(x);
	
}

function deleteval(){
	var presentval = $("#result").val();
	if(presentval!=' '){
	$("#result").val(presentval.slice(0,-1));
	}

	
}
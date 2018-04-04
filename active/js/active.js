var but_yes=document.getElementById('but_yes');
var but_no=document.getElementById('but_no');
var i=1;
but_yes.style.border="0.04rem solid #f66006";
but_no.style.border="0.04rem";
document.onkeydown=function(event){
	if(event.keyCode==37 || event.keyCode=="KEY_LEFT" ){
		i=1;
		but_yes.style.border="0.04rem solid #f66006";
		but_no.style.border="0.04rem";
	}else if(event.keyCode==39 || event.keyCode=="KEY_RIGHT" ){
		i=2;
		but_yes.style.border="0.04rem";
		but_no.style.border="0.04rem solid #f66006";
	}else if(event.keyCode==13 || event.keyCode=="KEY_ENTER"){
		if(i==1){
			outer.order();
		}else if(i==2){
			outer.back();
		}
	}
}
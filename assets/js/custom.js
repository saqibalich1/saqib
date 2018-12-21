function redirect(data){
	window.location = data;

}
function base_url(data=''){
base= $('#base_url').val();
return  base + data;
}

$(document).ready(function() {
$("input[type=number]").on("keydown", function(event) {
        if (event.keyCode === 38 || event.keyCode === 40) {
            event.preventDefault();
        }
     });
   });

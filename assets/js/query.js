function make(){
missing = [ 
{ name: 'post', type: 'text', title: 'Form No.' },
{ name: 'cnic', type: 'text', title: 'ID Card No.' },
{ name: 'post', type: 'text', title: 'Post Name' },
// { name: 'mobile', type: 'text', title: 'Contact No.' },
{ name: 'email', type: 'text', title: 'Email Address to send slip or other data' },
{ name: 'paid', type: 'text', title: 'How you paid your fee' }, ];

rejected = [ { name: 'post', type: 'text', title: 'Form No.' },
{ name: 'cnic', type: 'text', title: 'ID Card No.' },
{ name: 'post', type: 'text', title: 'Post Name' },
{ name: 'mobile', type: 'text', title: 'Contact No.' },
{ name: 'email', type: 'text', title: 'Email Address to send slip or other data' },
{ name: 'complement', type: 'text', title: 'Write your complement to solve your issue' }, ];

resultcard = [ { name: 'post', type: 'text', title: 'Form No.' },
{ name: 'cnic', type: 'text', title: 'ID Card No.' },
{ name: 'roll', type: 'text', title: 'Roll No' },
{ name: 'addr', type: 'text', title: 'Address' },
{ name: 'mobile', type: 'text', title: 'Contact No.' },
{ name: 'email', type: 'text', title: 'Email Address to send slip or other data' }, ];

spell = [ { name: 'post', type: 'text', title: 'Form No.' },
{ name: 'cnic', type: 'text', title: 'ID Card No.' },
{ name: 'obj', type: 'text', title: 'aaWhich thing is not valid name CNIC or Father Name' },
{ name: 'correct', type: 'text', title: 'Type your actual record to be correct' }, 
{ name: 'mobile', type: 'text', title: 'Contact No.' },
{ name: 'email', type: 'text', title: 'Email Address to send slip or other data' },
];

field = [ { name: 'post', type: 'text', title: 'Form No.' },
{ name: 'cnic', type: 'text', title: 'ID Card No.' },
{ name: 'post', type: 'text', title: 'Correct Post Name' },
{ name: 'Application No.', type: 'text', title: 'app' },
{ name: 'correct', type: 'text', title: 'Type your actual record to be correct' }, 
{ name: 'mobile', type: 'text', title: 'Contact No.' },
{ name: 'email', type: 'text', title: 'Email Address to send slip or other data' },
];

recheck = [ { name: 'post', type: 'text', title: 'Form No.' },
{ name: 'cnic', type: 'text', title: 'ID Card No.' },
{ name: 'wish', type: 'text', title: 'What you feel? much marks you should?' },
{ name: 'app', type: 'text', title: 'Application No.' },
{ name: 'correct', type: 'text', title: 'Type your actual record to be correct' }, 
{ name: 'mobile', type: 'text', title: 'Contact No.' },
{ name: 'email', type: 'text', title: 'Email Address to send slip or other data' },
];
other = [ 
{ name: 'cnic', type: 'text', title: 'ID Card No.' },
{ name: 'mobile', type: 'text', title: 'Mobile No.' },
{ name: 'details', type: 'textarea', title: 'Write detailed issue.' },

];
passwo = [ 
{ name: 'cnic', type: 'text', title: 'ID Card No.' },
{ name: 'mobile', type: 'text', title: 'Mobile No.' },
{ name: 'email', type: 'text', title: 'Email Address' },
{ name: 'details',type: 'textarea', title: 'Type your details to reset password.' },
];

m = $('#cat').val();
switch (m) {
case 'pass':    data = passwo;    break;
  case 'missing':    data = missing;    break;
  case 'rejected':    data = rejected;    break;
  case 'resultcard':    data = resultcard;    break;
  case 'spell':    data = spell;    break;
  case 'field':    data = field;    break;
  case 'recheck':    data = recheck;    break;
  case 'other':    data = other;    break;
}





	  $('#makearea').hide();
	  $('#makearea').html('');

	
for(var i = 0; i < data.length; i++) {
info = data[i];
id = info.name;

if(info.type =='text'){
a = '<div class="form-group" data-toggle="tooltip" title="'+info.title+'" data-placement="left"> <label class="control-label " for="'+id+'"> '+info.title + '</label> <input class="form-control form-control-lg"  required="" id="'+id+'" name="'+info.name+'" placeholder="'+info.title+'" type="'+info.type+'"> </div>'
}
else if(info.type =='textarea'){
a = '<div class="form-group" data-toggle="tooltip" title="'+info.title+'" data-placement="left"> <label class="control-label " for="'+id+'"> '+info.title + '</label> <textarea class="form-control"  required="" id="'+id+'" name="'+info.name+'" placeholder="'+info.title+'" rows="8"></textarea></div>'

}
$("#makearea").append(a);

  $('[data-toggle="tooltip"]').tooltip()

}
$('#makearea').fadeIn();
$("#"+data[0].name).focus();

$('#email').val($('#emailuser').html());
$('#mobile').val($('#mobileuser').html());
$('#cnic').val($('#cnicuser').html());


}
$(document).ready(function(){


$("#cat").change(function(){
make();
});

$("#queryform").submit(function(){
wait = $('#wait').val();
if(wait != ''){ $('.alert').slideDown(); return false;}

});

    $.get(base_url('qms/hist'), function(data, status){
$('#hist').html(data);

$(".id").click(function(){
a = $(this).find('.inid').html();
$('#find').val(a);
$('#find').focus();
$("#find").animate({ width: "10%"});
setTimeout(function(){
$("#find").stop( true, true).animate({ width: "100%"});
}, 450);
});



    });




});

$(function(){

	    // $.fn.filepond.registerPlugin(FilePondPluginImagePreview);
	    $.fn.filepond.registerPlugin(FilePondPluginFileValidateType);
FilePond.create(document.querySelector('input'), {
    acceptedFileTypes: ['image/png'],
    fileValidateTypeDetectType: (source, type) => new Promise((resolve, reject) => {
        
        // Do custom type detection here and return with promise

        resolve(type);
    })
})
    // Turn input element into a pond
    $('.my-pond').filepond();

    // Turn input element into a pond with configuration options
    $('.my-pond').filepond({
        allowMultiple: true,

    });

    // Set allowMultiple property to true
    $('.my-pond').filepond('allowMultiple', true);
    $('.my-pond').filepond('acceptedFileTypes', ['image/*' , 'application/msword' , 'application/vnd.ms-excel', 'application/vnd.ms-powerpoint', 'text/plain', 'application/pdf' ]);






    // Manually add a file using the addfile method

FilePond.setOptions({
    server: base_url('qms/upload'),
	 allowImagePreview: true,
	 maxFiles: 10,
	 dropOnPage: true,
	 

}); 
r  = 'file ';
$('.my-pond').on('FilePond:addfile', function(error, file) {
  if (error) {
    // console.log('File Add Error: ' , error);
c = $('#wait').val();
$('#wait').val(r);
    return;
  }
  // console.log('File Added', file.filename); 
 
});




$('.my-pond').on('FilePond:processfile', function() {
v = $('#wait').val();
var v = v.replace(r, "");
$('#wait').val(v);
});

$('.my-pond').on('FilePond:processfileabort', function() {
v = $('#wait').val();
var v = v.replace(r, "");
$('#wait').val(v);
});

$('.my-pond').on('FilePond:processfileprogress', function(e) {
    // console.log('P ', e);
});




});

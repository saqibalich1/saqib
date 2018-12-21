$(function(){

	    $.fn.filepond.registerPlugin(FilePondPluginImagePreview);
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
    server: $('#uploadon').val(),
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

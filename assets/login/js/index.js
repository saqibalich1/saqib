//VARIABLES
var FIREBASE_AUTH = 'https://authorize-demo.firebaseio.com';
var fb = new Firebase(FIREBASE_AUTH);


//Logout
$('.doLogout').click(function () {
  fb.unauth();
})

//Reset Password
$('.doResetPassword').click(function () {
  var email = $('.login input[type="email"]').val();
  fb.resetPassword({
    email: email
  }, function(err){
    if (err) {
      alert(err.toString());
    } else {
      alert('Check your email!');
    }
  });
});

//Login verification
$('.login form').submit(function () {
  var email = $('.login input[type="email"]').val();
  var password = $('.login input[type="password"]').val();
  
  doLogin(email, password)
  event.preventDefault();
});

function doLogin (email, password, cb) {
  fb.authWithPassword({
    email: email,
    password: password
  }, function (err, authData) {
    if (err) {
      alert(err.toString());
    } else {
      saveAuthData(authData);
      typeof cb === 'function' && cb(authData); //read about this
    }
  });
}

//auth data
function saveAuthData (authData) {
  $.ajax({
    method: 'PUT',
    url: FIREBASE_AUTH + '/users/' + authData.uid + '/profile.json',
    data: JSON.stringify(authData)
  });
}

//REGISTRATION PROCESS
$('.doRegister').click(function () {
  var email = $('.login input[type="email"]').val();
  var password = $('.login input[type="password"]').val();
  
 fb.createUser({
    email: email,
    password: password
  }, function (err, userData) {
    if (err) {
      console.log(err.toString());
    } else {
      doLogin(email, password)
    }
  });
  event.preventDefault();
});

//Clearing form
function clearLoginForm () {
  $('.login input[type="email"]').val('');
  $('.login input[type="password"]').val('');
}

//Change password
$('.onTempPassword form').submit(function () {
  var email = fb.getAuth().password.email;
  var oldPw = $('.onTempPassword input:nth-child(1)').val();
  var newPw = $('.onTempPassword input:nth-child(2)').val();
  
  fb.changePassword({
    email       : email,
    oldPassword : oldPw,
    newPassword : newPw
  }, function(err) {
    if (err) {
      alert(err.toString());
    } else {
      fb.unauth();
    }
  });
  event.preventDefault();
})


//Toggle login and logout forms
fb.onAuth(function (authData) {
  var onLoggedOut = $('.onLoggedOut');
  var onLoggedIn = $('.onLoggedIn');
  var onTempPassword = $('.onTempPassword');

  if (authData && authData.password.isTemporaryPassword) {
    onTempPassword.removeClass('hidden');
    onLoggedIn.addClass('hidden');
    onLoggedOut.addClass('hidden');
  } else if (authData) {
    onLoggedOut.addClass('hidden');
    onLoggedIn.removeClass('hidden');
    onTempPassword.addClass('hidden');
    $('.onLoggedIn h1').text('Hello ' + authData.password.email); 
  } else {
    onLoggedOut.removeClass('hidden');
    onLoggedIn.addClass('hidden');
    onTempPassword.addClass('hidden');
  }
    clearLoginForm();
})
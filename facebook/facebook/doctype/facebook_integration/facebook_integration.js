// Copyright (c) 2016, Arpit Jain and contributors
// For license information, please see license.txt

frappe.ui.form.on('Facebook Integration', {
	refresh: function(frm) {

	},
	login_to_facebook: function(frm) {
		data = login()
    // console.log(data)
	},
  publish_data: function(frm) {
   wall_data = frm.doc.wall_post
    publish_on_wall(wall_data)
  },
  logout: function(frm) {
    logout_facebook()
  },
  create_ticket: function(frm) {
    new_feeds()
  }

});
function statusChangeCallback(response) {
    console.log('statusChangeCallback');
    // console.log(JSON.stringify(response))
    // console.log(response);
    // The response object is returned with a status field that lets the
    // app know the current login status of the person.
    // Full docs on the response object can be found in the documentation
    // for FB.getLoginStatus().
    if (response.status === 'connected') {
      // Logged into your app and Facebook.
      testAPI();
    } else if (response.status === 'not_authorized') {
      // The person is logged into Facebook, but not your app.
      console.log('Please log app');
      // document.getElementById('status').innerHTML = 'Please log ' +
      //   'into this app.';
    } else {
      // The person is not logged into Facebook, so we're not sure if
      // they are logged into this app or not.
      console.log('Please log Facebook............ 1');
      // document.getElementById('status').innerHTML = 'Please log ' +
      //   'into Facebook.';
    }
  }
  function checkLoginState() {
    console.log('Please log Facebook............ 2');
    FB.getLoginStatus(function(response) {
    	console.log("---------------------------")
    	console.log(JSON.stringify(response))
     	statusChangeCallback(response);
    });
  }
  window.fbAsyncInit = function() {
  	console.log('Please log Facebook............ 3 dddddddddd');
    FB.init({
      appId      : '1819981241620276',
      xfbml      : true,
      version    : 'v2.8'
    });
    // FB.AppEvents.logPageView();
    FB.getLoginStatus(function(response) {
    	console.log('Please log Facebook............ 4');
    	statusChangeCallback(response);
  	});
  };

  (function(d, s, id){
 	console.log('Please log Facebook............ 5');
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));

  function testAPI() {
    console.log('Welcome!  Fetching your information.... ');
    FB.api('/me', function(response) {
      console.log('Successful login for: ' + response.name);
      // document.getElementById('status').innerHTML =
      //   'Thanks for logging in, ' + response.name + '!';
    });
  }

  function login() {
    FB.login(function(response) {
      checkLoginState()
    })
    // return response.authResponse['accessToken']
  }
  function publish_on_wall(wall_data) {
    // FB.login(function(){
    // Note: The call will only work if you accept the permission request
    FB.api('/me/feed', 'post', {message: wall_data});
    // }, {scope: 'publish_actions'});
  }

  function logout_facebook() {
    FB.logout(function(response) {
    // user is now logged out
    console.log(JSON.stringify(response))
    });
   }

  function new_feeds() {
     FB.api('/me/feed', 'GET', {"fields":"from,message,comments" }, function(response) {
      // console.log(JSON.stringify(response))
      frappe.call({
        args: { "args": response},
        method: "facebook.facebook.doctype.facebook_integration.facebook_integration.wall_post",
        callback: function(r) {
          // console.log(r.message)
          }
      })
      }); 
  }
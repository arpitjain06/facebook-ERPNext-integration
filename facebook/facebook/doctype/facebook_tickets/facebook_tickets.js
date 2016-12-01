// Copyright (c) 2016, Arpit Jain and contributors
// For license information, please see license.txt

frappe.ui.form.on('Facebook Tickets', {
	refresh: function(frm, cdt, cdn) {
		permission_acc_to_user(frm, cdt, cdn)
	},
	add_comment: function(frm){
		comment = frm.doc.comment_on_post
		child  = frappe.model.add_child(frm.doc, "Facebook Comments", "facebook_comments")
		child.comments = comment
		frm.doc.comment_on_post = ""
		frm.save();
		frm.refresh();
	},
	publish_comment: function(frm, cdt, cdn) {
		var priority1 = 0
		var final_comment_to_publish = ""
		var commnents_table = frm.doc.facebook_comments
		$.each(commnents_table, function(index, value){
			if (priority1 < value.priority && value.publish_comment == 1 ){
				priority1 = value.priority
				final_comment_to_publish = value.comments
			}
			
		});
		// console.log(priority1)
		// console.log(final_comment_to_publish)
		if (priority1 != 0) {
			if (final_comment_to_publish) {
				console.log(priority1)
				console.log(final_comment_to_publish)
				post_id = frm.doc.post_id
				// add_comment_on_post(post_id, final_comment_to_publish)
				post_comment(post_id, final_comment_to_publish)
			}
		}
	},

});
 
function post_comment(post_id, comment){
		add_comment_on_post(post_id, comment)
	}
function permission_acc_to_user(frm, cdt, cdn) {
	if (frappe.session.user == "Administrator") {
			frm.set_df_property("user", "read_only", 0)
			frm.set_df_property("facebook_comments", "read_only", 0)
	} else {
			frm.set_df_property("user", "read_only", 1)
			frm.set_df_property("facebook_comments", "read_only", 1)
	}

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
    	// statusChangeCallback(response);
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

function add_comment_on_post(post_id, comment){
	FB.login(function(response) {
	FB.api(
	    "/"+ post_id +"/comments",
	    "POST",
	    {
	        "message": comment
	    },
	    function (response) {
	    	console.log(JSON.stringify(response))
	      if (response && !response.error) {
	      	console.log(JSON.stringify(response))
	        /* handle the result */
	      }
	    }
	);
	})
}

 
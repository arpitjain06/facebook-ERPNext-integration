# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from . import __version__ as app_version

app_name = "facebook"
app_title = "Facebook"
app_publisher = "Arpit Jain"
app_description = "Integrating ERPNext with facebook"
app_icon = "octicon octicon-file-directory"
app_color = "grey"
app_email = "arpit,j@indictranstech.com"
app_license = "MIT"

# Includes in <head>
# ------------------

# include js, css files in header of desk.html
# app_include_css = "/assets/facebook/css/facebook.css"
# app_include_js = "/assets/facebook/js/facebook.js"

# include js, css files in header of web template
# web_include_css = "/assets/facebook/css/facebook.css"
# web_include_js = "/assets/facebook/js/facebook.js"

# Home Pages
# ----------

# application home page (will override Website Settings)
# home_page = "login"

# website user home page (by Role)
# role_home_page = {
#	"Role": "home_page"
# }

# Website user home page (by function)
# get_website_user_home_page = "facebook.utils.get_home_page"

# Generators
# ----------

# automatically create page for each record of this doctype
# website_generators = ["Web Page"]

# Installation
# ------------

# before_install = "facebook.install.before_install"
# after_install = "facebook.install.after_install"

# Desk Notifications
# ------------------
# See frappe.core.notifications.get_notification_config

# notification_config = "facebook.notifications.get_notification_config"

# Permissions
# -----------
# Permissions evaluated in scripted ways

permission_query_conditions = {
	"Facebook Tickets":"facebook.facebook.doctype.facebook_tickets.facebook_tickets.get_permission_query_conditions"
}


# permission_query_conditions = {
# 	"Event": "frappe.desk.doctype.event.event.get_permission_query_conditions",
# }
#
# has_permission = {
# 	"Event": "frappe.desk.doctype.event.event.has_permission",
# }

# Document Events
# ---------------
# Hook on document methods and events

# doc_events = {
# 	"*": {
# 		"on_update": "method",
# 		"on_cancel": "method",
# 		"on_trash": "method"
#	}
# }

# Scheduled Tasks
# ---------------

# scheduler_events = {
# 	"all": [
# 		"facebook.tasks.all"
# 	],
# 	"daily": [
# 		"facebook.tasks.daily"
# 	],
# 	"hourly": [
# 		"facebook.tasks.hourly"
# 	],
# 	"weekly": [
# 		"facebook.tasks.weekly"
# 	]
# 	"monthly": [
# 		"facebook.tasks.monthly"
# 	]
# }

# Testing
# -------

# before_tests = "facebook.install.before_tests"

# Overriding Whitelisted Methods
# ------------------------------
#
# override_whitelisted_methods = {
# 	"frappe.desk.doctype.event.event.get_events": "facebook.event.get_events"
# }


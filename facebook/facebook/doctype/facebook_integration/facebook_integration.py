# -*- coding: utf-8 -*-
# Copyright (c) 2015, Arpit Jain and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe.model.document import Document
import json

class FacebookIntegration(Document):
	pass



@frappe.whitelist()
def wall_post(args):
	posts = json.loads(args)
	frappe.errprint(posts.get('data'))
	if posts:
		# frappe.errprint(posts.get('data'))
		for post in posts.get('data'):
			if post.get('message'):
				# frappe.errprint(post)
				# frappe.errprint("\n\n")	
				create_ticket(post)


def create_ticket(post):
	wall_post_id = frappe.db.get_value("Facebook Tickets", {"post_id": post.get("id")}, "post_id") 
	if not wall_post_id:
		ticket = frappe.get_doc({
				"doctype": "Facebook Tickets",
				"post_id" : post.get("id"),
				"wall_post": post.get('message'),
				"publisher_name": post.get("from").get('name'),
				"publisher_id": post.get("from").get('id')
			})
		ticket.flags.ignore_mandatory = True
		ticket.save(ignore_permissions=True)
		frappe.db.commit()	
		
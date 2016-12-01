# -*- coding: utf-8 -*-
# Copyright (c) 2015, Arpit Jain and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe.model.document import Document

class FacebookTickets(Document):
	pass

def get_permission_query_conditions(user):
	if not user: user = frappe.session.user

	if not user == "Administrator":
		return """(`tabFacebook Tickets`.user = '{0}')""".format(user)
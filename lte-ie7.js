/* Load this script using conditional IE comments if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'melicons\'">' + entity + '</span>' + html;
	}
	var icons = {
			'icon-view' : '&#x76;&#x69;&#x65;&#x77;',
			'icon-upload' : '&#x75;&#x70;&#x6c;&#x6f;&#x61;&#x64;',
			'icon-up' : '&#x61;&#x72;&#x72;&#x75;&#x70;',
			'icon-trash' : '&#x74;&#x72;&#x61;&#x73;&#x68;',
			'icon-star' : '&#x73;&#x74;&#x61;&#x72;',
			'icon-search' : '&#x73;&#x65;&#x61;&#x72;&#x63;&#x68;',
			'icon-save' : '&#x73;&#x61;&#x76;&#x65;',
			'icon-right' : '&#x61;&#x72;&#x72;&#x72;&#x69;&#x67;&#x68;&#x74;',
			'icon-menu' : '&#x6d;&#x65;&#x6e;&#x75;',
			'icon-mail' : '&#x6d;&#x61;&#x69;&#x6c;',
			'icon-pencil' : '&#x70;&#x65;&#x6e;&#x63;&#x69;&#x6c;',
			'icon-link' : '&#x6c;&#x69;&#x6e;&#x6b;',
			'icon-download' : '&#x64;&#x6f;&#x77;&#x6e;&#x6c;&#x6f;&#x61;&#x64;',
			'icon-home' : '&#x68;&#x6f;&#x6d;&#x65;',
			'icon-down' : '&#x61;&#x72;&#x72;&#x64;&#x6f;&#x77;&#x6e;',
			'icon-comment' : '&#x63;&#x6f;&#x6d;&#x6d;&#x65;&#x6e;&#x74;',
			'icon-cog' : '&#x63;&#x6f;&#x67;',
			'icon-check' : '&#x63;&#x68;&#x65;&#x63;&#x6b;',
			'icon-chat' : '&#x63;&#x68;&#x61;&#x74;',
			'icon-cancel' : '&#x63;&#x61;&#x6e;&#x63;&#x65;&#x6c;',
			'icon-attach' : '&#x61;&#x74;&#x74;&#x61;&#x63;&#x68;',
			'icon-add' : '&#x61;&#x64;&#x64;',
			'icon-left' : '&#x61;&#x72;&#x72;&#x6c;&#x65;&#x66;&#x74;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, html, c, el;
	for (i = 0; i < els.length; i += 1) {
		el = els[i];
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
};
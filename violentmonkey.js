// ==UserScript==
// @name        OpenSubtitles direct download links
// @namespace   github.com/darkred
// @version     1.1
// @date        2020-01-23
// @author      github.com/kiriles90
// @updateURL   https://raw.githubusercontent.com/kiriles90/Opensubtitles-direct-download-links/master/violentmonkey.js
// @downloadURL https://raw.githubusercontent.com/kiriles90/Opensubtitles-direct-download-links/master/violentmonkey.js
// @include     http://www.opensubtitles.org/*/search/*
// @include     http://www.opensubtitles.org/*/subtitles/*
// @include     https://www.opensubtitles.org/*/search/*
// @include     https://www.opensubtitles.org/*/subtitles/*
// @run-at      document-idle
// @grant       none
// ==/UserScript==
var allLinks = document.querySelectorAll(`
	html body div.content fieldset table.smalltable tbody tr.change td:nth-child(4) a,
	html body div.content form#submultiedit table#search_results tbody tr td:nth-child(5) a,
	#bt-dwl-bt
	`);
for (var i = 0; i < allLinks.length; i++) {
	allLinks[i].href = allLinks[i].href.replace('subtitleserve/', 'download/vrf-108d030f/');
}
var old_element = document.querySelector('#bt-dwl-bt');
if (old_element){
	var new_element = old_element.cloneNode(true);
	old_element.parentNode.replaceChild(new_element, old_element);
}
document.querySelector('#bt-dwl-bt').addEventListener('click', function(){
	$('#bt-dwl-bt').off();		// the script uses the page's jQuery, v1.12.2 (https://static.opensubtitles.org/libs/js/jquery/jquery.min.js)
	window.location.href = document.querySelector('#bt-dwl-bt').href;
});

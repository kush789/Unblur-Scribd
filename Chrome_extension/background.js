///////////////////////////////////////////////////////////////////////////////
// 
// 				 DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE
// 				           Version 2, December 2004
//
///////////////////////////////////////////////////////////////////////////////
// 
//     Copyright (C) 2015 Kushagra Singh | kushagra14056@iiitd.ac.in
// 
///////////////////////////////////////////////////////////////////////////////

chrome.browserAction.onClicked.addListener(function(tab) {
  	chrome.tabs.executeScript(null, { file: "jquery.js" }, function() {
    	chrome.tabs.executeScript(null, { file: "unblur.js" });
  });
});

// ///////////////////////////////////////////////////////////////////////////////
// // 
// // 				 DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE
// // 				           Version 2, December 2004
// //
// ///////////////////////////////////////////////////////////////////////////////
// // 
// //     Copyright (C) 2015 Kushagra Singh | kushagra14056@iiitd.ac.in
// // 
// ///////////////////////////////////////////////////////////////////////////////


// Redirect once only on install
browser.runtime.onInstalled.addListener(function (reason) {
	if (reason.reason !== 'install') { return; }
    const tab = browser.tabs.create({url: 'http://iamkush.me/thanks-for-installing-unblur-scribd/', active: true});
    Windows.update(tab.windowId, { focused: true, });
    
});

browser.browserAction.onClicked.addListener(() => {
	browser.tabs.executeScript(null, { file: "jquery.js" }, function() {
		browser.tabs.executeScript(null, { file: "unblur.js" });
	});
});

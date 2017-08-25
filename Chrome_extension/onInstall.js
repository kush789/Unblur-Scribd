chrome.runtime.onInstalled.addListener(function (object) {
    chrome.tabs.create({url: "http://iamkush.me/thanks-for-installing-unblur-scribd/"}, function (tab) {
    });
});
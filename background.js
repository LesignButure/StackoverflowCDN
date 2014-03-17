chrome.webRequest.onBeforeRequest.addListener(
  function(info) {
    //console.log("Fucking URL: " + info.url);
    //Redirect the cdn.sstatic.net request to local file
    //if(info.url.indexOf("Js") == -1){
    if(info.url.match(/Js/g) == null){
         var cssUrl = chrome.extension.getURL("all.css");
         return {redirectUrl: cssUrl};
    } else{
         var jsUrl = chrome.extension.getURL("stub.en.js");
   	 return {redirectUrl: jsUrl};
    }
  },
  //filters
  {
    urls: [
      "http://cdn.sstatic.net/Js/stub.en.js?*",
      "http://cdn.sstatic.net/stackoverflow/all.css?*",
	  "http://cdn.sstatic.net/ux/all.css?*"
    ]
  },
  //extraInfoSpec
  ["blocking"]
);
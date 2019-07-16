let changeColor = document.getElementById('changeColor');

changeColor.onclick = function(element) {
let color = element.target.value;
chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(
        tabs[0].id,
        {code: 'document.body.style.backgroundColor = "#D3D3D3"; ' + 
        'document.getElementsByClassName("SiteHeader")[0].style.display="none"; ' + 
        'document.getElementsByClassName("LoggedInSiteHeader")[0].style.display="none";' + 
        'var classNamesToTurnGray = ["feed_item", "list", "comments_preview_toggle", "main_feed", "u-inherit"];' +
        'for(j = 0; j < classNamesToTurnGray.length; j++){console.log(classNamesToTurnGray[j]); var n = document.getElementsByClassName(classNamesToTurnGray[j]);if(typeof n.length === "number" && n.length > 0 ){ var x = 100 > n.length? n.length: 100; for(i = 0; i < x; i++){n[i].style.backgroundColor="#D3D3D3"}}}'
    });
});
};
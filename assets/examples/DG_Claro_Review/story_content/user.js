window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
window.Script1 = function()
{
  // Encuentra el iframe del Web Object
var iframes = document.querySelectorAll("iframe");
iframes.forEach(function(iframe) {
    // Busca el que tenga tu flipcard (ajusta si cambia el nombre)
    if (iframe.src.includes("objetovirtual.html")) {
        iframe.contentWindow.location.reload();
    }
});

}

window.Script2 = function()
{
  // Encuentra el iframe del Web Object
var iframes = document.querySelectorAll("iframe");
iframes.forEach(function(iframe) {
    // Busca el que tenga tu flipcard (ajusta si cambia el nombre)
    if (iframe.src.includes("objetovirtual.html")) {
        iframe.contentWindow.location.reload();
    }
});

}

window.Script3 = function()
{
  // Encuentra el iframe del Web Object
var iframes = document.querySelectorAll("iframe");
iframes.forEach(function(iframe) {
    // Busca el que tenga tu flipcard (ajusta si cambia el nombre)
    if (iframe.src.includes("objetovirtual.html")) {
        iframe.contentWindow.location.reload();
    }
});

}

};

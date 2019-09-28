var ldngscrn = document.getElementById("loadingscreen");

const brwsrfrm = document.getElementById("browserframe");

    brwsrfrm.contentWindow.onbeforeunload = function () {
        ldngscrn.style.display = "initial";
        document.getElementById('loadingscreen').contentWindow.location.reload(true);
        console.log('Loading')
    };

    brwsrfrm.contentWindow.onunload = function () {
        ldngscrn.style.display = "initial";
        document.getElementById('loadingscreen').contentWindow.location.reload(true);
        console.log('Loading')
    };

/* Display loading screen > */
function iframeURLChange(iframe, callback) {
    var lastDispatched = null;

    var dispatchChange = function () {
        var newHref = iframe.contentWindow.location.href;

        if (newHref !== lastDispatched) {
            callback(newHref);
            lastDispatched = newHref;
        }
    };

    var unloadHandler = function () {
        // Timeout needed because the URL changes immediately after
        // the `unload` event is dispatched.
        setTimeout(dispatchChange, 0);
    };

    function attachUnload() {
        // Remove the unloadHandler in case it was already attached.
        // Otherwise, there will be two handlers, which is unnecessary.
        iframe.contentWindow.removeEventListener("unload", unloadHandler);
        iframe.contentWindow.addEventListener("unload", unloadHandler);
    }

    iframe.addEventListener("load", function () {
        attachUnload();

        // Just in case the change wasn't dispatched during the unload event...
        dispatchChange();
    });

    attachUnload();
}

// Usage:
iframeURLChange(document.getElementById("browserframe"), function (newURL) {
    ldngscrn.style.display = "initial";
    console.log("URL changed:", newURL);
});
/* < */

/* Only displays enter button if input haves valid text > */
var flght = document.getElementById("flght");
var refreshbtn = document.getElementById("refresh");

const input = document.querySelector('input')

input.addEventListener('input', evt => {
  const value = input.value
  
  if (!value) {
    input.dataset.state = ''
    refreshbtn.style.display = "inline";
    flght.style.display = "none";
  }
  
  const trimmed = value.trim()
  
  if (trimmed) {
    flght.style.display = "inline";
    refreshbtn.style.display = "none";
    input.dataset.state = 'valid'
  } else {
    refreshbtn.style.display = "inline";
    flght.style.display = "none";
    input.dataset.state = 'invalid'
  }
})
/* < */

/* Press [ENTER] to access URL > */
$("#input").on('keyup', function (e) {
    if (e.keyCode === 13) {
        window.frames['browserframe'].location = document.querySelector('#input').value;
    }
});
/* < */
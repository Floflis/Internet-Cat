var ldngscrn = document.getElementById("loadingscreen");

    const brwsrfrm = document.getElementById("browserframe");

    brwsrfrm.contentWindow.onbeforeunload = function () {
        ldngscrn.style.display = "initial";
    };

    brwsrfrm.onbeforeunload = function () {
        alert("Please input a Value");
    };

/* Spoof user-agent in browserframe > */
function setUserAgent(window, userAgent) {
    if (window.navigator.userAgent != userAgent) {
        var userAgentProp = { get: function () { return userAgent; } };
        try {
            Object.defineProperty(window.navigator, 'userAgent', userAgentProp);
        } catch (e) {
            window.navigator = Object.create(navigator, {
                userAgent: userAgentProp
            });
        }
    }
}
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

/**
 * Creates a read/writable property which returns a function set for write/set (assignment)
 * and read/get access on a variable
 *
 * @param {Any} value initial value of the property
 */
function createProperty(value) {
    var _value = value;

    /**
     * Overwrite getter.
     *
     * @returns {Any} The Value.
     * @private
     */
    function _get() {
        return _value;
    }

    /**
     * Overwrite setter.
     *
     * @param {Any} v   Sets the value.
     * @private
     */
    function _set(v) {
        _value = v;
    }

    return {
        "get": _get,
        "set": _set
    };
};

/**
 * Creates or replaces a read-write-property in a given scope object, especially for non-writable properties.
 * This also works for built-in host objects (non-DOM objects), e.g. navigator. 
 * Optional an initial value can be passed, otherwise the current value of the object-property will be set.
 *
 * @param {Object} objBase  e.g. window
 * @param {String} objScopeName    e.g. "navigator"
 * @param {String} propName    e.g. "userAgent"
 * @param {Any} initValue (optional)   e.g. window.navigator.userAgent
 */
function makePropertyWritable(objBase, objScopeName, propName, initValue) {
    var newProp,
        initObj;

    if (objBase && objScopeName in objBase && propName in objBase[objScopeName]) {
        if(typeof initValue === "undefined") {
            initValue = objBase[objScopeName][propName];
        }

        newProp = createProperty(initValue);

        try {
            Object.defineProperty(objBase[objScopeName], propName, newProp);
        } catch (e) {
            initObj = {};
            initObj[propName] = newProp;
            try {
                objBase[objScopeName] = Object.create(objBase[objScopeName], initObj);
            } catch(e) {
                // Workaround, but necessary to overwrite native host objects
            }
        }
    }
};

makePropertyWritable(window, "navigator", "userAgent");

window.navigator.userAgent = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2486.0 Safari/537.36 Edge/13.10586";

console.log(window.navigator.userAgent);

var __originalNavigator = navigator;
navigator = new Object();
navigator.__proto__ = __originalNavigator;
navigator.__defineGetter__('userAgent', function () { return 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2486.0 Safari/537.36 Edge/13.10586'; });
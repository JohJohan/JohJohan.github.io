$(".parallax").css('display', 'initial');
var theThings = $(".parallax span");

var transitionDurations = ["transitionDuration", "msTransitionDuration", "webkitTransitionDuration", "mozTransitionDuration", "oTransitionDuration"];
var transitionDurationProperty = getSupportedPropertyName(transitionDurations);

var transforms = ["transform", "msTransform", "webkitTransform", "mozTransform", "oTransform"];
var transformProperty = getSupportedPropertyName(transforms);

function setInitialProperties() {
    for (var i = 0; i < theThings.length; i++) {
        var theThing = theThings[i];

        theThing.style.opacity = 0.2 + Math.random() * 1;

        setTranslate3DTransform(theThing);
    }
    setTimeout(kickOffTransition, 100);
}
setInitialProperties();


function kickOffTransition() {
    for (var i = 0; i < theThings.length; i++) {
        var theThing = theThings[i];

        theThing.addEventListener("transitionend", updatePosition, false);
        theThing.addEventListener("webkitTransitionEnd", updatePosition, false);
        theThing.addEventListener("mozTransitionEnd", updatePosition, false);
        theThing.addEventListener("msTransitionEnd", updatePosition, false);
        theThing.addEventListener("oTransitionEnd", updatePosition, false);

        setTranslate3DTransform(theThing);
        setTransitionDuration(theThing);
    }
}

function updatePosition(e) {
    var theThing = e.currentTarget;

    if (e.propertyName.indexOf("transform") != -1) {
        setTranslate3DTransform(theThing);
        setTransitionDuration(theThing);
    }
}

function getRandomXPosition() {
    return Math.round(0 + Math.random() * $('.container').width());
}

function getRandomYPosition() {
    return Math.round(0 + Math.random() * ($('#home').height() / 2 ));
}

function getRandomDuration() {
    return (1.5 + Math.random() * 3) + "s";
}

function getSupportedPropertyName(properties) {
    for (var i = 0; i < properties.length; i++) {
        if (typeof document.body.style[properties[i]] != "undefined") {
            return properties[i];
        }
    }
    return null;
}

function setTranslate3DTransform(element) {
    element.style[transformProperty] = "translate3d(" + getRandomXPosition() + "px" + ", " + getRandomYPosition() + "px" + ", 0)";
}

function setTransitionDuration(element) {
    if (transitionDurationProperty) {
        element.style[transitionDurationProperty] = getRandomDuration();
    }
}

function showCookies() {
    let element = document.getElementById('cookies');
    element.className = 'cookies';
}

function fixCookies() {
    let element = document.getElementById('cookies');
    element.className = 'f-cookies';
}

setTimeout(showCookies, 1000);
setTimeout(fixCookies,5000);
setInterval(buttonChanger,500)



function buttonChanger () {
    let name = document.getElementById('first-name').value;
    let email = document.getElementById('email').value;
    let phoneNumber = document.getElementById('phone-number').value;
    let button = document.getElementById('button-submit')
    if (name === "" || email === "" || phoneNumber === "") {
        button.className = 'button-no-active'
    } else {
        button.className = 'button-on-white'
    }
}

function closeCookies(Click) {
    let element = document.getElementById('cookies');
    element.className = 'no-cookies';
}

function myFunction(Click) {
    let element = document.getElementById('nav');
    element.className = 'phone-navigation'
}

function closeFunction(Click) {
    let element = document.getElementById('nav');
    element.className = 'no-phone-navigation'
}

function csFunction(Click) {
    let element = document.getElementById('cs-form');
    element.className = 'cs-form'
}
function closeCsFunction(Click) {
    let element = document.getElementById('cs-form');
    element.className = 'no-cs-form'
}

function closeGratitude(Click) {
    let element = document.getElementById('gratitude');
    element.className = 'no-gratitude'
}

function increaseMarginTopText () {
    let text = getComputedStyle(document.getElementById('text'),"");
    let newMarginTop = Number(text.marginTop.replace(/[a-z]/gi,""));
    let element = document.getElementById('text');
    element.style.marginTop = String(Number(newMarginTop + 22) + "px");
}

function increaseCsFormHeight () {
    let text = getComputedStyle(document.getElementById('cs-form'),"");
    let newHeight = Number(text.height.replace(/[a-z]/gi,""));
    let element = document.getElementById('cs-form');
    element.style.height = String(Number(newHeight + 22) + "px");
}

function decreaseMarginTopText () {
    let text = getComputedStyle(document.getElementById('text'),"");
    let newMarginTop = Number(text.marginTop.replace(/[a-z]/gi,""));
    let element = document.getElementById('text');
    if (newMarginTop > 20){
        element.style.marginTop = String(Number(newMarginTop - 22) + "px");
    }    
}

function decreaseCsFormHeight () {
    let text = getComputedStyle(document.getElementById('cs-form'),"");
    let newHeight = Number(text.height.replace(/[a-z]/gi,""));
    let element = document.getElementById('cs-form');
    if (newHeight > 587) {
        element.style.height = String(Number(newHeight - 22) + "px");
    }
}

function formValidation() {
    let name = document.getElementById('first-name').value;
    let email = document.getElementById('email').value;
    let phoneNumber = document.getElementById('phone-number').value;

    if (name === "") {
        let emptyName = document.getElementById('name-empty');
        emptyName.className = 'empty-input';
        increaseMarginTopText();
        increaseCsFormHeight();
    } else {
        let emptyName = document.getElementById('name-empty');
        emptyName.className = 'fill-input';
        decreaseMarginTopText();
        decreaseCsFormHeight();
    }
    
    if (email === "") {
        let emptyName = document.getElementById('email-empty');
        emptyName.className = 'empty-input';
        increaseMarginTopText();
        increaseCsFormHeight();
    } else {
        let emptyName = document.getElementById('email-empty');
        emptyName.className = 'fill-input';
        decreaseMarginTopText();
        decreaseCsFormHeight();
    }
    
    if (phoneNumber === "") {
        let emptyName = document.getElementById('phone-empty');
        emptyName.className = 'empty-input';
        increaseMarginTopText();
        increaseCsFormHeight();
    } else {
        let emptyName = document.getElementById('phone-empty');
        emptyName.className = 'fill-input';
        decreaseMarginTopText();
        decreaseCsFormHeight();
    } 

    if (name != "" & email != "" & phoneNumber != "") {
        let elem = document.getElementById('cs-form');
        elem.className = 'no-cs-form'
        let element = document.getElementById('gratitude');
        element.className = 'gratitude';
    }

}


const rgb_text = document.getElementById('color_code')
const rgb_button = document.getElementById('color_button')
const document_background = document.getElementById('wrap')

var rgbCode = document.getElementById('wrap').style.backgroundColor;

var red = rgbCode[4] + rgbCode[5] + rgbCode[6];
var green = rgbCode[9] + rgbCode[10] + rgbCode[11];
var blue = rgbCode[14] + rgbCode[15] + rgbCode[16];

function valueToHex(c){
    var hex = c.toString(16);
    return hex;
}

function rgbToHex(r,g,b){
    return '#' + valueToHex(r) + valueToHex(g) + valueToHex(b);
}

var hexCode = rgbToHex(parseInt(red),parseInt(green),parseInt(blue));
rgb_text.innerText = hexCode;

function randomHexCode(){
    rgb_text.setAttribute('id', 'color_code');
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    document.getElementById('wrap').style.backgroundColor = randomColor;
    rgb_text.innerText = randomColor;
    Cookies.set('background', randomColor, {expires: 30});
}

function loadCookie(){
    if(Cookies.get('background') == undefined){
        Cookies.set('background', "#707070", {expires: 30});
        alert("nie zaladowano");
    }
    else{
        rgb_text.innerText = Cookies.get('background');
        document.getElementById('wrap').style.backgroundColor = Cookies.get('background');
    }
}

function copyDivToClipboard() {
    var range = document.createRange();
    range.selectNode(document.getElementById("color_code"));
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
    rgb_text.setAttribute('id', 'color_code_copy');
}

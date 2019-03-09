const remote = require('electron').remote;
const main = remote.require('./main.js');

var btnClose 	= document.getElementById('btn-close');
var btnMin		= document.getElementById('btn-min');
btnClose.onclick = () => main.closeWindow();
btnMin.onclick = () => main.minWindow();
// Here is the starting point for your application code.
// All stuff below is just to show you how it works. You can delete all of it.

// Use new ES6 modules syntax for everything.
import os from 'os'; // native node.js module
import { Menu, remote } from 'electron'; // native electron module
import jetpack from 'fs-jetpack'; // module loaded from npm
import { readFile } from './utils/fileio';
import env from './env';

var app = remote.app;

console.log('Loaded environment variables:', env);


var appDir = jetpack.cwd(app.getAppPath());

// Holy crap! This is browser window with HTML and stuff, but I can read
// here files like it is node.js! Welcome to Electron world :)
console.log('The author of this app is:', appDir.read('package.json', 'json').author);

document.addEventListener('DOMContentLoaded', function () {

    // Event listener for selecting file
    document.getElementById('select_credentials').addEventListener('click',function(){
        document.getElementById('select_credentials_input').click(function() {
            document.getElementById("select_credentials_input").value = "hello!"
            console.log('after click');
        });
    },false);

});

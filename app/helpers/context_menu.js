// This gives you default context menu (cut, copy, paste)
// in all input fields and textareas across your app.

(function () {
    'use strict';

    var remote = require('electron').remote;
    var Menu = remote.Menu;
    var MenuItem = remote.MenuItem;

    var isAnyTextSelected = function () {
        return window.getSelection().toString() !== '';
    };

    var cut = new MenuItem({
        label: "Cut",
        click: function () {
            document.execCommand("cut");
        }
    });

    var copy = new MenuItem({
        label: "Copy",
        click: function () {
            document.execCommand("copy");
        }
    });

    var paste = new MenuItem({
        label: "Paste",
        click: function () {
            document.execCommand("paste");
        }
    });

    var normalMenu = new Menu();
    normalMenu.append(copy);

    var textEditingMenu = new Menu();
    textEditingMenu.append(cut);
    textEditingMenu.append(copy);
    textEditingMenu.append(paste);

    document.addEventListener('contextmenu', function (e) {
        switch (e.target.nodeName) {
            case 'TEXTAREA':
            case 'INPUT':
                e.preventDefault();
                textEditingMenu.popup(remote.getCurrentWindow());
                break;
            default:
                if (isAnyTextSelected()) {
                    e.preventDefault();
                    normalMenu.popup(remote.getCurrentWindow());
                }
        }
    }, false);


    // Right click to inspect
    // Haven't totally figured this out - where should menu come from?
    // http://stackoverflow.com/questions/32636750/how-to-add-a-right-click-menu-in-electron-that-has-inspect-element-option-like
    let rightClickPosition = null;

    window.addEventListener('contextmenu', function(e) {
        e.preventDefault()
        rightClickPosition = {x: e.x, y: e.y}
        normalMenu.popup(remote.getCurrentWindow())
    }, false)

}());

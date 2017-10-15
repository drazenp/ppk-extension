function onClickPageContext() {
    console.log('onClickPageContext: ', arguments);

    return function (info, tab) {
        console.log('handler: ', arguments);
        chrome.windows.create({ url: 'background.html', width: 420, height: 180 });
    };
};

function onErrorContextMenu() {
    if (chrome.extension.lastError) {
        console.log('Extension error: ' + chrome.extension.lastError.message);
    }
};

chrome.contextMenus.create({
    'title': 'Page context manu item',
    'type': 'normal',
    'contexts': ['page'],
    'onclick': onClickPageContext()
});

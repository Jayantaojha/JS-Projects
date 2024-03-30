// Earlier version:

// document.getElementById('boldBtn').addEventListener('click', function() {
//     document.execCommand('bold');
// });

// document.getElementById('italicBtn').addEventListener('click', function() {
//     document.execCommand('italic');
// });


// Modern approach:

document.getElementById('boldBtn').addEventListener('click', function() {
    document.getSelection().getRangeAt(0).surroundContents(document.createElement('strong'));
});

document.getElementById('italicBtn').addEventListener('click', function() {
    document.getSelection().getRangeAt(0).surroundContents(document.createElement('em'));
});


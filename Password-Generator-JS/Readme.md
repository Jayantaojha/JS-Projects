# Password Generator with JavaScript.

##  About the project:
It's a password generator responsive website which generate password in the range between 8 to 20 characters.

### Features:

1. Input range to select range of characters between 8 to 20.
2. Select boxs to select numbers or characters to be added or not.
3. You can copied the password by simply clicking on the copied icon and it will be copied to your clipboard (must try).


## My learning from this project:
1. How to copied text in the clipboard? <br>
   By using the <i>navigator.clipboard</i> API.

   ```javascript
    // using navigator.clipboard API

    navigator.clipboard.writeText(text)
        .then(() => {
            console.log('Text copied to clipboard successfully: ' + text);
        })
        .catch(err => {
            console.error('Unable to copy text: ', err);
        });

   ```


2. How to pass arguments slightly different way?
   ```javascript
    // See how to pass arguments in the passwordGenerator function()

    numberSelect.addEventListener('change', function (event) {
    if (event.target.checked) {
        passwordGenerator(true, characterSelect.checked);
    } else {
        passwordGenerator(false, characterSelect.checked);
    }
    });

   ```

3. Working with HTML range elements.
4. Learn how to run same function multiple times.

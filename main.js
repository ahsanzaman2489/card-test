/**
 * Created by ahsan.zaman on 1/23/2017.
 */

var card = (function () {
    var cardFormater = {

        init: function (e, o) {
            var that = this;
            element = document.getElementById(e);
            outputElement = document.getElementById(o);
            element.addEventListener('input', function (evt) {
                that.formater(this.value);
            });

        },
        formater: function (cardNumber) {
            var whiteSpacesRemoved = cardNumber.replace(/\s+/g, '');
            var lettersRemoved = whiteSpacesRemoved.replace(/\.[a-z]+/g, '');
            var numbers = lettersRemoved.match(/\d{0,16}/g);

            var match = numbers && numbers[0] || '';
            var takeIntoParts = [];

            for (var i = 0, len = match.length; i < len; i += 4) {
                takeIntoParts.push(match.substring(i, i + 4))
            }

            this.displayResults(takeIntoParts.join('-'))
        },
        displayResults: function (result) {
            outputElement.innerHTML = result;
        }
    }
    return cardFormater;
})()


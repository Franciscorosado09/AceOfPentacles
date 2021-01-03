//Celtic Cross Spread//

$(document).ready(function () {

    const settings = {
        "async": true,
        "crossDomain": true,
        // "url": "https://astrology-horoscope.p.rapidapi.com/zodiac_finder/details_requirements/",
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "87b6f48f43mshd9aaace1d8eeaefp1a1912jsn1259fae457e2",
            "x-rapidapi-host": "astrology-horoscope.p.rapidapi.com"
        }
    };

    // $.ajax(settings).done(function (response) {
    // 	console.log(response);
    // });

    $.getJSON('https://rws-cards-api.herokuapp.com/api/v1/cards', function (data) {
        console.log(data);
        console.log(data.cards[20].name);
        cardData = data;
    });

    var cardData;

    function showCards(data) {

        $('#card1').one("click", function (e) {
            if ($('#card1').hasClass('flip')) {
                $('#card1').removeClass('flip');
            }
            $('#card1').attr('class', 'activator');
            var randomCard = Math.floor(Math.random() * cardData.cards.length);
            console.log(cardData.cards[randomCard].name + " " + cardData.cards[randomCard].name_short);
            cardImage = (cardData.cards[randomCard].name_short);
            $('#card1').attr('src', './assets/card-images/' + cardImage + '.png');
            var flip1 = Math.random() < 0.5;
            if (flip1 === true) {
                $('#card1').addClass('flip');
            }

            $('#cardtitle1').text(cardData.cards[randomCard].name);
            if ($('#card1').hasClass('flip')) {
                $('#cardreveal1').text('Meaning: ' + cardData.cards[randomCard].meaning_rev);
            }
            else {
                $('#cardreveal1').text('Meaning: ' + cardData.cards[randomCard].meaning_up);
            }


        });

        $('#card2').one("click", function () {
            if ($('#card2').hasClass('flip')) {
                $('#card2').removeClass('flip');
            }
            $('#card2').attr('class', 'activator');
            var randomCard = Math.floor(Math.random() * cardData.cards.length);
            console.log(cardData.cards[randomCard].name + " " + cardData.cards[randomCard].name_short);
            cardImage = (cardData.cards[randomCard].name_short);
            $('#card2').attr('src', './assets/card-images/' + cardImage + '.png');
            var flip2 = Math.random() < 0.5;
            if (flip2 === true) {
                $('#card2').addClass('flip');
            }

            $('#cardtitle2').text(cardData.cards[randomCard].name);
            if ($('#card2').hasClass('flip')) {
                $('#cardreveal2').text('Meaning: ' + cardData.cards[randomCard].meaning_rev);
            }
            else {
                $('#cardreveal2').text('Meaning: ' + cardData.cards[randomCard].meaning_up);
            }

        });

        $('#card3').one("click", function () {
            if ($('#card3').hasClass('flip')) {
                $('#card3').removeClass('flip');
            }
            $('#card3').attr('class', 'activator');
            var randomCard = Math.floor(Math.random() * cardData.cards.length);
            console.log(cardData.cards[randomCard].name + " " + cardData.cards[randomCard].name_short);
            cardImage = (cardData.cards[randomCard].name_short);
            $('#card3').attr('src', './assets/card-images/' + cardImage + '.png');
            var flip3 = Math.random() < 0.5;
            if (flip3 === true) {
                $('#card3').addClass('flip');
            }

            $('#cardtitle3').text(cardData.cards[randomCard].name);
            if ($('#card3').hasClass('flip')) {
                $('#cardreveal3').text('Meaning: ' + cardData.cards[randomCard].meaning_rev);
            }
            else {
                $('#cardreveal3').text('Meaning: ' + cardData.cards[randomCard].meaning_up);
            }

        });

        $('#card4').one("click", function () {
            if ($('#card4').hasClass('flip')) {
                $('#card4').removeClass('flip');
            }
            $('#card4').attr('class', 'activator');
            var randomCard = Math.floor(Math.random() * cardData.cards.length);
            console.log(cardData.cards[randomCard].name + " " + cardData.cards[randomCard].name_short);
            cardImage = (cardData.cards[randomCard].name_short);
            $('#card4').attr('src', './assets/card-images/' + cardImage + '.png');
            var flip4 = Math.random() < 0.5;
            if (flip4 === true) {
                $('#card4').addClass('flip');
            }

            $('#cardtitle4').text(cardData.cards[randomCard].name);
            if ($('#card4').hasClass('flip')) {
                $('#cardreveal4').text('Meaning: ' + cardData.cards[randomCard].meaning_rev);
            }
            else {
                $('#cardreveal4').text('Meaning: ' + cardData.cards[randomCard].meaning_up);
            }

        });

        $('#card5').one("click", function () {
            if ($('#card5').hasClass('flip')) {
                $('#card5').removeClass('flip');
            }
            $('#card5').attr('class', 'activator');
            var randomCard = Math.floor(Math.random() * cardData.cards.length);
            console.log(cardData.cards[randomCard].name + " " + cardData.cards[randomCard].name_short);
            cardImage = (cardData.cards[randomCard].name_short);
            $('#card5').attr('src', './assets/card-images/' + cardImage + '.png');
            var flip5 = Math.random() < 0.5;
            if (flip5 === true) {
                $('#card5').addClass('flip');
            }

            $('#cardtitle5').text(cardData.cards[randomCard].name);
            if ($('#card5').hasClass('flip')) {
                $('#cardreveal5').text('Meaning: ' + cardData.cards[randomCard].meaning_rev);
            }
            else {
                $('#cardreveal5').text('Meaning: ' + cardData.cards[randomCard].meaning_up);
            }

        });

        $('#card6').one("click", function () {
            if ($('#card6').hasClass('flip')) {
                $('#card6').removeClass('flip');
            }
            $('#card6').attr('class', 'activator');
            var randomCard = Math.floor(Math.random() * cardData.cards.length);
            console.log(cardData.cards[randomCard].name + " " + cardData.cards[randomCard].name_short);
            cardImage = (cardData.cards[randomCard].name_short);
            $('#card6').attr('src', './assets/card-images/' + cardImage + '.png');
            var flip6 = Math.random() < 0.5;
            if (flip6 === true) {
                $('#card6').addClass('flip');
            }

            $('#cardtitle6').text(cardData.cards[randomCard].name);
            if ($('#card6').hasClass('flip')) {
                $('#cardreveal6').text('Meaning: ' + cardData.cards[randomCard].meaning_rev);
            }
            else {
                $('#cardreveal6').text('Meaning: ' + cardData.cards[randomCard].meaning_up);
            }


        });
        $('#card7').one("click", function () {
            if ($('#card7').hasClass('flip')) {
                $('#card7').removeClass('flip');
            }
            $('#card7').attr('class', 'activator');
            var randomCard = Math.floor(Math.random() * cardData.cards.length);
            console.log(cardData.cards[randomCard].name + " " + cardData.cards[randomCard].name_short);
            cardImage = (cardData.cards[randomCard].name_short);
            $('#card7').attr('src', './assets/card-images/' + cardImage + '.png');
            var flip7 = Math.random() < 0.5;
            if (flip7 === true) {
                $('#card7').addClass('flip');
            }

            $('#cardtitle7').text(cardData.cards[randomCard].name);
            if ($('#card7').hasClass('flip')) {
                $('#cardreveal7').text('Meaning: ' + cardData.cards[randomCard].meaning_rev);
            }
            else {
                $('#cardreveal7').text('Meaning: ' + cardData.cards[randomCard].meaning_up);
            }


        });
        $('#card8').one("click", function () {
            if ($('#card8').hasClass('flip')) {
                $('#card8').removeClass('flip');
            }
            $('#card8').attr('class', 'activator');
            var randomCard = Math.floor(Math.random() * cardData.cards.length);
            console.log(cardData.cards[randomCard].name + " " + cardData.cards[randomCard].name_short);
            cardImage = (cardData.cards[randomCard].name_short);
            $('#card8').attr('src', './assets/card-images/' + cardImage + '.png');
            var flip8 = Math.random() < 0.5;
            if (flip8 === true) {
                $('#card8').addClass('flip');
            }

            $('#cardtitle8').text(cardData.cards[randomCard].name);
            if ($('#card8').hasClass('flip')) {
                $('#cardreveal8').text('Meaning: ' + cardData.cards[randomCard].meaning_rev);
            }
            else {
                $('#cardreveal8').text('Meaning: ' + cardData.cards[randomCard].meaning_up);
            }


        });
        $('#card9').one("click", function () {
            if ($('#card9').hasClass('flip')) {
                $('#card9').removeClass('flip');
            }
            $('#card9').attr('class', 'activator');
            var randomCard = Math.floor(Math.random() * cardData.cards.length);
            console.log(cardData.cards[randomCard].name + " " + cardData.cards[randomCard].name_short);
            cardImage = (cardData.cards[randomCard].name_short);
            $('#card9').attr('src', './assets/card-images/' + cardImage + '.png');
            var flip9 = Math.random() < 0.5;
            if (flip9 === true) {
                $('#card9').addClass('flip');
            }

            $('#cardtitle9').text(cardData.cards[randomCard].name);
            if ($('#card9').hasClass('flip')) {
                $('#cardreveal9').text('Meaning: ' + cardData.cards[randomCard].meaning_rev);
            }
            else {
                $('#cardreveal9').text('Meaning: ' + cardData.cards[randomCard].meaning_up);
            }


        });
        $('#card10').one("click", function () {
            if ($('#card10').hasClass('flip')) {
                $('#card10').removeClass('flip');
            }
            $('#card10').attr('class', 'activator');
            var randomCard = Math.floor(Math.random() * cardData.cards.length);
            console.log(cardData.cards[randomCard].name + " " + cardData.cards[randomCard].name_short);
            cardImage = (cardData.cards[randomCard].name_short);
            $('#card10').attr('src', './assets/card-images/' + cardImage + '.png');
            var flip10 = Math.random() < 0.5;
            if (flip10 === true) {
                $('#card10').addClass('flip');
            }

            $('#cardtitle10').text(cardData.cards[randomCard].name);
            if ($('#card10').hasClass('flip')) {
                $('#cardreveal10').text('Meaning: ' + cardData.cards[randomCard].meaning_rev);
            }
            else {
                $('#cardreveal10').text('Meaning: ' + cardData.cards[randomCard].meaning_up);
            }


        });

    };

});

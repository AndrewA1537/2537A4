// var scope   = global OR function/local
// let scope   = block
// const scope = block
const cards = document.querySelectorAll(".card");

cardHasBeenFlipped = false;

firstCard = undefined;
secondCard = undefined;


let lockBoard = false;

function checkForMatch()
{
    // if match
    if ($(`#${firstCard.id}`).attr("src") == $(`#${secondCard.id}`).attr("src"))
    {
        console.log("A Match!");
        disableCards();
    }
    else
    {
        // if not a match
        unflipCards();
    };
};

function disableCards()
{
    // if match
    $(`#${firstCard.id}`).parent().off("click");
    $(`#${secondCard.id}`).parent().off("click");
};

function unflipCards()
{
    lockBoard = true;

    // if not a match
    console.log("not a Match!");
    setTimeout(() =>
    {
        $(`#${firstCard.id}`).parent().removeClass("flip");
        $(`#${secondCard.id}`).parent().removeClass("flip");

        lockBoard = false;
    }, 1000);
;}

function resetBoard()
{
    [cardHasBeenFlipped, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
};

(function shuffleCards() 
{
    cards.forEach(card => {
        let randomInt = Math.floor(Math.random() * 6);
        card.style.order = randomInt;
    });
})();

function setup()
{
    $(".card").on("click", function()
    {
        $(this).toggleClass("flip");

        if (lockBoard) return;
        if (this == firstCard) return;

        if (!cardHasBeenFlipped)
        {
            //first click
            firstCard = $(this).find(".front_face")[0];
            cardHasBeenFlipped = true;
        }
        else
        {
            // second click
            secondCard = $(this).find(".front_face")[0];
            cardHasBeenFlipped = false;
            checkForMatch();
        };
    });
};

$(document).ready(setup);
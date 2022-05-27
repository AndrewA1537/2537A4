cardHasBeenFlipped = false

secondCard = undefined
firstCard = undefined

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
}

function unflipCards()
{
    // if not a match
    console.log("not a Match!");
    setTimeout(() =>
    {
        $(`#${firstCard.id}`).parent().removeClass("flip");
        $(`#${secondCard.id}`).parent().removeClass("flip");
    }, 1000);
}

function setup()
{
    $(".card").on("click", function()
    {
        $(this).toggleClass("flip")

        if (!cardHasBeenFlipped)
        {
            //first click
            firstCard = $(this).find(".front_face")[0]
            cardHasBeenFlipped = true
        }
        else
        {
            // second click
            secondCard = $(this).find(".front_face")[0]
            cardHasBeenFlipped = false;
            checkForMatch();
        };
    });
};

$(document).ready(setup);
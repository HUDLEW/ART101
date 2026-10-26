let count = 0;
let buttonCreature = {
    name: "Alexander",
    species: "mouse",
    favoriteFood: "cheese morsels",
    moods: ["starving", "hungry", "peckish", "sated", "full", "stuffed"]
};
$("#needy-button").click(function () {

    count = count + 1;

    let arrayPosition = count - 1;

    let currentMood = buttonCreature.moods[arrayPosition];
    
    let message = "<p>You clumsily dropped me food " + count + " times.</p>";
    message = message + "<p>My current mood is " + currentMood + ".</p>";
    message = message + "<p>My name is " + buttonCreature.name + ".</p>";
    message = message + "<p>I am a " + buttonCreature.species + ".</p>";
    message = message + "<p>My favorite food is " + buttonCreature.favoriteFood + ".</p>";
   
    $("#output").html(message);

    console.log(count);
    console.log(arrayPosition);
    console.log(currentMood);
});
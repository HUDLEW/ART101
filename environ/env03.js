let environmentTitle = "The Mysterious Terrarium";

let environmentElements = ["forest", "rain", "terrarium", "tiger", "lemur", "ants", "chameleon", "snake"];

let mainEntity = {
    name: "Observer",
    type: "human",
    mood: "weary",
    isMoving: false,
};
$(document).ready(function() {

    $('#tiger-btn').click(function() {
        $('#output').html('<p><strong>Tiger:</strong> The immense evolutionary pressures of the terrarium have caused this tiger to be much different than its normal sized counterparts. Its body has become elongated in order to better wrap around and climb the branches. It is almost exclusively an insectivore, calculatedly cornering one ant at a time for its meals.</p>');
    });

    $('#chameleon-btn').click(function() {
        $('#output').html('<p><strong>Chameleon:</strong> While it has maintained the ability to eat insects, its incredibly slow moving nature has made most ventures to eat any of the ants unviable. Because of this it has adapted the ability to eat the younger, softer leaves of the lower canopy.</p>');
    });

    $('#lemur-btn').click(function() {
        $('#output').html('<p><strong>Lemur:</strong> The vast majority of its nutrition comes from the piles of fallen leaves that it creates for itself acting both as shelter and a store of food. It has become quite territorial due to its leaves frequently being taken by the ants. A small portion of its calories come from ants captured while trying to steal from its den.</p>');
    });

    $('#snake-btn').click(function() {
        $('#output').html('<p><strong>Snake:</strong> Extremely slow moving in order to conserve energy, it spends most of its time in the far shaded depths of the canopy. On very rare occasion, only when it needs food, it comes out of hiding. Due to the limited food sources for a carnivore in the terrarium it has created something of a farming method, in which it stakes out the den of a chameleon and eats its molted skin. </p>');
    });

    $('#ant-btn').click(function() {
        $('#output').html('<p><strong>Ants:</strong> Incredibly strong and group oriented. While still being smaller than the rest of the fauna, they are proportionally considerably bigger than they would be outside the terrarium. Their incredible strength allows them to influence their environment to a much greater extent than the rest of the animals. They are able to dig holes for their nests and move branches for more optimal locations for leaves to drop.</p>');
    });

});
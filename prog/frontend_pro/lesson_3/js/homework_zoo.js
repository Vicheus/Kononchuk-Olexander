/**
 * Created by shura on 15.03.17.
 */
document.write("<h1>My zoo</h1>");

var zoo = {
    predators: [],
    herbals: []
};

function getAnimalData() {
    var animalName = prompt("Input name of the animal"),
        type = prompt("Are your animal herbal?"),
        date = new Date();

    return {
        name: animalName,
        isHerbal: type === '+',
        date: date.toDateString()
    }
}

var input = true;

while (input) {
    var animal = getAnimalData();
    (animal.isHerbal) ? zoo.herbals.push(animal) : zoo.predators.push(animal);

    input = confirm("Do you want to input more animals?");
}
console.log(zoo);

document.write("<div class='zoo'>");
for (var animals in zoo) {
    document.write("<div class='animal'>");
    document.write("<h2>" + key + "</h2>");
    for (var i = 0; i < zoo[animals].length; i++) {
        var subAnimal = zoo[animals][i];
        for (var animalProperty in subAnimal) {
            document.write("<p>" + "<span class='key'>" + animalProperty + "</span>" + ": " + subAnimal[animalProperty] + "</p>")
        }
    }
    document.write("</div>");
}
document.write("</div>");

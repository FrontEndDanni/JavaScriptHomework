//QUESTION 1:
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
    dog_names = ["Max","HAS","PuRple","dog"]

function findWords(dogSentence, dogNames){
    for (let name = 0; name < dogNames.length; name++){
        if (dogSentence.includes(dogNames[name])){
            console.log("Matched dog_name")
        }
        else{
            console.log("No Matches")
        }
    }
}
console.log(findWords(dog_string, dog_names))

//QUESTION 2:

let name_array = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"];

function replaceEvens(arr){
for (var i = arr.length - 1; i >= 0; i--) {
     if (i % 2 == 0)
    arr.splice(i, 1, "even index");
    }
    console.log(arr)
}
console.log(replaceEvens(name_array));
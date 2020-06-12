const white = ['A', 'S', 'D', 'F', 'G', 'H', 'J'];
const black = ['W', 'E', 'T', 'Y', 'U'];

document.addEventListener("keypress", function(e) {
    for (letter of white) { // Do not use "for in"
        if (e.code === "Key" + letter) {
            // console.log("The '" + letter + "' key is pressed.");
            const sound = new Audio("white_keys/" + letter + ".mp3")
            sound.play()
            return;
        }
    }
    for (letter of black) {
        if (e.code === "Key" + letter) {
            // console.log("The '" + letter + "' key is pressed.");
            const sound = new Audio("black_keys/" + letter + ".mp3")
            sound.play()
            return;
        }
    }
    console.log("A key is pressed but it's not on the piano.");
});
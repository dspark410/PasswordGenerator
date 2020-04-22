var specialCharacters = confirm("Would you like to use special characters");
var numericChracters = confirm("Would you like to use numeric characters");
var lowercaseCharacters = confirm("Would you like to use lowercase characters");
var uppercaseCharacters = confirm("Would you like to use uppercase characters");

function generatePassword(){
    var passwordQuestion = 0;
    while (
        passwordQuestion < 8 ||
        passwordQuestion > 128 ||
        isNaN(passwordQuestion)
    ) {
        var passwordQuestion = prompt("Choose the length of the password you would like between 8 and 128 characters");
    }
};




for (let i = 0; i < .length; i++) {
    var element = array[i];

}
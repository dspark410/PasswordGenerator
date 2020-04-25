function generatePassword() {
    var passwordQuestion = 0;
    while (
        passwordQuestion < 8 ||
        passwordQuestion > 128 ||
        isNaN(passwordQuestion)
    ) {
        var passwordQuestion = prompt("Choose the length of the password you would like between 8 and 128 characters");
    }
        
    var specialCharacters = confirm("Would you like to use special characters?");
    var numericCharacters = confirm("Would you like to use numeric characters?");
    var lowercaseCharacters = confirm("Would you like to use lowercase characters?");
    var uppercaseCharacters = confirm("Would you like to use uppercase characters?");
    
    while (
        specialCharacters === false && 
        numericCharacters === false&& 
        lowercaseCharacters === false && 
        uppercaseCharacters === false
        ) {
        alert("Please choose at least 1 character criteria.")
        var specialCharacters = confirm("Would you like to use special characters?");
        var numericCharacters = confirm("Would you like to use numeric characters?");
        var lowercaseCharacters = confirm("Would you like to use lowercase characters?");
        var uppercaseCharacters = confirm("Would you like to use uppercase characters?");
    }
    
        var special = "!”#$%&(*+,-./:;<=>?@[^_`{|}]";
        var nums = "0123456789";
        var lower = "abcdefghijklmnopqrstuvwxyz";
        var upper = "ABCDEFGHIJKLMNOPARSTUVQXYZ";
        var allowed = "";
        
        if (specialCharacters === true) {
            allowed += special
        }
        if (numericCharacters === true) {
            allowed += nums
        }
        if (lowercaseCharacters === true) {
            allowed += lower
        }
        if (uppercaseCharacters === true) {
            allowed += upper
        }

        var totalPassword = "";
        for (var i = 0; i < passwordQuestion; i++){
            var random = Math.floor(Math.random() * allowed.length)
            totalPassword += allowed[random];
        }

    alert(totalPassword);
}

generatePassword()
generatePassword();

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
        numericCharacters === false && 
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
          
    alert("Please press the Generate Password button.");
    
    var showPassword = document.getElementById("showPassword");
    var generateButton = document.getElementById("generatePassword");

    function displayPassword() {
        var totalPassword = "";
       
        if (specialCharacters === true) {
            allowed += special
            totalPassword += special[Math.floor(Math.random() * special.length)];
        }
        if (numericCharacters === true) {
            allowed += nums
            totalPassword += nums[Math.floor(Math.random() * nums.length)];
        }
        if (lowercaseCharacters === true) {
            allowed += lower
            totalPassword += lower[Math.floor(Math.random() * lower.length)];
        }
        if (uppercaseCharacters === true) {
            allowed += upper
            totalPassword += upper[Math.floor(Math.random() * upper.length)];
        }

        for (var i = totalPassword.length; i < passwordQuestion; i++){
            var random = Math.floor(Math.random() * allowed.length)
            totalPassword += allowed[random];
        }

        showPassword.textContent = totalPassword;   
    }

    generateButton.addEventListener("click", function() {       
        displayPassword()
    });   
}
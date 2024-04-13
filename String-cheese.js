function checkPalindrome(string){  //Defines the function "checkPalindrome" with the parameter named (string)
    if (string.trim() === "") {   //if that input string is empty
        alert("Please enter a string."); // alert user to input something
        const restart = prompt("Enter a Valid String") // asks user to input a valid string
        if (restart !== null){  // if the input is valid
            checkPalindrome(restart); // its calls the function to execute again
        }
        return;                // This exits the function if the input string is empty
    }
    
    const stringValue = string.split('');  // Splits the input into individual characters
    const reversedStringValues = stringValue.reverse(); // Reverses the order of characters
    const joinedString = reversedStringValues.join(''); // Puts them back together into a string again
    
    if (string === joinedString) {    // If the input string is the same as the joint string
        alert("It is a palindrome");     // It's a palindrome
    } else {                                // Otherwise
        alert("It is not a palindrome");        // Its not 
    }
    
    string = prompt("Try Again! Enter a string");  // Prompt asking user to enter another string
    if (string !== null) {              // If input is valid it calls 
        checkPalindrome(string);        //for the fucntion to execute for the new input
    }
}

const string = prompt("Enter a string"); // String prompt
if (string !== null && string !== "") {  // If input is not null or empty 
    checkPalindrome(string);            //Execute function
} else {                                    //Otherwise
    alert("Please enter a valid string.");  //Please enter a valid string
}

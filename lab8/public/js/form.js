(function () {
    
    const staticForm = document.getElementById("static-form");

    if (staticForm) {

        const phraseElement = document.getElementById("phrase");


        const errorContainer = document.getElementById("error-container");
        const errorTextElement = errorContainer.getElementsByClassName("text-goes-here")[0];

        const isPalindrome = document.getElementsByClassName("is-palindrome")[0];
        const notPalindrome = document.getElementsByClassName("not-palindrome")[0];

        
        staticForm.addEventListener("submit", (event) => {
            event.preventDefault();

            try {
                errorTextElement.textContent = null;

                let phrase = phraseElement.value;

                let addList = document.createElement('li');
                addList.appendChild(document.createTextNode(phrase));

                processed = phrase.toLowerCase().match(/[a-z0-9]/g).join("");

                if (processed === processed.split("").reverse().join("")) {
                    isPalindrome.appendChild(addList);
                }
                else {
                    notPalindrome.appendChild(addList);
                }

            } catch (e) {
                const message = "Invalid input!";
                errorTextElement.textContent = message;
            }
        
        });
    }
})();
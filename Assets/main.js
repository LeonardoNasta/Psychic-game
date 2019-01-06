
       var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l',
       'm','n','o','p','q','r','s','t','u','v','w','x','y','z'];
   
           var wins = 0;
           var losses = 0;
           var guessesLeft = 10;
           var guessesSoFar = 0;
           var letterArray = [];
           var magicLetter = magicLetter;
   
        magicLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
        console.log(magicLetter);

    function CreateLetter() {
        magicLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
        console.log(magicLetter);

    }
       
   
   document.onkeypress = function(keyboardEvent) {
   
       var userPredict = keyboardEvent.key;
       console.log
   
       if(userPredict === magicLetter){
           wins++;
           guessesLeft = 10;
           letterArray = [];

   
       }
            CreateLetter();
           if (userPredict !== magicLetter) {
           guessesLeft--; 
       }
   
       if (guessesLeft == 0) {
           losses++;
           guessesLeft = 10;
           letterArray = [] 
           
       }   
   
   else 
   {
         letterArray.push(userPredict);
         console.log(letterArray);
   
   }
   
           document.getElementById("wins").textContent = "Wins: "+ wins;
           document.getElementById("losses").textContent = "Losses: "+ losses;
           document.getElementById("guessesLeft").textContent = "Guesses left: "+ guessesLeft;
           document.getElementById("guessesSoFar").textContent = "Guesses so far: "+ letterArray;
   
}
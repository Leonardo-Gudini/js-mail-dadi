const mailList = ["mario.rossi@mail.it","lucia30@mail.com","steve.jobs@apple.it"]

// for ( let i = 0; i < mailList.length; i++) {
//     console.log(i, mailList[i]);
// }
const userMail = document.getElementById("mail");

document.getElementById("btn").addEventListener("click",

    function(){
        for (let i = 0; i < mailList.length; i++){

            if(userMail === mailList[1]){
                console.log("puoi accedere");  
            }
            else{
                console.log("non puoi accedere")
            }
             
        }
    }
)


// for (let i = 0; i < mailList.length; i++){

//     if(userMail == mailList[1]){
//         console.log("puoi accedere");  
//     }
     
// }




// document.getElementById("btn").addEventListener("click",

    // function(){
        // const userMail = document.getElementById("mail").value;

        
        // console.log(userMail);
    // }
// )


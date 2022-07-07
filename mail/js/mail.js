const mailList = ["mario.rossi@mail.it","lucia30@mail.com","steve.jobs@apple.it"]
const userMail = document.getElementById("mail");

document.getElementById("btn").addEventListener("click",

    function(){

        for (let i = 0; i < mailList.length; ++i){

            console.log(mailList[i])

            if(userMail.value == mailList[i]){
                alert("Congratulazioni sei in lista!")
            }
            else {
            } 
        }
    }
)
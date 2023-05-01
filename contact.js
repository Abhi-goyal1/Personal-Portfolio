function sendMail(){
    var params ={
        name: document.getElementById("name").value ,
        email: document.getElementById("email").value ,
        number: document.getElementById("number").value ,
        message: document.getElementById("message").value ,
    };
const serviceID = "service_c1w95p8"
const templateID = "template_73yvq7p"

emailjs.send(serviceID,templateID,params)
.then((res) =>{
        document.getElementById("name").value ="",
        document.getElementById("email").value ="" ,
        document.getElementById("number").value ="" ,
        document.getElementById("message").value ="" ,
        console.log(res);
        alert("Your message sent successfully");

    }
)
.catch((err) => console.log(err));
}
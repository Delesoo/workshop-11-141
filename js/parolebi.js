function shedareba(){
    let pass1 = document.getElementById("password").value,
    pass2 = document.getElementById("repassword").value;

    console.log(pass1, pass2);
    if(pass1 != pass2 || pass1 == "" || pass2==""){
        // console.log("parolebi ar edreba ertmanets");
        document.getElementById("answer").innerHTML = "პაროლები არ ედრება ერთმანეთს!";
        document.getElementById("password").style.border = "1px solid #ff0000";
        document.getElementById("repassword").style.border = "1px solid #ff0000";
        document.getElementById("answer").style.color = "#ff0000";

    }
    else{
        // console.log("kargia, edreba");
        document.getElementById("answer").innerHTML = "პაროლები ედრება ერთმანეთს!";
        document.getElementById("password").style.border = "1px solid #000000";
        document.getElementById("repassword").style.border = "1px solid #000000";
        document.getElementById("answer").style.color = "#00ff00";
    }
}
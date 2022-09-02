function anteba(){
    document.getElementById("natura").src = "img/naturaon.png";
}
function chaqroba(){
    document.getElementById("natura").src = "img/naturaoff.png";
}

function universal(){
    let suratismisamarti = document.getElementById("natura").src;

    console.log(suratismisamarti);

    if(suratismisamarti == "file:///C:/Users/Salita/OneDrive/Desktop/workshop%2011%20141/img/naturaoff.png"){
        document.getElementById("natura").src = "img/naturaon.png";
        document.getElementById("universal").innerHTML = "ჩაქრობა";
    }
    else{
        document.getElementById("natura").src = "img/naturaoff.png";
        document.getElementById("universal").innerHTML = "ანთება";
    }

}

{
    // let var const
    const pi = 3.1415;
    console.log(pi);

    // pi = 3.14;  es ar sheidzleba!!!
}

{
    const car = {
        model: "fiat 500",
        color: "white",
        year: "2014"
    }
    console.log(car);
    console.log(car.model);
    console.log(car.year);



    const teacher = {
        firstname: "Salome",
        lastname: "Gachechiladze",
        age: "25",
        fullname: function(){
            return this.firstname + " " + this.lastname;   
        }
    }

    console.log(teacher.firstname);
    console.log(teacher.lastname);
    console.log(teacher.fullname());

    const student = {
        firstname: "Veronika",
        lastname: "Kopaliani",
        age: "25"
    }

    let studentfullname = teacher.fullname.bind(student);

    console.log(studentfullname());

}

{
    let xili = ["vashvli", "msxali", "atami", "sazamtro"];
    //           0           1          2        3
    //   4
    console.log(xili);
    console.log(xili.length);
    console.log(xili[0]);
    console.log(xili[xili.length - 1]);


    xili[0] = "fortoxali";
    // xili[5] = "kiwi";
    xili.push("kiwi");
    xili.pop();
    // xili.pop();


    for(let i=xili.length-1; i>=0; i--){
        console.log(xili[i]);
    }
}


{

    const nav = ["home", "about", "gallery", "contact"];
    const navlinks = ["index.html", "about.html", "gallery.html", "contact.html"];
    // 4
    nav.push("donate us");
    navlinks.push("donate.html");
    let navsigrdze = nav.length;

    let navtext = '<ul>';
    for(let i=0; i<navsigrdze;i++ ){
        navtext += '<li><a href="'+ navlinks[i] + '">' + nav[i] + "</a></li>";
        // console.log(navtext);
    }
    navtext += "</ul>";
    document.getElementById("nav").innerHTML = navtext;


    console.log(navtext);


    // let saxeli  = "salome";
    // saxeli += "gachechiladze";
    // console.log(saxeli);

}




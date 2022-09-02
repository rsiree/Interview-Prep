

function fetchData(cat, random) {
    fetch(`https://vast-stream-94685.herokuapp.com/quiz`)
        .then(res => res.json())
        .then(data => {
            console.log(cat);
            let show;
            if (cat !== "Random") {
                let data2 = data.filter((e) => e.category === cat);
                show = data2.find((e) => e.id === random)
                console.log(show,"o")
            } else {
                console.log(cat,random)
                show = data.find((e) => e.id === random);
                console.log(show,"r")
            }
            document.getElementById("ans").innerHTML ="A"+" : "+ show.answer;
            document.getElementById("qn").innerHTML ="Q"+" : "+ show.question;
            document.getElementById("cat").innerHTML ="Category"+" :"+" "+ show.category;
    })
}



var reactBtn=document.getElementById("react");
reactBtn.addEventListener("click", function () {
    let random = Math.floor(Math.random() * 5+10);
    fetchData(reactBtn.textContent,random)
}); 

var reduxBtn=document.getElementById("redux");
reduxBtn.addEventListener("click", function () {
    let random = Math.floor(Math.random() * 5+16);

    fetchData(reduxBtn.textContent,random)
});

var jsBtn=document.getElementById("js");
jsBtn.addEventListener("click", function () {
    let random = Math.floor(Math.random() * 5+21);
    fetchData(jsBtn.textContent,random)
});

var htmlBtn=document.getElementById("html");
htmlBtn.addEventListener("click", function () {
    let random = Math.floor(Math.random() * 5+1);
    fetchData(htmlBtn.textContent,random)
});

var cssBtn=document.getElementById("css");
cssBtn.addEventListener("click", function () {
    let random = Math.floor(Math.random() * 5+6);
    fetchData(cssBtn.textContent,random)
});

var randomBtn=document.getElementById("random");
randomBtn.addEventListener("click", function () {
    let random = Math.floor(Math.random() * 25+1);
    fetchData(randomBtn.textContent,random)
});








            
            


function fetchData(cat) {
    fetch(`https://vast-stream-94685.herokuapp.com/quiz`)
        .then(res => res.json())
        .then(data => {
            console.log(cat);
            let show;
            if (cat !== "Random") {
                let data2 = data.filter((e) => e.category === cat);
                // show = data2.find((e) => e.id === random);
                let r = Math.floor(Math.random() * data2.length);
                // console.log(r,data2.length,data2[0])
                show = data2[0];
            } else {
                let random = Math.floor(Math.random() * data.length + 1);
                console.log(random)
                show = data.find((e) => e.id === random);
                console.log(show,"r")
            }

            document.getElementById("ans").innerHTML ="A"+" : "+ show.answer;
            document.getElementById("qn").innerHTML ="Q"+" : "+ show.question;
            document.getElementById("cat").innerHTML ="Category"+" :"+" "+ show.category;
            // document.getElementById("ans").innerHTML ="A"+" : "+ show.answer;
    })
}



var reactBtn=document.getElementById("react");
reactBtn.addEventListener("click", function () {
    fetchData(reactBtn.textContent)
}); 

var reduxBtn=document.getElementById("redux");
reduxBtn.addEventListener("click", function () {
    fetchData(reduxBtn.textContent)
});

var jsBtn=document.getElementById("js");
jsBtn.addEventListener("click", function () {
    fetchData(jsBtn.textContent)
});

var htmlBtn=document.getElementById("html");
htmlBtn.addEventListener("click", function () {
    fetchData(htmlBtn.textContent)
});

var cssBtn=document.getElementById("css");
cssBtn.addEventListener("click", function () {
    fetchData(cssBtn.textContent)
});

var randomBtn=document.getElementById("random");
randomBtn.addEventListener("click", function () {
    fetchData(randomBtn.textContent)
});








            
            
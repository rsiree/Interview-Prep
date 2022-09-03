  fetch("https://bankbackendmasai.herokuapp.com/employees/631209235339ca485cc0f7f8")
  .then(res=>{
    return res.json()
  }).then(data =>{
  
    document.getElementById("bankbalance").textContent += data.amount
  })

  fetch("https://bankbackendmasai.herokuapp.com/gettransactions")
  .then(res=>{
    return res.json()
  }).then(data=>{

    var len = data.length
    var final = data.slice(len - 3, len);
    console.log(final);
    // for (var i = 0; i < 3; i++) {
      document.getElementById("t11").innerHTML = final[0].userOne
      document.getElementById("t12").innerHTML = final[0].userTwo
    document.getElementById("t13").innerHTML = final[0].amount
    
    document.getElementById("t21").innerHTML = final[1].userOne
    document.getElementById("t22").innerHTML = final[1].userTwo
    document.getElementById("t23").innerHTML = final[1].amount

    document.getElementById("t31").innerHTML = final[2].userOne
    document.getElementById("t32").innerHTML = final[2].userTwo
    document.getElementById("t33").innerHTML = final[2].amount
    // }
  })

  //  document.getElementById("t1").innerHTML = final[0].userOne + " " + "      transferred to        " + final[0].userTwo + "            ₹ " + final[0].amount
  // document.getElementById("t2").innerHTML = final[1].userOne + "      transferred to        " + final[1].userTwo + "            ₹ " + final[1].amount
  // document.getElementById("t3").innerHTML = final[2].userOne + "      transferred to        " + final[2].userTwo + "            ₹ " + final[2].amount
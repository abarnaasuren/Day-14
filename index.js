function performCalculation (operation) {
    //const num1=10;
    //const num2=20;
    //const num1=Number(document.getElementById("num1").value);
    //const num2=Number(document.getElementById("num2").value);
    const num1=Number(prompt ("please enter the first number1: "));
    const num2=Number(prompt ("please enter the first number2: "));
    let result;
    switch (operation) {
        case"add":
            result = num1+num2;
            break;
        case"sub":
            result = num1-num2;
        break;
        case"mul":
            result = num1*num2;
            break;
        case"div":
            result = num1/num2;
            break;
        default:
            result="Invalid operation";  

    }
    //alert (result);
    const msg = confirm ("Do you want to show the result?");
    if (msg===true) {
    document.getElementById("result").innerText = result;
    }
    else {
        document.getElementById("result").innerText="Result cannot be shown!!";
    }

    setTimeout (()=> {
        console.log("This message is logged after 2000 milliseconds");
    },2000);

    setInterval(()=> {
        alert ("Time out");
    },8000);
    }
    


function changeProgram() {
    var x = document.getElementById("customerPay").value;
    var y = document.getElementById("productsPrice").value;

    var change = (Number(x) - Number(y));


    document.getElementById("result").innerHTML = change;

    var changeBackToPayer = {
        thousand: {
            value: 1000,
            amountToGiveBack: 0
        }, fiveHundred : {
            value: 500,
            amountToGiveBack: 0
        },twoHundred : {
            value : 200,
            amountToGiveBack: 0
        },oneHundred: {
            value : 100,
            amountToGiveBack: 0
        },fifty : { 
            value : 50,
            amountToGiveBack: 0
        },twenty: {
            value: 20,
            amountToGiveBack: 0
        },five: {
            value: 5,
            amountToGiveBack: 0
        },two: {
            value: 2,
            amountToGiveBack: 0
        },one: {
            value: 1,
            amountToGiveBack: 0
        }
    }

    while(change > 0) {
        if(change >= changeBackToPayer.thousand.value) {
            change -= changeBackToPayer.thousand.value
            changeBackToPayer.thousand.amountToGiveBack++
        } 
        else if(change >= changeBackToPayer.fiveHundred.value) {
            change -= changeBackToPayer.fiveHundred.value
            changeBackToPayer.fiveHundred.amountToGiveBack++
        } 
        else if(change >= changeBackToPayer.twoHundred.value){
            change -= changeBackToPayer.twoHundred.value
            changeBackToPayer.twoHundred.amountToGiveBack++
        }
        else if(change >= changeBackToPayer.oneHundred.value) {
            change -= changeBackToPayer.oneHundred.value
            changeBackToPayer.oneHundred.amountToGiveBack++
        }
        else if(change >= changeBackToPayer.fifty.value){
            change -= changeBackToPayer.fifty.value
            changeBackToPayer.fifty.amountToGiveBack++
        }
        else if(change >= changeBackToPayer.twenty.value){
            change -= changeBackToPayer.twenty.value
            changeBackToPayer.twenty.amountToGiveBack++
        }
        else if(change >= changeBackToPayer.five.value){
            change -= changeBackToPayer.five.value
            changeBackToPayer.five.amountToGiveBack++
        }
        else if(change >= changeBackToPayer.two.value){
            change -= changeBackToPayer.two.value
            changeBackToPayer.two.amountToGiveBack++
        }
        else if(change >= changeBackToPayer.one.value){
            change -= changeBackToPayer.one.value
            changeBackToPayer.one.amountToGiveBack++
        }

    }
    
    document.getElementById("thousand").innerHTML = changeBackToPayer.thousand.amountToGiveBack;
    document.getElementById("fiveHundred").innerHTML = changeBackToPayer.fiveHundred.amountToGiveBack;
    document.getElementById("twoHundred").innerHTML = changeBackToPayer.twoHundred.amountToGiveBack;
    document.getElementById("oneHundred").innerHTML = changeBackToPayer.oneHundred.amountToGiveBack;
    document.getElementById("fifty").innerHTML = changeBackToPayer.fifty.amountToGiveBack;
    document.getElementById("twenty").innerHTML = changeBackToPayer.twenty.amountToGiveBack;
    document.getElementById("five").innerHTML = changeBackToPayer.five.amountToGiveBack;
    document.getElementById("two").innerHTML = changeBackToPayer.two.amountToGiveBack;
    document.getElementById("one").innerHTML = changeBackToPayer.one.amountToGiveBack;


    console.log(changeBackToPayer)

}
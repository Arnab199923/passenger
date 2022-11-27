let count =0;
console.log(count);



function increment (){
    count++
    document.querySelector('h2').innerText=count
    document.querySelector('span').innerHTML='incremented'
    if(count>=10){
        document.querySelector('span').innerHTML='cant onboard more then 10 passenger'
        document.getElementById("off").disabled= true;
    }
}

function decrement(){
    count--
    document.querySelector('h2').innerText=count
    document.querySelector('span').innerHTML='decremented'
    console.log("clicked");
    if(count<10){
        document.getElementById("off").disabled= false;
    }
}

function save(){
    console.log(count);
}


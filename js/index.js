document.addEventListener('DOMContentLoaded', () => {

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#score')
    const currentTime = document.querySelector('#currenttime')
    const checkValue = document.querySelector('#equalator')
    const start = document.querySelector('#start')
    const reset = document.querySelector('#reset')
    let balanceTime = currentTime.textContent;
    const boxes = "64";
    checkValue.textContent = Math.floor(Math.random() * 64);
    //define start timing
    var countDownIncrement = 0;
    start.addEventListener('click', ()=>{  
        countDownIncrement = setInterval(countDown,1000)
    });
    //define box design
    for(i=0;i< boxes;i++)
    {
        var card = document.createElement('a')
        var boxpercent = parseInt((i / 8) + i) % 2;
        card.setAttribute('data-id', i)
        card.innerHTML= i;
        if(boxpercent == 0){
                card.className = "black";
                grid.appendChild(card)
        }else
        {
                card.className = "white";
                grid.appendChild(card)
        }
    }
    var getValueonSquare = document.querySelectorAll('.grid a')
    getValueonSquare.forEach(a => a.onclick = function(e) {  
    if(countDownIncrement != 0){
        if(checkValue.textContent == a.textContent)
        {
            alert("Yes Matching....")
            var currentscore = resultDisplay.textContent;
            currentscore++;
            resultDisplay.textContent = currentscore;
            checkValue.textContent = Math.floor(Math.random() * 64);
        }
    }
    })
     //reset
    reset.addEventListener('click', () => location.reload())
    function countDown()
    {
        balanceTime--
        currentTime.textContent = balanceTime
        if(balanceTime === 0)
        {
            clearInterval(countDownIncrement)
            alert("Game over! your score : " + resultDisplay.textContent)
            resultDisplay.textContent = 0
            console.log(resultDisplay.textContent)
        }

    }
})
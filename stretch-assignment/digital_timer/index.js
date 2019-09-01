let msHundreds = document.querySelector('#msHundreds');
let msTens = document.querySelector('#msTens');
let secOnes = document.querySelector('#secondOnes');
let secTens = document.querySelector('#secondTens');
let digitsContainer = document.querySelector('.digits');
let startButton = document.createElement('button');
let resetButton = document.createElement('button');

let timerStarted = false;
let MSTenCount = 0;
let MSHunCount = 0;
let secOnesCount = 0;
let secTensCount = 0;

function updateMSTen(){
    secTens.textContent = 0;
    secOnes.textContent = 0;
    timerStarted = true;

    updateMSHundred();
       msSecInt = setInterval(() => {
            if (MSTenCount < 9){
                MSTenCount++;
                msTens.textContent = MSTenCount;
            } else {
                MSTenCount = 0;
                msTens.textContent = MSTenCount;
            };
        }, 10);    
}

function updateMSHundred(){
    updateSecOnes();
        msHunInt = setInterval(() => {
            if (MSHunCount < 9){
                MSHunCount++;
                msHundreds.textContent = MSHunCount;
            } else {
                MSHunCount = 0;
                msHundreds.textContent = MSHunCount;
            }
        }, 100);
}

function updateSecOnes(){
    setTimeout(() => updateSecTens(), 10012);
       secOneInt = setInterval(() => {
            if (secOnesCount < 9){
                secOnesCount++;
                secOnes.textContent = secOnesCount;
            } else {
                secOnesCount = 0;
                secOnes.textContent = secOnesCount;            
            }
        }, 1000);
}

function updateSecTens(){
    timerStarted = false;
    secTens.textContent = 1;
    msTens.textContent = 0;
    secOnes.textContent = 0;
    msHundreds.textContent = 0;
    clearInterval(msSecInt);
    clearInterval(msHunInt);
    clearInterval(secOneInt);
};

function resetTimer(){
    timerStarted = false;
    secTens.textContent = 0;
    secOnes.textContent = 0;
    msHundreds.textContent = 0;
    msTens.textContent = 0;
    clearInterval(msSecInt);
    clearInterval(msHunInt);
    clearInterval(secOneInt);
}

startButton.textContent = "Start Timer";
resetButton.textContent = "Reset Timer";
digitsContainer.append(startButton);
digitsContainer.append(resetButton);

startButton.addEventListener('click', () => !timerStarted && updateMSTen());
resetButton.addEventListener('click', resetTimer);


let msHundreds = document.querySelector('#msHundreds');
let msTens = document.querySelector('#msTens');
let secOnes = document.querySelector('#secondOnes');
let secTens = document.querySelector('#secondTens');
let digitsContainer = document.querySelector('.digits');
let digits = document.querySelectorAll('.digit');
let buttonContainer = document.createElement('div');
let startButton = document.createElement('button');
let resetButton = document.createElement('button');

let greenColor = 'rgba(50, 150, 50, 1)';
let timerStarted = false;
let MSTenCount = 0;
let MSHunCount = 0;
let secOnesCount = 0;
let secTensCount = 0;

function updateMSTen(){
    secTens.textContent = 0;
    secOnes.textContent = 0;
    timerStarted = true;
    msTens.style.color = greenColor;

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
    msTens.style.color = "black";
    if (MSHunCount < 9){
            secOnesCount == 0 && (msHundreds.style.color = greenColor);
            MSHunCount++;
            msHundreds.textContent = MSHunCount;
        } else {
            MSHunCount = 0;
            msHundreds.textContent = MSHunCount;
        }
    }, 100);
}

function updateSecOnes(){
    secTenTimeout = setTimeout(() => updateSecTens(), 10012);
    secOneInt = setInterval(() => {
        if (secOnesCount < 9){
            secOnes.style.color = greenColor;
            secOnesCount++;
            secOnesCount > 0 && (msHundreds.style.color = "black");
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
    secOnes.style.color = "red";
    msHundreds.style.color = "red";
    msTens.style.color = "red";
    secTens.style.color = "red";
    msTens.textContent = 0;
    secOnes.textContent = 0;
    msHundreds.textContent = 0;
    
    flashingTime = setInterval(() => digitsContainer.classList.toggle('whiteText'), 500);

    clearInterval(msSecInt);
    clearInterval(msHunInt);
    clearInterval(secOneInt);
};

// Stops timer, sets all values to "0"
function resetTimer(){
    timerStarted = false;
    secTens.textContent = 0;
    secOnes.textContent = 0;
    msHundreds.textContent = 0;
    msTens.textContent = 0;

    digits.forEach(digit => digit.style.color = "black");
    clearInterval(msSecInt);
    clearInterval(msHunInt);
    clearInterval(secOneInt);
    clearInterval(flashingTime);
    clearTimeout(secTenTimeout);
};

// Build the Buttons Layout
startButton.textContent = "Start Timer";
resetButton.textContent = "Reset Timer";
document.body.append(buttonContainer);
buttonContainer.append(startButton);
buttonContainer.append(resetButton);

// Center timer container, and timer button container
document.body.style.flexDirection = "column";
document.body.style.height = "80vh";

digitsContainer.style.width = "50%";
digitsContainer.style.margin = "0 auto";
digitsContainer.style.textAlign = "center";

buttonContainer.style.width = "100%";
buttonContainer.style.margin = "0 auto";
buttonContainer.style.textAlign = "center";

// Makes Start/Reset buttons look pretty
startButton.style.width = "150px";
startButton.style.padding = "10px 20px";
startButton.style.margin = "0 10px";
startButton.style.border = "none";
startButton.style.borderRadius = "10px 0";
startButton.style.backgroundColor = "rgba(50, 200, 100, .6)";

resetButton.style.width = "150px";
resetButton.style.padding = "10px 20px";
resetButton.style.margin = "0 10px";
resetButton.style.border = "none";
resetButton.style.borderRadius = "0 10px";
resetButton.style.backgroundColor = "rgba(200, 25, 25, .6)";



// Starts timer on click -- Adds hover effects
startButton.addEventListener('click', () => !timerStarted && updateMSTen());
startButton.addEventListener('mouseover', function(){
    this.style.backgroundColor = "rgba(50, 150, 50, 1)";    
    this.style.color = "white";
    this.style.transition = "all .3s";
});
startButton.addEventListener('mouseout', function(){
    this.style.backgroundColor = "rgba(50, 200, 100, .6)";
    this.style.color = "black";
});


// Stops timer on click -- Adds hover effects
resetButton.addEventListener('click', resetTimer);
resetButton.addEventListener('mouseover', function(){
    this.style.backgroundColor = "rgba(200, 25, 25, 1)";
    this.style.color = "white";
    this.style.transition = "all .3s";
});
resetButton.addEventListener('mouseout', function(){
    resetButton.style.backgroundColor = "rgba(200, 25, 25, .6)";
    this.style.color = "black";
});


// // index js
var welcomeDiv = document.getElementById('welcomeDiv');
var userName = document.getElementById('userName');
var qsDiv = document.getElementById('questionDiv');
var resultDiv = document.getElementById('resultDiv');

function proceedToQuiz()
{
    var confirmNext;
    if(userName.value == "" || userName.value == " ")
    {
        alert("Enter your name!");
     
    }
    else
    {
        welcomeDiv.style.display = 'none';
        qsDiv.style.display = 'block';
        showQs(0);
        // console.log(userName.value);
    }
}

var questions = [
    {
        id: 1,
        question: `Who is the author of <i>The Hunger Games</i> book series?`,
        answer: 'Suzanne Collins',
        options: ['Meg Cabot', 'Stephenie Meyer', 'Suzanne Collins', 'Veronica Roth']
    },
    {
        id: 2,
        question: `Which is the nearest galaxy to <i>The Milky Way</i>?`,
        answer: 'Andromeda',
        options: ['Andromeda', 'Sunflower', 'Whirlpool', 'Black Eye']
    },
    {
        id: 3,
        question: `Who wrote the national anthem of Pakistan?`,
        answer: 'Hafeez Jalandhary',
        options: ['Allama Iqbal', 'Hafeez Jalandhary', 'Chaudhary Rehmat Ali', 'Altaf Hussain Haali']
    },
    {
        id: 4,
        question: `How many degrees are in a semi-circle?`,
        answer: '180',
        options: ['360', '180', '120', '90']
    },
    {
        id: 5,
        question: `What is the atomic number of Oxygen?`,
        answer: '8',
        options: ['9', '7', '6', '8']
    }

];

var qsCount = 0;

// show qs from JS object in html document
function showQs(qsNum)
{
    if(qsCount < 5)
    {
        var qsDiv = document.getElementById('questionDiv');
        var qs = document.getElementById('qs');
        qs.innerHTML = questions[qsNum].question;
        var option = document.getElementsByClassName('list-group-item');
        // console.log(option[0].childNodes[1]);
        for(var i = 0; i < option.length; i++)
        {
            option[i].childNodes[1].nodeValue = questions[qsNum].options[i];
            option[i].childNodes[0].checked = false
            // console.log(option[i].childNodes[1]) ;
        }
    }
}

function goToNextQs()
{
    checkAns(qsCount);
    if(qsCount >= 0 && qsCount < 5)
    {
        qsCount++;
    } 
    // show result as qsCount is 4 (starting from 0), ie no more qs
    if(qsCount == 5)
        showResult();

    showQs(qsCount);
}

var score = 0;

// check if user ans is correct and give score 
function checkAns(qsCount)
{
    var option = document.getElementsByClassName('list-group-item');
    for(var i = 0; i < 4; i++)
    {
        if(option[i].childNodes[0].checked == true)
        {
            if(option[i].childNodes[1].nodeValue == questions[qsCount].answer)
                score = score + 10;
        }
        // console.log(option[i].childNodes[0].checked);
    }
}

// show final result
function showResult()
{
    qsDiv.style.display = 'none';
    resultDiv.style.display = 'block';
    var result = document.getElementById('res');
    result.innerHTML = `${userName.value}, your final score is ${score} out of 50.`
}





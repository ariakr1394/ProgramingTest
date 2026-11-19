let score = 0;

fetch("questions.json")
.then(response => response.json())
.then(data => {
    let questions = data.questions;
    let ql = questions.length;
    let lang = data.language;
    score = 100 - ql;

    document.getElementById("t").addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            document.getElementById("b").click();
        }
    });

    async function index() {
        document.getElementById("ti").innerHTML = `Programing Test of ${lang}`;
        document.getElementById("ti2").innerHTML = `Programing Test of ${lang}`;
        if(ql > 100){
            alert("Please reduce the number of questions to less than 100.");
            return;
        }
        for (let i = 0; i < ql; i++) {
            document.getElementById("qt").innerHTML = `Question ${questions[i].id} / ${ql}: <br> ${questions[i].question}`;

            for (let j = 0; j < 4; j++) {
                document.getElementById(`l${j + 1}`).innerHTML = questions[i].options[j];
            }

            if(i == ql - 1){
                document.getElementById("b").innerHTML = "Show Score";
            }
            

            while (true) {
                await new Promise(resolve => {
                    document.getElementById("b").onclick = resolve;
                });

                if (!/^[1-4]$/.test(document.getElementById("t").value.trim())){
                    alert("Please enter a number between 1 and 4.");
                }
                else{
                    break;
                }

            }

            if (Number(document.getElementById("t").value.trim()) - 1 === questions[i].answer) score++;

            document.getElementById("t").value = "";

        }

        for (let i = 1; i <= 4; i++) {
            if(i == 1){
                document.getElementById(`x`).style.display = "none";
            }
            else if(i != 1){
                document.getElementById(`x${i}`).style.display = "none";
            }
        }

        document.getElementById("t").style.display = "none";
        document.getElementById("b").style.display = "none";
        document.getElementById("qt").innerHTML = `Your score: ${score} / 100`;
    }

    index();
});

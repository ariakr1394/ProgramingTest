let score = 0;

fetch("questions.json")
.then(response => response.json())
.then(data => {
    let questions = data.questions;
    let ql = questions.length;
    let lang = data.language;

    async function index() {
        document.getElementById("ti").innerHTML = `Programing Test of ${lang}`;
        document.getElementById("ti2").innerHTML = `Programing Test of ${lang}`;
        for (let i = 0; i < ql; i++) {
            document.getElementById("qt").innerHTML = `Question ${questions[i].id} / ${ql}: <br> ${questions[i].question}`;

            for (let j = 0; j < 4; j++) {
                document.getElementById(`l${j + 1}`).innerHTML = questions[i].options[j];
            }

            while (true) {
                await new Promise(resolve => {
                    document.getElementById("b").onclick = resolve;
                });

                if (/^[1-4]$/.test(document.getElementById("t").value.trim())) break;
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
        document.getElementById("qt").innerHTML = `Your score: ${score} / ${ql}`;
    }

    index();
});

const rainydays = document.querySelector("#rainydays");
const Csm = document.querySelector("#CSM");
const projectExam = document.querySelector("#projectExam");
//Rainydays
function rainydaysAccess() {
    window.open("https://pkderlam.one/rainydays", "Rainydays", "width=600,height=400")
}
rainydays.addEventListener("click", rainydaysAccess);
//CSM
function csmAccess() {
    window.open("https://affectionate-bose-e13eb9.netlify.app/", "CSM", "width=600,height=400")
}
Csm.addEventListener("click", csmAccess);

function projectExamAccess() {
    window.open("https://pkderlam.one/ProjectExam", "ProjectExam", "width=600,height=400")
}
projectExam.addEventListener("click", projectExamAccess);



const titleReport = document.querySelectorAll("h3");
const textReport = document.querySelectorAll(".text_report");
const closeText = document.querySelectorAll(".closeText");
const plus = document.querySelectorAll("i");
let count = 0;
for (let i = 0; i < titleReport.length; i++) {
    titleReport[i].addEventListener("click", function textAppear(event) {
        textReport[i].style.display = "block";
        count++
        console.log(plus[i]);
        plus[i].style.display = "none";
        if (count % 2 == 0) {
            textReport[i].style.display = "none";
            plus[i].style.display = "initial";
        }
    });
    if (typeof closeText[i] !== `undefined`) {
        closeText[i].addEventListener("click", function closeTextReport(event) {
            textReport[i].style.display = "none";
            plus[i].style.display = "initial";
        });
    }
}

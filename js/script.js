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
    window.open("https://optimistic-rosalind-cf5b38.netlify.app", "ProjectExam", "width=600,height=400")
}
projectExam.addEventListener("click", projectExamAccess);



const titleReport = document.querySelectorAll("h3");
const textReport = document.querySelectorAll(".text_report");
const closeText = document.querySelectorAll(".closeText");
const moreLess = document.querySelectorAll(".more_less");
let count = 0;
for (let i = 0; i < titleReport.length; i++) {
    titleReport[i].addEventListener("click", function textAppear(event) {
        textReport[i].style.display = "block";
        count++
        moreLess[i].innerHTML = `<i class="far fa-minus-square"></i>`;
        if (count % 2 == 0) {
            textReport[i].style.display = "none";
            moreLess[i].innerHTML = `<i class="far fa-plus-square"></i>`;
        }
    });
    if (typeof closeText[i] !== `undefined`) {
        closeText[i].addEventListener("click", function closeTextReport(event) {
            textReport[i].style.display = "none";
            moreLess[i].innerHTML = `<i class="far fa-plus-square"></i>`;
        });
    }
}

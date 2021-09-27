const rainydays = document.querySelector("#rainydays");
const Csm = document.querySelector("#CSM");
const projectExam = document.querySelector("#projectExam");
//Rainydays
function rainydaysAccess() {
    window.open("https://vigilant-noether-ba06fe.netlify.app/", "Rainydays", "width=600,height=400")
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
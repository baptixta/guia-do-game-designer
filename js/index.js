const btnModalIntro = document.querySelector(".intro")
const modalIntro = document.querySelector(".modal-introducao")
const buttonCloseIntro = document.querySelector(".close-intro") 

const btnModalConceitosBasicos = document.querySelector(".conceitos-basicos")
const modalConceitosBasicos = document.querySelector(".modal-conceitos-basicos")
const buttonCloseConceoitosBasicos = document.querySelector(".close-conceitos-basicos") 

const btnModalGdd = document.querySelector(".gdd")
const modalGdd = document.querySelector(".modal-gdd")
const buttonCloseGdd = document.querySelector(".close-gdd") 

const btnModalFrameworks = document.querySelector(".frameworks")
const modalFrameworks = document.querySelector(".modal-frameworks")
const buttonCloseFrameworks = document.querySelector(".close-frameworks") 

const btnModalDesignDeSistemas = document.querySelector(".design-de-sistemas")
const modalDesignDeSistemas = document.querySelector(".modal-design-de-sistemas")
const buttonCloseDesignDeSistemas = document.querySelector(".close-design-de-sistemas") 

const btnModalLevelDesign = document.querySelector(".level-design")
const modalLevelDesign = document.querySelector(".modal-level-design")
const buttonCloseLevelDesign = document.querySelector(".close-level-design") 

const btnModalPlanilhas = document.querySelector(".planilhas")
const modalPlanilhas = document.querySelector(".modal-planilhas")
const buttonClosePlanilhas = document.querySelector(".close-planilhas") 

const btnModalVersionamento = document.querySelector(".versionamento")
const modalVersionamento = document.querySelector(".modal-versionamento")
const buttonCloseVersionamento = document.querySelector(".close-versionamento") 

const btnModalEngines = document.querySelector(".engines")
const modalEngines = document.querySelector(".modal-engines")
const buttonCloseEngines = document.querySelector(".close-engines") 

// abrindo e fechando modais

// modal introducao
btnModalIntro.onclick = function () {
    modalIntro.classList.remove("dialog-close")
    modalIntro.classList.add("dialog-open")
}

buttonCloseIntro.onclick = function () {
    modalIntro.classList.add("dialog-close")
    modalIntro.classList.remove("dialog-open")
}

// modal conceitos básicos
btnModalConceitosBasicos.onclick = function () {
    modalConceitosBasicos.classList.remove("dialog-close")
    modalConceitosBasicos.classList.add("dialog-open")
}

buttonCloseConceoitosBasicos.onclick = function () {
    modalConceitosBasicos.classList.add("dialog-close")
    modalConceitosBasicos.classList.remove("dialog-open")
} 

// modal gdd
btnModalGdd.onclick = function () {
    modalGdd.classList.remove("dialog-close")
    modalGdd.classList.add("dialog-open")
}

buttonCloseGdd.onclick = function () {
    modalGdd.classList.add("dialog-close")
    modalGdd.classList.remove("dialog-open")
}

// modal frameworks
btnModalFrameworks.onclick = function () {
    modalFrameworks.classList.remove("dialog-close")
    modalFrameworks.classList.add("dialog-open")
}

buttonCloseFrameworks.onclick = function () {
    modalFrameworks.classList.add("dialog-close")
    modalFrameworks.classList.remove("dialog-open")
}

// modal design de sistemas
btnModalDesignDeSistemas.onclick = function () {
    modalDesignDeSistemas.classList.remove("dialog-close")
    modalDesignDeSistemas.classList.add("dialog-open")
}

buttonCloseDesignDeSistemas.onclick = function () {
    modalDesignDeSistemas.classList.add("dialog-close")
    modalDesignDeSistemas.classList.remove("dialog-open")
}

// modal level design
btnModalLevelDesign.onclick = function () {
    modalLevelDesign.classList.remove("dialog-close")
    modalLevelDesign.classList.add("dialog-open")
}

buttonCloseLevelDesign.onclick = function () {
    modalLevelDesign.classList.add("dialog-close")
    modalLevelDesign.classList.remove("dialog-open")
}

// modal planilhas
btnModalPlanilhas.onclick = function () {
    modalPlanilhas.classList.remove("dialog-close")
    modalPlanilhas.classList.add("dialog-open")
}

buttonClosePlanilhas.onclick = function () {
    modalPlanilhas.classList.add("dialog-close")
    modalPlanilhas.classList.remove("dialog-open")
}

// modal versionamento
btnModalVersionamento.onclick = function () {
    modalVersionamento.classList.remove("dialog-close")
    modalVersionamento.classList.add("dialog-open")
}

buttonCloseVersionamento.onclick = function () {
    modalVersionamento.classList.add("dialog-close")
    modalVersionamento.classList.remove("dialog-open")
}

// modal engines
btnModalEngines.onclick = function () {
    modalEngines.classList.remove("dialog-close")
    modalEngines.classList.add("dialog-open")
}

buttonCloseEngines.onclick = function () {
    modalEngines.classList.add("dialog-close")
    modalEngines.classList.remove("dialog-open")
}
function iniciar() {
  let planoSemanal = true;
  
  precoSemanal = {
    basico: 9.99,
    super: 14.99,
    mega: 29.99
  }
  
  precoMensal = {
    basico: 29.99,
    super: 59.99,
    mega: 99.99
  }

  
  verificaPlanoAtivo(planoSemanal);
  atribuiValorPlanos();

  function atribuiValorPlanos() {
    let planoBasicoSemanal = document.getElementById("planoSemanalBasico");
    planoBasicoSemanal.textContent = `R$ ${precoSemanal.basico}`;
    planoBasicoSemanal.textContent = planoBasicoSemanal.textContent.replace('.', ',')

    let planoSuperSemanal = document.getElementById("planoSemanalSuper");
    planoSuperSemanal.textContent = `R$ ${precoSemanal.super}`;
    planoSuperSemanal.textContent = planoSuperSemanal.textContent.replace('.', ',')

    let planoMegaSemanal = document.getElementById("planoSemanalMega");
    planoMegaSemanal.textContent = `R$ ${precoSemanal.mega}`;
    planoMegaSemanal.textContent = planoMegaSemanal.textContent.replace('.', ',')

    let planoBasicoMensal = document.getElementById("planoMensalBasico");
    planoBasicoMensal.textContent = `R$ ${precoMensal.basico}`;
    planoBasicoMensal.textContent = planoBasicoMensal.textContent.replace('.', ',')

    let planoSuperMensal = document.getElementById("planoMensalSuper");
    planoSuperMensal.textContent = `R$ ${precoMensal.super}`;
    planoSuperMensal.textContent = planoSuperMensal.textContent.replace('.', ',')

    let planoMegaMensal = document.getElementById("planoMensalMega");
    planoMegaMensal.textContent = `R$ ${precoMensal.mega}`;
    planoMegaMensal.textContent = planoMegaMensal.textContent.replace('.', ',')
  }
  
  function verificaPlanoAtivo(estado) {
    if (!!estado) {
      let aluguelMes = document.getElementById("aluguelMes");
      aluguelSemana.style.display = "block";
      aluguelMes.style.display = "none";
    }
    
    else {
      let aluguelSemana = document.getElementById("aluguelSemana");
      aluguelSemana.style.display = "none";
      aluguelMes.style.display = "block";
    }
  }
  
  function modificaEstadoPlano() {
    planoSemanal = !planoSemanal;
    verificaPlanoAtivo(planoSemanal);
  }

  let botaoPlanoSemanal = document.getElementById("descricaoPlanos__semanal__ball");
  botaoPlanoSemanal.addEventListener("click", function(){ modificaEstadoPlano()})

  let botaoPlanoMensal = document.getElementById("descricaoPlanos__mensal__ball");
  botaoPlanoMensal.addEventListener("click", function(){ modificaEstadoPlano()})
}

document.addEventListener("DOMContentLoaded", iniciar)
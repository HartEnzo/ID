const prompt = require("prompt-sync")()

let ultimoID = 0

const residencias = [];
function modelo(id = ++ ultimoID) {
    const bairro = prompt ("Digite onde está localizada a sua residencia: ");
    const rua = prompt ("Digite  o nome da rua: ");
    const numero = prompt("Digite o número da casa: ");
 

      const moradores = [];
      while(true) {
         const Nmoradores = prompt("Digite o nome do morador(es), ou digite 'F' para sair: ")
   
         if (Nmoradores == "F") {
           break;
         }
      moradores.push(Nmoradores);
     }
    if (bairro != "" && rua != "" && numero.length > 0  && moradores.length > 0) {
     return {
        bairro,
        rua,
        numero,
        moradores,
        id
     }
    }
    console.log("Dados invalidos! ")
 
};
 const adicionarResidencia = () => {
    const nova = modelo();
    if(nova) {
        residencias.push(nova)
        console.log("Residencia adicionada com sucesso! ")
    }
};
 const listarResidencia = () => {
    residencias.forEach((el, i) => {
        console.log(`${i + 1},
            ID: ${residencias.id},
            Rua: ${el.rua},
            Bairro: ${el.bairro},
            Numero da casa: ${el.numero},
            Morador(es): ${el.moradores}
            `);
    })
 };

 const atualizarResidencia = () => {
    listarResidencia();
const id = prompt("ID residencia: ")

    const nova = modelo(id); 
const indice = prompt("Qual indice deseja atualizar? ") - 1
if(nova && indice >= 0 && indice < residencias.length) {
    residencias[indice] = nova;
    console.log("Cursos atualizados com sucesso! ");
} else {
    console.log("Indice inválido ");
}
}

 const removerResidencias = () => {
    listarResidencia();
        
    const indice = prompt("Qual indice deseja remover? ") - 1;
        
        if(indice >= 0 && indice < residencias. length) {
            residencias.splice(indice, 1);
            console.log("Residencia removido com sucesso! ");
        } else {
            console.log("Indice inválido ");
        }
 };

 module.exports = {
    adicionarResidencia,
    listarResidencia,
    atualizarResidencia,
    removerResidencias,
 };
  

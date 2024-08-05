const prompt = require('prompt-sync')();
 
const {adicionarResidencia, listarResidencia, atualizarResidencia, removerResidencias} = require("./index.js");

while(true) {
     console.log(`
    1 - Adicionar residencia;
    2 - Listar residencia;
    3-  Atualizar residencia;
    4 - Remover residencia;
    5 - Sair;
     `);
     const opcao = prompt("Qual opção deseja?: ")
     
     switch (opcao) {
         case "1":
             adicionarResidencia();
             break;
             
             case "2": 
             listarResidencia();
             break;
            
             case "3":
             atualizarResidencia();
                 break;
            
             case "4":
             removerResidencias();
                 break;
                     
            case "5":
             process.exit();
                 break;
                         
             default:
              console.log("Opção inválida!")
                break;
             }
     };
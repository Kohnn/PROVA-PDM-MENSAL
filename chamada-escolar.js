let chamadaDeAlunos = [
    {
        nome: "Kayky",
        idade: 16,
        materias: [
            {
                nome: "Tecnologias em Inteligência Artificial",
                presenca: 75,
                nota: 10
            },
            {
                nome: "Programação para Dispositivos Móveis",
                presenca: 90,
                nota: 10
            },
        ],
        matriculadoEm: "2024/02/23",
        numeroChamada: 1221
    },
    {
        nome: "Ana",
        idade: 17,
        materias: [
            {
                nome: "BD1",
                presenca: 100,
                nota: 10
            },
            {
                nome: "Programação para Dispositivos Móveis",
                presenca: 90,
                nota: 7.5
            },
        ],
        matriculadoEm: "2024/04/23",
        numeroChamada: 1222
    },
    {
        nome: "Matheus",
        idade: 20,
        materias: [
            {
                nome: "Tecnologias em Inteligência Artificial",
                presenca: 79,
                nota: 8.5
            },
            {
                nome: "Programação para Dispositivos Móveis",
                presenca: 60,
                nota: 6.5
            },
        ],
        matriculadoEm: "2024/02/25",
        numeroChamada: 1223
    },
    {
        nome: "Jorge",
        idade: 19,
        materias: [
            {
                nome: "Tecnologias em Inteligência Artificial",
                presenca: 100,
                nota: 10
            },
            {
                nome: "Programação para Dispositivos Móveis",
                presenca: 79,
                nota: 10
            },
        ],
        matriculadoEm: "2024/02/29",
        numeroChamada: 1224
    },
    {
        nome: "Richard",
        idade: 18,
        materias: [
            {
                nome: "BD2",
                presenca: 74,
                nota: 10
            },
            {
                nome: "BD1",
                presenca: 90,
                nota: 7
            },
        ],
        matriculadoEm: "2024/12/23",
        numeroChamada: 1225
    },
]

export function listarAlunos(){
    for (let i = 0; i < chamadaDeAlunos.length; i++) {
        console.log(chamadaDeAlunos[i]) 
    }

}


export function buscarAlunoPeloNumeroDaChamada(numero = 1225){
   for (let i = 0; i < chamadaDeAlunos.length; i++) {   
    if(numero === numeroChamada){
        console.log(chamadaDeAlunos[i])
        }else{
            console.log("Aluno não encontrado")
        }
   }
}

export function alunosAprovados(chamadaDeAlunos){
    console.log("--------APROVADOS--------")
    for (let i = 0; i < chamadaDeAlunos.length; i++) {
        for (let j = 0; j < chamadaDeAlunos[i].materias.length; j++) {
           if (chamadaDeAlunos[i].materias[j].nota >= 6 && chamadaDeAlunos[i].materias[j].presenca >= 75 ) {
              console.log(`O aluno ${chamadaDeAlunos[i].nome} foi aprovado em ${chamadaDeAlunos[i].materias[j].nome}`)
           }else{
            
           }
        
        }
        
    }
    console.log("-------------------------")
}

export function alunosReprovados(chamadaDeAlunos){
    console.log("--------REPROVADOS--------")
    for (let i = 0; i < chamadaDeAlunos.length; i++) {
        for (let j = 0; j < chamadaDeAlunos[i].materias.length; j++) {
           if (chamadaDeAlunos[i].materias[j].nota >= 6 && chamadaDeAlunos[i].materias[j].presenca >= 75 ) {
     
           }else{
            console.log(`O aluno ${chamadaDeAlunos[i].nome} foi reprovado em ${chamadaDeAlunos[i].materias[j].nome}`)
           }
        
        }
        
    }
    console.log("-------------------------")
}

export function listarAlunoPorMesMatricula(data = "2024/02/24"){
    for (let i = 0; i < chamadaDeAlunos.length; i++) {   
     if( data === matriculadoEm){
         console.log(chamadaDeAlunos[i])
         }else{
             console.log("Aluno não encontrado")
         }
    }
 }

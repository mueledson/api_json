const objs = [
    {
        nome: "Edson",
        idade: 13,
        trabalha: true,
        detalhes_profisao: {
            Profissão: "Programador",
            Empresa: "Seb Soluções Tecnológicas",
        },
        hobbies: ["Jogar", "Estudar", "Jogar"],
    },
    {
        nome: "Rodrigo",
        idade: 36,
        trabalha: true,
        detalhes_profisao: {
            Profissão: "Tecnico de Informática, Programador e etc",
            Empresa: "Seb Soluções Tecnológicas",
        },
        "hobbies": ["Trabalhar", "Estudar"],
    }
]

//JSON
//converter objeto para json
const jsonData = JSON.stringify(objs)

console.log(jsonData)
console.log(typeof jsonData)

//converter json para objeto
const objData = JSON.parse(jsonData)

console.log(objData)
console.log(typeof objData)

objData.map((pessoa) => {
    console.log(pessoa.nome)
})
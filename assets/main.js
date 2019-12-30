var app = new Vue({
    el: '#app',
    data: {
        id: 1,
        resposta: "",
        perguntas: [{
            type: "text",
            pergunta: "Olá, tudo bom? Sou o ChatVue e estamos aqui para facilitar o seu contato com os nossos especialistas! Para isso, eu vou te fazer algumas perguntas e já enviar o seu cadastro para o time responsável. Vamos lá?",
            resposta: ""
        }, {
            id: 2,
            type: "button",
            pergunta: "Legal! Qual o seu nome?",
            resposta: "",
            buttons: ["Sim", "Não"]
        }, {
            id: 3,
            type: "text",
            pergunta: "Qual é o nome da empresa?",
            resposta: ""
        }, {
            id: 4,
            type: "text",
            pergunta: "Legal! E qual é o CNPJ da empresa?",
            resposta: ""
        }, {
            id: 5,
            type: "text",
            pergunta: "Você sabe quantos funcionários a empresa tem?",
            resposta: ""
        }, {
            id: 6,
            type: "text",
            pergunta: "Agora só mais algumas perguntas. E qual é o seu e-mail?",
            resposta: ""
        }, {
            id: 7,
            type: "text",
            pergunta: "Perfeito! E qual é o seu telefone?",
            resposta: ""
        }, {
            id: 8,
            type: "text",
            pergunta: "Agora só preciso saber como você prefere que nossos especialistas entrem em contato:",
            resposta: ""
        }],
        perguntaId: 0
    },
    methods: {
        cliqueBotao(resposta) {
            this.perguntas[this.perguntaId].resposta = resposta;
            this.perguntaId += 1;
            this.resposta = "";
        }
    }
});
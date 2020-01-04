var app = new Vue({
    el: '#app',
    data: {
        id: 1,
        resposta: "",
        perguntas: [{
            type: "text",
            pergunta: "Olá, tudo bom? Sou o ChatVue e estamos aqui para fazer uma pequena pesquisa! Vamos começar? Qual o seu nome?",
            resposta: ""
        }, {
            id: 2,
            type: "button",
            pergunta: "Qual seu sexo?",
            resposta: "",
            buttons: ["Feminino", "Masculino"]
        }, {
            id: 3,
            type: "text",
            pergunta: "Qual a data do seu nascimento?",
            resposta: ""
        }, {
            id: 4,
            type: "button",
            pergunta: "Quantas pessoas moram com você?",
            resposta: "",
            buttons: ["1-2", "2-3", "3-5", "5-7", "7-10", "10 +"]
        }, {
            id: 5,
            type: "button",
            pergunta: "Qual é a relação de parentesco ou de convivência com a pessoa responsável pelo domicílio?",
            resposta: "",
            buttons: ["Pessoa Responsável Pelo Domicílio", "Pai, Mãe, Padrasto Ou Madrasta", "Outro Parente"]
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
            type: "",
            pergunta: "Obrigado por responder nosso questionário!",
            resposta: ""
        }],
        perguntaId: 0
    },
    methods: {
        cliqueBotao(resposta) {
            if (resposta.length >= 3) {
                this.perguntas[this.perguntaId].resposta = resposta;
                this.perguntaId += 1;
                this.resposta = "";
            } else {
                this.perguntas[this.perguntaId].resposta = 'Parece que essa reposta está pequena demais...';
            }
            IrParaOBalao();
        }
    }
});
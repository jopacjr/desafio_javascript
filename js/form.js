class Contato {
    constructor(nome, email, cpf, sobrenome, telefone, contato) {
        this.nome = nome;
        this.email = email;
        this.cpf = cpf;
        this.sobrenome = sobrenome;
        this.telefone = telefone;
        this.contato = contato;
    }
}

function Post(event, form) {
    if (!form.checkbox1.checked) {
        event.preventDefault();
        alert('Você precisa marcar a opção de termos e condições antes de enviar.');
        return;
    }

    event.preventDefault();

    const nome = form.nome.value;
    const email = form.email.value;
    const cpf = form.cpf.value;
    const sobrenome = form.sobrenome.value;
    const telefone = form.telefone.value;
    const contato = form.contato.value;

    const objetoContato = new Contato(nome, email, cpf, sobrenome, telefone, contato);

    console.log("Dados do Contato Capturados:", objetoContato);
    alert(`Obrigado, ${objetoContato.nome}! Seus dados foram enviados com sucesso.`);

    form.reset();
}
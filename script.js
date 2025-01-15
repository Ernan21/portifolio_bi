document.addEventListener("DOMContentLoaded", () => {
    const calcularIdade = (dataNascimento) => {
        const hoje = new Date();
        const nascimento = new Date(dataNascimento);
        let idade = hoje.getFullYear() - nascimento.getFullYear();
        const mes = hoje.getMonth() - nascimento.getMonth();

        // Ajusta a idade se o aniversário ainda não aconteceu este ano
        if (mes < 0 || (mes === 0 && hoje.getDate() < nascimento.getDate())) {
            idade--;
        }

        return idade;
    };

    const exibirIdade = () => {
        const dataNascimento = "2001-06-26"; // Substitua pela data desejada no formato YYYY-MM-DD
        const idade = calcularIdade(dataNascimento);
        document.getElementById("idade").textContent = `${idade}`;
    };

    exibirIdade();
});

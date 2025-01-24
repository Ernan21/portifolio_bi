
document.addEventListener("DOMContentLoaded", () => {
    const calcularIdade = (dataNascimento) => {
        const hoje = new Date();
        const nascimento = new Date(dataNascimento);
        let idade = hoje.getFullYear() - nascimento.getFullYear();
        const mes = hoje.getMonth() - nascimento.getMonth();
        if (mes < 0 || (mes === 0 && hoje.getDate() < nascimento.getDate())) {
            idade--;
        }
        return idade;
    };

    const exibirIdade = () => {
        const dataNascimento = "2001-06-26";
        document.getElementById("idade").textContent = calcularIdade(dataNascimento);
    };

    exibirIdade();
});

function abrirModal(src, title) {
    const modal = document.getElementById("modal");
    const iframe = document.getElementById("iframe");
    iframe.src = src;
    iframe.title = title
    modal.style.display = "block";
}

function fecharModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
    document.getElementById("iframe").src = "";
}

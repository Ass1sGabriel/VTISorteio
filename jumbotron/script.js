// Verifica se o local storage já possui nomes salvos
if (localStorage.getItem("nomes")) {
    // Se tiver, adiciona na lista
    document.getElementById("lista").innerHTML = localStorage.getItem("nomes");
}

function adicionar() {
    // Obtém o nome inserido
    var nome = document.getElementById("nome").value;

    // Verifica se o campo está vazio
    if (nome == "") {
        Swal.fire({
            title: 'Digite um nome válido!!',
            icon: 'error',
            showClass: {
                popup: 'animate__animated animate__jackInTheBox'
            },
            hideClass: {
                popup: 'animate__animated animate__rollOut'
            }
        });
        //alert("Digite um nome válido!");
        return;
    }

    // Cria um novo item na lista com o nome inserido
    var novoItem = document.createElement("ul");

    novoItem.classList.add('list-group-item');
    novoItem.classList.add('list-group-item-action');
    novoItem.classList.add('list-group-item-info');

    novoItem.innerHTML = nome;

    // Adiciona o novo item na lista
    document.getElementById("lista").appendChild(novoItem);

    // Limpa o campo de inserção de nome
    document.getElementById("nome").value = "";

    // Salva a lista atualizada no local storage
    localStorage.setItem("nomes", document.getElementById("lista").innerHTML);
}

function sortear() {

    // Obtém a lista de nomes
    var lista = document.getElementById("lista");

    // Verifica se há pelo menos dois nomes na lista
    if (lista.children.length < 3) {
        Swal.fire({
            title: 'Informe pelo menos três participantes!',
            icon: 'error',
            showClass: {
                popup: 'animate__animated animate__jackInTheBox'
            },
            hideClass: {
                popup: 'animate__animated animate__rollOut'
            }
        });
        //alert("Insira pelo menos dois nomes!");
        return;
    }

    // Gera um número aleatório entre 0 e o número de itens na lista
    var indiceSorteado = Math.floor(Math.random() * lista.children.length);

    // Obtém o nome sorteado
    var nomeSorteado = lista.children[indiceSorteado].innerHTML;
    console.log(lista.children[indiceSorteado]);

    // Exibe o nome sorteado em um alert
    Swal.fire({
        title: 'Sucesso!',
        html: 'O nome sorteado foi: ' +
            '<b class="text-success">' + nomeSorteado + '</b>',
        showClass: {
            popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
        }
    });
    // alert("O nome sorteado foi: " + nomeSorteado);

    // Remove o nome sorteado da lista
    lista.removeChild(lista.children[indiceSorteado]);

    // Salva a lista atualizada no local storage
    localStorage.setItem("nomes", lista.innerHTML);
}
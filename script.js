function storeCadastro(event) {
    event.preventDefault(); // Previne o comportamento padrão do formulário
    const name = document.getElementById('name').value;
    const product = document.getElementById('product').value;
    
    // Extrair o primeiro nome
    const firstName = name.split(' ')[0];

    const salary = parseFloat(document.getElementById('salary').value.replace(',', '.'));
    const days = parseFloat(document.getElementById('days').value.replace(',', '.'));
    const dailyHours = parseFloat(document.getElementById('daily-hours').value.replace(',', '.'));

    // Armazenar o primeiro nome e outros dados
    localStorage.setItem('name', name);
    localStorage.setItem('firstName', firstName);
    localStorage.setItem('product', product);
    localStorage.setItem('salary', salary);
    localStorage.setItem('days', days);
    localStorage.setItem('dailyHours', dailyHours);

    // Redireciona para a próxima página
    window.location.href = 'leitura-valores.html';
}


// Função para armazenar os dados da tela de leitura de valores
function storeValores(event) {
    event.preventDefault(); // Previne o comportamento padrão do formulário
    const cost = parseFloat(document.getElementById('cost').value);
    const quantity = parseFloat(document.getElementById('quantity').value);
    const hours = parseFloat(document.getElementById('hours').value);

    localStorage.setItem('cost', cost);
    localStorage.setItem('quantity', quantity);
    localStorage.setItem('hours', hours);

    // Redireciona para a próxima página
    window.location.href = 'leitura-despesas.html';
}

// Função para armazenar os dados da tela de leitura de despesas
function storeDespesas(event) {
    event.preventDefault(); // Previne o comportamento padrão do formulário
    const expenses = parseFloat(document.getElementById('expenses').value);
    const profitMargin = parseFloat(document.getElementById('profit-margin').value);

    localStorage.setItem('expenses', expenses);
    localStorage.setItem('profitMargin', profitMargin);

    // Redireciona para a próxima página
    window.location.href = 'resultados.html';
}

// Função para exibir os resultados na tela de resultados

function displayResults() {
    // Obtém os dados do localStorage
    const cost = parseFloat(localStorage.getItem('cost'));
    const quantity = parseFloat(localStorage.getItem('quantity'));
    const hours = parseFloat(localStorage.getItem('hours'));
    const expenses = parseFloat(localStorage.getItem('expenses'));
    const profitMargin = parseFloat(localStorage.getItem('profitMargin'));
    const dailyHours = parseFloat(localStorage.getItem('dailyHours'));

    const firstName = localStorage.getItem('firstName'); 
    const name = localStorage.getItem('name');
    const product = localStorage.getItem('product');
    const salary = parseFloat(localStorage.getItem('salary'));
    const days = parseFloat(localStorage.getItem('days'));

    // Realiza os cálculos
    const laborCost = (salary / (days * dailyHours)) * hours;
    const totalCost = cost + laborCost;
    const totalExpensePerPiece = expenses;
    const priceWithMargin = (totalExpensePerPiece + totalCost) * (1 + (profitMargin / 100));
    const finalPrice = Math.ceil(priceWithMargin); // Calcula o preço final arredondado

    // Atualiza os elementos da página com os resultados calculados
    document.getElementById('name').innerText = name;
    document.getElementById('product').innerText = product;
    document.getElementById('totalCost').innerText = totalCost.toFixed(2);
    document.getElementById('laborCost').innerText = laborCost.toFixed(2);
    document.getElementById('totalExpensePerPiece').innerText = totalExpensePerPiece.toFixed(2);
    document.getElementById('priceWithMargin').innerText = priceWithMargin.toFixed(2);
    document.getElementById('finalPrice').innerText = finalPrice.toFixed(2);

    // Atualiza o título com o preço final calculado
    document.getElementById('page-title').innerText = `Terminamos ${firstName}!
     O preço da peça é:
     R$ ${finalPrice.toFixed(2)}`;
}


window.addEventListener('load', function() {
    if (window.location.pathname.endsWith('resultados.html')) {
        displayResults();
    }
});
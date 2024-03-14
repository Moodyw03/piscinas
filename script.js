document.getElementById('poolForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const length = document.getElementById('length').value;
    const width = document.getElementById('width').value;
    const depth = document.getElementById('depth').value;

    const volume = length * width * depth;
    // Assumindo 1 metro cúbico = 1000 litros
    const liters = volume * 1000;

    document.getElementById('result').textContent = `Você precisa de ${liters.toLocaleString()} litros de água para encher a piscina.`;
});

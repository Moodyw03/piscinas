document.getElementById('poolForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const length = document.getElementById('length').value;
    const width = document.getElementById('width').value;
    const depth = document.getElementById('depth').value;

    const volume = length * width * depth;
    // Assuming 1 cubic meter = 1000 liters
    const liters = volume * 1000;

    document.getElementById('result').textContent = `You need ${liters.toLocaleString()} liters of water to fill the pool.`;
});

function spawnEnemy() {
    if (!gameRunning || gameOver) return;
    
    // Define se será um zumbi normal ou grande
    const isBig = Math.random() < 0.2; // 20% de chance
    const radius = isBig ? 40 : 20;    // Dobro do tamanho
    const health = isBig ? 3 : 1;      // 3 tiros para o grande, 1 para o normal
    const speed = isBig ? 1 : 2;       // O grande é mais lento
    const color = isBig ? '#8e44ad' : '#e74c3c'; // Roxo para o grande, vermelho para o comum

    let x, y;
    if (Math.random() < 0.5) {
        x = Math.random() < 0.5 ? 0 - radius : canvas.width + radius;
        y = Math.random() * canvas.height;
    } else {
        x = Math.random() * canvas.width;
        y = Math.random() < 0.5 ? 0 - radius : canvas.height + radius;
    }

    const angle = Math.atan2(player.y - y, player.x - x);
    enemies.push({
        x, y, radius, color, health, speed,
        maxHealth: health, // Guardamos para efeitos visuais se quiser
        velocity: {
            x: Math.cos(angle) * speed,
            y: Math.sin(angle) * speed
        }
    });
}
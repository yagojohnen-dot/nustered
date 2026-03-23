// Dentro do loop de inimigos (enemies.forEach)
projectiles.forEach((p, pIndex) => {
    const dist = Math.hypot(p.x - enemy.x, p.y - enemy.y);
    
    if (dist - enemy.radius - p.radius < 1) {
        // Remove o projétil imediatamente
        projectiles.splice(pIndex, 1);
        
        // Tira 1 de vida do inimigo
        enemy.health -= 1;

        // Se a vida acabar, remove o inimigo e dá pontos
        if (enemy.health <= 0) {
            score += enemy.radius === 40 ? 50 : 10; // Mais pontos por matar o grande
            scoreElement.innerText = score;
            enemies.splice(eIndex, 1);
        } else {
            // Feedback visual: O inimigo brilha branco ou encolhe um pouco ao levar tiro
            enemy.x -= Math.cos(angle) * 10; // "Knockback" (empurrãozinho para trás)
            enemy.y -= Math.sin(angle) * 10;
        }
    }
});
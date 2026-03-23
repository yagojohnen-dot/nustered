if (enemy.health > 1) {
    ctx.fillStyle = 'red';
    ctx.fillRect(enemy.x - 20, enemy.y - enemy.radius - 10, 40, 5);
    ctx.fillStyle = 'green';
    ctx.fillRect(enemy.x - 20, enemy.y - enemy.radius - 10, (enemy.health / enemy.maxHealth) * 40, 5);
}
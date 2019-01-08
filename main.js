var player = {level: 1, damage: 10, experience: 0, coins: 0, kills: 0};
var enemy = {level: 1, health: 100};
var damageovertime = 0;

function attack(){
    enemy.health = enemy.health - player.damage;

    if (enemy.health <= 0){
        death();
    }
    document.getElementById("enemyHealth").innerHTML = "Health: " + enemy.health;
    animatie();
}
function death(){
    player.experience = player.experience + 25;
    enemy.health = 100;
    player.coins++;
    player.kills++;
    console.log("Enemy died!");
    document.getElementById("coins").innerHTML = "Dogtags: " + player.coins;
    document.getElementById("experience").innerHTML = "Experience: " + player.experience;
    document.getElementById("kills").innerHTML = "Confirmed kills: " + player.kills;

    if(player.experience === 100){
        level();
    }
    function level() {
        player.level++;
        player.experience = 0;
        document.getElementById("playerlevel").innerHTML = "Playerlevel: " + player.level;
        document.getElementById("experience").innerHTML = "Experience: " + player.experience;

        if(player.level === 20){
            document.getElementById("rifle").innerHTML = "Rifle: S.V.D";
            document.getElementById("rank").innerHTML = "Rank: Ranger";
        }
        if(player.level === 50){
            document.getElementById("rifle").innerHTML = "Rifle: Scar-H";
            document.getElementById("rank").innerHTML = "Rank: Marksman";
        }
        if(player.level === 100){
            document.getElementById("rifle").innerHTML = "Rifle: M40A5";
            document.getElementById("rank").innerHTML = "Rank: Sniper";
        }
        if(player.level === 250){
            document.getElementById("rifle").innerHTML = "Rifle: A.W.M";
            document.getElementById("rank").innerHTML = "Rank: Sharpshooter";
        }
        if(player.level === 500){
            document.getElementById("rifle").innerHTML = "Rifle: Barret .50 Call";
            document.getElementById("rank").innerHTML = "Rank: Special Forces Sharpshooter";
        }
    }
}
function upgrade() {
    if(player.coins < 5){
        alert("om deze upgrade te kunnen kopen moet je 5 Dogtags hebben");
    }else {
        player.damage++;
        player.coins = player.coins - 5;
        document.getElementById("coins").innerHTML = "Dogtags: " + player.coins;
        document.getElementById("damage").innerHTML = "Damage per shot: " + player.damage;
    }
}
function upgradeaanvraag(){
    if(player.coins < 10){
        alert("om deze upgrade te kunnen kopen moet je 10 Dogtags hebben");
    }else {
        player.coins = player.coins - 10;
        document.getElementById("coins").innerHTML = "Dogtags: " + player.coins;
        damageovertime++;
        document.getElementById("damageovertime").innerHTML = "Bleed damage: LVL" + damageovertime;
        var timer = setInterval(upgradeuitvoer, 1000);
    }
}
function upgradeuitvoer() {
    enemy.health = enemy.health - 1;
    if(enemy.health <= 0){
        death();
    }
    document.getElementById("enemyHealth").innerHTML = "Health: " + enemy.health;
}
function animatie() {
    soldier.src="afbeeldingen/soldier2.png";
    sniper.src="afbeeldingen/sniper2.png";
    setTimeout(normal, 100);
    clearTimeout(normal);
}

function normal() {
    soldier.src="afbeeldingen/soldier.png";
    sniper.src="afbeeldingen/sniper.png";
}

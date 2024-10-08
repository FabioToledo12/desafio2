// biome-ignore lint/style/useConst: <explanation>
let balanceWinNow = getWinBalance(80, 3);
// biome-ignore lint/style/useConst: <explanation>
let nivelXP = "";

function getWinBalance(victories, defeats) {
	balanceWin = victories - defeats;
	return balanceWin;
}

if (balanceWinNow < 10) {
	nivelXP = "Ferro";
} else if (balanceWinNow > 10 && balanceWinNow <= 20) {
	nivelXP = "Bronze";
} else if (balanceWinNow > 20 && balanceWinNow <= 50) {
	nivelXP = "Prata";
} else if (balanceWinNow > 50 && balanceWinNow <= 80) {
	nivelXP = "Ouro";
} else if (balanceWinNow > 80 && balanceWinNow <= 90) {
	nivelXP = "Diamante";
} else if (balanceWinNow > 90 && balanceWinNow <= 100) {
	nivelXP = "Lendario";
} else {
	nivelXP = "Imortal";
}

console.log(
	`O Herói tem de saldo de ${balanceWinNow} está no nível de ${nivelXP}`,
);

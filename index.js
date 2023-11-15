const heroi = "Thor"
const xp = 10001

if (xp <= 1000) {
    console.log(`O Herói de nome ${heroi} está no nível de Ferro`)

} else if (xp >= 1001 && xp <= 2000) {
    console.log(`O Herói de nome ${heroi} está no nível de Bronze`)

} else if (xp >= 2001 && xp <= 6000) {

    //  Coloquei 6000 pois não faz sentido deixar em 5000, 
    // pois o prata no desafio termina em 5000 e o ouro começa em 6000
    // então ficaria um espaço entre 5000 e 6000 mil que não retornaria nenhum nivel de herói

    console.log(`O Herói de nome ${heroi} está no nível de Prata`)

} else if (xp >= 6001 && xp <= 7000) {
    console.log(`O Herói de nome ${heroi} está no nível de Ouro`)

} else if (xp >= 7001 && xp <= 8000) {
    console.log(`O Herói de nome ${heroi} está no nível de Platina`)

} else if (xp >= 8001 && xp <= 9000) {
    console.log(`O Herói de nome ${heroi} está no nível de Ascendente`)

} else if (xp >= 9001 && xp <= 10000) {
    console.log(`O Herói de nome ${heroi} está no nível de Imortal`)

} else if (xp >= 10001) {
    console.log(`O Herói de nome ${heroi} está no nível de Radiante`)
}
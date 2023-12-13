/*/
1 - debito = 10% desconto
2 - à vista ou pix = 15% desconto
3 - 2x = valor normal
4 - acima 2x = valor + 10% juros
/*/

const valor = 100;
const forma = 4

if (forma === 1){
    console.log(valor-(valor*0.1)+' R$')
} else if (forma === 2){
    console.log(valor-(valor*0.15)+' R$')
} else if (forma === 3){
    console.log(valor+' R$')
} else if (forma === 4){
    console.log(valor+(valor*0.1)+' R$')
}

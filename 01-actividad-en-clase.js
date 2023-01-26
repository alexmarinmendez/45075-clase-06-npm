let obj = {}
let numero
for (let i=0; i<10000; i++) {
    numero = parseInt((Math.random() * 20) + 1)
    if (!obj[numero]) obj[numero] = 1
    else obj[numero]++
}
console.log(obj)

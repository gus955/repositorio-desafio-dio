let a = parseInt(gets());
let N = parseInt(gets());
let soma = 0;

 for (let i = a; i <= N; i++) {

 if(i % a == 0) {

  soma += i

 }
}
 
print(soma);

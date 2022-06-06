function imparesPares(array){
    let arrayPares = [];
    let arrayImpares = [];

    for(let i=0; i<array.length ;i++){
        let cantidad = array[i].length;
        if (cantidad % 2 == 0){
            arrayPares.push(array[i])
        }
        else{
            arrayImpares.push(array[i])
        }
    }
    console.log('Los ingredientes pares son : ',arrayPares,
    ' y los ingredientes impares son : ',arrayImpares);
}

let ingredientes = ['harina','agua','sal','aceite','levadura','tomate','queso','condimentos','jamon','aceitunas'];

imparesPares(ingredientes);
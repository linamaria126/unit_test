// Importar la función sum del archivo app.js
const { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

// Comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    // Dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // Esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});

test("One euro should be 1.07 dollars", () => {
    
    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    
    // Hago mi comparación (la prueba)
    expect(dollars).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
});

test("One dollar should be 145.54 Yen", () => {
    const yen = fromDollarToYen(3.5);
    expect(yen).toBe(509.39)// 1 dollar son 145.54 Yen, entonces 3.5 dolares deben ser = (3.5 * 145.54)
});


test("One Yen should be 0.0055506 Pounds", () =>{
    const pounds = fromYenToPound(3.5);
    expect(pounds).toBe(0.0194271)// 1 Yen son son 0,0055506 pounds, entonces  3.5 Yen deben ser = (3.5 * 0,0055506)
})

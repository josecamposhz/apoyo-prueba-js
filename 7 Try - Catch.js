let whereToSee = (valor) => {
    try {
        if (valor === 'right') {
            return 'left';
        } else if (valor === 'left') {
            return 'right';
        } else {
            throw new Error('El valor enviado no es permitido');
        }
    } catch (error) {
        return error;
    } finally {
        console.log('Finalizado el try...catch. Este mensaje aparece siempre.');
    }
}

console.log(whereToSee('right'));
console.log(whereToSee('dddd'));
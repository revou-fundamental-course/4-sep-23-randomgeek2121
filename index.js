function hitung() {
    const side = parseFloat(document.getElementById('inputField').value);

    if (isNaN(side)) {
        alert('Masukkan side dengan angka valid.');

        return;
    }

    const luas = side * side;
    const keliling = 4 * side;

    document.getElementById('hasilLuasText').textContent = `${side} x ${side} = ${luas.toFixed(2)}`;
    document.getElementById('hasilKelilingText').textContent = `4 x ${side} = ${keliling.toFixed(2)}`;
}

function resetForm(){
    document.getElementById('inputField').value = '';
    document.getElementById('hasilLuasText').textContent = '';
    document.getElementById('hasilKelilingText').textContent = '';
}
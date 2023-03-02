// Procedure
const dataDiri = (nama, asal, suku) => {
    console.log(
        `
        Nama : ${nama}, 
        Asal : ${asal},
        Suku : ${suku}
        `
    )
}

const asalKampus = (kampus, jurusan) => {
    console.log(
        `
        Asal kampus : ${kampus},
        Jurusan     : ${jurusan}
        `
    )
}

dataDiri('Irfiyanda Abidin', 'Pemalang', 'Jawa');
asalKampus('AMIKOM Yogyakarta', 'D3 Teknik Informatika');

// Method function
const fungsiMatematika1 = (x) => {
    return x ** 2
};

const fungsiMatematika2 = (x, y) => {
    return (x * 2) + (y * 2)
};

const fungsiMatematika3 = (x, y) => {
    return (x * y) / 2
};

const fungsiMatematika4 = (x, y) => {
    return x * y
};

const fungsiMatematika5 = (x) => {
    const phi = 3.14
    return phi * 2 * x
};

const x = 2;
const y = 4;

const hasil1 = fungsiMatematika1(x);
const hasil2 = fungsiMatematika2(x, y);
const hasil3 = fungsiMatematika3(x, y);
const hasil4 = fungsiMatematika4(x, y);
const hasil5 = fungsiMatematika5(x);

console.log(
    `
    x = ${x}
    y = ${y}

    f(x) = ${x} ** 2
    => ${hasil1}
    
    f(x, y) = (${x} * 2) + (${y} * 2)     
    => ${hasil2}
    
    f(x, y) = (${x} * ${y}) / 2             
    => ${hasil3}
    
    f(x, y) = ${x} * ${y}                   
    => ${hasil4}
    
    f(x) = phi * 2 * ${x}                
    => ${hasil5}
    `
);
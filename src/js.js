function calcular(hora){
    if(hora.includes(":")){
        let horaDivida = hora.split(":")
        let minutosFracionais = horaDivida[1]/60
        console.log(horaDivida[0], minutosFracionais)
        let resultado = Number( minutosFracionais.toFixed(2)) + Number(horaDivida[0])
        console.log(resultado)
    }
}

calcular("08:30")
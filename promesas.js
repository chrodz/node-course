let empleados = [{
    id: 1,
    nombre: 'Luciano'
}, {
    id: 2,
    nombre: 'Angelo'
}, {
    id: 3,
    nombre: 'Valentin'
}];

let salarios = [{
    id: 1,
    salario: 1000
}, {
    id: 2,
    salario: 2000
}];

let getEmpleado = (id) => {

    return new Promise((resolve, reject) => {
        let empleadoDB = empleados.find(empleado => empleado.id === id);

        if (!empleadoDB) {
            reject(`No Existe un empleado con id: ${id}`)
        } else {
            resolve(empleadoDB);
        }
    });

}

let getSalario = (empleado) => {

    return new Promise((resolve, reject) => {
        let salarioDB = salarios.find(salario => salario.id === empleado.id);

        if (!salarioDB) {
            reject(`No se encontró un salario para el empleado ${empleado.nombre}`)
        } else {
            resolve({
                nombre: empleado.nombre,
                salario: salarioDB.salario,
                id: empleado.id
            });
        }
    });

}

getEmpleado(33).then(empleado => {

    return getSalario(empleado);

    getSalario(empleado).then(resp => {
        console.log(`El salario de ${resp.nombre} es ${resp.salario}$`)
    }, (err) => console.log(err))

}).then(resp => {
    console.log(`El salario de ${resp.nombre} es ${resp.salario}$`)
}).catch(err => {
    console.log(err)
});
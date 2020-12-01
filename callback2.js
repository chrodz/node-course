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

let getEmpleado = (id, callback) => {
    let empleadoDB = empleados.find(empleado => empleado.id === id);

    if (!empleadoDB) {
        callback(`No Existe un empleado con id: ${id}`)
    } else {
        callback(null, empleadoDB);
    }
}

let getSalario = (empleado, callback) => {

    let salarioDB = salarios.find(salario => salario.id === empleado.id);

    if (!salarioDB) {
        callback(`No se encontró un salario para el empleado ${empleado.nombre}`)
    } else {
        callback(null, { nombre: empleado.nombre, salario: salarioDB.salario, id: empleado.id });
    }
}

getEmpleado(2, (err, empleado) => {
    if (err) {
        return console.log(err);
    }

    getSalario(empleado, (error, rsp) => {
        if (error) {
            return console.log(error);
        } else {
            console.log(`El salario de ${rsp.nombre} es de ${rsp.salario}$`);
        }
    });

});
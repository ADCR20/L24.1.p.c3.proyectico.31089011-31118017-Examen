export default class Cl_examen{
    constructor (valor, minApro) {
        this.valor = valor;
        this.minApro = minApro;
        this.estudiantes = [];
    }

    set valor(valor) {
        this._valor = +valor;
    }
    get valor() {
        return this ._valor;
    }
    set minApro(minApro) {
        this._minApro = +minApro;
    }
    get minApro() {
        return this._minApro;
    }
    agregarEstudiante(estudiante) {
        this.estudiantes.push(estudiante);
    }
   // eliminarEstudiante(estudiante)

   eliminarEstudiante(cedula){
    this.estudiantes = this.estudiantes.filter((estudiante) => estudiante.cedula !== cedula);
}






    
}
import Dt_exam from "./Dt_examen.js";
export default class Cl_examen{
    constructor (valor, minApro) {
        this.valor = valor;
        this.minApro = minApro;
        this.estudiantes = [];
        this.examen = Dt_exam;
    }

    set valor(valor) {
        this._valor = +valor;
    }
    get valor() {
        return this._valor;
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
  notaPromedio() {
    let promedio = 0;
    for (let i = 0; i < this.estudiantes.length; i++) {
        promedio += this.estudiantes[i].nota; }
      promedio = promedio / this.estudiantes.length;
      return promedio.toFixed(2);
  }

  
  porcentajeAprobados() {
    console.log(this); // Verifica el contexto de `this`
    console.log(this.minApro); // Verifica el valor de `minApro`
    let aprobados = this.estudiantes.filter((estudiante) => {
        console.log(estudiante.nota, this.examen.minApro); // Verifica los valores durante el filtrado
        return estudiante.nota >= this.examen.minApro;
    }).length;
    return (aprobados / this.estudiantes.length) * 100;
}

porcentajeReprobados(){
    const reprobados = this.estudiantes.filter((estudiante) => estudiante.nota < this.examen.minApro).length;
    return (reprobados / this.estudiantes.length) * 100;
}
    mejorNota(){
            const mejorNota = Math.max(...this.estudiantes.map((estudiante) => estudiante.nota));
            return this.estudiantes.find((estudiante) => estudiante.nota == mejorNota).nombre;
            }
    chicasEncimaPromedio() {
        const chicasPromedio = this.notaPromedio();
        return this.estudiantes.filter((estudiante)=> estudiante.sexo == "F" && estudiante.nota > chicasPromedio).map((estudiante) => estudiante.nombre);
    }
    modificaEstudiante(cedula, nuevosDatos){
        const estudiante = this.estudiantes.find((estudiante) => estudiante.cedula == cedula);
        if(estudiante){
            estudiante.nombre = nuevosDatos.nombre || estudiante.nombre;
            estudiante.sexo = nuevosDatos.sexo || estudiante.sexo;
            estudiante.nota = nuevosDatos.nota || estudiante.nota;
        }
    }
    
};
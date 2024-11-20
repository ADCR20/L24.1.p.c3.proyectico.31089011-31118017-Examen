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
    let aprobados = 0; 
    for (let i = 0; i < this.estudiantes.length; i++) {
         if (this.estudiantes[i].nota >= this.examen.minApro) { aprobados++; } } 
         return (aprobados / this.estudiantes.length) * 100; }





    
}
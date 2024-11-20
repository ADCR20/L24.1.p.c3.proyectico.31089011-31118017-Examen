/*Se desea llevar un control de los estudiantes que 
asisten a presentar un examen. Se tiene por cada 
participante: nombre, cédula, sexo y nota. Se requiere 
de un programa que permita el registro de esta 
información, conociendo al principio de la ejecución el 
valor del examen y el mínimo aprobatorio.


Nombre   Cédula   Sexo    Nota
Luis      1111     “M”     12
Carla     2222     “F”    16.5
Mery      3333     “F”     8.5

*/
import Cl_estudiantes from "./Cl_estudiantes.js";
import Cl_examen from "./Cl_examen.js";
import Dt_examen from "./Dt_examen.js";
import Dt_estudiantes from "./Dt_estudiantes.js";

const examen = new Cl_examen();

Dt_estudiantes.forEach((estudiantes) =>
    examen.agregarEstudiante(
      new Cl_estudiante(estudiantes.nombre, estudiantes.cedula, estudiantes.sexo, estudiantes.nota)
    )
  );
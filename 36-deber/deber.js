'use strict';
  
/*Crear una función que filtre los valores mayores a 10.00 y redondearlos a 2 decimales como string. Retornando un array. 
nums = [13.676767, 3.123432, 5.34543543, 10.3452345*/

function filtrarYRedondear(nums) {
    return nums
      .filter(num => num > 10.00)
      .map(num => num.toFixed(2));
  }
let nums = [13.676767, 3.123432, 5.34543543, 10.3452345];
let resultado = filtrarYRedondear(nums);

alert(resultado); // ["13.68", "10.35"]
  

//Crear un array de objetos con la informacion de las asignaturas de la carrera de Desarrollo de software.  Crear una función que reciba como parámetro el array de las asignaturas y un numero que indique el nivel. La función debe retornar solo las asignaturas que pertenecen a ese nivel. 

  const asignaturas = [
    { nombre: 'Matematicas', nivel: 1 },
    { nombre: 'Procesos contables', nivel: 2 },
    { nombre: 'Bases de Datos', nivel: 1 },
    { nombre: 'Sistemas de informacion', nivel: 2 },
    { nombre: 'Software aplicativo', nivel: 3 },
    { nombre: 'Herramientas Case', nivel: 4 },
    { nombre: 'Sistemmas operativos', nivel: 4 }
  ];
  
  function filtrarAsignaturasPorNivel(asignaturas, nivel) {
    return asignaturas
      .filter(asignatura => asignatura.nivel === nivel)
      .map(asignatura => asignatura.nombre);
  }
  
  const nivelBuscado = 1;
  const nombresAsignaturasNivel = filtrarAsignaturasPorNivel(asignaturas, nivelBuscado);
  
  // Unir los nombres de las asignaturas en una sola cadena separada por saltos de línea
  const total = nombresAsignaturasNivel.join('\n');
  
  // Mostrar el resultado con un alert
  alert(total);
  

//Crear una función que calcule el promedio de un conjunto de calificaciones almacenados en un array. La función debe recibir el array y devolver únicamente la parte entera del promedio.

function calcularPromedio(calificaciones) {
    const suma = calificaciones.reduce((acc, calificacion) => acc + calificacion, 0);
    const promedio = suma / calificaciones.length;
    return Math.floor(promedio);
  }
  
  const calificaciones = [90, 80, 85, 70, 95];
  const promedioEntero = calcularPromedio(calificaciones);
  
  alert(promedioEntero); // 84
  
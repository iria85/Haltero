// Programación de HALTEROFILIA · 42 sesiones (extraída de halterofilia_tracker.xlsx)
// Formato de "pct": "%/series x reps" separados por comas. "60%/3x3" = 3 series de 3 al 60 %.
window.PROGRAMS = window.PROGRAMS || {};
window.PROGRAMS.halterofilia = {
  name: "Halterofilia",
  defaults: { start: "2026-10-01", weekdays: [4] },   // jueves
  days: [
 {
  "n": 1,
  "desc": "Día de adaptación basado en porcentajes bajos hasta el 70%",
  "ex": [
   {
    "name": "SLOW POWER SNATCH",
    "pct": "50%/3, 60%/3x3",
    "notes": "Desde el despegue hasta el pubis: 6 seg."
   },
   {
    "name": "HANG POWER SNATCH ABOVE KNEES",
    "pct": "50%/3, 60%/3, 70%/4x3",
    "notes": "Posición hang: hombros por delante de rodillas"
   },
   {
    "name": "POWER CLEAN + CLEAN",
    "pct": "50%/3+2, 60%/3+2, 70%/4x3+2",
    "notes": null
   },
   {
    "name": "BACK SQUAT",
    "pct": "50%/3, 60%/3, 70%/4x3",
    "notes": null
   }
  ]
 },
 {
  "n": 2,
  "desc": "Día de adaptación basado en porcentajes bajos hasta el 70%",
  "ex": [
   {
    "name": "POWER SNATCH 3 TIMES",
    "pct": "50%/3, 60%/3x3",
    "notes": "Desde cadera: bajar pos.1 bajo rodillas, 2 encima rodillas, 3 pubis"
   },
   {
    "name": "SNATCH BELOW KNEES",
    "pct": "50%/3, 60%/3, 70%/4x3",
    "notes": "Posición hang: hombros delante de rodillas, parar en pos. 3"
   },
   {
    "name": "HANG CLEAN ABOVE KNEES + PUSH JERK",
    "pct": "50%/1+1, 60%/2+1, 70%/4x2+1",
    "notes": null
   },
   {
    "name": "CLEAN PULL",
    "pct": "60%/3, 70%/3, 80%/4x3",
    "notes": null
   }
  ]
 },
 {
  "n": 3,
  "desc": "Día de adaptación basado en porcentajes bajos hasta el 70%",
  "ex": [
   {
    "name": "SLOW SNATCH",
    "pct": "50%/3, 60%/4x3",
    "notes": "Desde despegue hasta pubis: 6 seg."
   },
   {
    "name": "POWER SNATCH + HANG SNATCH ABOVE + SNATCH",
    "pct": "50%/3+2+1, 60%/3+2+1, 70%/4x3+2+1",
    "notes": null
   },
   {
    "name": "POWER CLEAN + SPLIT JERK",
    "pct": "50%/3+2, 60%/3+2, 70%/4x3+2",
    "notes": null
   },
   {
    "name": "BACK SQUAT",
    "pct": "50%/3, 60%/3, 70%/3, 80%/4x3",
    "notes": null
   },
   {
    "name": "SNATCH PULL",
    "pct": "50%/3, 60%/3, 70%/3, 80%/4x3",
    "notes": "Mantenerse vertical, barra alta, codos altos alineados"
   }
  ]
 },
 {
  "n": 4,
  "desc": "Primer día semana de adaptación al sistema de entrenamiento",
  "ex": [
   {
    "name": "SLOW SNATCH",
    "pct": "50%/3, 60%/4x3",
    "notes": null
   },
   {
    "name": "POWER SNATCH + HANG POWER SNATCH ABOVE + SNATCH",
    "pct": "50%/3+2+1, 60%/3+2+1, 70%/4x3+2+1",
    "notes": null
   },
   {
    "name": "BACK SQUAT",
    "pct": "50%/3, 60%/3, 70%/3, 80%/4x3",
    "notes": null
   },
   {
    "name": "SNATCH FINAL PULL",
    "pct": "50%/3, 60%/3, 70%/4x3",
    "notes": null
   }
  ]
 },
 {
  "n": 5,
  "desc": "Segundo día semana de adaptación al sistema de entrenamiento",
  "ex": [
   {
    "name": "MUSCLE SNATCH",
    "pct": "50%/3, 60%/3, 70%/2 + subida/1 hasta fallo, luego -10kg/3x3",
    "notes": "Buscar máximo del día"
   },
   {
    "name": "HANG POWER SNATCH BELOW KNEES 3\"",
    "pct": "50%/2x3, 60%/3, 70%/5x2",
    "notes": "MUY IMPORTANTE: parar 3 seg. en posición de HANG"
   },
   {
    "name": "HANG POWER CLEAN ABOVE KNEES + PUSH JERK",
    "pct": "50%/2x3+2, 60%/3+2, 70%/5x2+1",
    "notes": "En Push Jerk: bíceps a altura orejas, semi-flexión en recepción"
   },
   {
    "name": "FRONT SQUAT",
    "pct": "50%/2x3, 60%/3, 70%/3, 80%/5x3",
    "notes": null
   }
  ]
 },
 {
  "n": 6,
  "desc": "Tercer día semana de adaptación al sistema de entrenamiento",
  "ex": [
   {
    "name": "SLOW POWER SNATCH",
    "pct": "50%/2x4, 60%/3x3",
    "notes": "Calentamiento"
   },
   {
    "name": "SNATCH PULL + SNATCH",
    "pct": "50%/3+2, 60%/3+2, 70%/2+1, 75%/2+1, 80%/5x1+1",
    "notes": null
   },
   {
    "name": "POWER CLEAN + PUSH JERK + JERK",
    "pct": "50%/2+1+2, 60%/2+1+2, 70%/2+1+2, 75%/5x1+1+1",
    "notes": null
   },
   {
    "name": "BACK SQUAT",
    "pct": "50%/3, 60%/3, 70%/3, 80%/5x3",
    "notes": null
   }
  ]
 },
 {
  "n": 7,
  "desc": "Primer día segunda semana de entrenamiento",
  "ex": [
   {
    "name": "POWER SNATCH 3 TIMES",
    "pct": "50%/3, 60%/3, 65%/3x3",
    "notes": null
   },
   {
    "name": "HANG POWER SNATCH BELOW KNEES + HANG SNATCH",
    "pct": "50%/3+2, 60%/3+2, 70%/2+1, 75%/4x3+1",
    "notes": null
   },
   {
    "name": "BACK SQUAT + BACK SPLIT JERK",
    "pct": "50%/3+2, 60%/3+2, 70%/3+1, 80%/4x2+1",
    "notes": "El % debe ser del clean and jerk"
   },
   {
    "name": "SNATCH PULL UP TO THE KNEES",
    "pct": "70%/3, 80%/3, 90%/4x3",
    "notes": null
   }
  ]
 },
 {
  "n": 8,
  "desc": "Segundo día segunda semana de entrenamiento",
  "ex": [
   {
    "name": "POWER SNATCH NO JUMP",
    "pct": "50%/2x3, 60%/3, 70%/5x2",
    "notes": "Mantener hombros por delante de la barra hasta que llegue a la cintura"
   },
   {
    "name": "POWER CLEAN + SPLIT JERK",
    "pct": "50%/2x3, 60%/3, 70%/4x3, 80%/2x2",
    "notes": null
   },
   {
    "name": "BACK SQUAT",
    "pct": "50%/2x3, 60%/3, 70%/3, 80%/5x2",
    "notes": null
   },
   {
    "name": "SNATCH HIP PULL",
    "pct": "70%/3, 80%/3, 90%/5x2",
    "notes": null
   }
  ]
 },
 {
  "n": 9,
  "desc": "Tercer día segunda semana de entrenamiento",
  "ex": [
   {
    "name": "SLOW SNATCH",
    "pct": "50%/2x4, 60%/3, 70%/4x2",
    "notes": "Contar 6\" desde el despegue del suelo hasta llegar al pubis"
   },
   {
    "name": "SNATCH PULL + HANG SNATCH ABOVE KNEES",
    "pct": "50%/3+2, 60%/3+2, 70%/2+1, 75%/5x2+1, 80%/2x1+1",
    "notes": null
   },
   {
    "name": "CLEAN AND JERK",
    "pct": "50%/2+1, 60%/2+1, 70%/2+1, 75%/1+1, 80%/4x1+1",
    "notes": "2+1 = 2 cleans + 1 split jerk"
   },
   {
    "name": "BACK SPLIT SQUAT",
    "pct": "50%/4+4, 60%/5x4+4",
    "notes": null
   }
  ]
 },
 {
  "n": 10,
  "desc": "Primer día tercera semana de entrenamiento",
  "ex": [
   {
    "name": "POWER SNATCH ABOVE KNEES",
    "pct": "50%/3, 60%/3, 70%/4x3",
    "notes": null
   },
   {
    "name": "SNATCH PULL + SNATCH",
    "pct": "50%/3+2, 60%/3+2, 70%/2+1, 80%/4x2+1",
    "notes": "Los snatch pull tienen que ser muy altos"
   },
   {
    "name": "BACK PUSH PRESS + SNATCH BALANCE",
    "pct": "50%/3+2, 60%/3+2, 70%/3+1, 80%/4x2+1",
    "notes": "El % debe ser del snatch"
   },
   {
    "name": "BACK SQUAT",
    "pct": "70%/3, 80%/5x3",
    "notes": null
   }
  ]
 },
 {
  "n": 11,
  "desc": "Segundo día tercera semana de entrenamiento",
  "ex": [
   {
    "name": "MUSCLE SNATCH",
    "pct": "50%/2x3, 60%/3, 70%/2, 80%/5x2",
    "notes": null
   },
   {
    "name": "POWER CLEAN + PUSH JERK + JERK",
    "pct": "50%/2x3+2+1, 60%/3+2+1, 70%/4x3+2+1",
    "notes": null
   },
   {
    "name": "FRONT SQUAT",
    "pct": "50%/2x4, 60%/4, 75%/4x4",
    "notes": null
   },
   {
    "name": "CLEAN PULL",
    "pct": "70%/3, 80%/3, 90%/4x3",
    "notes": null
   }
  ]
 },
 {
  "n": 12,
  "desc": "Tercer día tercera semana de entrenamiento",
  "ex": [
   {
    "name": "SLOW POWER SNATCH",
    "pct": "50%/2x4, 60%/3x3",
    "notes": "Contar 6\" desde el despegue hasta el pubis"
   },
   {
    "name": "POWER SNATCH + HANG SNATCH ABOVE KNEES",
    "pct": "50%/3+2, 60%/3+2, 70%/3+2, 80%/4x2+1",
    "notes": null
   },
   {
    "name": "POWER CLEAN",
    "pct": "50%/2x3, 60%/3, 70%/3, 80%/4x3",
    "notes": "Coger barras lo más altas posible, codos rápidos, cadera en semi flexión"
   },
   {
    "name": "BACK SQUAT",
    "pct": "60%/4, 70%/4, 80%/3, 85%/4x3",
    "notes": null
   }
  ]
 },
 {
  "n": 13,
  "desc": "Primer día cuarta semana de entrenamiento",
  "ex": [
   {
    "name": "HANG SNATCH BELOW KNEES",
    "pct": "50%/3, 60%/3, 70%/4x3",
    "notes": "Parar 3\" en la posición de hang"
   },
   {
    "name": "BACK PUSH PRESS + OHS",
    "pct": "50%/3+2, 60%/3+2, 70%/2+1, 80%/4x2+1",
    "notes": "El agarre del push press será de snatch"
   },
   {
    "name": "FRONT SQUAT + PUSH JERK",
    "pct": "50%/3+2, 60%/3+2, 70%/3+1, 80%/4x2+1",
    "notes": "El % será del clean & jerk"
   },
   {
    "name": "CLEAN PULL",
    "pct": "70%/3, 80%/3, 90%/5x3",
    "notes": null
   }
  ]
 },
 {
  "n": 14,
  "desc": "Segundo día cuarta semana de entrenamiento",
  "ex": [
   {
    "name": "SLOW POWER SNATCH",
    "pct": "50%/2x3, 60%/3, 70%/3x3",
    "notes": null
   },
   {
    "name": "POWER SNATCH + HANG SNATCH + SNATCH",
    "pct": "50%/2x3+2+1, 60%/3+2+1, 70%/4x3+2+1",
    "notes": null
   },
   {
    "name": "POWER CLEAN + SPLIT JERK",
    "pct": "50%/2x4+2, 60%/4+2, 75%/4x4+2",
    "notes": "4+2 = 4 power cleans + 2 split jerks"
   },
   {
    "name": "BACK SQUAT",
    "pct": "70%/3, 80%/3, 85%/4x3",
    "notes": null
   }
  ]
 },
 {
  "n": 15,
  "desc": "Tercer día cuarta semana de entrenamiento",
  "ex": [
   {
    "name": "POWER SNATCH 3 TIMES",
    "pct": "50%/2x4, 60%/3x3",
    "notes": "Desde hang: pos.1 bajo rodillas, pos.2 encima rodillas, pos.3 encima pubis"
   },
   {
    "name": "HANG SNATCH PULL BELOW KNEES + SNATCH",
    "pct": "50%/3+2, 60%/3+2, 70%/2+1, 80%/5x1+1",
    "notes": null
   },
   {
    "name": "CLEAN & JERK",
    "pct": "50%/2x3, 60%/3, 70%/3, 80%/3x2",
    "notes": null
   },
   {
    "name": "FRONT SQUAT",
    "pct": "60%/4, 70%/4, 80%/3, 85%/4x2",
    "notes": null
   }
  ]
 },
 {
  "n": 16,
  "desc": "Primer día quinta semana de entrenamiento",
  "ex": [
   {
    "name": "MUSCLE SNATCH",
    "pct": "50%/3, 60%/3, 70%/2, 80%/3x2",
    "notes": null
   },
   {
    "name": "POWER SNATCH + HANG SNATCH",
    "pct": "50%/3+2, 60%/2+1, 70%/2+1, 80%/5x1+1",
    "notes": null
   },
   {
    "name": "POWER CLEAN + SPLIT JERK",
    "pct": "50%/2+2, 60%/2+2, 70%/2+1, 80%/4x2+1",
    "notes": "En el split jerk: entrar en semi flexión parando 3\""
   },
   {
    "name": "BACK SQUAT",
    "pct": "70%/3, 80%/3, 85%/5x3",
    "notes": null
   }
  ]
 },
 {
  "n": 17,
  "desc": "Segundo día quinta semana de entrenamiento",
  "ex": [
   {
    "name": "MUSCLE SNATCH",
    "pct": "50%/3, 60%/3, 70%/2, 80%/3x2",
    "notes": null
   },
   {
    "name": "POWER SNATCH + HANG SNATCH",
    "pct": "50%/3+2, 60%/2+1, 70%/2+1, 80%/5x1+1",
    "notes": null
   },
   {
    "name": "POWER CLEAN + SPLIT JERK",
    "pct": "50%/2+2, 60%/2+2, 70%/2+1, 80%/4x2+1",
    "notes": "En el split jerk: entrar en semi flexión parando 3\""
   },
   {
    "name": "BACK SQUAT",
    "pct": "70%/3, 80%/3, 85%/5x3",
    "notes": null
   }
  ]
 },
 {
  "n": 18,
  "desc": "Tercer día quinta semana de entrenamiento",
  "ex": [
   {
    "name": "SLOW POWER SNATCH",
    "pct": "50%/2x4, 60%/3x3",
    "notes": null
   },
   {
    "name": "SNATCH PULL + SNATCH + HANG SNATCH",
    "pct": "50%/3+2+1, 60%/3+2+1, 70%/2+1+1, 75%/5x1+1+1",
    "notes": null
   },
   {
    "name": "SPLIT JERK",
    "pct": "50%/2x3, 60%/3, 70%/3x3",
    "notes": null
   },
   {
    "name": "BACK SQUAT",
    "pct": "60%/4, 70%/4, 80%/3, 85%/4x2",
    "notes": null
   }
  ]
 },
 {
  "n": 19,
  "desc": "Primer día sexta semana de entrenamiento",
  "ex": [
   {
    "name": "SLOW POWER SNATCH",
    "pct": "50%/3, 60%/2x3",
    "notes": null
   },
   {
    "name": "SNATCH PULL + SNATCH",
    "pct": "50%/3+2, 60%/3+2, 70%/3+2, 80%/5x2+1",
    "notes": "Si estamos bien podremos subir"
   },
   {
    "name": "CLEAN + PUSH JERK + SPLIT JERK",
    "pct": "50%/2+3+2, 60%/2+3+2, 70%/2x1+3+2, 80%/3x1+2+1",
    "notes": null
   },
   {
    "name": "BACK SQUAT",
    "pct": "70%/3, 80%/3, 85%/2, 90%/3x1",
    "notes": null
   }
  ]
 },
 {
  "n": 20,
  "desc": "Segundo día sexta semana de entrenamiento",
  "ex": [
   {
    "name": "POWER SNATCH BELOW KNEES",
    "pct": "50%/2x3, 60%/3, 70%/4x2",
    "notes": null
   },
   {
    "name": "SNATCH",
    "pct": "50%/2x3, 60%/3, 70%/2, 80%/2x2, 85%/2x1, 90%/1",
    "notes": null
   },
   {
    "name": "POWER CLEAN + SPLIT JERK",
    "pct": "50%/2x2+1, 60%/2+1, 70%/2+1, 75%/2+1, 80%/4x1+1",
    "notes": null
   },
   {
    "name": "FRONT SQUAT",
    "pct": "75%/3, 85%/3, 90%/2, 95%/3x2",
    "notes": null
   }
  ]
 },
 {
  "n": 21,
  "desc": "Tercer día sexta semana de entrenamiento",
  "ex": [
   {
    "name": "SLOW POWER SNATCH",
    "pct": "50%/2x4, 60%/3x3",
    "notes": null
   },
   {
    "name": "SNATCH (BUSCAMOS PR)",
    "pct": "50%/2x3, 60%/3, 70%/2, 80%/2x2, 85%/2x1, 90%/2x1",
    "notes": "Objetivo real: buscar un PR"
   },
   {
    "name": "POWER CLEAN + SPLIT JERK (BUSCAMOS PR)",
    "pct": "50%/2x3, 60%/3, 70%/3, 80%/2x2, 85%/1, 90%/2x1",
    "notes": "Objetivo real: buscar un PR"
   }
  ]
 },
 {
  "n": 22,
  "desc": "Primer día séptima semana de entrenamiento",
  "ex": [
   {
    "name": "SLOW POWER SNATCH",
    "pct": "50%/3, 60%/3, 70%/3x2",
    "notes": null
   },
   {
    "name": "SNATCH PULL + SNATCH",
    "pct": "50%/3+2, 60%/3+2, 70%/3+2, 80%/5x2+1",
    "notes": null
   },
   {
    "name": "POWER CLEAN + PUSH JERK + SPLIT JERK",
    "pct": "50%/2+2+2, 60%/2+2+2, 70%/2+1+1, 80%/4x2+1+1",
    "notes": "Los jerks deben ser muy fluidos; si la carga es obstáculo, bajar o mantener para buena ejecución"
   },
   {
    "name": "BACK SQUAT",
    "pct": "70%/3, 80%/3, 85%/5x3",
    "notes": null
   }
  ]
 },
 {
  "n": 23,
  "desc": "Segundo día séptima semana de entrenamiento",
  "ex": [
   {
    "name": "POWER SNATCH 3 TIMES",
    "pct": "50%/2x3, 60%/3x3",
    "notes": "En posición 3: mantener hombro por delante de la barra"
   },
   {
    "name": "SNATCH PULL ON BLOCKS + SNATCH ON BLOCKS",
    "pct": "50%/2x3+2, 60%/3+2, 70%/4x3+2",
    "notes": null
   },
   {
    "name": "POWER CLEAN + FRONT SQUAT + JERK",
    "pct": "50%/2x3+2+1, 60%/3+2+1, 70%/4x3+2+1, 80%/2x1+1+1",
    "notes": null
   },
   {
    "name": "CLEAN PULL",
    "pct": "70%/3, 80%/2, 90%/2, 95%/4x2",
    "notes": null
   }
  ]
 },
 {
  "n": 24,
  "desc": "Tercer día séptima semana de entrenamiento",
  "ex": [
   {
    "name": "POWER SNATCH ABOVE KNEES",
    "pct": "50%/2x4, 60%/3, 70%/4x3",
    "notes": null
   },
   {
    "name": "SNATCH",
    "pct": "50%/2x3, 60%/3, 70%/2, 75%/2, 80%/2x1, 85%/1",
    "notes": "Si estamos con buenas sensaciones podemos subir, siempre con control y movimientos fluidos"
   },
   {
    "name": "BACK SQUAT + SPLIT JERK",
    "pct": "50%/2x3, 60%/3, 70%/3, 80%/5x2",
    "notes": null
   },
   {
    "name": "SNATCH PULL",
    "pct": "60%/4, 70%/4, 80%/3, 90%/4x3",
    "notes": null
   }
  ]
 },
 {
  "n": 25,
  "desc": "Primer día octava semana de entrenamiento",
  "ex": [
   {
    "name": "SLOW SNATCH",
    "pct": "50%/3, 60%/4x3",
    "notes": null
   },
   {
    "name": "POWER SNATCH + HANG SNATCH BELOW KNEES",
    "pct": "50%/3+2, 60%/3+2, 70%/3+2, 80%/4x1+1",
    "notes": null
   },
   {
    "name": "POWER CLEAN + FRONT SQUAT + SPLIT JERK",
    "pct": "50%/2+2+2, 60%/2+2+2, 70%/1+2+1, 80%/5x1+2+1",
    "notes": null
   },
   {
    "name": "BACK SQUAT",
    "pct": "70%/3, 80%/3, 90%/4x1",
    "notes": null
   }
  ]
 },
 {
  "n": 26,
  "desc": "Segundo día octava semana de entrenamiento",
  "ex": [
   {
    "name": "MUSCLE SNATCH",
    "pct": "50%/2x3, 60%/3, 70%/2, 80%/4x2",
    "notes": null
   },
   {
    "name": "POWER SNATCH ON BLOCKS + SNATCH ON BLOCKS",
    "pct": "50%/2x3+2, 60%/3+2, 70%/3+2, 80%/5x2+1",
    "notes": null
   },
   {
    "name": "POWER CLEAN + CLEAN + JERK",
    "pct": "50%/2x3+2+1, 60%/3+2+1, 70%/4x3+2+1, 80%/5x1+2+1",
    "notes": null
   },
   {
    "name": "SNATCH PULL",
    "pct": "70%/3, 80%/2, 85%/4x2",
    "notes": null
   }
  ]
 },
 {
  "n": 27,
  "desc": "Tercer día octava semana de entrenamiento",
  "ex": [
   {
    "name": "SLOW POWER SNATCH",
    "pct": "50%/2x4, 60%/3, 70%/4x3",
    "notes": null
   },
   {
    "name": "SNATCH",
    "pct": "50%/2x3, 60%/3, 70%/2, 75%/2, 80%/2x1, 85%/1",
    "notes": "Si estamos con buenas sensaciones podemos subir, siempre con control y movimientos fluidos"
   },
   {
    "name": "CLEAN & JERK",
    "pct": "50%/2x3, 60%/3, 70%/3, 80%/5x2",
    "notes": "Si estamos con buenas sensaciones podemos subir, siempre con control y movimientos fluidos"
   },
   {
    "name": "BACK SQUAT",
    "pct": "60%/4, 70%/4, 80%/3, 90%/4x1",
    "notes": null
   }
  ]
 },
 {
  "n": 28,
  "desc": "Primer día novena semana de entrenamiento",
  "ex": [
   {
    "name": "POWER SNATCH NO JUMP",
    "pct": "50%/3, 60%/3, 70%/4x3",
    "notes": null
   },
   {
    "name": "SNATCH PULL + SNATCH",
    "pct": "50%/3+2, 60%/3+2, 70%/3+2, 80%/5x2+1",
    "notes": null
   },
   {
    "name": "POWER CLEAN + PUSH JERK + SPLIT JERK",
    "pct": "50%/2+2+2, 60%/2+2+2, 70%/1+2+1, 80%/5x1+2+1",
    "notes": null
   },
   {
    "name": "BACK SQUAT",
    "pct": "70%/3, 80%/3, 85%/2, 90%/2",
    "notes": null
   }
  ]
 },
 {
  "n": 29,
  "desc": "Segundo día novena semana de entrenamiento",
  "ex": [
   {
    "name": "HANG POWER SNATCH BELOW KNEES",
    "pct": "50%/2x3, 60%/3, 70%/2, 75%/4x2",
    "notes": "Parar 3\" en posición de debajo de rodillas"
   },
   {
    "name": "SNATCH ON BLOCKS + SNATCH PULL ON BLOCKS + SNATCH",
    "pct": "50%/2x2+3+2, 60%/2+3+2, 70%/2+3+2, 80%/5x1+2+1",
    "notes": null
   },
   {
    "name": "HANG CLEAN ABOVE KNEES + FRONT SQUAT + JERK",
    "pct": "50%/2x3+2+1, 60%/3+2+1, 70%/4x3+2+1, 80%/5x1+2+1",
    "notes": null
   },
   {
    "name": "CLEAN PULL",
    "pct": "85%/3, 90%/3, 100%/5x2",
    "notes": null
   }
  ]
 },
 {
  "n": 30,
  "desc": "Tercer día novena semana de entrenamiento",
  "ex": [
   {
    "name": "POWER SNATCH 3 TIMES",
    "pct": "50%/2x4, 60%/3, 70%/4x3",
    "notes": null
   },
   {
    "name": "SNATCH",
    "pct": "50%/2x3, 60%/3, 70%/2, 75%/2, 80%/2x1, 85%/1",
    "notes": "Si estamos con buenas sensaciones podemos subir, siempre con control y movimientos fluidos"
   },
   {
    "name": "POWER CLEAN + SPLIT JERK",
    "pct": "50%/2x3, 60%/3, 70%/3, 80%/5x2",
    "notes": null
   },
   {
    "name": "BACK SQUAT",
    "pct": "60%/4, 70%/4, 80%/3, 90%/2x2",
    "notes": null
   }
  ]
 },
 {
  "n": 31,
  "desc": "Primer día décima semana de entrenamiento",
  "ex": [
   {
    "name": "POWER SNATCH 3 TIMES",
    "pct": "50%/3, 60%/3, 65%/4x3",
    "notes": "Pos.1 bajo rodillas, pos.2 encima rodillas, pos.3 encima del pubis"
   },
   {
    "name": "POWER SNATCH + HANG SNATCH ABOVE KNEES",
    "pct": "50%/3+2, 60%/3+2, 70%/2+1, 80%/3x1+1",
    "notes": null
   },
   {
    "name": "CLEAN + FRONT SQUAT + SPLIT JERK",
    "pct": "50%/2+2+2, 60%/2+2+2, 70%/2x1+2+1, 80%/3x1+1+1",
    "notes": null
   },
   {
    "name": "CLEAN PULL",
    "pct": "70%/3, 80%/3, 85%/3, 90%/3x3",
    "notes": null
   }
  ]
 },
 {
  "n": 32,
  "desc": "Segundo día décima semana de entrenamiento",
  "ex": [
   {
    "name": "SLOW POWER SNATCH",
    "pct": "50%/2x3, 60%/3, 70%/3x2",
    "notes": null
   },
   {
    "name": "POWER SNATCH + HANG SNATCH ABOVE KNEES + SNATCH",
    "pct": "50%/2x2+3+2, 60%/2+3+2, 70%/2+3+2, 80%/5x1+2+1",
    "notes": null
   },
   {
    "name": "HANG CLEAN ABOVE KNEES + FRONT SQUAT + JERK",
    "pct": "50%/2x1+2+1, 60%/1+2+1, 70%/1+2+1, 80%/5x1+1+1",
    "notes": "Si buenas sensaciones: subir en últimas rondas"
   },
   {
    "name": "BACK SQUAT",
    "pct": "75%/3, 85%/3, 90%/5x2",
    "notes": null
   }
  ]
 },
 {
  "n": 33,
  "desc": "Tercer día décima semana de entrenamiento",
  "ex": [
   {
    "name": "POWER SNATCH BELOW KNEES",
    "pct": "50%/2x4, 60%/3, 70%/3x3",
    "notes": "Parar 3\" en zona debajo de rodillas — calentamiento para buscar máximo en Snatch"
   },
   {
    "name": "SNATCH",
    "pct": "50%/2x3, 60%/3, 70%/2, 75%/2, 80%/2x1, 85%/2x1, 90%/1",
    "notes": "Si buenas sensaciones podemos subir, siempre con control y movimientos fluidos"
   },
   {
    "name": "CLEAN & JERK",
    "pct": "50%/2x3, 60%/3, 70%/3, 80%/2, 85%/2x1, 90%/2x1",
    "notes": null
   },
   {
    "name": "BACK SQUAT",
    "pct": "60%/4, 70%/4, 80%/3, 90%/4x2",
    "notes": null
   }
  ]
 },
 {
  "n": 34,
  "desc": "Primer día undécima semana de entrenamiento",
  "ex": [
   {
    "name": "SNATCH 3 TIMES",
    "pct": "50%/3, 60%/3, 65%/4x3",
    "notes": "Pos.1 bajo rodillas, pos.2 encima rodillas, pos.3 encima del pubis"
   },
   {
    "name": "SNATCH + HANG SNATCH ABOVE KNEES",
    "pct": "50%/3+2, 60%/3+2, 70%/2+1, 80%/3x1+1",
    "notes": null
   },
   {
    "name": "POWER CLEAN + FRONT SQUAT + SPLIT JERK",
    "pct": "50%/2+2+2, 60%/2+2+2, 70%/2x1+2+1, 80%/3x1+1+1",
    "notes": null
   },
   {
    "name": "SNATCH PULL",
    "pct": "70%/3, 80%/3, 85%/3, 90%/3x3",
    "notes": null
   }
  ]
 },
 {
  "n": 35,
  "desc": "Segundo día undécima semana de entrenamiento",
  "ex": [
   {
    "name": "POWER SNATCH BELOW KNEES",
    "pct": "50%/2x3, 60%/3, 70%/3x2",
    "notes": null
   },
   {
    "name": "SNATCH PULL + SNATCH + HANG SNATCH ABOVE KNEES",
    "pct": "50%/2x2+3+2, 60%/2+3+2, 70%/2+3+2, 80%/5x1+2+1",
    "notes": null
   },
   {
    "name": "CLEAN + PUSH JERK + JERK",
    "pct": "50%/2x1+2+1, 60%/1+2+1, 70%/1+2+1, 80%/5x1+1+1",
    "notes": "Si buenas sensaciones: subir en últimas rondas"
   },
   {
    "name": "BACK SQUAT",
    "pct": "75%/3, 85%/3, 90%/2x1, 95%/1",
    "notes": null
   }
  ]
 },
 {
  "n": 36,
  "desc": "Tercer día undécima semana de entrenamiento",
  "ex": [
   {
    "name": "POWER SNATCH",
    "pct": "50%/2x4, 60%/3, 70%/3x3",
    "notes": null
   },
   {
    "name": "SNATCH",
    "pct": "50%/2x3, 60%/3, 70%/2, 75%/2, 80%/2x1, 85%/2x1, 90%/3x1",
    "notes": null
   },
   {
    "name": "CLEAN & JERK",
    "pct": "50%/2x3, 60%/3, 70%/3, 80%/2, 85%/2x1, 90%/3x1",
    "notes": null
   },
   {
    "name": "BACK SQUAT",
    "pct": "60%/4, 70%/4, 80%/3, 90%/3x2",
    "notes": null
   }
  ]
 },
 {
  "n": 37,
  "desc": "Primer día doceava semana de entrenamiento",
  "ex": [
   {
    "name": "POWER SNATCH BELOW KNEES",
    "pct": "50%/3, 60%/3, 70%/2x1, 75%/5x1",
    "notes": "Aguantar en posición de debajo de rodillas 3\""
   },
   {
    "name": "HANG SNATCH ABOVE KNEES + SNATCH",
    "pct": "50%/3+2, 60%/3+2, 70%/2+1, 80%/3x1+1",
    "notes": null
   },
   {
    "name": "POWER CLEAN + PUSH JERK + BACK SPLIT JERK",
    "pct": "50%/2+2, 60%/2+2, 70%/2x1+2, 80%/3x1+1",
    "notes": null
   },
   {
    "name": "CLEAN PULL",
    "pct": "70%/3, 80%/3, 85%/3, 90%/3x3",
    "notes": null
   }
  ]
 },
 {
  "n": 38,
  "desc": "Segundo día doceava semana de entrenamiento",
  "ex": [
   {
    "name": "SLOW POWER SNATCH",
    "pct": "50%/2x3, 60%/3, 70%/3x2",
    "notes": null
   },
   {
    "name": "SNATCH PULL ON BLOCKS + SNATCH ON BLOCKS + SNATCH",
    "pct": "50%/2x2+3+2, 60%/2+3+2, 70%/2+3+2, 80%/5x1+2+1",
    "notes": "Los dos primeros ejercicios desde los bloques, el último snatch desde abajo de ellos"
   },
   {
    "name": "POWER CLEAN + HANG CLEAN + JERK",
    "pct": "50%/2x1+2+1, 60%/1+2+1, 70%/1+2+1, 80%/5x1+1+1",
    "notes": "Si buenas sensaciones: subir en últimas rondas"
   },
   {
    "name": "BACK SQUAT",
    "pct": "75%/3, 85%/3, 90%/3x2",
    "notes": null
   }
  ]
 },
 {
  "n": 39,
  "desc": "Tercer día doceava semana de entrenamiento",
  "ex": [
   {
    "name": "POWER SNATCH NO JUMP",
    "pct": "50%/2x4, 60%/3, 70%/3x3",
    "notes": null
   },
   {
    "name": "SNATCH",
    "pct": "50%/2x3, 60%/3, 70%/2, 75%/2, 80%/2x2, 85%/3x2",
    "notes": null
   },
   {
    "name": "CLEAN & JERK",
    "pct": "50%/2x3, 60%/3, 70%/3, 80%/2, 85%/2x2",
    "notes": null
   },
   {
    "name": "FRONT SQUAT",
    "pct": "60%/4, 70%/4, 80%/3, 90%/3x2",
    "notes": null
   }
  ]
 },
 {
  "n": 40,
  "desc": "Primer día treceava semana de entrenamiento",
  "ex": [
   {
    "name": "SLOW POWER SNATCH",
    "pct": "50%/3, 60%/3, 70%/2x3",
    "notes": null
   },
   {
    "name": "HANG POWER SNATCH BELOW KNEES + SNATCH ABOVE KNEES",
    "pct": "50%/3+2, 60%/3+2, 70%/3+2, 80%/3x1+2",
    "notes": null
   },
   {
    "name": "POWER CLEAN + FRONT SQUAT + SPLIT JERK",
    "pct": "50%/2+3+2, 60%/2+3+2, 70%/2x1+3+2, 80%/3x1+2+1",
    "notes": null
   },
   {
    "name": "CLEAN PULL",
    "pct": "70%/3, 80%/3, 85%/3, 90%/4x3",
    "notes": null
   }
  ]
 },
 {
  "n": 41,
  "desc": "Segundo día treceava semana de entrenamiento",
  "ex": [
   {
    "name": "SLOW SNATCH NO JUMP",
    "pct": "50%/2x3, 60%/4x3",
    "notes": null
   },
   {
    "name": "POWER SNATCH + OHS + HANG SNATCH ABOVE KNEES",
    "pct": "50%/2x2+3+2, 60%/2+3+2, 70%/2+3+2, 80%/5x1+2+1",
    "notes": null
   },
   {
    "name": "POWER CLEAN + PUSH PRESS + JERK",
    "pct": "50%/2x1+2+1, 60%/1+2+1, 70%/1+2+1, 75%/5x1+1+1",
    "notes": "El % será según la exigencia del push press, independientemente de lo que marque la programación"
   },
   {
    "name": "BACK SQUAT",
    "pct": "75%/3, 85%/3, 90%/5x2",
    "notes": null
   }
  ]
 },
 {
  "n": 42,
  "desc": "Tercer día treceava semana de entrenamiento",
  "ex": [
   {
    "name": "SNATCH PULL + SNATCH",
    "pct": "50%/2x4+2, 60%/3+2, 70%/2x3+1",
    "notes": null
   },
   {
    "name": "SNATCH",
    "pct": "70%/2, 75%/2, 80%/2x2, 85%/5x2",
    "notes": null
   },
   {
    "name": "CLEAN & JERK",
    "pct": "50%/2x3, 60%/3, 70%/3, 80%/5x2",
    "notes": null
   },
   {
    "name": "FRONT SQUAT",
    "pct": "60%/4, 70%/4, 80%/3, 85%/4x3",
    "notes": null
   }
  ]
 }
]
};

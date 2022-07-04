/* eslint-disable */

/* Начальный код для этой задачи написан с плохими практиками, такими как использования var, 
переопределение переменной и тд. Это сделано намерено чтобы разобрать работу var.
Чтобы eslint не ругался на ошибки, для этой он отключен аннотацией eslint-disable */

const createArrayOfFunctions = len => {
  [...new Array(len)].forEach(el => {
    el = function ArrayOfFunctions() {
      return el.indexof(el);
    };
  });
};

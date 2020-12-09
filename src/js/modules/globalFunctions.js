const compose = (fn1, fn2) => (...args) => fn1(fn2(...args));

export const createProcess = (...functions) => functions.reduce(compose);

export const setEventListener = eventMethod => element => eventFunction => {
  element.addEventListener(eventMethod, eventFunction)
}

export const setNotFound = () => {
  
}
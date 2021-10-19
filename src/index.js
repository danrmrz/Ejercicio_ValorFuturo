const operation = document.querySelector('#operation')
const value1 = document.querySelector('#value1')
const value2 = document.querySelector('#value2')
const value3 = document.querySelector('#value3')
const button = document.querySelector('#button')
const resultContainer = document.querySelector('#resultContainer')

// Valor Futuro
const vf = (vp, i, n) => {
  return vp * Math.pow((1 + (i / 100)), n)
}

// Valor presente
const vp = (vf, i, n) => {
  return vf / Math.pow((1 + (i / 100)), n)
}

// interés del periodo
const i = (vf, vp, n) => {
  return (Math.pow((vf / vp), (1 / n)) - 1) * 100
}

// total de periodos
const n = (vf, vp, i) => {
  return Math.log(vf / vp) / Math.log(1 + (i / 100))
}

const message = {
  'vf': 'El valor futuro es: $',
  'vp': 'El valor presente es: $',
  'i': 'El interes es de: ',
  'n': 'El numero de periodos es: ',
}

const setResult = (result) => {
  console.log(`set: ${result}`)
  resultContainer.innerHTML = `${message[operation.value]}${result}`
}

button.onclick = () => {
  switch (operation.value) {
    case 'vf':
      setResult(vf(
        parseFloat(value1.value),
        parseFloat(value2.value),
        parseFloat(value3.value)
      ).toFixed(2))
      break;

    case 'vp':
      setResult(vp(
        parseFloat(value1.value),
        parseFloat(value2.value),
        parseFloat(value3.value)
      ).toFixed(2))
      break;

    case 'i':
      setResult(i(
        parseFloat(value1.value),
        parseFloat(value2.value),
        parseFloat(value3.value)
      ).toFixed(2) + '%')
      break;

    case 'n':
      setResult(n(
        parseFloat(value1.value),
        parseFloat(value2.value),
        parseFloat(value3.value)
      ).toFixed(2))
      break;
  }
}
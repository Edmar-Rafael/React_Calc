export const keys = [
  'C', 
  '<<', 
  '%', 
  '/', 
  '7', 
  '8', 
  '9', 
  'x', 
  '4', 
  '5', 
  '6', 
  '-', 
  '1', 
  '2', 
  '3', 
  '+', 
  '=>', 
  '0', 
  '.', 
  '='
]


export function handleOperator(num: string, operator: string, num1: string) {

  switch(operator) {
    case '+': {
      return Number(num) + Number(num1)
    }
    case '-': {
      return Number(num) - Number(num1)
    }
  }
}
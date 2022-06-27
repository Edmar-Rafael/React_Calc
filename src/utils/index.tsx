export const keys = [
  '<', '%', '/', '1', '2', '3', 'x', '4', '5', '6', '-', '7', '8', '9', '+', '', '0', '.', '='
]

export function handleOperator(operator: string, num: number, num1: number) {

  switch(operator) {
    case keys[14]:
      return num + num1
      break
    case keys[10]:
      return num - num1
  }
}
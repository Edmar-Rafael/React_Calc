import React, { useState } from 'react'
import { Button, Container } from '../../components'
import { handleOperator, keys } from '../../utils'
import { 
  DisplayContainer, 
  Keyboard, 
  KeyboardContainer, 
  ScreenContainer, 
  View
} from './styles'

export type keyType = {
  id: number,
  simbol: string
}


function Display() {
  const [valor1, setValor1] = useState<string>('')

  function handleOperation(key: string) {
    setValor1(valor1 + key)
    if(key === 'C') {
      setValor1('')
    } else if(key === '<<') {
      setValor1(valor1.slice(0, -1))
    } 
  }

  return (
    <Container>
      <DisplayContainer>
        <ScreenContainer>
          <View>{handleOperator(valor1, '+', valor1)}</View>
          <View>{valor1}</View>
        </ScreenContainer>
        <KeyboardContainer>
          <Keyboard>
          { keys.map((key, index) => 
            <Button 
              onClick={() => handleOperation(key)}
              key={index}
              item={key}
            />
          )}
          </Keyboard>
        </KeyboardContainer>
      </DisplayContainer>
    </Container>
  )
}

export default Display
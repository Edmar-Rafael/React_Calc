import React, { useState } from 'react'
import { Button, Container } from '../../components'
import { keys } from '../../utils'
import { 
  DisplayContainer, 
  Keyboard, 
  KeyboardContainer, 
  ScreenContainer, 
  View
} from './styles'


function Display() {
  const [valors, setValors] = useState<number | string>('')

  function handleOperation(key: string) {
    setValors(`${valors}` + key)
  }

  return (
    <Container>
      <DisplayContainer>
        <ScreenContainer>
          <View>{valors}</View>
        </ScreenContainer>
        <KeyboardContainer>
          <Keyboard>
            <Button onClick={() => setValors('')} text={'C'}/>
          { keys.map((key, index) => 
            <Button 
              onClick={() => handleOperation(key)}
              key={index}
              text={key}
            />
          )}
          </Keyboard>
        </KeyboardContainer>
      </DisplayContainer>
    </Container>
  )
}

export default Display
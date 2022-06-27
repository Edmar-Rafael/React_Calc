import styled from "styled-components";

export const DisplayContainer = styled.form`
  width: 24%;
  padding: 10px 10px 0 10px;
  border: 2px solid #ffffff99;
  color: gray;
`

export const ScreenContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  height: 150px;
  border: 1px solid #ffffff99;
`

export const View = styled.div`
  color: white;
  font-size: 40px;
`

export const KeyboardContainer = styled.div`
  border: 1px solid white;
`

export const Keyboard = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 100%;
  padding: 10px 4px 10px 4px;
  row-gap: 10px;
  column-gap: 15px;
`

export const FunctionalButtonsContainer = styled.div`
  display: flex;
  padding: 10px 4px 10px 4px;
  column-gap: 15px;
`
// Style your elements here
import styled from 'styled-components'

export const MainContainer = styled.div`
  background-color: #24263c;
  background-size: cover;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #475569;
  padding: 8rem;
  border-radius: 1rem;
`
export const Title = styled.h1`
  color: #ffffff;
  font-family: 'Roboto';
`
export const Description = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
`
export const Input = styled.input`
  margin-top: 8rem;
  background-color: #edeeff;
  padding: 10px;
  border: 0px solid transparent;
`
export const ErrorMsg = styled.p`
  color: #ef4444;
  font-family: 'Roboto';
`

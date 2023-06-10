// Write your code here
import {useState} from 'react'
import {
  MainContainer,
  CardContainer,
  Title,
  Description,
  Input,
  ErrorMsg,
} from './styledComponents'

const PasswordValidator = () => {
  const [password, setPassword] = useState('')
  const onInput = e => {
    setPassword(e.target.value)
  }
  const isValid = password.length >= 8

  return (
    <MainContainer>
      <CardContainer>
        <Title>Password Validator</Title>
        <Description>Check how strong and secure is your password</Description>
        <Input type="password" onChange={onInput} />
        {isValid ? null : (
          <ErrorMsg>Your password must be at least 8 characters</ErrorMsg>
        )}
      </CardContainer>
    </MainContainer>
  )
}
export default PasswordValidator

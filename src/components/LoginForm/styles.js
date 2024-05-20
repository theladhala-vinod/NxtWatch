import styled from 'styled-components'

export const LoginForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: ${props => props.bgColor};
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 350px;
  background-color: ${props => props.bgColor};
  padding: 64px 16px;
  box-shadow: 1px 1px 1px 1px grey, -1px -1px 1px 1px grey;
`

export const Logo = styled.img`
  width: 180px;
  align-self: center;
  margin: 32px 0;
`

export const Label = styled.label`
  font-size: 12px;
  font-weight: 600;
  margin-bottom: 6px;
  color: ${props => props.color};
`

export const Input = styled.input`
  color: black;
  padding: 6px;
  margin-bottom: 12px;
`

export const ShowPassword = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`

export const ShowPasswordLabel = styled.label`
  font-size: 14px;
  color: ${props => props.color};
`
export const ShowPasswordInput = styled.input`
  margin-right: 6px;
`

export const LoginButton = styled.button`
  border: none;
  outline: none;
  border-radius: 8px;
  color: #ffffff;
  background-color: blue;
  padding: 8px;
  margin: 12px 0;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
`

export const ErrorMessage = styled.p`
  color: red;
  font-size: 12px;
  font-weight: 600;
`

import {useState} from 'react'
import {
  MainContainer,
  NameInput,
  MsgContent,
  NameText,
} from './styledComponents'

const GreetUser = () => {
  const [name, setName] = useState('')

  const changeName = event => {
    setName(event.target.value)
  }

  return (
    <MainContainer>
      <NameInput
        value={name}
        onChange={changeName}
        type="text"
        placeholder="Your name"
      />
      <MsgContent>
        Hello <NameText>{name}</NameText>
      </MsgContent>
    </MainContainer>
  )
}

export default GreetUser

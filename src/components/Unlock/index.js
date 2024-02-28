import {useState} from 'react'

import {MainContainer, Heading, Button, ImageElement} from './styledComponents'

const Unlock = () => {
  const [currentState, updateState] = useState(true)

  const changeState = () => {
    updateState(prev => !prev)
  }

  const imageUrl = currentState
    ? 'https://assets.ccbp.in/frontend/hooks/lock-img.png'
    : 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'
  const altText = currentState ? 'lock' : 'unlock'
  const text = currentState
    ? 'Your Device is Locked'
    : 'Your Device is Unlocked'
  const btnText = !currentState ? 'Lock' : 'Unlock'

  return (
    <MainContainer>
      <ImageElement src={imageUrl} alt={altText} />
      <Heading>{text}</Heading>
      <Button onClick={changeState}>{btnText}</Button>
    </MainContainer>
  )
}
export default Unlock

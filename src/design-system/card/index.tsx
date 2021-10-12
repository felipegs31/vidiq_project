import { Container, Image, TextContainer } from './styles'

interface Props {
  imageUrl: string
  text: string
}

function Card({imageUrl, text}: Props) {
  return (
    <Container>
      <Image src={imageUrl}/>
      <TextContainer>
        {text}
      </TextContainer>
    </Container>
  );
}
  
export default Card;

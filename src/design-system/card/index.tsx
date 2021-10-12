import { Container, Image, TextContainer } from './styles'

interface Props {
  imageUrl?: string
  text?: string
}

function Card({imageUrl, text}: Props) {
  return (
    <Container>
      <Image src="https://via.placeholder.com/600/92c952"/>
      <TextContainer>
        accusamus beatae ad facilis cum similique qui sunt
      </TextContainer>
    </Container>
  );
}
  
export default Card;

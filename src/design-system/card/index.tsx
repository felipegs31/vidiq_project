import { Photo } from 'modules/photos/models/photo';
import { Container, Image, TextContainer } from './styles'
import StarIcon from '@material-ui/icons/Star';
interface Props {
  photo: Photo
  hadleSelectCard: CallableFunction
}

function Card({photo, hadleSelectCard}: Props) {
  return (
    <Container >
      <Image src={photo.url}/>
      <TextContainer onClick={() => hadleSelectCard(photo)}>
        {photo.favorite && <StarIcon />}
        {photo.title}
      </TextContainer>
    </Container>
  );
}
  
export default Card;

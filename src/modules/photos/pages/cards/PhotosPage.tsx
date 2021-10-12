import Card from 'design-system/card';
import TabNavigator from 'design-system/tab';
import { CardsContainer } from './styles';

function PhotosPage() {
  

  return (
    <>
      <TabNavigator />
      <CardsContainer>
        <Card />
      </CardsContainer>
    </>
  );
}
  
export default PhotosPage;
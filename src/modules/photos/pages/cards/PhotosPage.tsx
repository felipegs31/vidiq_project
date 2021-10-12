import { IApplicationState } from 'common/state/ducks';
import Card from 'design-system/card';
import TabNavigator from 'design-system/tab';
import { useDispatch, useSelector } from 'react-redux';
import { CardsContainer } from './styles';
import * as actions from '../../state/actions'
import { EPhotoTabs } from 'modules/photos/models/EPhotoTabs';

function PhotosPage() {
  const dispatch = useDispatch()
  const selectedTab = useSelector((state: IApplicationState) => state.photos.tab)

  const hadleSelectTab = (newTab: EPhotoTabs) => {
    dispatch(actions.setTabPhotos(newTab))
  }

  return (
    <>
      <TabNavigator selectedTab={selectedTab} hadleSelectTab={hadleSelectTab}/>
      <CardsContainer>
        <Card />
      </CardsContainer>
    </>
  );
}
  
export default PhotosPage;
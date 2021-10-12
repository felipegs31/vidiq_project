import { IApplicationState } from 'common/state/ducks';
import Card from 'design-system/card';
import TabNavigator from 'design-system/tab';
import { useDispatch, useSelector } from 'react-redux';
import { CardsContainer } from './styles';
import * as actions from '../../state/actions'
import { EPhotoTabs } from 'modules/photos/models/EPhotoTabs';
import { useEffect } from 'react';
import { isEmpty } from 'lodash'
import CircularProgress from '@material-ui/core/CircularProgress';
function PhotosPage() {
  const dispatch = useDispatch()
  const selectedTab = useSelector((state: IApplicationState) => state.photos.tab)
  const photos = useSelector((state: IApplicationState) => state.photos.photos)
  const loading = useSelector((state: IApplicationState) => state.photos.loading)
  const errors = useSelector((state: IApplicationState) => state.photos.errors)

  const hadleSelectTab = (newTab: EPhotoTabs) => {
    dispatch(actions.setTabPhotos(newTab))
  }

  useEffect(() => {
    dispatch(actions.fetchPhotos())
  }, [])

  const renderPhotos = () => {
    return !errors ? 
      !isEmpty(photos) && photos.map(photo => <Card key={photo.id} imageUrl={photo.url} text={photo.title}/> ) :
      <div>Error, try again</div>
  }

  return (
    <>
      <TabNavigator selectedTab={selectedTab} hadleSelectTab={hadleSelectTab}/>
      <CardsContainer>
        {loading ? <CircularProgress /> : renderPhotos() }
      </CardsContainer>
    </>
  );
}
  
export default PhotosPage;
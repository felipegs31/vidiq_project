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
import { Photo } from 'modules/photos/models/photo';
import Button from '@material-ui/core/Button';

function PhotosPage() {
  const dispatch = useDispatch()
  const selectedTab = useSelector((state: IApplicationState) => state.photos.tab)
  const photos = useSelector((state: IApplicationState) => state.photos.photos)
  const loading = useSelector((state: IApplicationState) => state.photos.loading)
  const errors = useSelector((state: IApplicationState) => state.photos.errors)
  const favorites = useSelector((state: IApplicationState) => state.photos.favorites)
  const loadingNextPage = useSelector((state: IApplicationState) => state.photos.loadingNextPage)



  const hadleSelectTab = (newTab: EPhotoTabs) => {
    dispatch(actions.setTabPhotos(newTab))
  }

  const hadleSelectCard = (photo: Photo) => {
    dispatch(actions.toggleFavorite(photo))
  }

  useEffect(() => {
    dispatch(actions.fetchPhotos())
  }, [dispatch])

  const renderPhotos = () => {
    return !errors ?
      !isEmpty(photos) && photos.map(photo => <Card key={photo.id} photo={photo} hadleSelectCard={hadleSelectCard} />) :
      <div>Error, try again</div>
  }

  const renderFavorites = () => {
    return !isEmpty(favorites) &&
      Object.keys(favorites).map(key => <Card key={favorites[key].id} photo={favorites[key]} hadleSelectCard={hadleSelectCard} />)
  }

  const loadMore = () => {
    dispatch(actions.nextPagePhotos())
  }

  return (
    <>
      <TabNavigator selectedTab={selectedTab} hadleSelectTab={hadleSelectTab} />
      {selectedTab === EPhotoTabs.ALL &&
        <>
          <CardsContainer>
            {loading ? <CircularProgress /> : renderPhotos()}
          </CardsContainer>
          <Button variant="outlined" color="primary" onClick={loadMore} disabled={loadingNextPage}>
            Load More
          </Button>
        </>
      }
      {selectedTab === EPhotoTabs.FAVORITES && <CardsContainer>
        {renderFavorites()}
      </CardsContainer>}
    </>
  );
}

export default PhotosPage;
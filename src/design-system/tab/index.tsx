import { ChangeEvent, useState } from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Container } from './styles';
import { EPhotoTabs } from 'modules/photos/models/EPhotoTabs';

interface Props {
  selectedTab: EPhotoTabs,
  hadleSelectTab: CallableFunction
}

function TabNavigator({selectedTab, hadleSelectTab}: Props) {

  const handleChange = (event: ChangeEvent<{}>, newValue: EPhotoTabs) => {
    hadleSelectTab(newValue);
  };

  return (
    <Container>
      <Tabs
        value={selectedTab}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleChange}
        aria-label="disabled tabs example"
        variant="fullWidth"
      >
        <Tab label={EPhotoTabs.ALL} value={EPhotoTabs.ALL}/>
        <Tab label={EPhotoTabs.FAVORITES} value={EPhotoTabs.FAVORITES}/>
      </Tabs>
    </Container>
  );
}

export default TabNavigator;

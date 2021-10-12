import { ChangeEvent, useState } from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Container } from './styles';

function TabNavigator() {
  const [value, setValue] = useState(2);

  const handleChange = (event: ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Container>
      <Tabs
        value={value}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleChange}
        aria-label="disabled tabs example"
        variant="fullWidth"
      >
        <Tab label="All" />
        <Tab label="Favorites" />
      </Tabs>
    </Container>
  );
}

export default TabNavigator;

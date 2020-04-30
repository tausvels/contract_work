import React, { useState } from 'react';
import { Menu } from 'semantic-ui-react';

const Header = () => {
  const [currentPage, setCurrentPage] = useState({
    activeItem: 'home',
  });
  const handleItemClick = (e, {name}) => setCurrentPage((currentPage) => ({...currentPage, activeItem: name}));
  return (
    <div>
        <Menu pointing secondary>
          <Menu.Item
            name='home'
            active={currentPage.activeItem === 'home'}
            onClick={handleItemClick}
          />
          <Menu.Item
            name='Products'
            active={currentPage.activeItem === 'messages'}
            onClick={handleItemClick}
          />
          <Menu.Item
            name='Orders'
            active={currentPage.activeItem === 'friends'}
            onClick={handleItemClick}
          />
          <Menu.Menu position='right'>
            <Menu.Item
              name='logout'
              active={currentPage.activeItem === 'logout'}
              onClick={handleItemClick}
            />
          </Menu.Menu>
        </Menu>      
    </div>
  );
};

export default Header;
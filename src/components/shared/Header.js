import React, { useState } from 'react'
import { Menu } from 'semantic-ui-react'
import { useHistory } from "react-router-dom"

export const Header = () => {
  const [activeItem, setActiveItem] = useState(window.location.pathname.split("/")[1])
  const history = useHistory()

  const handleItemClick = (e) => {
    if(e !== "logout"){
      setActiveItem(e)
      history.push(`/${e}`)
    }else{
      localStorage.removeItem("authToken")
      window.location.href = "/"
    }  
      
}

    return (
      <div>
        <Menu pointing>
          <Menu.Item
            name='restaurants'
            active={activeItem === 'restaurants'}
            onClick={() => handleItemClick("restaurants")}
          />
          <Menu.Item
            name='pastOrders'
            active={activeItem === 'pastOrders'}
            onClick={() => handleItemClick("pastOrders")}
          />
          <Menu.Item
            name='userPage'
            active={activeItem === 'userPage'}
            onClick={() => handleItemClick("userPage")}
          />
          {
            localStorage.getItem("authToken") &&
            <Menu.Item
            name='logout'
            onClick={() => handleItemClick("logout")}
          />
          }
        </Menu>
      </div>
    )
}
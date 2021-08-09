import React, {useEffect, useState} from "react"
import '../../Styles/Footer.css'

import PeopleIcon from '@material-ui/icons/People';
import RoomIcon from '@material-ui/icons/Room';

function Footer() {

    const [followers, setFollowers] = useState(0)
    const [location, setLocation] = useState('')

    useEffect(() => {
        async function date(){
            const res  = await fetch('https://api.github.com/users/DutraGames')
            const data = await res.json()
            setFollowers(data.followers)
            setLocation(data.location)
        }

        date()
    }, [])

  return (
      <footer className="footer">
          <div className="line">
              <PeopleIcon style={{margin:'5px'}}/>
              {followers}
          </div>

          <div className="line">
              <RoomIcon style={{margin:'5px'}}/>
              {location}
          </div>
      </footer>
  );
}

export default Footer

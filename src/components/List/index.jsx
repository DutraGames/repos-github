import React, {useEffect, useState} from "react"
import '../../Styles/List.css'

import StarIcon from '@material-ui/icons/Star';

function List() {

    const [repos, setRepos] = useState([])
    const [favorite, setFavorite] = useState([])


    useEffect(() => {
        async function Repos(){
            const res  = await fetch('https://api.github.com/users/DutraGames/repos')
            const data = await res.json()
            setRepos(data)
        
    }  
    Repos()
    }, [])

  return (
      <div>
          <ul className="lista">
              {repos.map(repo =>(
                  <li className="listar" key={repo.id}><a href={repo.html_url}>{repo.name}</a></li>
              ))}
          </ul>
      </div>
  );
}

export default List

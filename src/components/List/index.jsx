import React, {useEffect, useState} from "react"
import '../../Styles/List.css'

import GitHubIcon from '@material-ui/icons/GitHub';

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
                  <li className="listar" key={repo.id}><GitHubIcon style={{margin:'5px'}} /> <a href={repo.html_url}>{repo.name}</a></li>
              ))}
          </ul>
      </div>
  );
}

export default List

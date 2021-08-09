import React, {useEffect, useState} from "react"
import '../../Styles/Header.css'

function Header() {

    const [img, setImg] = useState('')
    const [name, setName] = useState('')
    const [youtube, setYoutube] = useState('')

    useEffect(() => {
        async function date(){
            const res  = await fetch('https://api.github.com/users/DutraGames')
            const data = await res.json()
            setImg(data.avatar_url)
            setName(data.name)
            setYoutube(data.blog)
        }

        date()
    }, [])

  return (
    <header className="header">
        <div className="organization">
            <a href="https://github.com/DutraGames">
                <img src={img} alt="imagem_perfil" />
            </a>
            <h1>{name}</h1>
        </div>

        <div className="organization">
            <a href={youtube}>
                <img src="https://cdn.icon-icons.com/icons2/2429/PNG/512/youtube_logo_icon_147199.png" alt="youtube" />
            </a>
        </div>

    </header>
  );
}

export default Header

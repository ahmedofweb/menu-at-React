import { useState } from 'react'
import { useFetch } from '../hooks/useFetch'
import Buttons from '../components/Buttons'

const MenuCard = () => {
    const [url , setUrl] = useState('http://localhost:3000/menu')
    const {data , error , loading} = useFetch(url)
    if(loading) return console.log("loading...")
    if(error) return console.log(error)
    console.log(data && data)

    return (
        <div>
            <Buttons setUrl={setUrl} url={url}/>
            <div className='section-center'>
            {data && data.map((item) => {
                return(
                    <div className='menu-item' key={item.id}>
                        <img className='photo' src={item.img} alt="" />
                        <div className='item-info'>
                            <header>
                               <h4>{item.title}</h4>
                               <span className='price'>{item.price}</span>
                            </header>
                            <p>{item.desc}</p>

                        </div>
                    </div>
                )
            })}
        </div>
        </div>
    )
}

export default MenuCard
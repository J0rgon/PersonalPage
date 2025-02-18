import { useState } from 'react';
import style from './YearSelector.module.css';

function YearSelector(){
    //const [years, setYears] = useState([]);
    const [years, setYears] = useState([2021, 2023, 2024, 2025]);
    const [current, setCurrent] = useState();
    const [image, setImage] = useState('https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.ZqFoJ_BheNFnhigVH7ttGwHaFk%26pid%3DApi&sp=1739909264Tf45bac0103f8774860baa7a398d9a5874ac4b3616f595c82042794462a14a818');
    const [content, setContent] = useState('Sepultura es una banda brasileña de thrash metal formada en 1984 en Belo Horizonte por los hermanos Max (guitarra y voz) e Igor Cavalera (batería).1​ Está considerado por varias publicaciones como el grupo de heavy metal más exitoso de Brasil y uno de los más influyentes de dicho género en todo el mundo,​ aunque su música se orientaría originalmente al thrash, death y groove metal y posteriormente al hardcore, metal alternativo, nu metal y metal industrial.5​');
    //const sampleYears = [2021, 2023, 2024, 2025];
    return (
        <>
            <select className={style.selector} onChange={choice => setCurrent(choice.target.value)}>
                {
                    years && years.map(
                        year => <option value={year} key={year}>{year}</option>
                    )
                }
            </select>
            {image && <img src={image}/>}
            {content && <p>{content}</p>}
        </>
    );
}

export default YearSelector;
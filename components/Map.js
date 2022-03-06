import mapboxgl from "mapbox-gl"
import { useEffect } from 'react'


const style ={
    wrapper: `flex h-full w-full`
}


mapboxgl.accessToken = 'pk.eyJ1IjoiaGFycmllbWJ1cnUiLCJhIjoiY2t1bGV4Y3U0MDN0czMxcDExaDlyczJkZiJ9.VMxtawq88DKNoIr2pTyBdw';

console.log()

// console.log(mapboxgl.accessToken)
const Map = () => {
    useEffect(() => {
        const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/harriemburu/ckulfewgp0e8518piagekr6ma',
            center:[1.2860, 36.8258],
            zoom: 3,

        });

    }, [])
  return <div className={style.wrapper} id='map'/>
}

export default Map
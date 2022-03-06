import mapboxgl from "mapbox-gl"
import { useEffect } from 'react'


const style ={
    wrapper: `flex h-full w-full`
}


mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN

// console.log(mapboxgl.accessToken)
const Map = () => {
    useEffect(() => {
        const map = new mapboxgl.Map({
            container: 'map',
            style:'mapbox://styles/harriemburu/ckulfewgp0e8518piagekr6ma',
            center:[1.2860, 36.8258],
            zoom: 3,

        })
    }, [])
  return <div className={style.wrapper} id='map'/>
}

export default Map
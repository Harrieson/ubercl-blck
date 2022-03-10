import {useState} from 'react'


const style ={
    wrapper: `pt-2`,
    searchHeader: `w-full font-bold text-left flex items-center text-3xl p-4 overflow-hidden`,
    inputBoxes: `flex flex-col mb-4 relatiive`,
    inputBox: `h-10 mx-4 border-2 bg=[#000000] flex items-center my-1 py-1 px-2`,
    focusedInputBox:`border-black`,
    input: `my-2 rounded-2 p-2 outline-none border-none bg-transparent h-full w-full`,
    svgContainer: `mx-1`,
    verticalLine: `w-0 b-[2rem] border-black border absolute z-10 left-[2.3rem] top-[2rem]`,

}
const LocationSelector = () => {
    const [inFocus, setInFocus]= useState('from')
  return (
    <div className={style.wrapper}>
        <div className={style.searchHeader}>
            {inFocus === 'from' ? 'Where can we pick you?' : "Where to?"}
        </div>
        <div className={style.inputBoxes}>
          <div className={`${style.inputBox} ${inFocus === 'from' && style.focusedInputBox}`} >
            <div></div>
          </div></div>
    </div>
  )
}

export default LocationSelector
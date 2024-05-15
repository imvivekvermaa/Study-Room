import { useRef } from 'react';
import { RiSendPlaneFill } from 'react-icons/ri'

function InputBox() {
    const dataRef: React.MutableRefObject<any>= useRef()

    function handleSubmit(event: any){
        event.preventDefault();
        console.log()
      }
  return (
    <form onSubmit={handleSubmit}
    id="inputbox"
    className="w-[44vw] h-10 my-1 mx-1.5 border rounded-lg flex items-center p-2 flex justify-between">

        <input ref={dataRef} id="input" type='text' className=" w-[40vw] pl-1 bg-transparent focus:outline-none"/>
        <button  className="focus:outline-none">
        <RiSendPlaneFill className="self-center text-xl text-green-500" />
        </button>
      
  </form >

  )
}

export default InputBox
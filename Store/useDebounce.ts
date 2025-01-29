import { useEffect, useState } from "react";


function useDebounce<T>(Value: T, delay?:number):T{

    const [debouncedValue, setDebouncedValue]=useState<T>(Value);

useEffect(()=>{

    const timer =setTimeout(()=>{
        setDebouncedValue(Value)
    },delay||500);

    return ()=>{
        clearTimeout(timer)
    }


},[Value, delay])

return debouncedValue

}


export default useDebounce
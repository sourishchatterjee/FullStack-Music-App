"use client"
import qs from "query-string"

import useDebounce from "@/Store/useDebounce"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { title } from "process"
import  Input  from "./Input"


function SearchInput() {

    const router= useRouter();
    const [value,setValue] = useState<string>('');
    const debouncedValue= useDebounce<string>(value,500);

useEffect(()=>{
  
    const query ={
        title: debouncedValue,
    };
    const url =qs.stringifyUrl({
        url:'/search',
        query: query
    });
     router.push(url);


},[debouncedValue, router])



  return (
<Input
placeholder=" listen to the newest songs!"
value={value}
onChange={(e)=>setValue(e.target.value)}

/>
  )
}

export default SearchInput
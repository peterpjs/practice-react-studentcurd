import {useCallback, useState} from "react";

export default function useFetch(reqObj,cb){
    const [data,setData]=useState([]);
    const [loading,setLoading]=useState(false);
    const [error,setError]=useState(null);

    const fetchData= useCallback(async (body)=>{
        try{
            setLoading(true);
            setError(null);
            const res=await fetch('http://localhost:1337/api/'+reqObj.url, {
                method: reqObj.method || 'get',
                headers:{"Content-type":"application/json"},
                body:body?JSON.stringify({data:body}):null});
            if(res.ok){
                const data=await res.json();
                setData(data.data);
                cb&&cb() ;
            }else {
                throw new Error('数据加载失败！');
            }
        }catch (e){
            setError(e);
        }finally {
            setLoading(false);
        }
    },[]);
    return {loading,error,data,fetchData}
}

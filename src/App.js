import React, {useCallback, useEffect, useState} from 'react';
import './App.css'
import StudentList from './components/StudentList'
import StuContext from './store/StuContext'
import useFetch from "./hooks/useFetch";
import {useGetStudentsQuery} from "./store/studentApi";
const App = () => {
    // const {data:stuData,loading,error,fetchData}=useFetch({
    //     url:'students '
    // });
    //
    // useEffect(()=>{
    //     fetchData();
    // },[]);
    // const loadDataHandler=()=>{
    //     fetchData();
    // }
    // return (
    //     <StuContext.Provider value={{fetchData}}>
    //         <div className="app">
    //             <button onClick={loadDataHandler}>加载数据</button>
    //             {(!loading&&!error)&&<StudentList stus={stuData}/>}
    //             {loading&&<p>数据加载中！</p>}
    //             {error&&<p>数据加载异常！</p>}
    //         </div>
    //     </StuContext.Provider>
    //
    // );
    /**
    currentData:undefined //当前参数的最新数据
    data:undefined //最新数据
    isError:false //布尔值，是否有错误
    error:Error() //对象，有错误时才存在
    isFetching:true //布尔值，数据是否在加载
    isLoading:true  //布尔值，数据是否第一次加载
    isSuccess:false //布尔值，请求是否成功
    isUninitialized:false //布尔值，请求是否还没有开始发送
    refetch:f() //一个函数，用来重新加载数据
    status:"pending" //字符串，请求的状态
     */
    const {data:stus,isSuccess,isLoading,refetch }=useGetStudentsQuery();
    return (
        <div>
            <button onClick={()=>refetch()}>refresh</button>
            {isLoading&&<p>>数据加载中</p>}
            {isSuccess&&<StudentList stus={stus}/>}
        </div>
    )
};

export default App;

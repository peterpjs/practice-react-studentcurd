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

    const {data:stus,isSuccess,isLoading}=useGetStudentsQuery();
    return (
        <div>
            {isLoading&&<p>>数据加载中</p>}
            {isSuccess&&<StudentList stus={stus}/>}
        </div>
    )
};

export default App;

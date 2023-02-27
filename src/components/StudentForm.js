import React, {useCallback, useContext, useEffect, useState} from 'react';
import StuContext from "../store/StuContext";
import useFetch from "../hooks/useFetch";
import {useGetStudentByIdQuery} from "../store/studentApi";

const StudentForm = (props) => {
    const {data:stuData,isSuccess}=useGetStudentByIdQuery(props.stuId)

    const [inputData,setInputData]=useState({
        name:'',
        age:'',
        gender:'男',
        address:''
    });

    useEffect(()=>{
        if(isSuccess){
            setInputData(stuData.attributes)
        }
    },[isSuccess])
    // const ctx=useContext(StuContext);

    // const {loading,error,fetchData:updateStudent}=useFetch({
    //     url:props.stu?`students/${props.stu.id}`:"students",
    //     method:props.stu?'put':'post',
    // },ctx.fetchData);

    const nameChangeHandler=(e)=>{
        setInputData(prevState => ({...prevState,name:e.target.value}));
    }
    const ageChangeHandler=(e)=>{
        setInputData(prevState => ({...prevState,age:+e.target.value}));
    }
    const genderChangeHandler=(e)=>{
        setInputData(prevState => ({...prevState,gender:e.target.value}));
    }
    const addressChangeHandler=(e)=>{
        setInputData(prevState => ({...prevState,address:e.target.value}));
    }
    const submitHandler=()=>{
        // updateStudent(inputData);
    }
    const updateHandler=()=>{
        // updateStudent(inputData);

    }
    return (
        <>
            <tr className="student-form">
                <td><input type="text" onChange={nameChangeHandler} value={inputData.name}/></td>
                <td>
                    <select  onChange={genderChangeHandler} value={inputData.gender}>
                        <option value="男">男</option>
                        <option value="女">女</option>
                    </select>
                </td>
                <td><input onChange={ageChangeHandler} value={inputData.age} type="text"/></td>
                <td><input onChange={addressChangeHandler}  value={inputData.address} type="text"/></td>

                <td>
                    {props.stuId&& <>
                    <button onClick={()=>props.onCancel()}>取消</button>
                    <button onClick={updateHandler}>确认</button>
                </>
                }
                    {!props.stuId&&<button onClick={submitHandler}>添加</button>} </td>
            </tr>


            {/*{loading&&<tr><td colSpan={5}>添加中...</td></tr>}*/}
            {/*{error&&<tr><td colSpan={5}>添加失败...</td></tr>}*/}
        </>

    );
};

export default StudentForm;

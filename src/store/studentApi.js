import {createApi} from "@reduxjs/toolkit/dist/query/react"
import {fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
const studentApi=createApi({
    reducerPath:'studentApi',
    baseQuery:fetchBaseQuery({
        baseUrl:"http://localhost:1337/api/"
    }),
    endpoints(build) {
        return {
            getStudents:build.query({
                query() {
                    return 'students'
                },
                transformResponse(baseQueryReturnValue, meta, arg) {
                    return baseQueryReturnValue.data;
                }
            }),
            getStudentById:build.query({
                query(id) {
                    return `students/${id}`;
                },
                transformResponse(baseQueryReturnValue, meta, arg) {
                    return baseQueryReturnValue.data;
                },
                keepUnusedDataFor:0
            })
        }
    }
})
export  const {
    useGetStudentsQuery,
    useGetStudentByIdQuery
}=studentApi;
export  default  studentApi;

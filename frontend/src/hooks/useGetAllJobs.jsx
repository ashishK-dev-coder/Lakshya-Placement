import { setAllJobs } from "@/redux/jobSlice";
import axios from "axios"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import Cookies from 'js-cookie';

const useGetAllJobs = () => {
    const dispatch = useDispatch();
    const { authUser } = useSelector((store) => store.auth);
    const token = Cookies.get('token');
    console.log("frontend=token",token)
    const { searchText } = useSelector(store => store.job);
    console.log("searchText",searchText)

    // if(authUser){
        useEffect(() => {
            const fetchJobs = async () => {
                try {
                    axios.defaults.withCredentials = true;
                    const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/v1/job/all?keyword=${searchText}`);
                   
                    if (res.data.success) {
                        dispatch(setAllJobs(res.data.jobs));
                    }
                } catch (error) {
                    console.log(error);
                }
            }
            fetchJobs();
        }, [])
    // }
    
}
export default useGetAllJobs;
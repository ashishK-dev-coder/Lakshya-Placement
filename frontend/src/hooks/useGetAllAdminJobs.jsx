import { setAdminJobs } from "@/redux/jobSlice";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cookies from 'js-cookie';

const useGetAllAdminJobs = () => {
  const dispatch = useDispatch();
  const { authUser } = useSelector((store) => store.auth);
  const token = Cookies.get('token');
  console.log("frontend=token",token)

  if (authUser) {
    useEffect(() => {
      const fetchAdminJobs = async () => {
        try {
          axios.defaults.withCredentials = true;
          const res = await axios.get(
            import.meta.env.VITE_API_URL+"/api/v1/job/getadminjobs"
          );
          if (res.data.success) {
            dispatch(setAdminJobs(res.data.jobs));
          }
        } catch (error) {
          console.log(error);
        }
      };
      fetchAdminJobs();
    }, []);
  }
};
export default useGetAllAdminJobs;

import { setAllAppliedJobs } from "@/redux/applicationSlice";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cookies from 'js-cookie';

const useGetAppliedJobs = () => {
  const dispatch = useDispatch();
  const { authUser } = useSelector((store) => store.auth);
  const token = Cookies.get('token');
  console.log("frontend=token",token)

  // if (authUser) {
    useEffect(() => {
      const fetchAppliedJobs = async () => {
        try {
          axios.defaults.withCredentials = true;
          const res = await axios.get(
            import.meta.env.VITE_API_URL+"/api/v1/application/get"
          );
          if (res.data.success) {
            dispatch(setAllAppliedJobs(res.data.application));
          }
        } catch (error) {
          console.log(error);
        }
      };
      fetchAppliedJobs();
    }, []);
  // }
};

export default useGetAppliedJobs;

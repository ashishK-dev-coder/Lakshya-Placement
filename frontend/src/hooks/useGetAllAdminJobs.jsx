import { setAdminJobs } from "@/redux/jobSlice";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const useGetAllAdminJobs = () => {
  const dispatch = useDispatch();
  const { authUser } = useSelector((store) => store.auth);

  if (authUser) {
    useEffect(() => {
      const fetchAdminJobs = async () => {
        try {
          axios.defaults.withCredentials = true;
          const res = await axios.get(
            "http://localhost:8000/api/v1/job/getadminjobs"
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

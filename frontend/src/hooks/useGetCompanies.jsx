import { setCompanies } from "@/redux/companySlice";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cookies from 'js-cookie';

const useGetCompanies = () => {
  const dispatch = useDispatch();
  const { authUser } = useSelector((store) => store.auth);
  const token = Cookies.get('token');
  console.log("frontend=token",token)

  // if (authUser) {
    useEffect(() => {
      const fetchCompany = async () => {
        try {
          axios.defaults.withCredentials = true;
          const res = await axios.get(
            import.meta.env.VITE_API_URL+"/api/v1/company/getcompany"
          );
          dispatch(setCompanies(res.data.companies));
        } catch (error) {
          console.log(error);
        }
      };
      fetchCompany();
    }, []);
  // }
};
export default useGetCompanies;

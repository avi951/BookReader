import { React, createContext, useContext } from "react";
import {  useLoaderData, redirect, Outlet, useNavigate ,Link} from "react-router-dom";
import BigNavbar from "../components/BigNavbar";
import LogoutContainer from "../components/LogoutContainer";
import customFetch from "../../utils/customFetch";

export const loader = async () => {
//  console.log('Loader');
  try {
    const {data} = await customFetch.get('/user/current-user')
    return data;
  } catch (error) {
    // console.log("Error loading data:", error);
    return error;
  }
};



const DashboardContext = createContext();

const DashLayout = () => {
  const navigator = useNavigate();
  const logoutUser = async()=>{
    navigator('/')
    await customFetch.get('/auth/logout')
    // console.log('LOGOUT');
  }
  const {user} = useLoaderData();
  
  return (
    <DashboardContext.Provider value={{ user, BigNavbar, logoutUser }}>
      <div className="dashLayout_m">
      <div className="navbar" style={{zIndex:'5',width:'100%',position:'absolute'}}>
          <BigNavbar />
          <ul className="nav-links">
            <li>
              <LogoutContainer />
            </li>
          </ul>
        </div>
          <Outlet context={{ user, logoutUser }} />
      </div>
    </DashboardContext.Provider>
  );
};

export const useDashboardContext = () => useContext(DashboardContext);
export default DashLayout;

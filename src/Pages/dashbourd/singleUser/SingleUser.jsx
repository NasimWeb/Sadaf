import React, { useEffect, useState } from "react";
import "./singleUser.css";
import {  useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUsersFromServer } from "../../../Redux/store/users";
import Loader from "../../../Components/loader/loader";
import Swal from "sweetalert2";



export default function SingleUser() {

  let params = useParams();

  const dispatch = useDispatch();

  const { data, loading, error } = useSelector((state) => state.users);

  let mainUser = data.find((user) => {
    return user._id == params.userId;
  });

  let [username, setUsername] = useState(localStorage.getItem('username') || (mainUser ? mainUser.username : ''));
  let [firstname, setFirstname] = useState(localStorage.getItem('firstname') || (mainUser ? mainUser.firstname : ''));
  let [lastname, setLastname] = useState(localStorage.getItem('lastname') || (mainUser ? mainUser.lastname : ''));
  let  [email,setEmail] = useState(localStorage.getItem('email') || (mainUser ? mainUser.email : '') ); 

  // Check if mainUser has changed, and reset the state accordingly
  useEffect(() => {
    if (mainUser) {
      setUsername(mainUser.username);
      setFirstname(mainUser.firstname);
      setLastname(mainUser.lastname);
      setEmail(mainUser.email)
    }
  }, [mainUser]);

  
  useEffect(() => {
    dispatch(getUsersFromServer("https://redux-cms.iran.liara.run/api/users/"));
  }, []);

  // Update localStorage when inputs change
  useEffect(() => {
    localStorage.setItem('username', username);
    localStorage.setItem('firstname', firstname);
    localStorage.setItem('lastname', lastname);
    localStorage.setItem('email',email);
  }, [username, firstname, lastname,email]);


 
  {
    if (loading) {
      return <Loader />;
    }
  }

  {
    if (error) {
      Swal.fire({
        icon: "error",
        title: { error },
        showConfirmButton: false,
      });
    }
  }

  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Users</h1>
      </div>
      <div className="productTop">
        {/* <div className="productTopLeft">
                    
                </div> */}
        <div className="productTopRight ">
          <div className="productInfoBottom flex gap-10 flex-wrap items-end">
            <div className="productInfoItem">
              <div class="flex justify-center gap-3 flex-wrap max-w-full">
                <label htmlFor="username" className="productInfoKey">
                  username
                </label>
                <input
                  type="text"
                  className="relative bg-gray-50ring-0 outline-none border border-neutral-500 text-neutral-900 placeholder-Indigo-300 text-sm rounded-lg focus:ring-indigo-500  focus:border-indigo-500 block w-64 p-2.5 checked:bg-emerald-500"
                  placeholder="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
            </div>
            <div className="productInfoItem">
              <div class="flex justify-center gap-3 flex-wrap max-w-full">
                <label htmlFor="username" className="productInfoKey">
                  firstname
                </label>
                <input
                  type="text"
                  className="relative bg-gray-50ring-0 outline-none border border-neutral-500 text-neutral-900 placeholder-Indigo-300 text-sm rounded-lg focus:ring-indigo-500  focus:border-indigo-500 block w-64 p-2.5 checked:bg-emerald-500"
                  placeholder="username"
                  value={firstname}
                  onChange={(e) => setFirstname(e.target.value)}
                />
              </div>
            </div>
            <div className="productInfoItem">
              <div class="flex justify-center gap-3 flex-wrap max-w-full">
                <label htmlFor="username" className="productInfoKey">
                  lastname
                </label>
                <input
                  type="text"
                  className="relative bg-gray-50ring-0 outline-none border border-neutral-500 text-neutral-900 placeholder-Indigo-300 text-sm rounded-lg focus:ring-indigo-500  focus:border-indigo-500 block w-64 p-2.5 checked:bg-emerald-500"
                  placeholder="username"
                  value={lastname}
                  onChange={(e) => setLastname(e.target.value)}
                />
              </div>
            </div>
            <div className="productInfoItem">
              <div class="flex justify-center gap-3 flex-wrap max-w-full">
                <label htmlFor="username" className="productInfoKey">
                  email
                </label>
                <input
                  type="text"
                  className="relative bg-gray-50ring-0 outline-none border border-neutral-500 text-neutral-900 placeholder-Indigo-300 text-sm rounded-lg focus:ring-indigo-500  focus:border-indigo-500 block w-64 p-2.5 checked:bg-emerald-500"
                  placeholder="username"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <button class="button">edit</button>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form className="productForm justify-start	items-baseline gap-10">
          <div className="productFormLeft"></div>
          <div className="productFormRight">
            <div className="productUploader">
              {/* <label>
                <PublishIcon />
              </label> */}
             
            </div>
          </div>
          {/* <div className="preview">
            <img className="max-w-full h-auto" src="" alt="user preview" />
          </div> */}
          
        </form>
      </div>
    </div>
  );
}

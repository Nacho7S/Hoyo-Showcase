"use client"
import { BASE_URL } from "@/config/baseUrl";
import { fetchUser } from "@/store/actions/actionCreator";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";


export const UidForm = () => {
  const router = useRouter()
  const dispatch = useDispatch()
  const {currentUserData, userLoading} = useSelector((state) => state.user)

  const [uid, setUid] = useState('')
  const [errorUid, setErrorUid] = useState({
    bool: false,
    value: ''
  })
  const handleChangeUid = (e) => {
    const { value} = e.target
    setUid(value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!uid) {
      setErrorUid({...errorUid, bool: true})
    }
    try {
      dispatch(fetchUser(uid))
      // console.log(currentUserData, "user di component");    
        router.push('/user-genshin?uid=' + uid + "&menu=Main menu");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <form className="h-[20vh] w-[35vh] bg-white flex justify-center items-center rounded-xl" onSubmit={handleSubmit}>
      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text"><h1>Your UID Here</h1></span>
          {/* <span className="label-text-alt">Top Right label</span> */}
        </div>
        <input
          onChange={handleChangeUid}
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs rouded-l-lg"
        />
        <div className="label">
          {/* <span className="label-text-alt">Bottom Left label</span> */}
          {/* <span className="label-text-alt">Bottom Right label</span> */}
        </div>
      </label>
      <button className="btn rouded-r-lg self-center mt-[1.5vh]"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
</svg></button>
    </form>
  );
};




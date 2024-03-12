"use client";

import Image from "next/image";
import React, {useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "@/store/actions/actionCreator";

export default function UserGenshin() {
  const router = useRouter()
  const dispatch = useDispatch();
  const searchParams = useSearchParams();
  const uid = searchParams.get("uid");
  const menu = searchParams.get("menu")
  console.log(menu);
  const { currentUserData, userLoading } = useSelector((state) => state.user);

  
  async function fetchCurrentUser() {
    try {
      dispatch(fetchUser(uid));
    } catch (err) {
      console.log(err);
    }
  };
  
  useEffect(() => {
    fetchCurrentUser();
  }, []);

  function handleQueryUrlMenu(type) {
    if (type === 'Namecard') {
      router.replace(`/user-genshin?uid=${uid}&menu=${type}`);
    } else if (type === 'Main menu') {
      router.replace(`/user-genshin?uid=${uid}&menu=${type}`);
    }
  }
  
  console.log(currentUserData);

  return (
    <div className="w-[132vh] max-2xl:max-w-[110vh] max-xl:w-[90vh] max-lg:w-[65vh] max-sm:w-[45vh] max-sm:ms-[2vh] overflow-auto">
      {/* <Image width={1500}
        height={1500}
        priority={true}
        className='absolute -z-10 bg-center'
        alt="Picture of the author" src='/assets/menuCharacter.PNG' /> */}
      <div className={`${menu === "Main menu" ? 'bg-ui-avatar-genshin' : "bg-ui-namecard-genshin"} bg-no-repeat bg-center bg-contain -z-10 w-auto h-auto  flex flex-row opacity-1 rounded-lg gap-[1vh] max-2xl:object-contain max-xl:w-[110vh]`}>
        <div className="z-20 flex flex-col items-center  w-[60vh] h-[75vh] ms-[1.5vh] max-2xl:max-w-[48vh]">
          {/* <Image className='ms-[3.2vh] object-cover mt-[0.9]vh] max-h-[20.5vh]' width={613} height={200} src={currentUserData?.user?.bannerProfilePicture?.pictures[1].url} /> */}
          <div
            style={{
              backgroundImage: `url(${currentUserData?.user?.bannerProfilePicture?.pictures[1].url})`,
            }}
            className=" ms-[1vh] mt-[1.1vh] w-[54.2vh] h-[20.5vh] bg-center bg-cover h-[10vh] 
            max-2xl:max-w-[45vh] max-2xl:ms-[1.8vh] max-2xl:mt-[7.2vh] max-2xl:max-h-[17vh]
           
            "
          >
            <h4 className="font-genshin text-center drop-shadow-lg text-lg text-slate-200 pt-[2.4vh]">UID { currentUserData?.user?.uid}</h4>
            <div className="rounded-full z-30 bg-ui-white-genshin w-[16vh] h-[16vh] ms-[19vh] mt-[4.6vh] border border-4  border-icon-border-color
            max-2xl:max-w-[14vh] max-2xl:max-h-[14vh] max-2xl:ms-[16vh] max-2xl:mt-[2.8vh]
            ">
              <div style={{ backgroundImage: `url(${currentUserData?.user?.profilePicture.url})` }}
                className=" w-[14vh] h-[14vh] ms-[0.7vh] mt-[0.5vh] rounded-full bg-icon-image-background bg-center bg-cover self-center
                max-2xl:max-w-[12vh] max-2xl:max-h-[12vh]
                "></div>
            </div>
          </div>
          <h4 className="font-genshin text-center text-gray-600 text-[3vh] mt-[8vh]
            max-2xl:text-[2.5vh] max-2xl:mt-[7vh]
          ">{currentUserData?.user?.nickname || 'User'}</h4>
          <div className="flex flex-row justify-between items-center w-[46vh] h-[5vh] mt-[2.5vh] ms-[0.5vh]
            max-2xl:max-w-[38vh]  max-2xl:mt-[1.5vh] max-2xl:ms-[1.7vh]
          ">
          <h4 className="font-genshin text-center text-[2.5vh] text-slate-100  max-2xl:text-[2vh]">Adventure Rank</h4>
          <h4 className="font-genshin text-center text-[2.5vh] text-slate-100 max-2xl:text-[2vh]">{currentUserData?.user?.level}</h4>
          </div>
          <div className="flex flex-row justify-between items-center w-[46vh] h-[5vh] ms-[0.5vh]
          max-2xl:max-w-[38vh] max-2xl:max-h-[3.5vh] max-2xl:text-xl max-2xl:ms-[1.7vh]">
          <h4 className="font-genshin text-center text-slate-100 text-[2.5vh] text-slate-100 max-2xl:text-[2vh]">World Level </h4>
          <h4 className="font-genshin text-center text-slate-100 text-[2.5vh] text-slate-100 max-2xl:text-[2vh]">{currentUserData?.user?.worldLevel}</h4>
          </div>
          <div className="self-start mt-[2.7vh] ms-[8vh] h-[13vh] w-[45vh]
            max-2xl:mt-[2.5vh] max-2xl:ms-[6vh] max-2xl:w-[38vh] max-2xl:h-[10vh]
            overflow-hidden whitespace-normal break-words
          ">
            <h6 className="font-genshin text-[2vh] text-font-color-bio-button
              max-2xl:text-[1.7vh] line-clamp-4
            ">
              {currentUserData?.user?.signature || "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos odit ipsum sint nam fugiat, rem veritatis adipisci tempore nulla sed voluptas illum totam, facilis quibusdam soluta nisi repudiandae. Non, mollitia?"} 
            </h6>
          </div>
        </div>
        <div className="z-20 w-[60vh] h-[75vh]">
          <div className="w-[45.5vh] h-[5vh] mt-[3.7vh] ms-[7.2vh] flex justify-between ">
            <button className={`${menu === "Main menu" ? `font-genshin text-[2.4vh] text-font-color-bio-button bg-switch-button-avatar-genshin bg-no-repeat bg-center bg-contain w-[23vh] h-[5vh]` :
              'font-genshin text-font-color-bio-button text-[2.4vh] w-[22.7vh]'}`}
            onClick={(e) => {
              e.preventDefault()
              handleQueryUrlMenu("Main menu")
            }}
            >Main Page</button>
            <button className={`${menu === "Namecard" ? 'font-genshin text-[2.4vh] text-font-color-bio-button bg-switch-button-avatar-genshin bg-no-repeat bg-center bg-contain w-[23vh] h-[5vh]' : 'font-genshin text-font-color-bio-button text-[2.4vh] w-[23vh]'}`}
              onClick={(e) => {
              e.preventDefault()
              handleQueryUrlMenu("Namecard")
            }}>Namecard</button>
          </div>
          <div className="w-[53vh] ms-[4vh] mt-[5vh] text-gray-600 ">
            <div className="ms-[10.6vh]">
              <div className="flex flex-col leading-[2.5vh]">
            <p className="font-genshin text-[2vh]">Total</p>
            <p className="font-genshin text-[1.8vh]">Achievements</p>
              </div>
            <h4 className="font-genshin text-[2.4vh]">{ currentUserData?.user?.achievements}</h4>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

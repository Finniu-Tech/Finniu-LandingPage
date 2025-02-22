import React from "react";
import Image from "next/image";
import AppStore from "@/images/About/Section-7/AppStore.png";
import GooglePlay from "@/images/About/Section-7/GooglePlay.png";
import CellPhoneDollar from "@/images/About/Section-7/CellPhoneDollar.png";
const DownloadAppFinniuMobile = () => {
  return (
    <div className=" container-section  w-[341px] h-[482px] shadow-md bg-lightColorOpcional rounded-3xl flex-col">
      <div className="  flex flex-col justify-center items-center">
        <div className="text-justify">
          <p className=" text-[22px] font-bold  ">Descarga la App de Finniu,</p>

          <p>crea tu cuenta y comienza a cumplir tus metas financieras.</p>
        </div>
        <div className=" flex w-full ml-16 justify-end">
          <Image src={CellPhoneDollar} alt="Cellphone-Dollar" width={218} />
        </div>
        <div>
          <div className=" flex flex-col gap-6 justify-center items-center mt-0">
            <a
              href="https://play.google.com/store/apps/details?id=com.finniu&referrer=utm_source%3Dfinniu_web%26utm_medium%3Dweb%26anid%3Daarki%26aclid%3D{click_id}%26cp1%3D{app_id}"
              target="_blank"
            >
              <Image src={GooglePlay} alt="Google-Play" width={140} />
            </a>

            <a
              href="https://apps.apple.com/app/apple-store/id6449205870?pt=126231912&ct=web&mt=8"
              target="_blank"
            >
              <Image src={AppStore} alt="App-Store" width={140} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadAppFinniuMobile;


import Image from "next/image";
import GooglePlay from "@/images/Section-1/GooglePlay.png";
import AppStore from "@/images/Section-1/AppStore.png";
const ToStoresSection = () => {
    return (
        <section className="flex flex-col s:m-5 justify-center items-center w-full  xl:h-[245px] xl:max-h-[245px] min-h-[245px] bg-toStoresContainer
           ">
            <p className="text-black text-[20px] xl:text-[32px] ">¡Descarga Nuestra App!</p>
            <div className="flex justify-center md:justify-center gap-4 mt-8">
                <a
                    href="https://play.google.com/store/apps/details?id=com.finniu&referrer=utm_source%3Dfinniu_web%26utm_medium%3Dweb%26anid%3Daarki%26aclid%3D{click_id}%26cp1%3D{app_id}"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                        className="w-[150px] lg:w-[240px]"
                        src={GooglePlay}
                        alt="Google-Play"

                        style={{ height: "auto" }}
                    />
                </a>
                <a
                    href="https://apps.apple.com/app/apple-store/id6449205870?pt=126231912&ct=web&mt=8"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                        src={AppStore}
                        alt="App-Store"
                        className="w-[150px] lg:w-[240px]"
                        style={{ height: "auto" }}
                    />
                </a>
            </div>
        </section>
    );
};

export default ToStoresSection;
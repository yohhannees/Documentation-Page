
import login from './assets/login.png'
import Image from "next/image";



function Images() {
  return (
    <div>
      <Image
        src={login}
        alt="Picture of the author"
        // width={500} automatically provided
        // height={500} automatically provided
        // blurDataURL="data:..." automatically provided
        // placeholder="blur" // Optional blur-up while loading
      />
    </div>
  );
}

export default function MyApp() {
  return <Images />;
}

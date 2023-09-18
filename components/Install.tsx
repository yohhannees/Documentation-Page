
import install from './assets/install.png'
import Image from "next/image";



function Install() {
  return (
    <div>
      <Image
        src={install}
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
  return <Install />;
}

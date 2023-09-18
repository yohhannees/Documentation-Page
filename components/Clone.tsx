import clone from "./assets/clone.png";
import Image from "next/image";

function Clone() {
  return (
    <div>
      <Image
        src={clone}
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
  return <Clone />;
}

// import Image from "next/image";

// export default function Home() {
//   return (
//    <div>
    
//    </div>
//   );
// }
import { redirect } from "next/navigation";

export default function Home() {
  redirect("/home"); 

  return null;
}
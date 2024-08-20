import styles from "./signin.module.scss";
import routes from "@/routes";
import Image from "next/image";
import Link from "next/link";

export default function SignIn() {

  return (

      <div className="row">
        <div className="d-none d-log-flex col-lg-5 bg-primary justify-content-around align-content-center p-5">
          <Image src="/signin-img.svg" alt="signin image" width={400} height={700} className='w-100' />
 </div>
 <div className="col-xs-12 col-lg-7 p-1 p-sm-2 p-md-3 p-lg-4 p-xl-5">
  <Link href="/">

  </Link>
 </div>
      </div>
  );
}

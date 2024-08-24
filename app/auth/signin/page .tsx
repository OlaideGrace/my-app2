// import styles from './signIn.module.scss';
// import routes from "@/routes";
// import Image from "next/image";
// import Link from "next/link";
// import LogoComponent from "@/components/LogoComponent";
// import Reset from "@/app/auth/components/password/reset";

// export default function SignIn(){
//     const facebookLink = `https://m.facebook.com/privacy/consent_framework/prompt/?consent_flow_name=gdp&consent_entry_source=gdp_delegated&consent_extra_params%5Bapp_id%5D=192718330121667&consent_extra_params%5Bkid_directed_site%5D=false&consent_extra_params%5Blogger_id%5D=%22cde58459-e75c-42c1-aa65-03883854b330%22&consent_extra_params%5Bnext%5D=%22read%22&consent_extra_params%5Bredirect_uri%5D=%22https%3A%5C%2F%5C%2F${routes.auth.signin}%5C%2Foauth2%5C%2Fidpresponse%22&consent_extra_params%5Bresponse_type%5D=%22code%22&consent_extra_params%5Breturn_scopes%5D=false&consent_extra_params%5Bscope%5D=%5B%22public_profile%22%2C%22email%22%5D&consent_extra_params%5Bstate%5D=%22H4sIAAAAAAAAAFWRSXOjMBCF_4vOhgAyi33LBGNj48R7YqamXLIWdkSQwMvU_PcRhznMSa_r9dfd9fQbIDAFndAoElIzL918sp9_uZ8EjMBVOQHC9Mp5oUqsSmIm7XdVGrRK3Z7L4moksm1rQ9lE2amUjZi-vDQtZ1lJ9RsUOOW8FDrmleqhqgdzQpVk_w9PwPQn4A2ts2Ezug1EUmeS6yJTb613grY6IlVWg18jkCr6Zr9_-Id-54f2QqxmQfY2WxrRocDRMdiknaPmZMOSHw9YXZK8ibdESN94yP347BF8hz2Dvrubv0bR3PabfrtVRK6IvWUPcKHkwbPCOdssS2F5D_S8pJKvUPgaOuQLzRxUx6dtN7m90ybe3KnJHYeE3jrxPy-HsF4Y6RnXs0mAnVMItfXm-cbMdocj65G38nTOdx-nxSZZxseFSBJC2lycmLc1D_fq2cSeVtbnNAj3q6CPbLeksVfF66bgGbodP_L7ubt7TRdZaulsuagKT11cqotRJ9Mh90Zl-y_2CkxN14IQGtC0R6ABU4ZKQUfgWwG9aevD_7VKu5RB6thYs7GBtbHjWtrEZFfNYFfiWc4YsgkDf_4CMmXr-TQCAAA.H4sIAAAAAAAAAAEgAN__GXJRQpc0xWCznAAns53Nl5KXhjmpqnPeJpKHFpd7QavscH-OIAAAAA.4%22&consent_extra_params%5Bsteps%5D=%7B%22read%22%3A%5B%22public_profile%22%2C%22email%22%2C%22baseline%22%5D%7D&consent_extra_params%5Btp%5D=%22unspecified%22&consent_extra_params%5Bcui_gk%5D=%22%5BPASS%5D%3Alogin_platformization_read%22&consent_extra_params%5Bis_limited_login_shim%5D=false&wtsid=rdr_06KqCpIIdaH7MeFxv&_rdr`;
//     const googleLink = `https://accounts.google.com/o/oauth2/v2/auth/oauthchooseaccount?client_id=398874333579-u9rrotjv4vu07ut6l3844d6mspcadqds.apps.googleusercontent.com&redirect_uri=https%3A%2F%2F${routes.auth.signin}%2Foauth2%2Fidpresponse&scope=profile%20email%20openid&response_type=code&state=H4sIAAAAAAAAAE1Q2ZKiMBT9lzyLHQKy-IZKIWK74QZTUxQJYWmBIAEdmZp_n_jQVf1076mz3FP3L4jBFPRcojHvJDnqHdN3rvolASOABeMwlpVUACJAImftvSohrXL9wbobhlnXtjUUdCLovOsaPv34aFqWFiUdPxVOcsZKPiasEhoqNIQl77T0Z3QGpr8Aa2hdvK_Gz7c-q4uOjXkhZj3uOW3HcVIVNfg9ArnwWk1GyBqR-DLkcKnj3S5Fs8p0w9kQbAMFi5xCyNpVeIqrTW77C7Q-u6v0nui9u57ojWs8PUfLV21zvDz5sAiE40s4fDTRxHoT68TQB1U9dZ_7-GxevfbYb-1-MuGL-lHhOdoz9TZ87iq6IdGsfB1Mvv2D4HCZe7Ucbo-Bc77ZofSwpNULfUW7ULnR4LzFlvMitevYR93yD-7Sm1l7DudLy3BarfAjtNGQ6p2hI3XEUk_4ItsbJdBenuFG9vUYaal8D02iE58pRrVZ7Q_RcrBF41I0jvsuf3-9iQn9fnoFprKOFEWBSFNHoAHTNC45HYFWGGQZ40SViWSmBpZU3SRSTBGUCEGGoSQQGwiCf_8BfBM0fSQCAAA.H4sIAAAAAAAAANMLzrOakbjBd8qny_3_NCQKWQ3YeEqKUzZ4RnNISbjyzgMAjXtqBSAAAAA.4&access_type=offline&service=lso&o2v=2&ddm=0&flowName=GeneralOAuthFlow`;
//     return(
//     <>
//         <div className="row">
//             <div className="d-none d-lg-flex col-lg-5 bg-primary justify-content-around align-content-center p-5">
//                 <Image src="/signin-img.svg" alt="signin image" width={400} height={700} className='w-100'/>
//             </div>
//             <div className="col-xs-12 col-lg-7 p-1 p-sm-2 p-md-3 p-lg-4 p-xl-5">
//                 <Link href="/" >
//                     <LogoComponent  className="float-end my-5 me-md-5 me-4"/>
//                 </Link>
//                 <div className="p-5">
//                     <div className="text-start mb-5">
//                         <p className="h2 my-3 mb-5"><b>Welcome Back</b></p>
//                         <p className="h6">Don&apos;t have an account? <Link href={routes.auth.signup} className={styles.dontHaveAcctlink}>Sign up</Link></p>
//                     </div>
//                     <form action="submit" method="get">
//                         <div>
//                             <div className="d-none d-md-flex row mb-5">
//                                 <div className="col-md-5">
//                                     <Link href={`${googleLink}`} className={`btn ${styles.btn} ${styles.btnGoogle} btn-light border-dark mb-5`}>Sign in with Google</Link>
//                                     <hr />
//                                 </div>
//                                 <div className={`${styles.socialDivide} col-md-2`}>
//                                     <p>Or</p>
//                                 </div>
//                                 <div className="col-md-5">
//                                     <Link href={`${facebookLink}`} className={`btn ${styles.btn} ${styles.btnFacebook} text-white mb-5`}>Sign in with Facebook</Link>
//                                     <hr />
//                                 </div>
//                             </div>
//                             <div className="mb-5 mb-md-0">
//                                     <label htmlFor="Email" className="d-block">Email address</label>
//                                     <div className="input-group mb-5 border-primary">
//                                         <span className={`input-group-text ${styles.inputText} border-primary w-25`} id="basic-addon1">
//                                             <Image src="/emailIcon.svg" width={30} height={30} alt="password Icon"/>
//                                         </span>
//                                         <input type="email" className={`${styles.input} form-control border-primary text-lg-center`} id="Email" name="Email" placeholder="johnkentacad@gmail.com" aria-label="Email address" required/>
//                                     </div>
//                                     <label htmlFor="Password" className="d-block">Password</label>
//                                     <div className="input-group mb-5">
//                                         <span className={`input-group-text ${styles.inputText} border-primary w-25 `} id="basic-addon1">
//                                             <Image src="/passwordIcon.svg" width={30} height={30} alt="password Icon"/>
//                                         </span>
//                                         <input type="password" className={`${styles.input} form-control border-primary text-lg-center`} id="Password" placeholder="*******************" aria-label="Password" required/>
//                                     </div>   
//                                     <Reset/>
//                                     <div className="">
//                                         <button type="submit" className={`btn btn-primary ${styles.btn}`}>Sign in</button>
//                                     </div>
//                             </div>
//                             <div className="d-flex d-md-none row">
//                                 <div className="col-5">
//                                     <hr className="mb-5" />
//                                     <Link href={`${googleLink}`} className={`btn ${styles.btn} ${styles.btnGoogle} btn-light border-dark`}>Sign in with Google</Link>
//                                 </div>
//                                 <div className="col-2 d-flex justify-content-center">
//                                     <p>Or</p>
//                                 </div>
//                                 <div className="col-5">
//                                     <hr className="mb-5" />
//                                     <Link href={`${facebookLink}`} className={`btn ${styles.btn} ${styles.btnFacebook} text-white`}>Sign in with Facebook</Link>
//                                 </div>
//                             </div>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     </>
//     );
// }
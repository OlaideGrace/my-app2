import packages from "@/data/packages";
import Image from "next/image";
import styles from "./ambassadorComp.module.scss";
import Link from "next/link";

export default  function AmbassadorContainer() {
    return (
        <>
            <div>
                {
                    packages.map((data)=><div className="row d-flex" key={data.title}>
                            <div className={`col-xs-12 col-md-6 d-flex justify-content-center p-3 order-${data.order}`}>
                                <Image src={data.img} alt={`${data.title} image`} className={`w-100`}/>
                            </div>
                            <div className="col-xs-12 col-md-6">
                                <div>
                                    <p>Easier desion making for</p>
                                    <h1>{data.title} AMBASSADOR</h1>
                                    <div>
                                        {data.descriptions.map(
                                            (dataDescription)=><div className="d-flex" key={dataDescription}>
                                                <Image src={"/checkList.svg"} alt={"checklist"} width={20} height={20}/>
                                                <p>{dataDescription}</p>
                                            </div>
                                        )}
                                    </div>
                                    <Link href={data.link} className="text-decoration-none">
                                    <span className="text-primary" >Subscribe</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </>
    )
}

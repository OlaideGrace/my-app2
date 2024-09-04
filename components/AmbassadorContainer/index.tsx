import packages from "@/data/packages";
import Image from "next/image";
import styles from "./ambassadorComp.module.scss";
import Link from "next/link";

export default  function AmbassadorContainer() {
    return (
        <>
            <div className={styles.ambassadorContainer}>
                {packages.map((data)=><div className={`${styles.row} row d-flex`} key={data.title}>
                            <div className={`col-xs-12 col-md-6 d-flex justify-content-center p-3 order-0 order-1 0rder-0 order-md-${data.order}`}>
                                <div className={styles.imageContainer}>
                                <Image src={data.img} alt={`${data.title} image`} className={styles.image} />
                                </div>
                            </div>
                            <div className="col-xs-12 col-md-6">
                                <div className={styles.content}>
                                    <p>Easier desion making for</p>
                                    <h3>{data.title} AMBASSADOR</h3>
                                    <div className={styles.descriptions}>
                                        {data.descriptions.map(
                                            (dataDescription)=><div className="d-flex" key={dataDescription}>
                                                <Image src={"/checkList.svg"} alt={"checklist"} width={20} height={20}
                                                className={styles.checklistImage} />
                                                <p>{dataDescription}</p>
                                            </div>
                                        )}
                                    </div>
                                    <Link href={data.link} className="text-decoration-none btn bg-primary">
                                        Subscribe
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

import { forwardRef } from "react";
import Link from "next/link";
import Image from "next/image";

import ShareIcon from "../svgs/ShareIcon";
import AppleLogo from "../svgs/AppleLogo";
import PlaystoreLogo from "../svgs/PlaystoreLogo";

import styles from "./SingleCasestudySlide1.module.scss";

const ButtonLink = ({ data, Icon }) =>
  data && (
    <Link href={data.link} passHref scroll={true} prefetch={false}>
      <a target="_blank">
        <div className={styles.button}>
          <div className={styles.svg}>
            <Icon />
          </div>
          <p className={styles.btnText}>{data.jobTitle}</p>
        </div>
      </a>
    </Link>
  );

const SingleCasestudySlide1 = ({ data }, ref) => {
  return (
    <div className={styles.SingleCasestudySlide1} ref={ref}>
      <div className={styles.upperSection}>
        <div className={styles.titleSection}>
          <p className={styles.smallTitle}>CASE STUDY - {data.year}</p>
          <p className={styles.mainTitle}>
            <span className={styles.colorText}>{data.colorText}</span>
            <br />
            {data.mainTitle}
          </p>
        </div>
        <div className={styles.deliverables}>
          <p className={styles.title}>Deliverables</p>
          <ul className={styles.ul}>
            {data.deliverables.map((item, index) => (
              <li key={index} className={styles.li}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <div className={styles.mainImage}>
          <div className={styles.backgroundImage}>
            <Image
              src={data.largeImage.url}
              width={data.largeImage.width}
              height={data.largeImage.height}
              alt="Workvio Image"
              layout="responsive"
              priority={true}
            />
          </div>
          {data.heroSectionLaptop && (
            <div className={styles.mockupImage}>
              <Image
                src={data.heroSectionLaptop.url}
                width={data.heroSectionLaptop.width}
                height={data.heroSectionLaptop.height}
                alt="Workvio Image"
                layout="responsive"
                priority={true}
              />
            </div>
          )}
          {data.heroSectionMobile && (
            <div className={styles.mobileMockupImage}>
              <Image
                src={data.heroSectionMobile.url}
                width={data.heroSectionMobile.width}
                height={data.heroSectionMobile.height}
                alt="Workvio Image"
                layout="responsive"
                priority={true}
              />
            </div>
          )}
        </div>
      </div>
      <div className={styles.details}>
        <p className={styles.detailTitle}>{data.heroSectionContent.title}</p>
        <p className={styles.detailSmallTitle}>
          {data.heroSectionContent.subTitle}
        </p>
        <p className={styles.description}>
          {data.heroSectionContent.description}
        </p>
        <p className={styles.boldlist}>
          {data.heroSectionContent?.boldListItemsCollection?.items && (
            <>
              {data.heroSectionContent.boldListItemsCollection.items?.map(
                (item, index) => (
                  <p key={index}>
                    <span className={styles.boldTitle}>{item.boldTitle}</span>{" "}
                    {item.content}
                  </p>
                )
              )}
            </>
          )}
        </p>

        <div className={styles.buttonContainer}>
          <ButtonLink data={data.websiteLink} Icon={ShareIcon} />
          <ButtonLink data={data.appStoreLink} Icon={AppleLogo} />
          <ButtonLink data={data.playstoreLink} Icon={PlaystoreLogo} />
        </div>
      </div>
    </div>
  );
};

export default forwardRef(SingleCasestudySlide1);

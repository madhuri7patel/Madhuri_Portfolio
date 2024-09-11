import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

import client from '../../client';
import { getAllCasestudies, getSingleCasestudy } from '../../queries';

import CasestudyChallengesSlide from '../../components/CasestudyChallengesSlide/CasestudyChallengesSlide';
import CasestudyFeaturesSlide from '../../components/CasestudyFeaturesSlide/CasestudyFeaturesSlide';
import CasestudyProcessSlide from '../../components/CasestudyProcessSlide/CasestudyProcessSlide';
import ProblemSolvingSlide from '../../components/ProblemSolvingSlide/ProblemSolvingSlide';
import SingleCasestudySlide1 from '../../components/SingleCasestudySlide1/SingleCasestudySlide1';
import TechStackSlide from '../../components/TechStackSlide/TechStackSlide';
import CasestudyAchievement from '../../components/CasestudyAchievement/CasestudyAchievement';

gsap.registerPlugin(ScrollTrigger);

import styles from '../../styles/SingleCasestudy.module.scss';
import { HomeLayout } from '../../Layouts';
import Head from 'next/head';

const IndividualProject = ({
  heroSectionData,
  techStackData,
  casestudyProcessData,
  problemSolvingData,
  challengesData,
  featuresData,
  achievementData,
  password,
}) => {
  const scroller = useRef(null);
  const port1Ref = useRef(null);

  return (
    <HomeLayout page={2} ScrollTrigger={ScrollTrigger} isDark={true} ref={scroller}>
      <Head>
        <title>
          {heroSectionData.colorText} | {heroSectionData.mainTitle} | Chirag Gupta
        </title>
        <meta
          name="description"
          content="A full-stack developer with a passion for creating impactful applications"
        />
        <meta property="og:title" content="Portfolio | Chirag Gupta" />
        <meta
          property="og:description"
          content="A full-stack developer with a passion for creating impactful applications"
        />
      </Head>
      <div className={styles.SingleCasestudy}>
        <SingleCasestudySlide1 data={heroSectionData} ref={port1Ref} />
        <TechStackSlide data={techStackData} />
        <CasestudyProcessSlide data={casestudyProcessData} />
        <ProblemSolvingSlide data={problemSolvingData} />
        <CasestudyChallengesSlide data={challengesData} />
        <CasestudyFeaturesSlide data={featuresData} />
        <CasestudyAchievement data={achievementData} />
      </div>
    </HomeLayout>
  );
};

export default IndividualProject;

//! remaining
//* ProblemSolvingSlide slider part

export async function getStaticPaths() {
  let paths = [];
  const data = await client.query(getAllCasestudies());
  paths = data.data.singleCaseStudyCollection.items;

  const slug = paths.map((item) => ({
    params: { slug: item.sys.id },
  }));

  return {
    paths: slug,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const singleCasestudyData = await client.query(getSingleCasestudy(params.slug));
  const data = singleCasestudyData.data.singleCaseStudy;

  let nextCasestudyData;
  const nextId = data.nextCasestudyId;
  if (nextId) {
    nextCasestudyData = await client.query(getSingleCasestudy(nextId));
  } else {
    nextCasestudyData = {
      data: { singleCaseStudy: { thumbnail: null, colorText: null } },
    };
  }

  const heroSectionData = {
    year: data.casestudyYear,
    colorText: data.colorText,
    mainTitle: data.mainTitle,
    deliverables: data.deliverables,
    brandColor: data.brandColor,
    largeImage: data.largeImage,
    heroSectionLaptop: data.heroSectionLaptop,
    heroSectionMobile: data.heroSectionMobile,
    heroSectionContent: data.heroSectionContent,
    websiteLink: data.websiteLink,
    appStoreLink: data.appStoreLink,
    playstoreLink: data.playstoreLInk,
  };
  const designTechCollection = data.designTechCollection.items;
  const frontendTechCollection = data.frontendTechCollection.items;
  const backendTechCollection = data.backendTechCollection.items;
  const analyticsTechCollection = data.analyticsTechCollection.items;

  const techStackData = [
    designTechCollection,
    frontendTechCollection,
    backendTechCollection,
    analyticsTechCollection,
  ];

  const casestudyTimelineData = {
    timeline: data.projectTimelineYear,
    image: data.timelineImage,
  };

  const casestudyProcessData = {
    title: data.theProcess.title,
    subTitle: data.theProcess.subTitle,
    description: data.theProcess.description,
    content: data.theProcess.boldListItemsCollection,
  };

  const problemSolvingData = {
    title: data.problemSolvingContent.title,
    description: data.problemSolvingContent.description,
    content: data.problemSolvingContent.boldListItemsCollection,
    image: data.problemSolvingImage,
    iFrame: data.iFrameLink,
  };

  const caseStudyUiData = {
    imageData: data.uiImagesCollection.items,
    isLaptop: data.isUiLaptopImage,
  };

  const roadMapData = data.roadmapSlideCollection.items;
  const competitionData = data.competitionAnalysisCollection.items;
  const featuresData = data.featuresCollection.items;

  let componentFileData = null;
  if (data.componentBehaviour) {
    componentFileData = {
      title: data.componentBehaviour.content.title,
      description: data.componentBehaviour.content.description,
      image: data.componentBehaviour.image,
      isReversed: data.componentBehaviour.isReversed,
      normalDesc: data.componentBehaviour.normalDesc,
    };
  }
  let userInterviewData = null;
  if (data.userInterview) {
    userInterviewData = {
      title: data.userInterview.content.title,
      description: data.userInterview.content.description,
      image: data.userInterview.image,
      isReversed: data.userInterview.isReversed,
      normalDesc: data.userInterview.normalDesc,
    };
    if (data.userInterviewImage) {
      userInterviewData.userInterviewImage = data.userInterviewImage;
    }
  }

  return {
    props: {
      data,
      heroSectionData,
      techStackData,
      casestudyTimelineData,
      casestudyProcessData,
      casestudyUXData: data.uxImageCollection.items,
      casestudyUXContent: data.uxContentCollection.items,
      casestudyUIData: caseStudyUiData,
      problemSolvingData,
      challengesData: data.challengesCollection.items,
      roadMapData,
      competitionData,
      featuresData,
      designFileData: data.designFile,
      componentFileData,
      userInterviewData,
      achievementData: data.achievementsCollection.items,
      thumbnail: nextCasestudyData.data.singleCaseStudy.thumbnail,
      path: nextId ? nextId : null,
      nextCasestudyTitle: nextCasestudyData.data.singleCaseStudy.colorText,
      password: data.password,
    },
  };
}

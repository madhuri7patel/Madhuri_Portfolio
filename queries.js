import { gql } from "@apollo/client";

export const getSingleJob = (id) => ({
  query: gql`
    query {
      singleJobPage(id: "${id}") {
        jobTitle {
          title
        }
        jobDescription {
          json
        }
        buttonLink
      }
    }
  `,
});

export const getAllJobs = () => ({
  query: gql`
    query {
      singleJobPageCollection(limit: 10) {
        items {
          sys {
            id
          }
          jobTitle {
            title
          }
          jobDescription {
            json
          }
          buttonLink
        }
      }
    }
  `,
});

export const allJobsHeading = () => ({
  query: gql`
    query {
      headingCollection(limit: 10) {
        items {
          sys {
            id
          }
          title
        }
      }
    }
  `,
});

export const getAllCasestudies = () => ({
  query: gql`
    query {
      singleCaseStudyCollection {
        items {
          sys {
            id
          }
        }
      }
    }
  `,
});

export const getSingleCasestudy = (id) => ({
  query: gql`
    query {
      singleCaseStudy(id: "${id}") {
        casestudyYear
        colorText
        mainTitle
        deliverables
        brandColor
        largeImage {
          url
          width
          height
        }
        heroSectionLaptop {
          url
          width
          height
        }
        heroSectionMobile {
          url
          width
          height
        }
        heroSectionContent {
          title
          subTitle
          description
          boldListItemsCollection(limit: 6) {
            items {
              boldTitle
              content
            }
          }
        }
        websiteLink{
          jobTitle
          link
        }
        appStoreLink{
          jobTitle
          link
        }
        playstoreLInk{
          jobTitle
          link
        }
        designTechCollection(limit: 4) {
          items {
            techName
            techLogo {
              url
              width
              height
            }
          }
        }
        frontendTechCollection(limit: 8) {
          items {
            techName
            techLogo {
              url
              width
              height
            }
          }
        }
        backendTechCollection(limit: 9) {
          items {
            techName
            techLogo {
              url
              width
              height
            }
          }
        }
        analyticsTechCollection(limit: 4) {
          items {
            techName
            techLogo {
              url
              width
              height
            }
          }
        }
        projectTimelineYear
        timelineImage {
          url
          width
          height
        }
        theProcess {
          title
          subTitle
          description
          boldListItemsCollection(limit: 6) {
            items {
              boldTitle
              bigContent
            }
          }
        }
        uxImageCollection(limit: 5) {
          items {
            url
            width
            height
          }
        }
        uxContentCollection(limit: 3) {
          items {
            title
            description
          }
        }
        uiImagesCollection(limit: 2) {
          items {
            url
            width
            height
          }
        }
        isUiLaptopImage
        problemSolvingContent {
          title
          description
          boldListItemsCollection(limit: 6) {
            items {
              boldTitle
              content
            }
          }
        }
        problemSolvingImage {
          url
          width
          height
          
        }
        iFrameLink
        challengesCollection(limit: 3) {
          items {
            title
            description
          }
        }
        roadmapSlideCollection(limit: 5) {
          items {
            firstColumnTitle
            columnsCollection {
              items {
                text
                isColoured
                width
              }
            }
          }
        }
        competitionAnalysisCollection(limit: 3) {
          items {
            image {
              url
              width
              height
            }
            content {
              listItems
            }
          }
        }
        featuresCollection(limit: 3) {
          items {
            image {
              url
              width
              height
            }
            content {
              title
              boldListItemsCollection(limit: 6) {
                items {
                  boldTitle
                  content
                }
              }
              listItems
            }
            isReversed
            normalDesc
          }
        }
        designFile {
          url
          width
          height
        }
        componentBehaviour {
          image {
            url
            width
            height
          }
          content {
            title
            description
          }
          isReversed
          normalDesc
        }
        userInterview {
          image {
            url
            width
            height
          }
          content {
            title
            description
          }
          isReversed
          normalDesc
        }
        userInterviewImage {
          url
          width
          height
        }
        achievementsCollection(limit: 4) {
          items {
            title
            description
            listItems
          }
        }
        nextCasestudyId
        thumbnail{
          url
          width
          height
        }
        password
      }
    }
  `,
});

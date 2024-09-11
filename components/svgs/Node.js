import * as React from 'react';

const Node = (props) => (
  <svg
    width={62}
    height={65}
    viewBox="0 0 62 65"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M28.5282 1.7446C30.2 0.846019 32.3731 0.84985 34.0368 1.76466C42.407 6.28421 50.7799 10.7967 59.1486 15.319C60.7227 16.1663 61.7716 17.8328 61.7492 19.5542L61.6508 46.5617C61.656 48.3545 60.4907 50.0527 58.8238 50.8691C50.4485 55.3029 42.0776 59.7421 33.7037 64.1759C31.9974 65.0921 29.7809 65.013 28.1348 64.009C25.6338 62.6237 23.1285 61.2452 20.6272 59.8613C20.1161 59.5702 19.5397 59.3379 19.1797 58.8662C19.5009 58.4592 20.0727 58.4104 20.5378 58.2339C21.585 57.9226 22.5476 57.4203 23.5104 56.933C23.7539 56.7764 24.0504 56.8378 24.2828 56.9797C26.4215 58.1514 28.5412 59.3568 30.6871 60.5175C31.1449 60.77 31.6106 60.4386 32.0034 60.233C40.2221 55.8713 48.4509 51.5262 56.6682 47.1631C56.9726 47.0257 57.1417 46.7208 57.1181 46.4054C57.1563 37.4962 57.1845 28.5854 57.2184 19.6762C57.2544 19.3185 57.0371 18.9888 56.6961 18.8411C48.3823 14.3669 40.0728 9.88598 31.7605 5.41068C31.6165 5.31618 31.4458 5.26514 31.2707 5.26426C31.0956 5.26338 30.9243 5.3127 30.7794 5.40574C22.4346 9.82172 14.0941 14.2461 5.7494 18.6594C5.40856 18.8048 5.179 19.1274 5.21819 19.4867C5.18717 28.3959 5.15327 37.3067 5.1208 46.2173C5.1058 46.3711 5.14091 46.5256 5.22141 46.6599C5.3019 46.7943 5.42391 46.9021 5.57101 46.9688C7.78917 48.1707 10.0102 49.3643 12.2299 50.5622C13.4804 51.2056 15.0174 51.5908 16.3995 51.1064C17.6192 50.6969 18.4773 49.5225 18.4585 48.2972C18.5023 39.4401 18.5173 30.5814 18.564 21.7256C18.535 21.3323 18.9299 21.0089 19.3333 21.0474C20.4012 21.0444 21.4706 21.0415 22.5384 21.0618C22.9842 21.0539 23.2894 21.4784 23.2328 21.8743C23.1961 30.7876 23.1794 39.7011 23.1282 48.6144C23.1224 50.9899 22.0828 53.5709 19.759 54.7248C16.8963 56.1166 13.3654 55.8064 10.5472 54.4515C8.10749 53.2871 5.78018 51.9149 3.38412 50.6682C1.7189 49.8442 0.571689 48.1308 0.589958 46.3395L0.688353 19.3317C0.67726 17.5746 1.7803 15.8857 3.40959 15.0624C11.7834 10.6249 20.1558 6.18408 28.5282 1.7446Z"
      fill="#8CC84B"
    />
    <path
      d="M35.7512 20.4794C39.397 20.2704 43.2989 20.3752 46.5728 22.0882C49.1076 23.401 50.5056 26.1418 50.5407 28.8147C50.4685 29.1749 50.0699 29.3723 49.7067 29.3462C48.6491 29.341 47.5912 29.3522 46.5337 29.3279C46.0851 29.3426 45.8258 28.9498 45.7708 28.5739C45.4716 27.294 44.74 26.0248 43.4716 25.4034C41.5245 24.4712 39.2627 24.5095 37.1358 24.521C35.5828 24.5935 33.9127 24.7147 32.5941 25.5749C31.5818 26.2264 31.2703 27.5478 31.6268 28.6143C31.9639 29.3804 32.8949 29.6305 33.6567 29.8608C38.0455 30.9651 42.7009 30.8738 47.0045 32.3217C48.7864 32.9121 50.5274 34.0535 51.1315 35.8251C51.9217 38.1994 51.5612 41.0326 49.7732 42.9299C48.3231 44.4913 46.2164 45.3363 44.1165 45.7917C41.3232 46.3711 38.4265 46.3756 35.5929 46.1035C32.9285 45.8059 30.1572 45.1325 28.1059 43.4047C26.3516 41.951 25.5005 39.6929 25.5937 37.5169C25.6154 37.1494 26.0027 36.8945 26.3743 36.9261C27.4393 36.9218 28.5043 36.9229 29.5693 36.9391C29.9947 36.9118 30.3089 37.2612 30.3293 37.641C30.5214 38.8602 31.0001 40.1407 32.119 40.8671C34.2787 42.1978 36.995 42.1172 39.4733 42.1632C41.5269 42.0844 43.832 42.0667 45.5123 40.7872C46.399 40.0572 46.6654 38.8313 46.4304 37.7751C46.1748 36.8831 45.1923 36.4643 44.3483 36.1897C40.0165 34.8745 35.3079 35.3288 31.0187 33.8437C29.2774 33.2537 27.5955 32.1441 26.9318 30.4449C26.0059 28.0401 26.445 25.0714 28.4195 23.2391C30.3448 21.4163 33.117 20.7218 35.7512 20.4792L35.7512 20.4794Z"
      fill="#8CC84B"
    />
  </svg>
);
export default Node;

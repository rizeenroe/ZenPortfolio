import React, { useState } from 'react';

const projects = [
   {
      id: 1,
      title: "Twitter Clone",
      image: "/images/projects/twitter-clone.png",
      description: "Twitter Clone - A full-stack social media app.",
   },
   {
      id: 2,
      title: "Discord Bot",
      image: "/images/projects/puniyo-bot.png",
      description: "Discord Bot - A node.js bot for a discord server.",
   },
   {
      id: 3,
      title: "Project 3",
      image: "/images/projects/japanese-api.png",
      description: "API Development - A express rest API I use to review japanese, and also use it on the Discord Bot.",
   },
   {
      id: 4,
      title: "Project 4",
      image: "/images/projects/chat-system.png",
      description: "Chat System - A Flask backend, and a React frontend that enables chatting between 1 user or more.",
   },
   {
      id: 5,
      title: "Project 5",
      image: "/images/projects/coming-soon.png",
      description: "Coming Soon",
   },
   {
      id: 6,
      title: "Project 6",
      image: "/images/projects/coming-soon.png",
      description: "Coming Soon",
   },
];

const Home = () => {
   const [modalOpen, setModalOpen] = useState(false);
   const [modalContent, setModalContent] = useState({});
   const [isSubmitted, setIsSubmitted] = useState(false);

   const openModal = (project) => {
      setModalContent(project);
      setModalOpen(true);
   };

   const closeModal = () => {
      setModalOpen(false);
   };

   const handleSubmit = (e) => {
      e.preventDefault(); 

      setIsSubmitted(true);

      setTimeout(() => {
          document.getElementById("contactForm").submit();
      }, 1000);

      setTimeout(() => {
         setIsSubmitted(false);
     }, 3000);
  };

   return(
      <main>
         <section className="homeProfile" id="home">
            <div className='homeContainer'>
               <div className='homeProfileInfo'>
                  <div className="homeProfileBoxes" id='welcomeMessage'>
                     {/* <h1 className='homeTitle'>Hi,<br></br>I'am <span className='titleName'>Rizeen Roe</span><br></br>Full Stack Developer</h1> */}
                     <h1 className='homeTitle' id='welcomeMessage'>Hi, I'am <br></br><span className='titleName'>Rizeen Roe Peralta</span><br></br>Full Stack Developer</h1>
                  </div>
                  <div className='homeProfileBoxes' id='contactButtonContainer' style={{ gridArea: 'profileBox-2' }}>
                     <a href='#contacts' id='profileContactButton'>
                        <button id='contactButton' >
                           <span>Contact</span>
                        </button>
                     </a>
                  </div>
                  <div className='homeProfileBoxes' id='socials' style={{ gridArea: 'profileBox-3' }}>
                     <a href='https://www.linkedin.com/in/rizeenroeperalta/' className='homeSocial-icon'>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                           <path fill="#0288D1" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"></path><path fill="#FFF" d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"></path>
                        </svg>
                     </a>
                     <a href='https://www.youtube.com/@ZenZxnZen' className='homeSocial-icon'>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                           <path fill="#FF3D00" d="M43.2,33.9c-0.4,2.1-2.1,3.7-4.2,4c-3.3,0.5-8.8,1.1-15,1.1c-6.1,0-11.6-0.6-15-1.1c-2.1-0.3-3.8-1.9-4.2-4C4.4,31.6,4,28.2,4,24c0-4.2,0.4-7.6,0.8-9.9c0.4-2.1,2.1-3.7,4.2-4C12.3,9.6,17.8,9,24,9c6.2,0,11.6,0.6,15,1.1c2.1,0.3,3.8,1.9,4.2,4c0.4,2.3,0.9,5.7,0.9,9.9C44,28.2,43.6,31.6,43.2,33.9z"></path><path fill="#FFF" d="M20 31L20 17 32 24z"></path>
                        </svg>
                     </a>
                     <a href='https://github.com/rizeenroe' className='homeSocial-icon'>
                        <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                           <path fill-rule="evenodd" clip-rule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" fill="#fff"/>
                        </svg>
                     </a>
                  </div>
               </div>
               <div className='homeProfileBoxes' id='profilePicture' style={{ gridArea: 'profileBox-4' }}>
                  {/* <img src='/images/image-removebg-preview.png'alt='pfp'></img> */}
                  <img src='/images/pfp-h2-grad-no-bg.png'alt='pfp'></img>
               </div>  
            </div>
         </section>


         <section className='aboutProfile' id='aboutMe'>
            <div className='aboutContainer'>
               <div className='about-1'>
                  <h1 id='profileTitle'>About Me</h1>
                  <p>
                  Hi, I'm Rizeen Roe Peralta, 
                  a passionate Full Stack Developer with a love for crafting seamless digital experiences.<br></br> 
                  I specialize in building robust web applications using React, Express.js, Spring Boot, and Firebase Firestore,<br></br> 
                  ensuring efficient backend logic and dynamic frontend interactions.
                  </p><br></br>
                  <p>
                  Beyond coding, I'm an avid anime and retro gaming enthusiast,<br></br> 
                  always on the lookout for new adventures in the tech world and beyond.<br></br> 
                  My curiosity drives me to constantly learn and innovate, whether it's developing a Discord bot,<br></br>
                  improving network programming skills, or exploring new frameworks.<br></br>               
                  </p><br></br>
                  <p>
                  Currently, I'm working on exciting projects like a React + Flask chat system and<br></br> 
                  continuously refining my skills in software security, API development, and database management.<br></br> 
                  I believe in clean, scalable code, and I enjoy collaborating on meaningful projects that make an<br></br> 
                  impact.               
                  </p><br></br>
                  <p>
                  Let's connect and build something amazing together!         
                  </p><br></br>
               </div>
            </div>
         </section>


         <section className='skillsProfile' id='skills'>
            <div className='skillsContainer'>
               <div className='skillsProfileTitle'>
                  <h1 id='profileTitle'>My Skills</h1>
               </div>
                  <div className='skillsListContainer'>
                     <div className="skillsBoxes">
                           <div>
                              <svg
                              width="100"
                              height="100"
                              viewBox="0 0 256 256"
                              xmlns="http://www.w3.org/2000/svg"
                              preserveAspectRatio="xMidYMid"
                              >
                              <g>
                                 <path d="M0,0 L256,0 L256,256 L0,256 L0,0 Z" fill="#F7DF1E" />
                                 <path
                                    d="M67.311746,213.932292 L86.902654,202.076241 C90.6821079,208.777346 94.1202286,214.447137 102.367086,214.447137 C110.272203,214.447137 115.256076,211.354819 115.256076,199.326883 L115.256076,117.528787 L139.313575,117.528787 L139.313575,199.666997 C139.313575,224.58433 124.707759,235.925943 103.3984,235.925943 C84.1532952,235.925943 72.9819429,225.958603 67.3113397,213.93026"
                                    fill="#000000"
                                 />
                                 <path
                                    d="M152.380952,211.354413 L171.969422,200.0128 C177.125994,208.433981 183.827911,214.619835 195.684368,214.619835 C205.652521,214.619835 212.009041,209.635962 212.009041,202.762159 C212.009041,194.513676 205.479416,191.592025 194.481168,186.78207 L188.468419,184.202565 C171.111213,176.81473 159.597308,167.53534 159.597308,147.944838 C159.597308,129.901308 173.344508,116.153295 194.825752,116.153295 C210.119924,116.153295 221.117765,121.48094 229.021663,135.400432 L210.29059,147.428775 C206.166146,140.040127 201.699556,137.119289 194.826159,137.119289 C187.78047,137.119289 183.312254,141.587098 183.312254,147.428775 C183.312254,154.646349 187.78047,157.568406 198.089956,162.036622 L204.103924,164.614095 C224.553448,173.378641 236.067352,182.313448 236.067352,202.418387 C236.067352,224.071924 219.055137,235.927975 196.200432,235.927975 C173.860978,235.927975 159.425829,225.274311 152.381359,211.354413"
                                    fill="#000000"
                                 />
                              </g>
                              </svg>
                           </div>
                           <div className='skillsBoxesTitle'>
                              <div>
                                 <h1>JavaScript<br></br>
                                    Express
                                 </h1>
                              </div>
                           </div>
                     </div>
                     <div className='skillsBoxes'>
                           <div>
                              <svg viewBox="-47.5 0 351 351" preserveAspectRatio="xMidYMid" fill="#000000">
                                 <defs>
                                    <path id="path-1" d="M1.25273437,280.731641 L2.85834533,277.600858 L102.211177,89.0833546 L58.0613266,5.6082033 C54.3920011,-1.28304578 45.0741245,0.473674398 43.8699203,8.18789086 L1.25273437,280.731641 Z"/>
                                    <filter id="filter-2" x="-50%" y="-50%" width="200%" height="200%" filterUnits="objectBoundingBox">
                                       <feGaussianBlur stdDeviation="17.5" in="SourceAlpha" result="shadowBlurInner1"/>
                                       <feOffset dx="0" dy="0" in="shadowBlurInner1" result="shadowOffsetInner1"/>
                                       <feComposite in="shadowOffsetInner1" in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="shadowInnerInner1"/>
                                       <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" type="matrix" in="shadowInnerInner1"/>
                                    </filter>
                                 </defs>
                                 <g>
                                    <path d="M0,282.99762 L2.12250746,280.0256 L102.527363,89.5119284 L102.739423,87.4951323 L58.478806,4.35817711 C54.7706269,-2.60604179 44.3313035,-0.845245771 43.1143483,6.95065473 L0,282.99762 Z" fill="#FFC24A"/>
                                    <g>
                                       <use fill="#FFA712" fill-rule="evenodd" xlinkHref="#path-1"/>
                                       <use fill="#000000" fill-opacity="1" filter="url(#filter-2)" xlinkHref="#path-1"/>
                                    </g>
                                    <path d="M135.004975,150.380704 L167.960199,116.629461 L134.995423,53.6993114 C131.866109,47.7425353 123.128817,47.7253411 120.032618,53.6993112 L102.421015,87.2880848 L102.421015,90.1487443 L135.004975,150.380704 Z" fill="#F4BD62"/>
                                    <g>
                                       <use fill="#FFA50E" fill-rule="evenodd" xlinkHref="#path-3"/>
                                       <use fill="#000000" fill-opacity="1" filter="url(#filter-4)" xlinkHref="#path-3"/>
                                    </g>
                                    <polygon fill="#F6820C" points="0 282.99762 0.962097168 282.030396 4.45771144 280.60956 132.935323 152.60956 134.563025 148.178595 102.513123 87.1048584"/>
                                    <path d="M139.120971,347.551268 L255.395916,282.703666 L222.191698,78.2093373 C221.153051,71.8112478 213.303658,69.2818149 208.724314,73.8694368 L0.000254726368,282.997875 L115.608454,347.545536 C122.914643,351.624979 131.812872,351.62689 139.120971,347.551268" fill="#FDE068"/>
                                    <path d="M254.354084,282.159837 L221.401937,79.2179369 C220.371175,72.8684188 213.843792,70.2409553 209.299213,74.79375 L1.28945312,282.600785 L115.627825,346.509458 C122.878548,350.557931 131.709226,350.559827 138.961846,346.515146 L254.354084,282.159837 Z" fill="#FCCA3F"/>
                                    <path d="M139.120907,345.64082 C131.812808,349.716442 122.914579,349.714531 115.60839,345.635089 L0.93134768,282.014551 L0.000191044776,282.997875 L115.60839,347.545536 C122.914579,351.624979 131.812808,351.62689 139.120907,347.551268 L255.395853,282.703666 L255.111196,280.951785 L139.120907,345.64082 Z" fill="#EEAB37"/>
                                 </g>
                              </svg>
                           </div>
                           <div className='skillsBoxesTitle'>
                              <div>
                                 <h1>
                                    FireBase
                                 </h1>
                              </div>
                           </div>
                     </div>
                     <div className='skillsBoxes'>
                           <svg width="800px" height="800px" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M18.6789 15.9759C18.6789 14.5415 17.4796 13.3785 16 13.3785C14.5206 13.3785 13.3211 14.5415 13.3211 15.9759C13.3211 17.4105 14.5206 18.5734 16 18.5734C17.4796 18.5734 18.6789 17.4105 18.6789 15.9759Z" fill="#53C1DE"/>
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M24.7004 11.1537C25.2661 8.92478 25.9772 4.79148 23.4704 3.39016C20.9753 1.99495 17.7284 4.66843 16.0139 6.27318C14.3044 4.68442 10.9663 2.02237 8.46163 3.42814C5.96751 4.82803 6.73664 8.8928 7.3149 11.1357C4.98831 11.7764 1 13.1564 1 15.9759C1 18.7874 4.98416 20.2888 7.29698 20.9289C6.71658 23.1842 5.98596 27.1909 8.48327 28.5877C10.9973 29.9932 14.325 27.3945 16.0554 25.7722C17.7809 27.3864 20.9966 30.0021 23.4922 28.6014C25.9956 27.1963 25.3436 23.1184 24.7653 20.8625C27.0073 20.221 31 18.7523 31 15.9759C31 13.1835 26.9903 11.7923 24.7004 11.1537ZM24.4162 19.667C24.0365 18.5016 23.524 17.2623 22.8971 15.9821C23.4955 14.7321 23.9881 13.5088 24.3572 12.3509C26.0359 12.8228 29.7185 13.9013 29.7185 15.9759C29.7185 18.07 26.1846 19.1587 24.4162 19.667ZM22.85 27.526C20.988 28.571 18.2221 26.0696 16.9478 24.8809C17.7932 23.9844 18.638 22.9422 19.4625 21.7849C20.9129 21.6602 22.283 21.4562 23.5256 21.1777C23.9326 22.7734 24.7202 26.4763 22.85 27.526ZM9.12362 27.5111C7.26143 26.47 8.11258 22.8946 8.53957 21.2333C9.76834 21.4969 11.1286 21.6865 12.5824 21.8008C13.4123 22.9332 14.2816 23.9741 15.1576 24.8857C14.0753 25.9008 10.9945 28.557 9.12362 27.5111ZM2.28149 15.9759C2.28149 13.874 5.94207 12.8033 7.65904 12.3326C8.03451 13.5165 8.52695 14.7544 9.12123 16.0062C8.51925 17.2766 8.01977 18.5341 7.64085 19.732C6.00369 19.2776 2.28149 18.0791 2.28149 15.9759ZM9.1037 4.50354C10.9735 3.45416 13.8747 6.00983 15.1159 7.16013C14.2444 8.06754 13.3831 9.1006 12.5603 10.2265C11.1494 10.3533 9.79875 10.5569 8.55709 10.8297C8.09125 9.02071 7.23592 5.55179 9.1037 4.50354ZM20.3793 11.5771C21.3365 11.6942 22.2536 11.85 23.1147 12.0406C22.8562 12.844 22.534 13.6841 22.1545 14.5453C21.6044 13.5333 21.0139 12.5416 20.3793 11.5771ZM16.0143 8.0481C16.6054 8.66897 17.1974 9.3623 17.7798 10.1145C16.5985 10.0603 15.4153 10.0601 14.234 10.1137C14.8169 9.36848 15.414 8.67618 16.0143 8.0481ZM9.8565 14.5444C9.48329 13.6862 9.16398 12.8424 8.90322 12.0275C9.75918 11.8418 10.672 11.69 11.623 11.5748C10.9866 12.5372 10.3971 13.5285 9.8565 14.5444ZM11.6503 20.4657C10.6679 20.3594 9.74126 20.2153 8.88556 20.0347C9.15044 19.2055 9.47678 18.3435 9.85796 17.4668C10.406 18.4933 11.0045 19.4942 11.6503 20.4657ZM16.0498 23.9915C15.4424 23.356 14.8365 22.6531 14.2448 21.8971C15.4328 21.9423 16.6231 21.9424 17.811 21.891C17.2268 22.6608 16.6369 23.3647 16.0498 23.9915ZM22.1667 17.4222C22.5677 18.3084 22.9057 19.1657 23.1742 19.9809C22.3043 20.1734 21.3652 20.3284 20.3757 20.4435C21.015 19.4607 21.6149 18.4536 22.1667 17.4222ZM18.7473 20.5941C16.9301 20.72 15.1016 20.7186 13.2838 20.6044C12.2509 19.1415 11.3314 17.603 10.5377 16.0058C11.3276 14.4119 12.2404 12.8764 13.2684 11.4158C15.0875 11.2825 16.9178 11.2821 18.7369 11.4166C19.7561 12.8771 20.6675 14.4086 21.4757 15.9881C20.6771 17.5812 19.7595 19.1198 18.7473 20.5941ZM22.8303 4.4666C24.7006 5.51254 23.8681 9.22726 23.4595 10.8426C22.2149 10.5641 20.8633 10.3569 19.4483 10.2281C18.6239 9.09004 17.7698 8.05518 16.9124 7.15949C18.1695 5.98441 20.9781 3.43089 22.8303 4.4666Z" fill="#53C1DE"/>
                           </svg>
                           <div className='skillsBoxesTitle'>
                              <div>
                                 <h1>React<br></br>
                                    React Native
                                 </h1>
                              </div>
                           </div>
                     </div>
                     <div className='skillsBoxes'>
                           <div>
                           <svg width="800px" height="800px" viewBox="-118.513 4.399 540.906 540.906" xmlns="http://www.w3.org/2000/svg"><path d="M285.104 430.945h-2.037v-1.14h5.486v1.14h-2.025v5.688h-1.424v-5.688zm10.942.297h-.032l-2.02 5.393h-.924l-2.006-5.393h-.024v5.393h-1.343v-6.828h1.976l1.86 4.835 1.854-4.835h1.969v6.828h-1.311l.001-5.393z" fill="#e76f00"/><path d="M102.681 291.324s-14.178 8.245 10.09 11.035c29.4 3.354 44.426 2.873 76.825-3.259 0 0 8.518 5.341 20.414 9.967-72.63 31.128-164.376-1.803-107.329-17.743M93.806 250.704s-15.902 11.771 8.384 14.283c31.406 3.24 56.208 3.505 99.125-4.759 0 0 5.937 6.018 15.271 9.309-87.815 25.678-185.624 2.025-122.78-18.833" fill="#5382a1"/><path d="M168.625 181.799c17.896 20.604-4.701 39.146-4.701 39.146s45.439-23.458 24.571-52.833c-19.491-27.395-34.438-41.005 46.479-87.934.001-.001-127.013 31.721-66.349 101.621" fill="#e76f00"/><path d="M264.684 321.369s10.492 8.646-11.555 15.333c-41.923 12.7-174.488 16.535-211.314.507-13.238-5.76 11.587-13.752 19.396-15.429 8.144-1.766 12.798-1.437 12.798-1.437-14.722-10.371-95.157 20.363-40.857 29.166 148.084 24.015 269.944-10.814 231.532-28.14M109.499 208.617s-67.431 16.016-23.879 21.832c18.389 2.462 55.047 1.905 89.192-.956 27.906-2.354 55.928-7.358 55.928-7.358s-9.84 4.214-16.959 9.074c-68.475 18.01-200.756 9.631-162.674-8.79 32.206-15.568 58.392-13.802 58.392-13.802M230.462 276.231c69.608-36.171 37.425-70.932 14.96-66.248-5.506 1.146-7.961 2.139-7.961 2.139s2.045-3.202 5.947-4.588c44.441-15.624 78.619 46.081-14.346 70.521 0 0 1.079-.962 1.4-1.824" fill="#5382a1"/><path d="M188.495 4.399s38.55 38.562-36.563 97.862c-60.233 47.567-13.735 74.689-.025 105.678-35.158-31.723-60.96-59.647-43.65-85.637 25.406-38.151 95.792-56.648 80.238-117.903" fill="#e76f00"/><path d="M116.339 374.246c66.815 4.277 169.417-2.373 171.846-33.987 0 0-4.67 11.984-55.219 21.503-57.027 10.731-127.364 9.479-169.081 2.601.002-.002 8.541 7.067 52.454 9.883" fill="#5382a1"/><path d="M105.389 495.049c-6.303 5.467-12.96 8.536-18.934 8.536-8.527 0-13.134-5.113-13.134-13.314 0-8.871 4.937-15.357 24.739-15.357h7.328l.001 20.135m17.392 19.623V453.93c0-15.518-8.85-25.756-30.188-25.756-12.457 0-23.369 3.076-32.238 6.999l2.56 10.752c6.983-2.563 16.022-4.949 24.894-4.949 12.292 0 17.58 4.949 17.58 15.181v7.678h-6.135c-29.865 0-43.337 11.593-43.337 28.993 0 15.018 8.878 23.554 25.594 23.554 10.745 0 18.766-4.437 26.264-10.929l1.361 9.221 13.645-.002zM180.824 514.672h-21.691l-26.106-84.96h18.944l16.198 52.199 3.601 15.699c8.195-22.698 13.992-45.726 16.891-67.898h18.427c-4.938 27.976-13.822 58.684-26.264 84.96M264.038 495.049c-6.315 5.467-12.983 8.536-18.958 8.536-8.512 0-13.131-5.113-13.131-13.314 0-8.871 4.947-15.357 24.748-15.357h7.341v20.135m17.39 19.623V453.93c0-15.518-8.871-25.756-30.186-25.756-12.465 0-23.381 3.076-32.246 6.999l2.557 10.752c6.985-2.563 16.041-4.949 24.906-4.949 12.283 0 17.579 4.949 17.579 15.181v7.678h-6.146c-29.873 0-43.34 11.593-43.34 28.993 0 15.018 8.871 23.554 25.584 23.554 10.752 0 18.77-4.437 26.28-10.929l1.366 9.221 13.646-.002zM36.847 529.099c-4.958 7.239-12.966 12.966-21.733 16.206L6.527 535.2c6.673-3.424 12.396-8.954 15.055-14.104 2.3-4.581 3.252-10.485 3.252-24.604v-96.995h18.478v95.666c-.001 18.875-1.51 26.5-6.465 33.936" fill="#e76f00"/></svg>
                           </div>
                           <div className='skillsBoxesTitle'>
                              <div>
                                 <h1>Java</h1>
                              </div>
                           </div>
                     </div>
                     <div className='skillsBoxes'>
                        <div>
                           <svg width="800px" height="800px" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M6 28L4 3H28L26 28L16 31L6 28Z" fill="#E44D26"/>
                           <path d="M26 5H16V29.5L24 27L26 5Z" fill="#F16529"/>
                           <path d="M9.5 17.5L8.5 8H24L23.5 11H11.5L12 14.5H23L22 24L16 26L10 24L9.5 19H12.5L13 21.5L16 22.5L19 21.5L19.5 17.5H9.5Z" fill="white"/>
                           </svg>
                        </div>
                        <div className='skillsBoxesTitle'>
                           <div>
                              <h1>Html</h1>
                           </div>
                        </div>                                        
                     </div>
                     <div className='skillsBoxes'>
                        <div>
                           <svg width="800px" height="800px" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M6 28L4 3H28L26 28L16 31L6 28Z" fill="#1172B8"/>
                              <path d="M26 5H16V29.5L24 27L26 5Z" fill="#33AADD"/>
                              <path d="M19.5 17.5H9.5L9 14L17 11.5H9L8.5 8.5H24L23.5 12L17 14.5H23L22 24L16 26L10 24L9.5 19H12.5L13 21.5L16 22.5L19 21.5L19.5 17.5Z" fill="white"/>
                           </svg>
                        </div>
                        <div className='skillsBoxesTitle'>
                           <div>
                              <h1>CSS</h1>
                           </div>
                        </div>
                     </div>
                     <div className='skillsBoxes'>
                        <div>
                           <svg width="800px" height="800px" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M13.0164 2C10.8193 2 9.03825 3.72453 9.03825 5.85185V8.51852H15.9235V9.25926H5.97814C3.78107 9.25926 2 10.9838 2 13.1111L2 18.8889C2 21.0162 3.78107 22.7407 5.97814 22.7407H8.27322V19.4815C8.27322 17.3542 10.0543 15.6296 12.2514 15.6296H19.5956C21.4547 15.6296 22.9617 14.1704 22.9617 12.3704V5.85185C22.9617 3.72453 21.1807 2 18.9836 2H13.0164ZM12.0984 6.74074C12.8589 6.74074 13.4754 6.14378 13.4754 5.40741C13.4754 4.67103 12.8589 4.07407 12.0984 4.07407C11.3378 4.07407 10.7213 4.67103 10.7213 5.40741C10.7213 6.14378 11.3378 6.74074 12.0984 6.74074Z" fill="url(#paint0_linear_87_8204)"/>
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M18.9834 30C21.1805 30 22.9616 28.2755 22.9616 26.1482V23.4815L16.0763 23.4815L16.0763 22.7408L26.0217 22.7408C28.2188 22.7408 29.9998 21.0162 29.9998 18.8889V13.1111C29.9998 10.9838 28.2188 9.25928 26.0217 9.25928L23.7266 9.25928V12.5185C23.7266 14.6459 21.9455 16.3704 19.7485 16.3704L12.4042 16.3704C10.5451 16.3704 9.03809 17.8296 9.03809 19.6296L9.03809 26.1482C9.03809 28.2755 10.8192 30 13.0162 30H18.9834ZM19.9015 25.2593C19.1409 25.2593 18.5244 25.8562 18.5244 26.5926C18.5244 27.329 19.1409 27.9259 19.9015 27.9259C20.662 27.9259 21.2785 27.329 21.2785 26.5926C21.2785 25.8562 20.662 25.2593 19.9015 25.2593Z" fill="url(#paint1_linear_87_8204)"/>
                              <defs>
                              <linearGradient id="paint0_linear_87_8204" x1="12.4809" y1="2" x2="12.4809" y2="22.7407" gradientUnits="userSpaceOnUse">
                              <stop stop-color="#327EBD"/>
                              <stop offset="1" stop-color="#1565A7"/>
                              </linearGradient>
                              <linearGradient id="paint1_linear_87_8204" x1="19.519" y1="9.25928" x2="19.519" y2="30" gradientUnits="userSpaceOnUse">
                              <stop stop-color="#FFDA4B"/>
                              <stop offset="1" stop-color="#F9C600"/>
                              </linearGradient>
                              </defs>
                           </svg>
                        </div>
                        <div className='skillsBoxesTitle'>
                           <div>
                              <h1>Python</h1>
                           </div>
                        </div>
                     </div>
                     <div className='skillsBoxes'>
                        <div>
                           <svg
                              width="800px"
                              height="800px"
                              viewBox="0 0 512 512"
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                           >
                              <path fill="#E2E5E7" d="M128,0c-17.6,0-32,14.4-32,32v448c0,17.6,14.4,32,32,32h320c17.6,0,32-14.4,32-32V128L352,0H128z" />
                              <path fill="#B0B7BD" d="M384,128h96L352,0v96C352,113.6,366.4,128,384,128z" />
                              <polygon fill="#CAD1D8" points="480,224 384,128 480,128" />
                              <path fill="#F15642" d="M416,416c0,8.8-7.2,16-16,16H48c-8.8,0-16-7.2-16-16V256c0-8.8,7.2-16,16-16h352c8.8,0,16,7.2,16,16V416z" />
                              <g fill="#FFFFFF">
                                 <path d="M98.128,314.672c2.944-24.832,40.416-29.296,58.064-15.728c8.704,7.024-0.496,18.16-8.192,12.528 c-9.456-6-30.96-8.816-33.648,4.464c-3.456,20.992,52.208,8.976,51.296,43.008c-0.896,32.496-47.968,33.248-65.632,18.672 c-4.224-3.456-4.096-9.072-1.776-12.544c3.312-3.312,7.024-4.464,11.376-0.88c10.496,7.152,37.488,12.528,39.408-5.648 C147.376,339.632,94.16,351.008,98.128,314.672z" />
                                 <path d="M265.488,369.424l2.048,2.416c8.432,7.68-2.56,20.224-11.136,12.16l-4.336-3.44 c-6.656,4.592-14.448,6.784-24.816,6.784c-22.512,0-48.24-15.504-48.24-46.976s25.584-47.456,48.24-47.456 c23.776,0,47.072,15.984,47.072,47.456C274.32,352.528,271.232,361.504,265.488,369.424z M257.792,340.368 c0-20.336-15.984-30.688-30.56-30.688c-15.728,0-31.216,10.336-31.216,30.688c0,15.504,13.168,30.208,31.216,30.208 c4.592,0,9.072-1.152,13.552-2.304l-14.576-13.44c-6.784-8.192,3.968-19.84,12.528-12.288l14.464,14.448 C256.384,352.528,257.792,347.024,257.792,340.368z" />
                                 <path d="M293.168,303.152c0-4.224,3.584-7.808,8.064-7.808c4.096,0,7.552,3.6,7.552,7.808v64.096h34.8 c12.528,0,12.8,16.752,0,16.752h-42.336c-4.48,0-8.064-3.184-8.064-7.792v-73.056H293.168z" />
                              </g>
                              <path fill="#CAD1D8" d="M400,432H96v16h304c8.8,0,16-7.2,16-16v-16C416,424.8,408.8,432,400,432z" />
                           </svg>
                        </div>   
                        <div className='skillsBoxesTitle'>
                           <div><h1>SQL</h1>
                           </div>
                        </div>
                     </div>
                     <div className='skillsBoxes'>
                        <div>
                           <svg
                              width="800px"
                              height="800px"
                              viewBox="0 0 32 32"
                              xmlns="http://www.w3.org/2000/svg"
                           >
                              <title>file_type_godot</title>
                              <path
                                 d="M28.166,21.029v1.652a.374.374,0,0,1-.26.357l-2.6.841a.367.367,0,0,1-.335-.054.374.374,0,0,1-.155-.3v-1.8l-2.438.464V24.02a.375.375,0,0,1-.325.371l-3.525.483c-.016,0-.034,0-.051,0A.374.374,0,0,1,18.1,24.5V22.557l-1.819.008h-.267l-1.819-.008V24.5a.375.375,0,0,1-.375.376c-.017,0-.034,0-.052,0l-3.525-.483a.375.375,0,0,1-.324-.371V22.184l-2.439-.464v1.8a.374.374,0,0,1-.154.3.37.37,0,0,1-.336.054l-2.6-.841a.374.374,0,0,1-.259-.357V21.029l-1.608-.541a4.558,4.558,0,0,0-.124,1.04c0,4.317,6.082,7.65,13.6,7.674h.019c7.517-.024,13.6-3.356,13.6-7.674a4.54,4.54,0,0,0-.1-.95Z"
                                 style={{ fill: "#478cbf" }}
                              />
                              <path
                                 d="M3.711,13.373V20.1l.907.306a.374.374,0,0,1,.256.355v1.65l1.855.6V21.267a.376.376,0,0,1,.445-.369l3.189.609a.374.374,0,0,1,.305.368v1.818l2.775.379v-1.89a.374.374,0,0,1,.376-.375h0l2.327.009,2.326-.009a.374.374,0,0,1,.377.375v1.89l2.775-.379V21.874a.373.373,0,0,1,.3-.368l3.189-.609a.377.377,0,0,1,.446.369v1.741l1.855-.6V20.76a.374.374,0,0,1,.255-.355l.618-.208V13.373h.017A26.792,26.792,0,0,0,30,10.931a19.02,19.02,0,0,0-2.509-3.288A24.507,24.507,0,0,0,25,9.091a13.01,13.01,0,0,0-1.279-1.052,15.365,15.365,0,0,0-1.375-.894,28.353,28.353,0,0,0,.232-3.071A15.968,15.968,0,0,0,18.847,2.8a26.44,26.44,0,0,0-1.385,2.7,9.46,9.46,0,0,0-1.453-.116h-.018a9.457,9.457,0,0,0-1.454.116,26.275,26.275,0,0,0-1.385-2.7A15.961,15.961,0,0,0,9.422,4.075a28.142,28.142,0,0,0,.232,3.071,15.312,15.312,0,0,0-1.376.894A13.06,13.06,0,0,0,7,9.091a24.553,24.553,0,0,0-2.49-1.448A19.02,19.02,0,0,0,2,10.931a26.792,26.792,0,0,0,1.694,2.443Z"
                                 style={{ fill: "#478cbf" }}
                              />
                              <path
                                 d="M12.462,16.6a2.739,2.739,0,1,1-2.74-2.738,2.739,2.739,0,0,1,2.74,2.738"
                                 style={{ fill: "#fff" }}
                              />
                              <path
                                 d="M11.8,16.764a1.819,1.819,0,1,1-1.819-1.819A1.817,1.817,0,0,1,11.8,16.764"
                                 style={{ fill: "#414042" }}
                              />
                              <path
                                 d="M16.166,19.59a.844.844,0,0,1-.882-.8V16.267a.886.886,0,0,1,1.764,0v2.522a.845.845,0,0,1-.883.8"
                                 style={{ fill: "#fff" }}
                              />
                              <path
                                 d="M19.871,16.6a2.739,2.739,0,1,0,2.74-2.738,2.739,2.739,0,0,0-2.74,2.738"
                                 style={{ fill: "#fff" }}
                              />
                              <path
                                 d="M20.531,16.764a1.818,1.818,0,1,0,1.817-1.819,1.817,1.817,0,0,0-1.817,1.819"
                                 style={{ fill: "#414042" }}
                              />
                           </svg>
                        </div>   
                        <div className='skillsBoxesTitle'>
                              <div>
                                 <h1>GdScript</h1>
                              </div>
                           </div>
                     </div>
                     <div className='skillsBoxes'>
                        <div>
                           <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" fill="#fff"/>
                           </svg>
                        </div>   
                        <div className='skillsBoxesTitle'>
                              <div>
                                 <h1>GIT</h1>
                              </div>
                           </div>
                     </div>
                     <div className='skillsBoxes'>
                        <div>
                           <svg viewBox="32.18585611720149 20.47 223.6851360941233 247.05999999999997" xmlns="http://www.w3.org/2000/svg" width="2113" height="2500"><path d="M252.71 93.61a21.67 21.67 0 0 0-2.65-10.87 20.74 20.74 0 0 0-7.87-7.67Q198.77 50 155.32 25c-7.8-4.51-15.36-4.35-23.11.23C120.69 32 63 65.09 45.81 75.06c-7.08 4.1-10.52 10.38-10.52 18.54v100.8a21.77 21.77 0 0 0 2.55 10.66 20.63 20.63 0 0 0 8 7.88c17.19 10 74.89 43.05 86.41 49.85 7.75 4.58 15.31 4.74 23.12.23q43.41-25.08 86.87-50.09a20.63 20.63 0 0 0 8-7.88 21.77 21.77 0 0 0 2.55-10.66V93.61z" fill="#004482"/><path d="M252.73 194.4a21.72 21.72 0 0 1-2.55 10.66 18.58 18.58 0 0 1-1.45 2.24L144 144l98.19-68.93a20.72 20.72 0 0 1 7.86 7.67 21.57 21.57 0 0 1 2.66 10.87c.02 33.6.02 100.79.02 100.79z" fill="#00599c"/><path d="M250.05 82.74L37.81 205.06a21.75 21.75 0 0 1-2.53-10.65V93.6c0-8.16 3.45-14.44 10.52-18.54C63 65.09 120.69 32 132.22 25.21c7.73-4.58 15.3-4.74 23.1-.23q43.41 25.08 86.87 50.09a20.72 20.72 0 0 1 7.86 7.67z" fill="#659ad2"/><path d="M148.2 184.72a39.91 39.91 0 0 1-35-20.63q-.53-.94-1-1.92A39.94 39.94 0 0 1 179 119.4c.53.64 1 1.31 1.53 2 .24.33.48.66.7 1l35.07-20.2q-1.28-2.06-2.68-4c-.49-.69-1-1.35-1.48-2A79.9 79.9 0 0 0 78 181.92c.34.64.69 1.27 1 1.9a79.91 79.91 0 0 0 136.86 3.62l-34.29-20.73a39.88 39.88 0 0 1-33.37 18.01z" fill="#fff"/>
                           </svg>
                        </div>
                        <div className='skillsBoxesTitle'>
                           <div>
                              <h1>C#</h1>
                           </div>
                        </div>
                     </div>
                  </div>
            </div>
         </section>
         
         
         <section className='projectsProfile' id='projects'>
            <div className='projectsContainer'>
               <div className='projectProfileTitle'>
                  <h1 id='profileTitle'>My Projects</h1>
               </div>
               <div className='projectsListContainer'>
                  {projects.map((project) => (
                     <div
                     key={project.id}
                     className="projectsProfileBoxes"
                     onClick={() => openModal(project)}
                     >
                     <div>
                        <img src={project.image} alt={project.title} id='projectsListImage'/>
                     </div>  
                     <div className='projectInfo'>{project.description}  </div>
                     </div>
                     
                  ))}
               </div>
            </div>
            
            {modalOpen && (
            <div className="modal" onClick={closeModal}>
               <span className="close">&times;</span>
                  <img className="modal-content" src={modalContent.image} alt={modalContent.title} />
                  <div id="caption">{modalContent.description}</div>
            </div>
            )}
         </section>


         <section className='contactProfile' id='contacts'>
            
               <div className='contactContainer'>
                  <form 
                     id="contactForm"
                     action="mailto:rizeenroe@zenportfolio.net" 
                     method="post" 
                     encType="text/plain"
                     onSubmit={handleSubmit}
                  >
                     <div>
                        <h1 id='profileTitle'>Contact</h1>
                     </div>
                     <div className='contactListContainer'>
                        <div className='contactProfileBoxes'>
                           <input 
                                 className='senderName' 
                                 name="Name" 
                                 placeholder='Your Name' 
                                 required
                           />
                        </div>
                        <div className='contactProfileBoxes'>
                           <input 
                                 className='senderEmail' 
                                 name="Email" 
                                 type="email" 
                                 placeholder='Your Email' 
                                 required
                           />
                        </div>
                        <div className='contactProfileBoxes'>
                            <input 
                                className='senderSubject' 
                                name="Subject" 
                                placeholder='Subject' 
                                required
                            />
                        </div>
                        <div className='contactProfileBoxes'>
                           <textarea 
                                 className='senderMessage' 
                                 name="Message" 
                                 placeholder='Your Message' 
                                 required
                           ></textarea>
                        </div>
                        <div className='contactProfileBoxes' id='contactSendContainer' style={{ gridArea: 'contactBox-5' }}>
                           <input 
                                 className='contactSendButton' 
                                 type="submit" 
                                 value="Send"
                           />
                        </div>
                     </div>
                  </form>
               </div>
            
            {/* Pop-up confirmation message */}
            {isSubmitted && (
                <div className="popup">
                    <p>Message Sent Successfully!</p>
                </div>
            )}
         </section>


      </main>
  );
};

export default Home;

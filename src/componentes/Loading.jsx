import * as React from "react";
import './css/loading.css';

const Loading = (props) => {
  return (
    <div className="overlay">
      <div className="loading">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlSpace="preserve"
          style={{
            enableBackground: "new 0 0 1080 682",
          }}
          viewBox="0 0 1080 682"
          fill="transparent"
          stroke="black"
          strokeWidth="3"
          className="animacion-fill"  
          {...props}
          
        >
         <path className="path4" d="M682.15,488.76V216.94h36.34v271.81H682.15z"/>
		<path  className="path1"  d="M288.82,376.7l33.69-159.75h40.13v271.81H326.3l3.79-177.93l-27.26,128.71h-28.01l-27.26-128.71l3.79,177.93H215V216.94
			h40.13L288.82,376.7z"/>
		<path className="path2"  d="M431.16,488.76h-36.34V263.5c0-31.04,14.51-46.56,43.54-46.56h27.26c29.02,0,43.54,15.52,43.54,46.56v225.25h-36.34
			v-99.56h-41.65V488.76z M472.81,356.25v-90.48c0-10.6-5.3-15.9-15.9-15.9h-9.85c-10.6,0-15.9,5.3-15.9,15.9v90.48H472.81z"/>
		<path className="path3"  d="M597.35,389.19v-32.94h55.27v132.5h-71.17c-28.01,0-42.02-15.26-42.02-45.81V263.5c0-31.04,14.01-46.56,42.02-46.56h24.99
			c30.79,0,46.18,15.77,46.18,47.32v29.53h-36.34v-24.23c0-13.12-5.17-19.69-15.52-19.69h-9.09c-10.6,0-15.9,6.57-15.9,19.69v166.57
			c0,13.12,5.3,19.68,15.9,19.68h24.61v-66.63H597.35z"/>
		<path className="path5"  d="M787.01,488.76h-36.34V263.5c0-31.04,14.51-46.56,43.54-46.56h27.26c29.02,0,43.54,15.52,43.54,46.56v225.25h-36.34
			v-99.56h-41.65V488.76z M828.66,356.25v-90.48c0-10.6-5.3-15.9-15.9-15.9h-9.85c-10.6,0-15.9,5.3-15.9,15.9v90.48H828.66z"/>
		<rect className="path4"  x="682.15" y="130.9" width="36.34" height="69.7"/>
		<rect className="path4"  x="682.15" y="505.1" width="36.34" height="69.7"/>  </svg>
        
      </div>
    </div>
  );
};

export default Loading;

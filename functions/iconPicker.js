const callIconPicker = (callDirection, callType) => {
  let fillColor = callType === "answered" ? "#3cff3c" : "#ff3c3c";
  switch (callDirection) {
    case "inbound":
      return (
        <svg width="20px" height="20px" viewBox="0 -0.5 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">

<g id="SVGRepo_bgCarrier" strokeWidth="0"/>

<g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>

<g id="SVGRepo_iconCarrier"> <rect width="48" height="48" transform="translate(4)" fill="white" fillOpacity="0.01"/> <rect x="3.99997" width="48" height="48" fill="white" fillOpacity="0.01"/> <path d="M17.3756 9.79423C18.1022 9.79423 18.7716 10.1883 19.1242 10.8235L21.5707 15.2303C21.891 15.8073 21.906 16.5052 21.6109 17.0955L19.2541 21.8092C19.2541 21.8092 19.937 25.3206 22.7955 28.179C25.6539 31.0374 29.1536 31.7086 29.1536 31.7086L33.8665 29.3522C34.4572 29.0568 35.1556 29.0721 35.7328 29.393L40.1521 31.85C40.7867 32.2028 41.1803 32.8719 41.1803 33.598L41.1803 38.6715C41.1803 41.2552 38.7804 43.1213 36.3323 42.2952C31.3044 40.5987 23.4997 37.3685 18.5528 32.4216C13.606 27.4748 10.3758 19.6701 8.67925 14.6422C7.85323 12.1941 9.71932 9.79423 12.303 9.79423L17.3756 9.79423Z" fill={fillColor} stroke="#000000" strokeWidth="4" strokeLinejoin="round"/> <path d="M38.2404 6L30.2404 14L38.2404 22" stroke="#000000" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/> <path d="M46.2404 14.0083H30.2404" stroke="#000000" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/> </g>

</svg>
      );
    case "outbound":
      return (<svg width="20px" height="20px" viewBox="0 -0.5 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">

        <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
        
        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
        
        <g id="SVGRepo_iconCarrier"> <rect width="48" height="48" transform="translate(3)" fill="white" fillOpacity="0.01"/> <rect x="3.99997" width="48" height="48" fill="white" fillOpacity="0.01"/> <path d="M17.3756 9.79423C18.1022 9.79423 18.7716 10.1883 19.1242 10.8235L21.5707 15.2303C21.891 15.8073 21.906 16.5052 21.6109 17.0955L19.2541 21.8092C19.2541 21.8092 19.937 25.3206 22.7955 28.179C25.6539 31.0374 29.1536 31.7086 29.1536 31.7086L33.8665 29.3522C34.4572 29.0568 35.1556 29.0721 35.7328 29.393L40.1521 31.85C40.7867 32.2028 41.1803 32.8719 41.1803 33.598L41.1803 38.6715C41.1803 41.2552 38.7804 43.1213 36.3323 42.2952C31.3044 40.5987 23.4997 37.3685 18.5528 32.4216C13.606 27.4748 10.3758 19.6701 8.67925 14.6422C7.85323 12.1941 9.71932 9.79423 12.303 9.79423L17.3756 9.79423Z" fill={fillColor} stroke="#000000" strokeWidth="4" strokeLinejoin="round"/> <path d="M38 6L46 14L38 22" stroke="#000000" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/> <path d="M30 14.0083H46" stroke="#000000" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/> </g>
        
        </svg>)
    default:
      break;
  }
};

export default callIconPicker;
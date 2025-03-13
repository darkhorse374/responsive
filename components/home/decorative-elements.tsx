export function DecorativeCircles() {
  return (
    <></>
  );
}

export function PlusSign() {
  return (
    <></>
  );
}

export function BackgroundCircles() {
  return (
    <>
      <div className="absolute -bottom-[30%] -right-[10%] w-[800px] h-[800px] rounded-full bg-black opacity-50"></div>
      <div className="absolute -bottom-[35%] -left-[30%] w-[700px] h-[700px] rounded-full bg-black opacity-50"></div>
    </>
  );
}

export function BackgroundGradient() {
  return (
    <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-[#293a21] opacity-85 backdrop-blur-[374px]">
      <svg width="907" height="740" viewBox="0 0 907 740" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_f_107_627)">
          <path d="M514.936 389.159C418.284 336.372 33.3933 438.835 -19.4032 535.504C-72.1996 632.174 -36.6471 753.333 60.0057 806.12C156.658 858.907 173.338 726.838 226.134 630.168C278.931 533.498 611.589 441.946 514.936 389.159Z" fill="#E0FF5C" />
        </g>
        <defs>
          <filter id="filter0_f_107_627" x="-417.848" y="0.77832" width="1324.29" height="1191.39" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="187" result="effect1_foregroundBlur_107_627" />
          </filter>
        </defs>
      </svg>
    </div>
  );
}

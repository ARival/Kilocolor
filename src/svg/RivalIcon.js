import * as React from "react"

const RivalIcon = (props) => {
  const strokeColor = '#97002d'
  return (
    <svg
      width={32}
      height={32}
      viewBox="0 0 26 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.235 14.39c2.06.418 9.772-2.261 9.772-2.261s7.72 2.679 9.78 2.26c2.06-.418 2.932 2.105 1.526 4.42-1.9 3.128-3.605 1.405-3.605 1.405-.509 1.127 1.56 3.696-7.701 5.432-8.248-1.312-7.694-5.432-7.694-5.432S3.608 21.937 1.71 18.81c-1.455-2.396-.533-4.84 1.526-4.42z"
        fill="#fff"
        stroke={strokeColor}
        strokeMiterlimit={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.21 16.534l1.373.678s3.14-3.086-1.728-10.013c-.363 1.446-.933 1.558-.933 1.558s-.014-2.007-2.975-4.796c.017 1.602-.646 2.382-.646 2.382s.21-2.1-1.624-3.595c-.354 2.733-.871 6.68-.871 6.68s.597 1.748.201 4.372c3.813.075 7.228 1.823 7.228 1.823l-.025.911z"
        fill="#fff"
        stroke={strokeColor}
        strokeMiterlimit={12}
        strokeLinecap="round"
      />
      <path
        className="hair-left"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.812 16.535l-1.373.678s-3.307-4.767 1.728-9.86c.363 1.447.934 1.56.934 1.56s.014-2.008 2.975-4.797c-.018 1.602.977 2.05.977 2.05S10.729 4.327 13.305 2c-.407 2.543-.088 7.583-.088 7.583s.304 1.784-.21 4.218c-3.813.074-7.22 1.822-7.22 1.822l.025.912z"
        fill={strokeColor}
        stroke={strokeColor}
        strokeMiterlimit={12}
        strokeLinecap="round"
      />
      <path
        className="hair-left"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.518 18.111h3.119v.26h-.584v1.05a.88.88 0 01-.286.645c-.183.17-.432.267-.691.267-.26 0-.508-.096-.691-.267a.881.881 0 01-.286-.644V18.37h-.581v-.26zm5.947 0h3.12v.26h-.497v.97a.959.959 0 01-.312.701c-.199.186-.47.29-.751.29-.282 0-.553-.104-.752-.29a.958.958 0 01-.312-.7v-.971h-.496v-.26z"
        fill={strokeColor}
      />
      <path
        className="hair-left"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.413 25.647l.521-.619h2.226l.513.618-1.666.354-1.594-.353z"
        fill={strokeColor}
        stroke={strokeColor}
        strokeMiterlimit={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default RivalIcon

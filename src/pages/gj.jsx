import * as React from "react"
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={56}
    height={56}
    fill="none"
    {...props}
  >
    <path
      fill="#C9A651"
      fillRule="evenodd"
      d="M56 28c0 15.464-12.536 28-28 28S0 43.464 0 28 12.536 0 28 0s28 12.536 28 28ZM16.97 14.424h11.879v4.109h-7.56V29.83h7.56v4.108h-11.88V14.424Zm9.333 28.849h11.879V22.909H26.303v4.177h7.56v12.01h-7.56v4.177Z"
      clipRule="evenodd"
    />
  </svg>
)
export default SvgComponent


// ** Icons Import
import { Heart } from "react-feather"

const Footer = () => {
  return (
    <p className="clearfix mb-0">
      <span className="float-md-start d-block d-md-inline-block mt-25">
        COPYRIGHT © {new Date().getFullYear()}{" "}
        <a
          href="https://transerve.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Transerve
        </a>
        <span className="d-none d-sm-inline-block">, All rights Reserved</span>
      </span>
      {/* <span className="float-md-end d-none d-md-block">
        Hand-crafted & Made with
        <Heart size={14} />
      </span> */}
    </p>
  )
}

export default Footer
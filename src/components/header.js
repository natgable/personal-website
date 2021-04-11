import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { FiHome } from "@react-icons/all-files/fi/FiHome";
import { FiGithub } from "@react-icons/all-files/fi/FiGithub";
import { FiLinkedin } from "@react-icons/all-files/fi/FiLinkedin";
import { FiMail } from "@react-icons/all-files/fi/FiMail";

const Header = () => (
  <header
    style={{
      background: `lavenderblush`,
      marginBottom: `1.45rem`
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h2 
      style={{ 
        margin: 0,
        display: "inline-flex"
      }}
      >
        <span>
          <Link
            to="/"
            style={{
              color: `black`,
              textDecoration: `none`,
              marginLeft: 0,
              marginRight: 700
            }}
          >
            <FiHome/>
          </Link>
        </span>

        <span>
          <Link
            to="https://github.com/natgable"
            style={{
              color: `black`,
              textDecoration: `none`,
              margin: 5
            }}
          >
            <FiGithub/>
          </Link>

          <Link
            to="https://www.linkedin.com/in/natalie-k-g/"
            style={{
              color: `black`,
              textDecoration: `none`,
              margin: 5
            }}
          >
            <FiLinkedin/>
          </Link>

          <Link
            href="mailto:natgable@gmail.com"
            style={{
              color: `black`,
              textDecoration: `none`,
              margin: 5
            }}
          >
            <FiMail/>
          </Link>
        </span>
        
      </h2>
    </div>
  </header>
)

export default Header

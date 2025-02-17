import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import './all.sass'
import useSiteMetadata from './SiteMetadata'

const Layout = ({ languageKey, baseColorClass, children }) => {
  const { title, description } = useSiteMetadata()

  return (
    <div>
      <Helmet>
        <html lang={languageKey} />
        <title>{title}</title>
        <meta name="description" content={description} />

        <link rel="apple-touch-icon" sizes="180x180" href="/img/apple-touch-icon.png" />
        <link rel="icon" type="image/png" href="/img/favicon-32x32.png" sizes="32x32" />
        <link rel="icon" type="image/png" href="/img/favicon-16x16.png" sizes="16x16" />
        <link rel="mask-icon" href="/img/logo-xr.svg" color="#ff4400" />
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta property="og:image" content="/img/og-image.jpg" />

        <link href="https://fonts.googleapis.com/css?family=Crimson+Text:400,400i,700&display=swap" rel="stylesheet" /> 
        
      </Helmet>
      <div className={baseColorClass}>
        <Navbar languageKey={languageKey} />
        <div>{children}</div>
        <Footer languageKey={languageKey} />
      </div>
    </div>
  )
}


Layout.propTypes = {
  languageKey: PropTypes.string,
  baseColorClass: PropTypes.string,
}


export default Layout

import Helmet from "react-helmet";
import socialImage from "../assets/create.jpeg";

const Seo = () => {
  return (
  <Helmet>

    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://crud-login-auth.netlify.app/" />
    <meta property="og:title" content="Crud-Login-Auth" />
    <meta
      property="og:description"
      content="Full Stack application to make a Login & CRUD"
    />
    <meta
      property="og:image"
      content={`https://crud-login-auth.netlify.app${socialImage}`}
    />

    <meta property="twitter:card" content="summary_large_image" />
    <meta
      property="twitter:url"
      content="https://crud-login-auth.netlify.app/"
    />
    <meta property="twitter:title" content="Crud-Login-Auth" />
    <meta
      property="twitter:description"
      content="Full Stack application to make a Login & CRUD"
    />
    <meta
      property="twitter:image"
      content={`https://crud-login-auth.netlify.app${socialImage}`}
    />
  </Helmet>
  )
}
export default Seo



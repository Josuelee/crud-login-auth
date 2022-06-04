import Helmet from "react-helmet";
import socialImage from "../assets/create.jpeg";

const Seo = () => {
  return (
  <Helmet>
    <meta
      name="description"
      content="Full Stack application to make a Login & CRUD"
    />
    <meta property="og:title" content="Crud-Login" />
    <meta
      property="og:description"
      content="Full Stack application to make a Login & CRUD"
    />  
    <meta
      property="og:image"
      content={`https://crud-login-auth.netlify.app${socialImage}`}
    />  
  </Helmet>
  )
}
export default Seo
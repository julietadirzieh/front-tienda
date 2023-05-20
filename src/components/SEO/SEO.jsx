import { Helmet } from "react-helmet-async";

export const SEO = ({ value }) => {
  return value?.map((newValue, index) => (
    <Helmet key={index}>
      {/* Standard metadata tags */}
      <title>{newValue.title}</title>
      <meta name="description" content={newValue.description} />
      {/* End standard metadata tags */}
      {/* Facebook tags */}
      <meta property="og:type" content="article" />
      <meta property="og:title" content={newValue.title} />
      <meta property="og:description" content={newValue.description} />
      {/* End Facebook tags */}
      {/* Twitter tags */}
      <meta name="twitter:creator" content="Example" />
      <meta name="twitter:card" content="article" />
      <meta name="twitter:title" content={newValue.title} />
      <meta name="twitter:description" content={newValue.description} />
      {/* End Twitter tags */}
    </Helmet>
  ));
};

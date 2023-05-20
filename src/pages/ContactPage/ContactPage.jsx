import constants from "../../utils/constants";
import { PagesContainer } from "../../components/PagesContainer/PagesContainer";

import { SEO } from "../../components/SEO/SEO";
import PageHeader from "../../components/PageHeader/PageHeader";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactInfo from "../../components/ContactForm/components/ContactInfo/ContactInfo";
import ContactIframe from "../../components/ContactForm/components/ContactIframe/ContactIframe";

const ContactPage = () => {
  return (
    <PagesContainer>
      <SEO value={constants.METATAGS_CONTACT} />
      <PageHeader title="Contacto" />
      <section className="grid md:grid-cols-2 gap-4 mt-10 pb-20 justify-center">
        <ContactForm />
        <article className="w-full mx-auto justify-center text-center">
          <ContactInfo />
          <ContactIframe />
        </article>
      </section>
    </PagesContainer>
  );
};

export default ContactPage;

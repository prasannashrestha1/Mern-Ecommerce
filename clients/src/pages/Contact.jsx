import React from "react";
import Layout from "../components/Layout/Layout.jsx";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";

const Contact = () => {
  return (
    <div>
      <Layout title={"Contact Us"}>
        <div className="contactus flex">
          <div className="p-10 flex items-start justify-center">
            <img src="/images/contactus.jpeg" alt="" />
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Contact;

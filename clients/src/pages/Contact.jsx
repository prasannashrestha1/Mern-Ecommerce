import React from "react";
import Layout from "../components/Layout/Layout.jsx";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";

const Contact = () => {
  return (
    <div>
      <Layout title={"Contact Us"}>
        <div className="contactus flex items-center justify-center">
          <div className="p-10 ">
            <img src="/images/contactus.jpeg" alt="" />
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Contact;

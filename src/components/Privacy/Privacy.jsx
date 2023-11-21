import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineCheck } from "react-icons/ai";
import { CiPaperplane } from "react-icons/ci";
import Footer from "../Landing Page/Footer";

const Privacy = () => {
  return (
    <div name="features" className="w-full h-screen bg-white flex flex-col ">
      <div className=" m-28 text-5xl  font-bold text-center ">
        <h1>Privacy Statement</h1>
      </div>
      <div className=" -mt-10 mb-16">
        <p>
<span className=" text-xl font-semibold">TCubeAI Technologies Private Limited </span> is committed to protecting the privacy and security of your personal information. This Privacy Policy describes how we collect, use, and disclose information about you through our website <a href="https://www.tcubeai.in/"><b className=" text-[#f9aa33]">TCUBEAI</b></a>.
We may update this Privacy Policy from time to time in order to reflect changes to our practices or for other operational, legal, or regulatory reasons. If we make material changes to this Privacy Policy, we will notify you by email or by posting a notice on the Site prior to the effective date of the changes. 
Your continued use of the Site after the effective date of the updated Privacy Policy constitutes your acceptance of the updated Privacy Policy.</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 -mt-8  ">
        <div className="flex">
          <div>
            <AiOutlineCheck className="w-7 mr-4 text-green-600" />
          </div>
          <div>
           <label className=" text-xl font-semibold">Information We Collect</label>
            <p className="text-lg pt-2 pb-4">
           
We collect personal information directly from you when you provide it to us through the Site, such as when you sign up for our newsletter, complete a contact form, or make a purchase. The types of personal information we collect may include your name, email address, postal address, phone number, and payment information.
We also automatically collect certain information about your device and how you interact with the Site, such as your IP address, browser type, referring/exit pages, and date/time stamps.
            </p>
          </div>
        </div>
        <div className="flex">
          <div>
            <AiOutlineCheck className="w-7 mr-4 text-green-600" />
          </div>
          <div>
          <label className=" text-xl font-semibold">   How We Use Your Information</label>

            <p className="text-lg pt-2 pb-4">
           
We may use the personal information we collect for the following purposes:
<ul >
<li> To provide you with the products and services you request;
</li>
<li> To communicate with you about your account or our products and services;
</li>
<li> To send you marketing and promotional materials;
</li>
<li> To improve the Site and our products and services;
</li>
<li>
To comply with legal obligations or protect our legal rights.
We may also combine the information we collect with information 
from other sources in order to improve the quality and relevance of our products and services.
           
</li>

</ul>
 </p>
          </div>
        </div>
        <div className="flex">
          <div>
            <AiOutlineCheck className="w-7 mr-4 text-green-600" />
          </div>
          <div>
          <label  className=" text-xl font-semibold"> How We Disclose Your Information</label>

            <p className="text-lg pt-2 pb-4">
            We may disclose your personal information to the following categories of third parties:
            <ul>
            <li>Service providers who perform services on our behalf, such as hosting providers and payment processors.</li>
            <li>Marketing partners who help us promote our products and services.</li>
            <li>Legal and regulatory authorities, where required by law or to protect our legal rights.</li>
            <li>Other third parties with your consent.</li>
            </ul>
            
            We may also disclose aggregated, non-personally identifiable information about our users to third parties for marketing, advertising, or other purposes.
            </p>
          </div>
        </div>
        <div className="flex">
          <div>
            <AiOutlineCheck className="w-7 mr-4 text-green-600" />
          </div>
          <div>
            <label  className=" text-xl font-semibold">Your Choices</label>
            <p className="text-lg pt-2 pb-4">
            You have certain choices about how we use and disclose your personal information. You may opt out of receiving marketing communications from us by following the unsubscribe instructions included in each marketing email. You may also request that we delete your personal information by contacting us at [insert contact email].
          <br />Please note that we may need to retain certain information for record-keeping purposes or to comply with legal obligations.
            </p>
          </div>
        </div>
        <div className="flex">
          <div>
            <AiOutlineCheck className="w-7 mr-4 text-green-600" />
          </div>
          <div>
            <label  className=" text-xl font-semibold">Security</label>
            <p className="text-lg pt-2 pb-4">
            We take reasonable measures to protect the security of your personal information, but no method of transmission over the Internet or method of electronic storage is 100% secure. We cannot 
            guarantee that your information will not be accessed, disclosed, altered, or destroyed by breach of any of our physical, technical, or managerial safeguards. </p>
          </div>
        </div>
        <div className="flex">
          <div>
            <AiOutlineCheck className="w-7 mr-4 text-green-600" />
          </div>
          <div>
            <label  className=" text-xl font-semibold">International Data Transfers</label>
            <p className="text-lg pt-2 pb-4">
            We may transfer your personal information to countries outside of the European Economic Area or other jurisdictions where data protection laws may be different from those in your jurisdiction. If we transfer your personal information outside of the European Economic Area, we will take appropriate measures to ensure that your personal information is adequately protected, 
            such as by entering into Standard Contractual Clauses with our service providers. </p>
          </div>
        </div>
      </div>
     
      <Footer/>
    </div>
  );
};

export default Privacy;

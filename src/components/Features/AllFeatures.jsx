import React from "react";
import { AiOutlineCheck } from "react-icons/ai";
import { CiPaperplane } from "react-icons/ci";
import Footer from "../Landing Page/Footer";

const AllFeatures = () => {
  return (
    <div name="features" className="w-full h-screen bg-white flex flex-col pt-28 ">
      <div className=" mb-12 text-5xl  font-bold text-center  ">
        <h1>Features</h1>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4  ">
          <div className="flex">
            <div>
              <AiOutlineCheck className="w-7 mr-4 text-green-600" />
            </div>
            <div>
              <h3 className="font-bold text-lg"> Serialization Number Generation</h3>
              <p className="text-lg pt-2 pb-4">
               Generating the Serial numbers for every product throughout the supply chain, from manufacturing to distribution and sales.
              </p>
            </div>
          </div>
          <div className="flex">
            <div>
              <AiOutlineCheck className="w-7 mr-4 text-green-600" />
            </div>
            <div>
              <h3 className="font-bold text-lg"> Barcoding/QRcoding</h3>
              <p className="text-lg pt-2 pb-4">
              Our Solution provides a simple and easy-to-use tool for generating barcodes and QR codes. Customize your codes with various options, including size and content.
              </p>
            </div>
          </div>
          <div className="flex">
            <div>
              <AiOutlineCheck className="w-7 mr-4 text-green-600" />
            </div>
            <div>
              <h3 className="font-bold text-lg">Mobile Application</h3>
              <p className="text-lg pt-2 pb-4">
               Use the scanner to capture the code, which allows for the retrieval of relevant data about the product's current location or status.              </p>
            </div>
          </div>
          <div className="flex">
            <div>
              <AiOutlineCheck className="w-7 mr-4 text-green-600" />
            </div>
            <div>
              <h3 className="font-bold text-lg">Reporting</h3>
              <p className="text-lg pt-2 pb-4">
               Providing various reports to initiate the actions used in business environments to track performance, monitor progress, and make informed decisions
              </p>
            </div>
          </div>
          <div className="flex">
            <div>
              <AiOutlineCheck className="w-7 mr-4 text-green-600" />
            </div>
            <div>
              <h3 className="font-bold text-lg">Integrations & API</h3>
              <p className="text-lg pt-2 pb-4">
              Integrations with EDI's and ERP systems into software applications enables them to exchange information and perform tasks that would be difficult without this communication.
              </p>
            </div>
          </div>
          <div className="flex">
            <div>
              <AiOutlineCheck className="w-7 mr-4 text-green-600" />
            </div>
            <div>
              <h3 className="font-bold text-lg">Configuration & Onboarding</h3>
              <p className="text-lg pt-2 pb-4">
              Integrating the database with the serialization and aggregation system. This allows for the tracking of products at every stage of the supply chain, from manufacturing to distribution.
              </p>
            </div>
          </div>
         
         
        </div>
      <Footer />
    </div>
  );
};

export default AllFeatures;

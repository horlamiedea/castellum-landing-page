import Castellum from "../assests/Castellum-logo.svg";
import Learning from "../assests/linkedin-sales-solutions-6ie6OjshvWg-unsplash.jpg";
import banner from "../assests/linkedin-sales-solutions-EI50ZDA-l8Y-unsplash.jpg";
import { FaArrowRight } from "react-icons/fa";
import { BsFillRocketTakeoffFill } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import { RiTwitterXFill } from "react-icons/ri";

import { FaLinkedin } from "react-icons/fa6";

// import { useState } from "react";

const NavBar = [
  { name: "Home", link: "#" },
  { name: "About", link: "#about" },
  { name: "Contact", link: "#contact" },
  //   { name: "Blog", link: "#" },
];
const AboutUs = [
  {
    icon: <BsFillRocketTakeoffFill />,
    topic: "Our Mission",
    paragraph1:
      "At Castellum, we believe that security awareness is the first line of defense against cyber threats.",
    p2: "Our mission is to empower organizations with innovative, engaging, and effective security education solutions.",
  },
  {
    icon: <BsFillRocketTakeoffFill />,
    topic: "Our Approach",
    paragraph1:
      "Castellum takes a unique approach to security awareness training, combining cutting-edge technology with expert guidance and support.",
    p2: "Our platform is designed to make learning enjoyable, engaging, and impactful for every member of your team.",
  },
];
const socialIcons = [
  { name: <RiInstagramFill /> },
  { name: <RiTwitterXFill /> },
  { name: <FaLinkedin /> },
];
const WhyCastellum = [
  {
    img: "https://images.unsplash.com/photo-1573878585045-4a17c8a39bbd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHx8",
    header: "Engaged With Purpose",
    paragh:
      "We believe that effective learning should be engaging and memorable. Our platform takes a behavioral science based approach, leveraging videos and illustrations to captivate and retain your employees attention. Say goodbye to the days of boring content and hello to a new era of interactive,relatable training experiences.",
  },
  {
    img: "https://images.unsplash.com/photo-1622295023576-e4fb6e9e8ba2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHx8",
    header: "Transforming Security Training",
    paragh:
      "Castellum is on a mission to revolutionize the way organizations approach security awareness. Our short, memorable illustrations and videos make it easy for your team to connect with the realities of today's cyber threats. By integrating our stories into your organization's culture, we ensure that every employee understands the importance of cybersecurity and their role in protecting your company's assets.",
  },
  {
    img: "https://plus.unsplash.com/premium_photo-1664301525267-eef72ae24b29?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2fHx8ZW58MHx8fHx8",
    header: "Simple, Engaging, Effectivee",
    paragh:
      "At Castellum, we keep things simple and fun. Our core values guide everything we do, from the content we create to the relationships we build with our customers. With Castellum, you can expect an enjoyable and effective security awareness program that gets results.",
  },
  {
    img: "https://images.unsplash.com/photo-1610473068745-cf5589c24f77?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHx8",
    header: "Insightful Reporting and Analytics",
    paragh:
      "Gain valuable insights into your team's security awareness levels with Castellum's comprehensive reporting and analytics features. Track progress, identify areas for improvement, and make data-driven decisions to enhance your organization's security posture.",
  },
  {
    img: "https://plus.unsplash.com/premium_photo-1663047325961-fb088c7a7e1f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1pbi1zYW1lLXNlcmllc3wyfHx8ZW58MHx8fHx8",
    header: "Cost Effective Solution",
    paragh:
      "At Castellum, we understand the importance of value for money. Our platform offers cost-effective solutions compared to other security platforms on the market. With Castellum, you can achieve superior security awareness training without breaking the bank.",
  },
];
const Revol = [
  {
    icon: <BsFillRocketTakeoffFill />,
    header: "Customized Phishing Simulations",
    paragh:
      "Run completely automated phishing attacks using customizable templates to assess your organization's resilience to real-world threats.",
  },
  {
    icon: <BsFillRocketTakeoffFill />,
    header: "Comprehensive Training Course",
    paragh:
      "Access a large choice of cybersecurity training courses, both general and specialized.",
  },
  {
    icon: <BsFillRocketTakeoffFill />,
    header: "Targeted Training Initiatives",
    paragh:
      "Tailor phishing campaigns and training assignments based on specific user behaviors and attributes for maximum impact.",
  },
  {
    icon: <BsFillRocketTakeoffFill />,
    header: "Insightful Reporting",
    paragh:
      "Gain valuable insights into your security posture with advanced reporting features, including stats and graphs for training and phishing campaigns.",
  },
  {
    icon: <BsFillRocketTakeoffFill />,
    header: "Risk Scoring Capabilities",
    paragh:
      "Monitor your organization's risk score over time and identify areas for improvement to strengthen your security posture.",
  },
];

const Home = () => {
  return (
    <div className="bg-[#ED2C54] w-full h-full bg-opacity-10 text-[#524F4F]">
      {/* nav */}
      <div className="flex  items-center justify-between py-10 mx-auto w-[70%]  h-16">
        <img src={Castellum} alt="castellum-logo" className="w-32 h-auto " />
        <div className="flex gap-5 items-center">
          {NavBar.map((nav) => (
            <a
              className="font-medium hover:text-[#ED2C54]"
              key={nav.name}
              href={nav.link}
            >
              {nav.name}
            </a>
          ))}
        </div>
        <div className="flex gap-4">
          <button className="py-2 px-4 border font-medium border-[#ED2C54] rounded-sm">
            Sign In
          </button>
          <button className="text-white  p-2 rounded-sm font-medium bg-[#ED2C54]">
            Get Started
          </button>
        </div>
      </div>
      {/* header */}
      <div className="w-[70%] mx-auto flex my-16 items-center gap-10">
        <div className="flex flex-col w-1/2">
          <p className="text-[#ED2C54] text-lg">Educate • Empower • Secure</p>
          <p className="font-bold text-8xl leading-[5rem] ">
            Redefining <br />{" "}
            <span className="text-[#ED2C54] italic">Security</span> <br />
            Awareness <br />
            Training
          </p>
        </div>
        <div className="w-1/2 h-[35rem] relative">
          <img
            src={banner}
            alt="Descriptive Alt Text"
            className="absolute  w-full rounded-md h-full object-cover"
          />
        </div>
      </div>
      {/* banner */}
      <div className="w-[70%] mx-auto flex items-center gap-10">
        <div className="w-1/2 h-[20rem] relative">
          <img
            src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmxhY2slMjBwZW9wbGUlMjBlJTIwbGVhcm5pbmd8ZW58MHx8MHx8fDA%3D"
            alt="Descriptive Alt Text"
            className="absolute  w-full rounded-md h-full object-cover"
          />
        </div>

        <div className="flex-1">
          <p className="font-bold text-3xl pb-6">
            Making Learning Fun, Empowering and Effective for your Organization
          </p>
          <p>
            Welcome to Castellum, the future of security awareness training. We
            are on a mission to revolutionize how organizations approach
            cybersecurity education. Anticipate an innovative platform designed
            to empower your team and strengthen your organizations defense
            against cyber threats.{" "}
          </p>
        </div>
      </div>
      {/* sign up */}
      <div className="w-full h-fit bg-[#ED2C54] my-16  text-white ">
        <div className="flex items-center py-16 gap-10 mx-auto w-[70%]">
          <div className="flex flex-col w-1/2 ">
            <p className="text-3xl font-bold py-3">Sign Up Now!</p>
            <p>
              Join the revolution! Sign up now to be the first to experience
              Castellum when it launches. Stay ahead of cyber threats and
              empower your team with the future of security awareness training.{" "}
            </p>
            <div className="flex items-center gap-3 my-3 bg-white w-fit cursor-pointer text-[#524F4F] py-2 px-6 rounded-sm">
              <p>Get Early Access </p>
              <span>
                <FaArrowRight />
              </span>
            </div>
          </div>
          <div className="w-1/2 h-[17rem] relative">
            <img
              src={Learning}
              alt="Descriptive Alt Text"
              className="absolute  w-full rounded-md h-full object-cover"
            />
          </div>
        </div>
      </div>
      {/* about us */}
      <div id="about" className="w-full h-fit  my-8">
        <div className="w-[70%] mx-auto">
          <div className="text-center">
            <p className="text-3xl font-bold">About Us</p>
            <p className=" pt-5">
              Learn more about Castellum and our mission to revolutionize
              <br />
              security awareness training.{" "}
            </p>
          </div>
          <div className="mx-auto w-full">
            <div className="flex  items-start mx-auto my-12  gap-10">
              {AboutUs.map((about) => (
                <div
                  key={about.topic}
                  className="w-1/2  h-[18rem] bg-[#ED2C54] bg-opacity-20 rounded-md p-10"
                >
                  <p className="pb-2">
                    <BsFillRocketTakeoffFill size={30} />
                  </p>
                  <p className="text-2xl py-2">{about.topic}</p>
                  <p>{about.paragraph1}</p>
                  <p className="pb-10">{about.p2}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* video */}
      <div className="w-full h-fit py-12 bg-[#ED2C54] bg-opacity-90 mt-16  text-white ">
        <video
          className="w-full h-auto max-w-lg mx-auto rounded shadow-lg"
          controls
          autoPlay={true}
        >
          <source
            src="https://res.cloudinary.com/vivahjah/video/upload/v1711396437/Castellum_qyy1fc.mov"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* why */}
      <div className="w-full h-fit my-8">
        <div className="w-[70%] mx-auto">
          <div className="text-center">
            <p className="text-3xl font-bold">Why Castellum?</p>
            <p className=" pt-5">
              Security awareness training has historically been dull and
              uninspiring. Employees dread the <br /> thought of mandatory
              training modules that offer little engagement.At Castellum,we are
              redefining security education.
            </p>
          </div>
          <div className="mx-auto w-full">
            <div className=" mx-auto my-12 ">
              {WhyCastellum.map((why, i) => (
                <div
                  className={`flex my-8 gap-20 items-center ${
                    i % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  }`}
                  key={i}
                >
                  <div className="w-[40%] h-[15rem] relative">
                    <img
                      src={why.img}
                      alt="Descriptive Alt Text"
                      className="absolute  w-full rounded-md h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-xl">{why.header}</p>
                    <p className="text-justify">{why.paragh}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Revolution */}
      <div className="w-full h-fit my-20">
        <div className="w-[70%] mx-auto">
          <div className="text-center">
            <p className="text-3xl font-bold">Join The Revolution</p>
            <p className=" pt-5 pb-16">
              Ready to say goodbye to boring security awareness training? Join
              the Castellum revolution and empower <br /> your team with
              engaging, effective cybersecurity education. Together, we can
              build a stronger,
              <br /> more resilient defense against cyber threats.
            </p>
          </div>
          <div className="mx-auto w-full">
            <div className="flex  justify-center items-start gap-5 flex-wrap">
              {Revol.map((r, i) => (
                <div
                  key={i}
                  className="w-[30%]  h-[13rem] p-5 rounded-md border border-[#ED2C54]"
                >
                  <p className="text-3xl">{r.icon}</p>
                  <p className="text-[#ED2C54] font-bold text-lg py-2">
                    {r.header}
                  </p>
                  <p>{r.paragh}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* contact */}
      <div
        id="contact"
        className="w-full h-fit bg-[#ED2C54] bg-opacity-90 mt-16  text-white "
      >
        <div className="flex items-center py-16 gap-10 mx-auto w-[70%]">
          <div className="flex flex-col w-1/2 ">
            <p className="text-3xl font-bold py-3">Get In Touch!</p>
            <p>
              Have questions or need more information? Contact us today <br />{" "}
              to speak with a member of our team.
            </p>
          </div>
          {/* form */}
          <div className="w-1/2 h-fit py-6 relative text-[#524F4F] bg-white rounded-md">
            <form className="w-[90%] mx-auto p-5 ">
              <div className="flex items-center justify-between">
                <div className="flex flex-col">
                  <label>
                    First Name <span className="text-[#ED2C54]">*</span>
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    className="outline-none border-b-2 border-[#524F4F]  border-opacity-70"
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <label>
                    Last Name <span className="text-[#ED2C54]">*</span>
                  </label>
                  <input
                    type="text"
                    name="LastName"
                    className="outline-none border-b-2 border-[#524F4F] border-opacity-70 "
                    required
                  />
                </div>
              </div>
              <div className="flex items-center mt-8 justify-between">
                <div className="flex flex-col">
                  <label>
                    Email <span className="text-[#ED2C54]">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="outline-none border-b-2 border-[#524F4F] border-opacity-70 "
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <label>
                    Phone Number <span className="text-[#ED2C54]">*</span>
                  </label>
                  <input
                    type="number"
                    name="phoneNumber"
                    className="outline-none border-b-2 border-[#524F4F]  border-opacity-70"
                    required
                  />
                </div>
              </div>
              <div className="flex flex-col mt-8">
                <label>
                  How can we Help You? <span className="text-[#ED2C54]">*</span>
                </label>
                <input
                  type="text"
                  name="message"
                  className="outline-none border-b-2 border-[#524F4F] pt-10  border-opacity-70"
                  required
                />
              </div>
              <button
                disabled
                className="bg-[#ED2C54] text-white py-2 px-6 my-2 rounded-sm"
                type="submit"
              >
                Submit
              </button>
              <p className="text-sm">
                {" "}
                By Submiting, You agree to our Privacy Policy
              </p>
            </form>
          </div>
        </div>
      </div>
      {/* main-footer */}
      <div className="w-full h-fit bg-[#ED2C54]   text-white ">
        <div className="flex items-center justify-between py-16 gap-10 mx-auto w-[70%]">
          <div className="flex flex-col w-1/2 ">
            <p className="text-3xl font-bold py-3">Stay Connected!</p>
            <p>
              Be the first to know about updates, news, and exclusive offers
              from Castellum. Follow us on social media and subscribe to our
              newsletter.
            </p>
          </div>
          <div className="w-1/2 h-fit rounded-md">
            {/* newletter */}
            <form action="" className="bg-white flex rounded-md border-white">
              <input
                type="email"
                placeholder="Enter Email"
                name=""
                id=""
                className="w-[30rem] p-4  outline-none border-none bg-white"
              />
              <button
                type="submit"
                disabled
                className="bg-[#ED2C54] bg-opacity-90 text-[#fff]  px-5"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
        <hr />
      </div>
      {/* mainlat-footer */}
      <div className="w-full h-fit bg-[#ED2C54] text-xs  text-white ">
        <div className="flex items-center justify-between py-8 mx-auto w-[70%]">
          <div className="flex flex-col  ">
            <p>
              © 2024 Castellum. All rights reserved. Privacy Policy | Terms of
              Service | Contact Us
            </p>
          </div>
          <div className="">
            <div className="flex gap-2">
              {socialIcons.map((icon, i) => (
                <p key={i}>{icon.name}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* next */}
      {/* <div className="w-full h-[20rem]"></div> */}
    </div>
  );
};

export default Home;

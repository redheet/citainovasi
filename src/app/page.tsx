// import TopNavOne from "@/components/Header/TopNav/TopNavOne";
// import MenuOne from "@/components/Header/Menu/MenuOne";
// import SliderOne from "@/components/Slider/SliderOne";
// import ServiceOne from "@/components/Section/Service/ServiceOne";
// import serviceData from '@/data/service.json'
// import PaymentGatewayOneFirst from "@/components/Section/PaymentGateway/PaymentGatewayOneFirst";
// import CaseStudyOne from "@/components/Section/CaseStudy/CaseStudyOne";
// import PaymentGatewayOneSecond from "@/components/Section/PaymentGateway/PaymentGatewayOneSecond";
// import FaqsOne from "@/components/Section/FAQs/FaqsOne";
// import FormRequestOne from "@/components/Section/FormRequest/FormRequestOne";
// import blogData from '@/data/blog.json'
// import BlogOne from "@/components/Section/Blog/BlogOne";
// import PartnerOne from "@/components/Section/Partner/PartnerOne";
// import Footer from "@/components/Footer/Footer";

// export default function Home() {
//   return (
//     <>
//       <div className="overflow-x-hidden">
//         <header id="header">
//           <TopNavOne />
//           <MenuOne />
//         </header>
//         <main className="content">
//           <SliderOne />
//           <ServiceOne data={serviceData} />
//           <PaymentGatewayOneFirst />
//           <CaseStudyOne />
//           <PaymentGatewayOneSecond />
//           <FaqsOne />
//           <FormRequestOne />
//           <BlogOne data={blogData} />
//           <PartnerOne classname='bg-blue lg:mt-[100px] sm:mt-16 mt-10' />
//         </main>
//         <footer id="footer">
//           <Footer />
//         </footer>
//       </div>
//     </>
//   );
// }

import TopNavOne from "@/components/Header/TopNav/TopNavOne";
import MenuSix from "@/components/Header/Menu/MenuSix";
import SliderSix from "@/components/Slider/SliderSix";
import PartnerSix from "@/components/Section/Partner/PartnerSix";
import CounterSix from "@/components/Section/Counter/CounterSix";
import serviceData from '@/data/service.json'
import regisData from '@/data/regis.json'
import ServiceSix from "@/components/Section/Service/ServiceSix";
import AboutSix from "@/components/Section/About/AboutSix";
import PricingSix from "@/components/Section/Pricing/PricingSix";
import ServiceSixSecond from "@/components/Section/Service/ServiceSixSecond";
import testimonialData from '@/data/testimonial.json'
import TestimonialSix from "@/components/Section/Testimonial/TestimonialSix";
import blogData from '@/data/blog.json'
import BlogSix from "@/components/Section/Blog/BlogSix";
import Footer from "@/components/Footer/Footer";
import FormRequestSix from "@/components/Section/FormRequest/FormRequestSix";
import Awards from "@/components/Section/Awards/page";
import RegistrationRules from "@/components/Section/Service/RegistrationRules";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "GSIC - Greenpreneur Sustainability Innovation Competition",
    description: "Greenpreneur Sustainability Innovation Competition (GSIC) is a competition focused on innovators who create innovative solutions in the field of sustainability",
  };

export default function HomeSix() {
  return (
    <>
      <div className="bg-grey overflow-x-hidden">
        <header id="header" className="style-five style-six">
          <TopNavOne />
          <MenuSix />
        </header>
        <main className="content">
          <SliderSix />
          {/* <PartnerSix classname='bg-black' /> */}
          <CounterSix />
          <ServiceSix data={serviceData} />
          {/* <AboutSix /> */}
          <Awards />
          <RegistrationRules data={regisData} />
          {/* <PricingSix /> */}
          {/* <ServiceSixSecond /> */}
          {/* <TestimonialSix data={testimonialData} /> */}
          {/* <BlogSix data={blogData} /> */}
          {/* <FormRequestSix bgImg="/images/cta/bg-cta6.png" classname="style-two style-six" /> */}
        </main>
        <footer id="footer" className="style-six">
          <Footer />
        </footer>
      </div>
    </>
  );
}

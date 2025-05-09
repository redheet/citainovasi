import Image from "next/image";

const Awards = () => {
  return (
    <section className="text-white style-six lg:py-[100px] sm:py-16 py-10">
      <div className="service-block style-three mt-[60px]">
        <div className="container">
          <div className="uppercase text-xs font-bold text-blue">Medal</div>
          <div className="heading flex max-lg:flex-col lg:items-center justify-between gap-8 gap-y-4 mt-3">
            <div className="heading3 text-white">Awards</div>
          </div>
          <div className="grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xl:gap-[60px] gap-10 mt-20">
            <div className="w-full">
              <div className="service-item box-shadow-none">
                <div className="service-item-main flex flex-col gap-4">
                  <i className="text-4xl">
                    <Image src="/images/awards/juara-1.png" alt="" width={150} height={150}/>
                  </i>
                  <div className="desc">
                    <div className="heading7 hover-text-blue">Gold Medal</div>
                    {/* <div className="body3 text-white mt-1">
                      Experience the convenience of banking with easy access to
                      your accounts anytime, anywhere.
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full">
              <div className="service-item box-shadow-none">
                <div className="service-item-main flex flex-col gap-4">
                  <i className="text-4xl">
                    <Image src="/images/awards/juara-2.png" alt="" width={150} height={150}/>
                  </i>
                  <div className="desc">
                    <div className="heading7 hover-text-blue">Silver Medal</div>
                    {/* <div className="body3 text-white mt-1">
                      Rest assured with our robust security measures to protect
                      your transactions and sensitive.
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full">
              <div className="service-item box-shadow-none">
                <div className="service-item-main flex flex-col gap-4">
                  <i className="text-4xl">
                    <Image src="/images/awards/juara-3.png" alt="" width={150} height={150} />
                  </i>
                  <div className="desc">
                    <div className="heading7 hover-text-blue">
                      {" "}
                      Bronze Medal
                    </div>
                    {/* <div className="body3 text-white mt-1">
                      Stay in control of your finances with effortless tracking
                      and monitoring of your transactions.
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full max-xl:hidden max-md:block">
              <div className="service-item box-shadow-none">
                <div className="service-item-main flex flex-col gap-4">
                  <i className="text-4xl">
                    <Image src="/images/awards/honorable-mention.png" alt="" width={150} height={150} />
                  </i>
                  <div className="desc">
                    <div className="heading7 hover-text-blue">
                      Honorable Mention
                    </div>
                    {/* <div className="body3 text-white mt-1">
                      Enjoy round-the-clock access to your accounts for tracking
                      seamless financial management.
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Awards;

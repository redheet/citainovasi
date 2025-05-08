'use client'

import React from 'react'
import { useRef } from "react";
import { useInView } from "framer-motion";
import ServiceItem from '../../Service/ServiceItem'
import { ServiceType } from '@/type/ServiceType'

interface Props {
    data: Array<ServiceType>
}

const RegistrationRules: React.FC<Props> = ({ data }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <>
            <section className="service-block lg:py-[100px] sm:py-16 py-10" ref={ref}>
                <div className="container">
                    <h3 className="heading3 text-center text-white">Registration Rules</h3>
                    <div
                        className="list-service grid lg:grid-cols-2 sm:grid-cols-2 gap-8 md:mt-10 mt-6 gap-y-10"
                        style={{
                            transform: isInView ? "none" : "translateY(60px)",
                            opacity: isInView ? 1 : 0,
                            transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
                        }}
                    >
                        {data.slice(0, 8).map((item, index) => (
                            <ServiceItem data={item} style='style-one' number={index} key={index} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default RegistrationRules
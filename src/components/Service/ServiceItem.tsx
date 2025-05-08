import React from 'react'
import Link from "next/link"
import { ServiceType } from "@/type/ServiceType"
import * as Icon from "@phosphor-icons/react/dist/ssr";
import * as FaRecycle from 'react-icons/fa'; // Font Awesome
import * as GiSolarPower  from "react-icons/gi";
import * as FaTrash from 'react-icons/fa6'; 
import * as MdAgriculture from 'react-icons/md';
import * as MdOutlineDesignServices from 'react-icons/md'
import * as LuBookOpenCheck from 'react-icons/lu';
import * as IoMailUnreadOutline from 'react-icons/io5';
import * as MdOutlinePayments from 'react-icons/md';
import * as FaPeopleGroup from 'react-icons/fc';
import * as RiPresentationLine from 'react-icons/ri';
import * as TbReport from 'react-icons/tb';
import * as TbWorldCheck from 'react-icons/tb';
import * as BsCalendar2Check from 'react-icons/bs';
const iconPacks = { 
    ...FaRecycle,
    ...GiSolarPower,
    ...FaTrash,
    ...MdAgriculture,
    ...MdOutlineDesignServices,
    ...LuBookOpenCheck,
    ...IoMailUnreadOutline,
    ...MdOutlinePayments,
    ...FaPeopleGroup,
    ...RiPresentationLine,
    ...TbReport,
    ...TbWorldCheck,
    ...BsCalendar2Check,
}; 

interface Props {
    data: ServiceType
    style: string
    number: number
}


const ServiceItem: React.FC<Props> = ({ data, style, number }) => {
const IconComponent = iconPacks[data.icon as keyof typeof iconPacks];

    return (
        <>
            {style === 'style-one' &&
                <div
                    className="service-item p-8 bg-white rounded-lg border border-line hover-box-shadow"
                >
                    <a
                        className="service-item-main h-full"
                    >
                        <div className="heading flex items-center justify-between">
                            {IconComponent && <IconComponent className="text-blue md:text-6xl text-5xl" />}
                            <div className="number heading3 text-placehover">{number + 1}</div>
                        </div>
                        <div className="heading6 hover:text-blue duration-300 mt-6">{data.title}</div>
                        <div className="text-secondary mt-2">{data.desc}</div>
                    </a>
                </div>
            }
            {style === 'style-two' &&
                <div className="service-item py-7 px-6 bg-white rounded-lg border border-line box-shadow-sm hover-box-shadow">
                    <Link
                        className="service-item-main flex items-center gap-8 h-full"
                        href={"/service/service-detail/[slug]"}
                        as={`/service/service-detail/${data.title.toLowerCase().replace(/ /g, '-')}`}
                    >
                        <div className="icon">
                            <i className={`${data.icon} text-blue md:text-5xl text-4xl`}></i>
                        </div>
                        <div className="infor">
                            <div className="heading7 hover:text-blue duration-300">{data.title}</div>
                            <div className="text-secondary mt-2">{data.shortDesc}</div>
                            <div className="read-more flex items-center gap-1 mt-2">
                                <div className="text-button-sm">Explore Plan</div>
                                <Icon.CaretRight weight="bold" className="text-blue text-sm duration-300" />
                            </div>
                        </div>
                    </Link>
                </div>
            }
            {style === 'style-three' &&
                <div className="service-item px-8 py-10 bg-white rounded-lg">
                    <Link
                        className="service-item-main flex flex-col items-center h-full"
                        href={"/service/service-detail/[slug]"}
                        as={`/service/service-detail/${data.title.toLowerCase().replace(/ /g, '-')}`}
                    >
                        <i className={`${data.icon} text-gradient md:text-6xl text-5xl`}></i>
                        <div className="heading7 text-center hover:text-gradient duration-300 mt-6">{data.title}</div>
                        <div className="caption1 text-secondary text-center mt-1.5">{data.desc}</div>
                    </Link>
                </div>
            }
            {style === 'style-four' &&
                <div className="service-item p-8 bg-white rounded-lg border border-line hover-box-shadow">
                    <Link
                        className="service-item-main h-full"
                        href={"/service/service-detail/[slug]"}
                        as={`/service/service-detail/${data.title.toLowerCase().replace(/ /g, '-')}`}
                    >
                        <i className={`${data.icon} text-black md:text-6xl text-5xl`}></i>
                        <div className="heading7 hover:text-success duration-300 mt-6">{data.title}</div>
                        <div className="text-secondary mt-2">{data.desc}</div>
                        <div className="text-button-sm hover:text-success underline inline-block duration-300 mt-3">Read More</div>
                    </Link>
                </div>
            }
            {style === 'style-five' &&
                <div className="service-item p-8 bg-white rounded-lg border border-line hover-box-shadow">
                    <Link
                        className="service-item-main h-full"
                        href={"/service/service-detail/[slug]"}
                        as={`/service/service-detail/${data.title.toLowerCase().replace(/ /g, '-')}`}
                    >
                        <div className="heading flex items-center justify-between">
                            <i className={`${data.icon} text-blue md:text-6xl text-5xl`}></i>
                            <div className="number heading3 text-placehover">{number + 1}</div>
                        </div>
                        <div className="heading7 hover:text-blue duration-300 mt-6">{data.title}</div>
                        <div className="text-secondary mt-2">{data.desc}</div>
                        <div className="read-more flex items-center gap-1 mt-4">
                            <div className="text-button-sm">Read More</div>
                            <Icon.CaretRight weight="bold" className="text-blue text-sm duration-300" />
                        </div>
                    </Link>
                </div>
            }
            {style === 'style-six' &&
                <div className="service-item rounded-2xl border border-line hover-box-shadow">
                    <a
                        className="service-item-main block h-full px-8 pb-7 md:pt-14 pt-10"
                    >
                        <div className="icon md:w-[100px] w-20 md:h-[100px] h-20 flex items-center justify-center rounded-2xl">
                        {IconComponent && <IconComponent className="text-white md:text-5xl text-4xl" />}
                        </div>
                        <div className="heading7 text-white hover:text-orange duration-300 mt-6">{data.title}</div>
                        <div className="text-placehover mt-3">{data.desc}</div>
                    </a>
                </div>
            }
            {style === 'style-about' &&
                <div className="service-item py-8 px-7 bg-white rounded-lg hover-box-shadow">
                    <Link
                        className="service-item-main flex flex-col justify-between h-full"
                        href={"/service/service-detail/[slug]"}
                        as={`/service/service-detail/${data.title.toLowerCase().replace(/ /g, '-')}`}
                    >
                        <div className="heading flex items-center gap-4">
                            <i className={`${data.icon} text-blue md:text-5xl text-4xl`}></i>
                            <div className="heading7 hover:text-blue duration-300">{data.title}</div>
                        </div>
                        <div className="text-secondary mt-4">{data.desc}</div>
                        <div className="read-more flex items-center gap-1 mt-4">
                            <div className="text-button-sm">Explore Plan</div>
                            <Icon.CaretRight weight="bold" className="text-blue text-sm duration-300" />
                        </div>
                    </Link>
                </div>
            }
            {style === 'style-about-two' &&
                <div className="service-item px-4 bg-white rounded-lg">
                    <Link
                        className="service-item-main flex flex-col items-center h-full"
                        href={"/service/service-detail/[slug]"}
                        as={`/service/service-detail/${data.title.toLowerCase().replace(/ /g, '-')}`}
                    >
                        <i className={`${data.icon} text-blue md:text-6xl text-5xl`}></i>
                        <div className="heading7 text-center hover:text-blue duration-300 mt-6">{data.title}</div>
                        <div className="caption1 text-secondary text-center mt-1.5">{data.desc}</div>
                    </Link>
                </div>
            }
        </>
    )
}

export default ServiceItem
"use client";

import Image from "next/image";
import NavbarComponent from "@/component/navbar/page";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Logos from "../public/logos.json";

import proyector from "@/public/layout/proyector.jpg";
import powerbank from "@/public/layout/powerbank.jpg";
import carholder from "@/public/layout/carholder.jpg";
import cobertor from "@/public/layout/cobertor.jpg";
import bh20 from "@/public/layout/bh20.jpg";
import cablenaztech from "@/public/layout/cablenaztech.jpg";
import flip from "@/public/layout/flip.jpg";

import Autoplay from "embla-carousel-autoplay"
import { useRef } from "react";
import CarouselEmbla from "@/components/ui/CarouselEmbla";

export default function Home() {
  const plugin = useRef(
    Autoplay({ delay: 10, stopOnInteraction: false })
  )

  return (
    <div className="">
      <NavbarComponent />
      <CarouselEmbla />

      <section className="w-full h-[200px] bg-gradient-to-t from-[#E7F6FF] to-transparent grid place-items-center relative">
        <Carousel
          className="w-full h-auto"
          // onMouseEnter={() => plugin.current.stop()}
          // onMouseLeave={() => plugin.current.reset()}
          plugins={[plugin.current]}
          opts={{
            loop: true,
            duration: 4000,
            slidesToScroll: "auto",
          }}>
          <CarouselContent className="-ml-4">
            {Logos.map((logo, index) => (
              <CarouselItem
                key={index}
                className="basis-1/2 md:basis-1/4 lg:basis-1/5 xl:basis-1/6 pl-4 flex items-center justify-center"
              >
                <Image
                  src={logo.url}
                  alt={logo.name}
                  width={100}
                  height={26}
                  className="h-[26px] w-[200px] object-contain grayscale select-none"
                  quality={100}
                  priority
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

      </section>

      <section className="h-fit w-full bg-[#E7F6FF]">

        <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-3 md:grid-rows-2 gap-3 p-4">
          <div className="col-start-1 row-start-1 h-[220px] md:h-[362px]">
            <Image
              src={proyector}
              alt="Proyector"
              className="w-full h-full object-contain rounded shadow bg-white"
            />
          </div>
          <div className="col-start-2 row-start-1 h-[220px] md:h-[362px]">
            <Image
              src={powerbank}
              alt="Powerbank solar"
              className="w-full h-full object-contain rounded shadow bg-white"
            />
          </div>
          <div className="col-start-1 md:col-start-3 row-start-2 md:row-start-1 h-[220px] md:h-[362px]">
            <Image
              src={carholder}
              alt="Soporte para carro"
              className="w-full h-full object-contain rounded shadow bg-white"
            />
          </div>
          <div className="col-start-2 md:col-start-4 row-start-2 md:row-start-1 h-[220px] md:h-[362px]">
            <Image
              src={cobertor}
              alt="Funda con anillo"
              className="w-full h-full object-contain rounded shadow bg-white"
            />
          </div>
          <div className="col-start-1 row-start-3 md:row-start-2 h-[220px] md:h-[362px]">
            <Image
              src={bh20}
              alt="Audífonos deportivos BH20"
              className="w-full h-full object-contain rounded shadow bg-white"
            />
          </div>
          <div className="col-start-2 row-start-3 md:row-start-2 h-[220px] md:h-[362px]">
            <Image
              src={cablenaztech}
              alt="Cable Naztech 12ft"
              className="w-full h-full object-contain rounded shadow bg-white"
            />
          </div>
          <div className="col-start-1 col-span-2 md:col-start-3 md:col-span-2 row-start-4 md:row-start-2 h-[220px] md:h-[362px]">
            <Image
              src={flip}
              alt="Audífonos 2 en 1"
              className="w-full h-full object-contain rounded shadow bg-white"
            />
          </div>
        </div>

        <section className="relative w-full h-[550px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7182.6685034881075!2d-80.35304562481463!3d25.825528977311844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9bbf090900001%3A0x2fcca9156f6d79a2!2sQorex%20Group%20Inc.!5e0!3m2!1ses-419!2shn!4v1752516488502!5m2!1ses-419!2shn"
            width="100%"
            height="550px"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          >
          </iframe>

          <div className="flex-1 flex justify-center items-end absolute inset-0 p-4 pointer-events-none">
            <div className="w-full max-w-3xl justify-between h-auto bg-white/10 backdrop-blur-xl rounded-3xl shadow-xl py-8 px-8 flex flex-col md:flex-row gap-6 md:gap-12 items-center pointer-events-auto border border-[#e0e7ef]">
              <div className="flex flex-col items-center md:items-start text-center md:text-left">
                <h3 className="text-[#0066FF] text-lg font-bold mb-1 tracking-wide">Dirección</h3>
                <p className="text-gray-700 text-base">9450 NW 58th St Suite 104,<br />Doral, FL 33178, Estados Unidos</p>
              </div>
              <div className="flex flex-col items-center md:items-start text-center md:text-left">
                <h3 className="text-[#0066FF] text-lg font-bold mb-1 tracking-wide">Teléfono</h3>
                <p className="text-gray-700 text-base">+1 786-678-2951</p>
              </div>
              <div className="flex flex-col items-center md:items-start text-center md:text-left">
                <h3 className="text-[#0066FF] text-lg font-bold mb-1 tracking-wide">Email</h3>
                <a href="mailto:sales@qorex.com" className="text-gray-700 text-base underline hover:text-[#0066FF] transition-colors">sales@qorex.com</a>
              </div>
            </div>
          </div>

        </section>

      </section>

      <section className="w-full h-[80vh] bg-[#eeeeee] flex items-center justify-between">
        <Image
          src="/smartchsxo.png"
          alt="Footer"
          width={968}
          height={300}
          className="w-1/2 h-fit aspect-video object-contain relative z-10"
          quality={100}
          priority
        />

        <div className="w-1/2 h-full bg-red-200 flex justify-center p-4 flex-col">
          <h4 className="text-[#FE0000] text-5xl font-extrabold">XO SMARTWATCH</h4>
          <p>24-hour smart heart rate monitoring With your health in mind</p>
        </div>
      </section>
    </div>
  );
}

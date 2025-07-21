import NavbarComponent from '@/component/navbar/page'
import Image from 'next/image'
import Logos from "@/public/logos.json";
import Link from 'next/link';
import Footer from '@/components/footer/page';

function BrandsPage() {
  return (
    <>
      <NavbarComponent position='absolute' color='transparent' darktheme={true} />

      <main className='bg-[#e7f6ff]'>
        <section className='h-[70vh] w-full grid place-content-center relative'>
          <h1 className="text-5xl font-bold text-white mt-8 text-center z-10">
            Discover Top Brands on Qorex
          </h1>

          <div className='bg-black/80 absolute inset-0 z-1'></div>

          <Image
            src="/about-bg-img.jpg"
            alt="Qorex banner"
            width={200}
            height={50}
            quality={100}
            className="w-full h-full absolute inset-0 object-cover"
          />
        </section>

        <article className='-mt-[100px] z-10 relative flex flex-wrap items-center justify-center gap-6 p-4'>
          <div className='h-[180px] w-[240px] sm:w-[340px] bg-white px-6 sm:px-10 flex flex-col gap-2 justify-center mb-4 sm:mb-0'>
            <h4 className='text-2xl sm:text-3xl font-bold'>Quality</h4>
            <p className='text-base sm:text-lg'>We partner with leading brands to ensure you get the best quality products.</p>
          </div>
          <div className='h-[180px] w-[240px] sm:w-[340px] bg-white px-6 sm:px-10 flex flex-col gap-2 justify-center mb-4 sm:mb-0'>
            <h4 className='text-2xl sm:text-3xl font-bold'>Top Brands</h4>
            <p className='text-base sm:text-lg'>We work with renowned brands to bring you trusted and reliable products.</p>
          </div>
          <div className='h-[180px] w-[240px] sm:w-[340px] bg-white px-6 sm:px-10 flex flex-col gap-2 justify-center mb-4 sm:mb-0'>
            <h4 className='text-2xl sm:text-3xl font-bold'>Innovation</h4>
            <p className='text-base sm:text-lg'>Our commitment to innovation ensures you always have access to the latest solutions.</p>
          </div>
          <div className='h-[180px] w-[240px] sm:w-[340px] bg-white px-6 sm:px-10 flex flex-col gap-2 justify-center'>
            <h4 className='text-2xl sm:text-3xl font-bold'>Technology</h4>
            <p className='text-base sm:text-lg'>We offer cutting-edge technology to help your business stay ahead in a competitive market.</p>
          </div>
        </article>

        <section className='bg-[#e7f6ff] w-full p-8 flex flex-col gap-8'>
          <h3 className="text-5xl font-bold text-black mt-8 text-center">Our Brands</h3>

          <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4'>
            {Logos.map((logo, index) => (
              <Link
                href="https://drive.google.com/drive/folders/1Vlgr8UhUHGEC7HcVDyUeFiCz2fT85_gz?hl=es"
                target="_blank"
                rel="noopener noreferrer"
                key={index}
                className="w-full max-w-[300px] h-[120px] bg-white flex items-center justify-center mx-auto cursor-pointer hover:bg-gray-200 transition-colors duration-100"
              >
                <Image
                  src={logo.url}
                  alt={logo.name}
                  width={200}
                  height={40}
                  className="h-[40px] w-[200px] object-contain grayscale select-none"
                  quality={100}
                  priority
                />
              </Link>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

export default BrandsPage
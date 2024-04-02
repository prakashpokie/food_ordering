import Header from "@/components/layout/Header";
import Hero from "@/components/layout/Hero";
import HomeMenu from "@/components/layout/HomeMenu";
import SectionHeaders from "@/components/layout/SectionHeaders";

export default function Home() {
  return (
    <>
      <Hero />
      <HomeMenu />
      <section className="text-center my-16" id="about">
        <SectionHeaders
          subHeader={'Our story'}
          mainHeader={'About us'}
        />
        <div className="text-gray-500 max-w-md mx-auto mt-4 flex flex-col gap-4">
          <p>
            Dolphin Restaurant in Tiruchengode HO offers convenient 
            home delivery services for those who prefer to enjoy 
            delicious food from the comfort of their own home.At c
          </p>
          <p>
            Enjoy a hassle-free dining experience with their efficient home delivery services. 
            Choose Dolphin Restaurant for a satisfying meal without 
            leaving your home.?
          </p>
          <p>
            Save time and impress your guests with the scrumptious 
            food from Dolphin Restaurant.
          </p>
        </div>
      </section>
      <section className="text-center my-8" id="contact">
        <SectionHeaders
          subHeader={'Don\'t hesitate'}
          mainHeader={'Contact us'}
        />
        <div className="mt-8">
          <a className="text-4xl underline text-gray-500" href="tel:+46738123123">
            +91 90035 15244
          </a>
        </div>
      </section>
    </>
  )
}

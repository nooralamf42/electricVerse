'use client'
import { services } from '@/constants/services'
import { ArrowUp  } from 'lucide-react'
import { useRef} from 'react'
import { useScroll, useTransform, motion } from 'motion/react'
import Link from 'next/link'
import WhatsappButton from '@/components/whatsappButton'

const ServicesSection = () => {

  return (
    <section>

      <HorizontalScrollCarousel />
      {/* <TextParallaxContentExample /> */}
    </section>
  )
}

export default ServicesSection

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-101%"]);
  const opacity = useTransform(scrollYProgress, [0.84, 1], [0, 1]);
  const scale = useTransform(scrollYProgress, [0.84, 1], [1, 1.7]);

  return (
    <div>
      <motion.h2 className='text-3xl md:text-6xl text-center mt-34' initial={{ filter: 'blur(10px)' }} whileInView={{ filter: 'blur(0px)' }} transition={{ duration: .5 }} viewport={{ amount: .4 }} >Services we provide</motion.h2>

      <div ref={targetRef} className="relative h-[300vh] ">
        <div className="sticky z-10 top-0 sm:top-10 flex h-screen container overflow-hidden items-center ">
          <motion.div style={{ opacity, scale }} className="flex h-full w-full justify-center items-center absolute bottom-0 ">
            <Link href={'/services'} className='text-xl sm:text-2xl border-b'>View All Services</Link>
          </motion.div>
          <motion.div style={{ x }} className="flex gap-4 bg-white dark:bg-black">
            {services.map((card, index) => {
              return <Card key={index} index={index} card={card} />;
            })}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const Card = ({ card, index }: { card: { name: string, image: string, description: string, href: string }, index: number }) => {
  return (
    <motion.div
      whileInView={{ y: 0 }}
      initial={{ y: 80 }}
      transition={{ duration: .5 }}
      viewport={{ amount: .4, once: true }}
      key={index}
      className="group relative h-[80dvh]  w-[340px] sm:w-[450px] overflow-hidden bg-neutral-200"
    >
      <div className="absolute bottom-4 left-4 right-4 z-30">
        <WhatsappButton service={card.name} />
      </div>
      <div
        style={{
          backgroundImage: `url(${card.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      <div className="absolute inset-0 z-10 grid place-content-center">
        <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-4xl sm:text-6xl font-black uppercase text-white backdrop-blur-lg">
          {card.name}
        </p>
      </div>
    </motion.div>
  );
};





export const TextParallaxContentExample = () => {
  return (
    <div className="bg-white">
      <TextParallaxContent
        imgUrl="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        subheading="Collaborate"
        heading="Built for all of us."
      >
        <ExampleContent />
      </TextParallaxContent>
      <TextParallaxContent
        imgUrl="https://images.unsplash.com/photo-1530893609608-32a9af3aa95c?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        subheading="Quality"
        heading="Never compromise."
      >
        <ExampleContent />
      </TextParallaxContent>
      <TextParallaxContent
        imgUrl="https://images.unsplash.com/photo-1504610926078-a1611febcad3?q=80&w=2416&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        subheading="Modern"
        heading="Dress for the best."
      >
        <ExampleContent />
      </TextParallaxContent>
    </div>
  );
};

const IMG_PADDING = 12;

const TextParallaxContent = ({ imgUrl, subheading, heading, children }: { imgUrl: string, subheading: string, heading: string, children: React.ReactNode }) => {
  return (
    <div
      style={{
        paddingLeft: IMG_PADDING,
        paddingRight: IMG_PADDING,
      }}
    >
      <div className="relative h-[150vh]">
        <StickyImage imgUrl={imgUrl} />
        <OverlayCopy heading={heading} subheading={subheading} />
      </div>
      {children}
    </div>
  );
};

const StickyImage = ({ imgUrl }: { imgUrl: string }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: `calc(100vh - ${IMG_PADDING * 2}px)`,
        top: IMG_PADDING,
        scale,
      }}
      ref={targetRef}
      className="sticky z-0 overflow-hidden rounded-3xl"
    >
      <motion.div
        className="absolute inset-0 bg-neutral-950/70"
        style={{
          opacity,
        }}
      />
    </motion.div>
  );
};

const OverlayCopy = ({ subheading, heading }: { subheading: string, heading: string }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

  return (
    <motion.div
      style={{
        y,
        opacity,
      }}
      ref={targetRef}
      className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white"
    >
      <p className="mb-2 text-center text-xl md:mb-4 md:text-3xl">
        {subheading}
      </p>
      <p className="text-center text-4xl font-bold md:text-7xl">{heading}</p>
    </motion.div>
  );
};

const ExampleContent = () => (
  <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
    <h2 className="col-span-1 text-3xl font-bold md:col-span-4">
      Additional content explaining the above card here
    </h2>
    <div className="col-span-1 md:col-span-8">
      <p className="mb-4 text-xl text-neutral-600 md:text-2xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
        blanditiis soluta eius quam modi aliquam quaerat odit deleniti minima
        maiores voluptate est ut saepe accusantium maxime doloremque nulla
        consectetur possimus.
      </p>
      <p className="mb-8 text-xl text-neutral-600 md:text-2xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
        reiciendis blanditiis aliquam aut fugit sint.
      </p>
      <button className="w-full rounded bg-neutral-900 px-9 py-4 text-xl text-white transition-colors hover:bg-neutral-700 md:w-fit">
        Learn more <ArrowUp className="inline" />
      </button>
    </div>
  </div>
);
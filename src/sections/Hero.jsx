import { Element, Link as LinkScroll } from "react-scroll";
import Button from "../components/Button.jsx";
import RotatingText from "../animations/RotatingText";

const Hero = () => {
    return (
        <section className="relative pt-60 pb-40 max-lg:pt-52 max-lg:pb-36 max-md:pt-36 max-md:pb-32">
            <Element name="hero">
                <div className="container">
                    <div className="relative z-2 max-w-512 max-lg:max-w-388">
                        <div className="caption small-2 uppercase text-p3">
                            Video Editing
                        </div>
                        <h1 className="mb-6 h1 text-p4 uppercase max-lg:mb-7 max-lg:h2 max-md:mb-4 max-md:text-5xl max-md:leading-12">
                            <span className="mr-2">Hello</span>
                            <RotatingText
                                texts={['React', 'Bits', 'Is', 'Cool!']}
                                mainClassName="px-2 sm:px-2 md:px-3 bg-cyan-300 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
                                staggerFrom={"last"}
                                initial={{ y: "100%" }}
                                animate={{ y: 0 }}
                                exit={{ y: "-120%" }}
                                staggerDuration={0.025}
                                splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                                rotationInterval={2000}
                            />
                        </h1>
                        <p className="max-w-440 mb-14 body-1 max-md:mb-10">
                            We designed XORA AI Video Editor to be an easy to use, quick to
                            learn, and surprisingly powerful.
                        </p>
                        <LinkScroll to="features" offset={-100} spy smooth>
                            <Button icon="/images/zap.svg">Try it now</Button>
                        </LinkScroll>
                    </div>

                    <div className="absolute -top-32 left-[calc(50%-340px)] w-[1230px] pointer-events-none hero-img_res">
                        <img
                            src="/images/hero.png"
                            className="size-1230 max-lg:h-auto"
                            alt="hero"
                        />
                    </div>
                </div>
            </Element>
        </section>
    );
};

export default Hero;

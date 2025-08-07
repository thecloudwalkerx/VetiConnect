import { Element } from "react-scroll";
import { links, logos } from "../constants/index.jsx";
import { Marker } from "../components/Marker.jsx";
import TrueFocus from "../animations/TrueFocus";
import { useState, useEffect } from "react";

const Download = () => {
  const [offsetX, setOffsetX] = useState(-225);

  useEffect(() => {
    function updateOffset() {
      if (window.innerWidth <= 768) {
        // You can adjust the breakpoint for mobile here
        setOffsetX(-180);
      } else {
        setOffsetX(-225);
      }
    }

    updateOffset(); // initial check

    window.addEventListener("resize", updateOffset);
    return () => window.removeEventListener("resize", updateOffset);
  }, []);

  return (
    <section>
      <Element
        name="download"
        className="g7 relative pb-32 pt-24 max-lg:pb-24 max-md:py-16"
      >
        <div className="container">
          <div className="flex items-center">
            <div className="relative mr-6 flex-540 max-xl:flex-280 max-lg:flex256 max-md:flex-100">
              <div className="mb-10">
                <img
                  src="/images/xora.svg"
                  width={160}
                  height={55}
                  alt="xora"
                />
              </div>

              <p className="body-1 mb-10 max-w-md">
                Try it now for free on iOS, Android, PC, Web - whatever your
                flavor, we've got you covered.
              </p>
              <TrueFocus
                manualMode={true}
                blurAmount={4}
                borderColor="lime"
                glowColor="rgba(0,255,0,0.5)"
                animationDuration={0.2}
                pauseBetweenAnimations={1}
                offsetX={offsetX} // use dynamic offsetX
                offsetY={0}
              >
                {links.map(({ id, url, icon }) => (
                  <a
                    key={id}
                    href={url}
                    className="size-22 download_tech-icon_before relative flex items-center justify-center rounded-half border-2 border-s3 bg-s1 transition-borderColor duration-500"
                  >
                    <span className="absolute -top-2 rotate-90">
                      <Marker />
                    </span>
                    <img
                      src={"/images/lines.svg"}
                      alt="lines"
                      className="absolute size-13/20 object-contain"
                    />
                    <span className="download_tech-icon">{icon}</span>
                  </a>
                ))}
              </TrueFocus>
            </div>

            <div className="mb-10 max-md:hidden">
              <div className="download_preview-before download_preview-after rounded-40 relative w-[955px] border-2 border-s5 p-6">
                <div className="relative rounded-3xl bg-s1 px-6 pb-6 pt-14">
                  <span className="download_preview-dot left-6 bg-p2" />
                  <span className="download_preview-dot left-11 bg-s3" />
                  <span className="download_preview-dot left-16 bg-p1/15" />

                  <img
                    src="/images/screen.jpg"
                    width={855}
                    height={655}
                    alt="screen"
                    className="rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>

          <ul className="mt-24 flex justify-center max-lg:hidden">
            {logos.map(({ id, url, width, height, title }) => (
              <li key={id} className="mx-10">
                <img src={url} width={width} height={height} alt={title} />
              </li>
            ))}
          </ul>
        </div>
      </Element>
    </section>
  );
};

export default Download;

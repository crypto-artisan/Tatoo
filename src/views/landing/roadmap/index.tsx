import React, { useCallback, useEffect, useState } from "react";
import {
  RoadMapCard,
  RoadMapCardGroup,
  RoadMapCardWrapper,
  RoadMapLine,
  RoadMapSection,
  RoadMapTitleSection,
  RoadmapWrapper,
} from "./roadmap.styled";

import roadmapLine from "assets/image/roadmap/roadmap-line.png";
import roadmap1 from "assets/image/roadmap/roadmap1.png";
import roadmap2 from "assets/image/roadmap/roadmap2.png";
import roadmap3 from "assets/image/roadmap/roadmap3.png";
import roadmap4 from "assets/image/roadmap/roadmap4.png";
import roadmap5 from "assets/image/roadmap/roadmap5.png";

const RoadMapPart = () => {
  const [y, setY] = useState(0);

  const handleScroll = useCallback(
    (e: any) => {
      const currentTarget = e.currentTarget;
      const rmXY: any = [];
      for (let i = 1; i <= 5; i++) {
        rmXY.push(document.getElementById("rmd" + i)?.getBoundingClientRect());
      }

      if (y > currentTarget.scrollY) {
        for (let j = 0; j < 5; j++) {
          if (rmXY[j].top > window.innerHeight) {
            const activeDiv: any = document.getElementById("rmd" + (j + 1));
            activeDiv.style.transform = "translateY(100px)";
            activeDiv.style.opacity = "0";
          }
        }
      } else if (y < currentTarget.scrollY) {
        console.log(rmXY[0]?.top);
        for (let j = 0; j < 5; j++) {
          if (rmXY[j].top >= 0 && rmXY[j].top <= window.innerHeight) {
            const activeDiv: any = document.getElementById("rmd" + (j + 1));
            activeDiv.style.transform = "translateY(0)";
            activeDiv.style.opacity = "1";
          }
        }
      }
      setY(currentTarget.scrollY);
    },
    [y]
  );

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    setY(window.scrollY);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <RoadmapWrapper>
      <RoadMapTitleSection>
        <h2>Roadmap</h2>
        <p>
          {
            "This roadmap outlines our goals and where we want to take The Tattoo Shop NFT. We have a lot of ideas and concepts that we are working on. It may evolve over time and hopefully become even better!"
          }
        </p>
      </RoadMapTitleSection>
      <RoadMapSection>
        <RoadMapLine>
          <img src={roadmapLine} className="rm-line" alt="roadmapLine" />
          <div id="rm1">
            <img src={roadmap1} alt="roadmap1" />
          </div>
          <div id="rm2">
            <img src={roadmap2} alt="roadmap2" />
          </div>
          <div id="rm3">
            <img src={roadmap3} alt="roadmap3" />
          </div>
          <div id="rm4">
            <img src={roadmap4} alt="roadmap4" />
          </div>
          <div id="rm5">
            <img src={roadmap5} alt="roadmap5" />
          </div>
        </RoadMapLine>
        <RoadMapCardWrapper>
          <RoadMapCardGroup>
            <RoadMapCard id="rmd1">
              <h2>Launch Roadmap</h2>
              <p>
                {
                  "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat."
                }
              </p>
            </RoadMapCard>
            <div />
          </RoadMapCardGroup>
          <RoadMapCardGroup>
            <div />
            <RoadMapCard id="rmd2">
              <h2>The Legend</h2>
              <p>
                {
                  "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat."
                }
              </p>
            </RoadMapCard>
          </RoadMapCardGroup>
          <RoadMapCardGroup>
            <RoadMapCard id="rmd3">
              <h2>Art Holds Keys</h2>
              <p>
                {
                  "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat."
                }
              </p>
            </RoadMapCard>
            <div />
          </RoadMapCardGroup>
          <RoadMapCardGroup>
            <div />
            <RoadMapCard id="rmd4">
              <h2>Art with Utility</h2>
              <p>
                {
                  "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat."
                }
              </p>
            </RoadMapCard>
          </RoadMapCardGroup>
          <RoadMapCardGroup>
            <RoadMapCard id="rmd5">
              <h2>Team expansion</h2>
              <p>
                {
                  "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat."
                }
              </p>
            </RoadMapCard>
            <div />
          </RoadMapCardGroup>
        </RoadMapCardWrapper>
      </RoadMapSection>
    </RoadmapWrapper>
  );
};

export default RoadMapPart;

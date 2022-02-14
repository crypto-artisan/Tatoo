import React, { useEffect, useState } from "react";
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
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", () =>
      setMobile(window.innerWidth >= 1024 ? false : true)
    );
    setMobile(window.innerWidth >= 1024 ? false : true);
    return () => {
      window.removeEventListener("resize", () => {});
    };
  }, []);

  return (
    <RoadmapWrapper id="roadmap">
      <RoadMapTitleSection>
        <h2>Roadmap</h2>
        <p>
          {
            "This roadmap outlines our goals and where we want to take The Tattoo Shop NFT. We have a lot of ideas and concepts that we are working on. It may evolve over time and hopefully become even better!"
          }
        </p>
      </RoadMapTitleSection>
      {!mobile && (
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
      )}
      {mobile && (
        <RoadMapCardGroup>
          <RoadMapCard id="rmd-m1" className="mobile-rm">
            <h2>Launch Roadmap</h2>
            <p>
              {
                "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat."
              }
            </p>
          </RoadMapCard>
          <RoadMapCard id="rmd-m2" className="mobile-rm">
            <h2>The Legend</h2>
            <p>
              {
                "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat."
              }
            </p>
          </RoadMapCard>
          <RoadMapCard id="rmd-m3" className="mobile-rm">
            <h2>Art Holds Keys</h2>
            <p>
              {
                "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat."
              }
            </p>
          </RoadMapCard>
          <RoadMapCard id="rmd-m4" className="mobile-rm">
            <h2>Art With Utility</h2>
            <p>
              {
                "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat."
              }
            </p>
          </RoadMapCard>
          <RoadMapCard id="rmd-m5" className="mobile-rm">
            <h2>Team Expansion</h2>
            <p>
              {
                "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat."
              }
            </p>
          </RoadMapCard>
        </RoadMapCardGroup>
      )}
    </RoadmapWrapper>
  );
};

export default RoadMapPart;

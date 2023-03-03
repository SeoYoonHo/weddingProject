import React from "react";

// reactstrap components
// import {
// } from "reactstrap";

// core components
import IndexHeader from "components/Headers/IndexHeader.js";
import DarkFooter from "components/Footers/DarkFooter.js";

// sections for this page
import Images from "../index-sections/Images.js";
import BasicElements from "../index-sections/BasicElements.js";
import Navbars from "../index-sections/Navbars.js";
import InvitaionStroy from "../sections/InvitaionStory.js"
import Contact from "../sections/Contact.js"
import Tabs from "../index-sections/Tabs.js";
import Pagination from "../index-sections/Pagination.js";
import Notifications from "../index-sections/Notifications.js";
import Typography from "../index-sections/Typography.js";
import Javascript from "../index-sections/Javascript.js";
import Carousel from "../index-sections/Carousel.js";
import NucleoIcons from "../index-sections/NucleoIcons.js";
import CompleteExamples from "../index-sections/CompleteExamples.js";
import SignUp from "../index-sections/SignUp.js";
import Examples from "../index-sections/Examples.js";
import Download from "../index-sections/Download.js";
import ContactTemplate from "../sections/Contact.js";

import {
    Animator,
    ScrollContainer,
    ScrollPage,
    batch,
    Fade,
    FadeIn,
    FadeOut,
    Move,
    MoveIn,
    MoveOut,
    Sticky,
    StickyIn,
    StickyOut,
    Zoom,
    ZoomIn,
    ZoomOut
} from "react-scroll-motion";

function WeddingExample() {
    const FadeUp = batch(FadeIn());

    React.useEffect(() => {
        document.body.classList.add("index-page");
        document.body.classList.add("sidebar-collapse");
        document.documentElement.classList.remove("nav-open");
        window.scrollTo(0, 0);
        document.body.scrollTop = 0;
        return function cleanup() {
            document.body.classList.remove("index-page");
            document.body.classList.remove("sidebar-collapse");
        };
    });
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            backgroundColor:'gray'
        }}>
            <ScrollContainer style={{
                width: 500,
                alignSelf: 'center',
                backgroundColor:'white',
                zIndex:1
            }}>

                <ScrollPage>
                    <Animator animation={FadeUp}>
                        <IndexHeader/>
                    </Animator>
                </ScrollPage>

                {/*<ScrollPage>*/}
                {/*    <Animator animation={FadeUp}>*/}
                {/*        <span style={{fontSize: "40px"}}>I'm FadeUp ⛅️</span>*/}
                {/*    </Animator>*/}
                {/*</ScrollPage>*/}


                {/*<div className="main">*/}
                {/*<BasicElements />*/}
                {/*<Navbars />*/}
                <ScrollPage>
                    <Animator animation={FadeUp}>
                        <InvitaionStroy/>
                    </Animator>
                </ScrollPage>
                <ScrollPage>
                    <Animator animation={FadeUp}>
                        <Contact/>
                    </Animator>
                </ScrollPage>
                {/*<Tabs/>*/}
                {/*<Pagination />*/}
                {/*<Notifications />*/}
                {/*<Typography/>*/}
                {/*<Javascript />*/}
                <ScrollPage>
                    <Animator animation={FadeUp}>
                        <Carousel/>
                    </Animator>
                </ScrollPage>
                {/*<NucleoIcons />*/}
                {/*<CompleteExamples/>*/}
                {/*<SignUp />*/}
                {/*<Examples />*/}
                {/*<Download />*/}
                {/*</div>*/}
            </ScrollContainer>
        </div>);
}

export default WeddingExample;

import React from 'react'
import {
    Animator,
    ScrollContainer,
    ScrollPage,
    batch,
    Fade,
    FadeIn,
    Move,
    MoveIn,
    MoveOut,
    Sticky,
    StickyIn,
    ZoomIn
} from 'react-scroll-motion';

const AboutUs = () => {
    const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
    const FadeUp = batch(Fade(), Move(), Sticky());
    return (
        <div className="">
            <ScrollContainer>
                <ScrollPage page={0}>

                    <div className="h-100 bg-personalize-1">
                        <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
                            <h1 className="display-1 text-center logo">
                                About Helping You!
                            </h1>
                        </Animator>

                    </div>
                </ScrollPage>
                <ScrollPage page={1}>
                    <div className="h-100 bg-personalize-2">
                        <Animator animation={ZoomInScrollOut}>
                            <p className="text-white">
                                We are an advanced application that was designed to help people with mental disorders. We were created thinking "There will always be someone for you". <br /> We connect with different aid foundations to reach our goals, but WE DO NOT GUARANTEE  THE EFFECTIVENESS OF THE PRODUCT.
                            </p>

                        </Animator>
                    </div>

                </ScrollPage>
                <ScrollPage page={2}>
                    <div className="h-100 bg-personalize-4 text-white">
                        <Animator animation={FadeUp}>
                            <h1 className="display-3">Creators</h1>

                        </Animator>
                    </div>

                </ScrollPage>
                <ScrollPage page={3}>
                    <div className="d-flex justify-content-around align-items-center h-100 bg-personalize-3">

                        <Animator animation={MoveIn(-1000, -60)}>
                            <div className="card bg-dark text-white">
                                <div className="car-header">
                                    <img src="https://i.ibb.co/Qfys1YB/me.jpg" alt="" className="rounded mx-auto d-block mt-2" />
                                </div>
                                <div className="card-body">
                                    <h1>Danny Sequeira</h1>
                                </div>
                                <div className="card-footer">Sr. Full-Stack Developer</div>
                            </div>
                        </Animator>
                        <Animator animation={MoveIn(1000, 60)}>
                            <div className="card bg-dark text-white card--shadow">
                                <div className="car-header">
                                    <img src="https://i.ibb.co/jbYH8Qx/jerome.jpg" alt="Jerome" className="rounded mx-auto d-block mt-2" />
                                </div>
                                <div className="card-body">
                                    <h1>Jerome Umaña</h1>
                                </div>
                                <div className="card-footer">Jr. Frontend Developer</div>
                            </div>
                        </Animator>
                        <Animator animation={MoveIn(1000, 0)}>
                            <div className="card bg-dark text-white card--shadow">
                                <div className="car-header">
                                    <img src="https://i.ibb.co/JtddmHd/Andy.jpg" alt="Andrea" className="rounded mx-auto d-block mt-2" />
                                </div>
                                <div className="card-body">
                                    <h1>Andrea Marin</h1>
                                </div>
                                <div className="card-footer">Digital Designer</div>
                            </div>
                        </Animator>
                    </div>
                </ScrollPage>
            </ScrollContainer>

        </div>

    )
}

export default AboutUs


"use client"

import Image from "next/image"


import GrungeHeading from "../atoms/heading";

import scractchHeadingImg from "../../../public/how-to-buy/scratch-heading.jpg";



function Title() {
    return (
        <div className="flex justify-center">
            <GrungeHeading
                width="781px"
                height="504px"
                text="GOKO COOKIES POLICY"
                scratchSrc={scractchHeadingImg}
                className="text-[42px] md:text-[68px] lg:text-[86px]"
                scratchOpacity={0.95}
            />
        </div>
    );
}

export function CookiesPolicySection() {
    return (
        <section className="py-12 md:py-16 h-full relative z-10">


            <Image
                src="/how-to-buy/how-to-buy-bg.webp"
                alt=""
                fill
                priority
                sizes="100vw"
                className="
        absolute inset-0
                -z-10 object-cover
                md:object-bottom
                [transform:scale(1.05)] md:[transform:scale(1.03)]
                will-change-transform
                pointer-events-none select-none
              "/>


            <div className="container mx-auto px-[1rem] md:px-[4rem] lg:px-[10rem] xl:px-[12rem] !border-0">

                {/* <Image src={cookiePolicyHeadingImg} alt='privacy policy heading' className="w-[391px] h-[116px] md:w-[526px] md:h-[96px] lg:w-[689px] lg:h-[96px] mx-auto mb-[2rem]" /> */}

                <Title />

                <div className="mb-[3rem]">
                    <p className="text-fill-color text-[24px] leading-[120%] ">
                        GOKO (“we,” “our,” or “us”) respects your privacy and is committed to transparency about how we use cookies and similar technologies on our website ______________ (the “Site”). This Cookies Policy explains what cookies are, how we use them, and your options regarding their use. By using the Site, you consent to the practices described herein
                    </p>
                </div>

                <div className="flex flex-col gap-[1rem]">

                    <div>
                        <h3 className="text-fill-bold-color text-[40px] leading-[120%] !mb-[1rem]">1. WHAT ARE COOKIES</h3>

                        <p className="text-fill-color text-[24px] leading-[120%]">
                            Cookies are small text files placed on your device when you visit a website. They enable the Site to recognize your device, remember preferences, improve functionality, and analyze usage patterns. Cookies may also be used to enhance your experience with our AI tools and token presale platform.
                        </p>

                    </div>

                    <div>
                        <h3 className="text-fill-bold-color text-[40px] leading-[120%] !mb-[1rem]">2. TYPES OF COOKIES WE USE</h3>
                        <div className="text-fill-color text-[24px] leading-[120%]">
                            <p>We may use the following categories of cookies on the Site:</p>
                            <p className="!mb-0"> a) Essential Cookies</p>
                            <ul className="pl-6 bullet-list">
                                <li>Required for the basic operation of the Site, including wallet connection, token presale transactions, security, and authentication.</li>
                                <li>Without these cookies, certain features may not function correctly.</li>
                            </ul>

                            <p className="!mb-0">b) Performance and Analytics Cookies</p>
                            <ul className="pl-6 bullet-list">
                                <li>Help us understand user interactions, website traffic, and tool usage.</li>
                                <li>Data collected is anonymized or aggregated for statistical purposes.</li>
                            </ul>

                            <p className="!mb-0">c) Functional Cookies</p>
                            <ul className="pl-6 bullet-list">
                                <li>Enable specific features of the Site, such as session continuity for our AI tools (GOKO Degen Oracle and GOKO Regression Lab).</li>
                                <li>May store temporary preferences, settings, or uploaded files during a session.</li>
                            </ul>


                            <p className="!mb-0">d) Third-Party Cookies</p>

                            <ul className="pl-6 bullet-list">
                                <li>We may use third-party services for analytics, security, or infrastructure.</li>
                                <li>These third parties may set cookies, and we are not responsible for their data practices.</li>
                            </ul>
                        </div>
                    </div>


                    <div>
                        <h3 className="text-fill-bold-color text-[40px] leading-[120%] !mb-[1rem]">3. USE OF COOKIES IN AI TOOLS</h3>
                        <div className="text-fill-color text-[24px] leading-[120%]">
                            <p className="!mb-0">a) GOKO Degen Oracle (AI Chat)</p>
                            <ul className="pl-6 bullet-list">
                                <li>Provides humorous insights and predictions about financial markets.</li>
                                <li>Strictly for entertainment; not financial advice.</li>
                                <li>Cookies may temporarily track session information to enhance interactions.</li>
                            </ul>


                            <p className="!mb-0">b) GOKO Regression Lab (AI Image Tool)</p>
                            <ul className="pl-6 bullet-list">
                                <li>Allows users to upload images for transformation.</li>
                                <li>Images are not permanently stored; anonymized or aggregated data may be used to improve AI models.</li>
                                <li>Cookies may be used to manage session data and tool performance.</li>
                            </ul>
                        </div>
                    </div>



                    <div>
                        <h3 className="text-fill-bold-color text-[40px] leading-[120%] !mb-[1rem]">4. DATA HANDLING AND PRIVACY</h3>
                        <div className="text-fill-color text-[24px] leading-[120%]">
                            <ul className="pl-6 bullet-list">
                                <li>No personally identifiable information (PII) is permanently stored by the AI tools.</li>
                                <li>Cookies and session data may be used temporarily to improve services.</li>
                                <li>Any data processed for AI training is anonymized and cannot be traced back to individual users.</li>
                            </ul>
                        </div>
                    </div>



                    <div>
                        <h3 className="text-fill-bold-color text-[40px] leading-[120%] !mb-[1rem]">5. TOKEN PRESALE AND WALLET CONNECTION</h3>
                        <div className="text-fill-color text-[24px] leading-[120%]">
                            <ul className="pl-6 bullet-list">
                                <li>Essential cookies are used to facilitate wallet connections and token transactions on our secure App.</li>
                                <li>Cookies ensure session integrity and prevent unauthorized access during presale activities.</li>
                            </ul>
                        </div>
                    </div>


                    <div>
                        <h3 className="text-fill-bold-color text-[40px] leading-[120%] !mb-[1rem]">6. MANAGING AND CONTROLLING COOKIES</h3>
                        <div className="text-fill-color text-[24px] leading-[120%]">
                            <ul className="pl-6 bullet-list">
                                <li>You may manage or delete cookies via your browser settings, though some features of the Site may not work properly if disabled.</li>
                                <li>Disabling certain cookies may impact your ability to access some Site features, including AI tools and wallet functionality.</li>
                                <li>For detailed instructions, see your browser’s help documentation.</li>
                            </ul>
                        </div>
                    </div>


                    <div>
                        <h3 className="text-fill-bold-color text-[40px] leading-[120%] !mb-[1rem]">7. INTERNATIONAL USERS</h3>
                        <div className="text-fill-color text-[24px] leading-[120%]">
                            <ul className="pl-6 bullet-list">
                                <li>The Site operates internationally and is not registered under any specific jurisdiction.</li>
                                <li>By using the Site, you consent to the use of cookies and data processing as described herein, regardless of your location.</li>
                            </ul>
                        </div>
                    </div>


                    <div>
                        <h3 className="text-fill-bold-color text-[40px] leading-[120%] !mb-[1rem]">8. SECURITY MEASURES</h3>
                        <div className="text-fill-color text-[24px] leading-[120%]">
                            <ul className="pl-6 bullet-list">
                                <li>We implement technical measures to protect session data and cookies from unauthorized access.</li>
                                <li>No permanent storage of sensitive personal data occurs through cookies.</li>
                            </ul>
                        </div>
                    </div>



                    <div>
                        <h3 className="text-fill-bold-color text-[40px] leading-[120%] !mb-[1rem]">9. MINORS</h3>
                        <div className="text-fill-color text-[24px] leading-[120%]">
                            <ul className="pl-6 bullet-list">
                                <li>Our services are intended for users aged 18 and above.</li>
                                <li>We do not knowingly collect data from minors; any accidental collection will be promptly deleted.</li>
                            </ul>
                        </div>
                    </div>


                    <div>
                        <h3 className="text-fill-bold-color text-[40px] leading-[120%] !mb-[1rem]">10. CHANGES TO THIS POLICY</h3>
                        <div className="text-fill-color text-[24px] leading-[120%]">
                            <ul className="pl-6 bullet-list">
                                <li>We may update this Cookies Policy from time to time.</li>
                                <li>Any changes will be posted on the Site with an updated “Effective Date.”</li>
                                <li>Continued use of the Site constitutes acceptance of the revised policy.</li>
                            </ul>
                        </div>
                    </div>


                </div>


            </div>

        </section>
    )
}

"use client"

import Image from "next/image"



import scractchHeadingImg from "../../../public/how-to-buy/scratch-heading.jpg";
import GrungeHeading from "../atoms/heading";


function Title() {
    return (
        <div className="flex justify-center">
            <GrungeHeading
                width="781px"
                height="504px"
                text="GOKO TERMS OF SERVICE"
                scratchSrc={scractchHeadingImg}
                className="text-[42px] md:text-[68px] lg:text-[86px]"
                scratchOpacity={0.95}
            />
        </div>
    );
}



export function TermsOfServiceSection() {
    return (
        <section className="py-12 md:py-16 h-full relative z-10">
            <Image
                src="/how-to-buy/how-to-buy-bg.webp"
                alt=""
                fill
                priority
                sizes="100vw"
                className="
      -z-10 object-cover
      md:object-bottom
      [transform:scale(1.05)] md:[transform:scale(1.03)]
      will-change-transform
      pointer-events-none select-none
    "/>



            <div className="container mx-auto px-[1rem] md:px-[4rem] lg:px-[10rem] xl:px-[12rem] !border-0">

                {/* <Image src={termsOfServiceHeadingImg} alt='terms of service heading' className="w-[391px] h-[116px] md:w-[526px] md:h-[96px] lg:w-[689px] lg:h-[96px] mx-auto mb-[2rem]" /> */}

                <Title />


                <div className="mb-[3rem]">
                    <p className="text-fill-color text-[24px] leading-[120%] ">
                        Project Name: GOKO
                    </p>
                </div>

                <div className="flex flex-col gap-[1rem]">

                    <div>
                        <h3 className="text-fill-bold-color text-[40px] leading-[120%] !mb-[1rem]">1. ACCEPTANCE OF TERMS</h3>

                        <p className="text-fill-color text-[24px] leading-[120%]">
                            By accessing or using the website, decentralized application (“dApp”), or any services provided under the GOKO project (“Services”), you agree to be bound by these Terms of Service (“Terms”). If you do not agree, you must immediately discontinue use of the Services.
                        </p>

                    </div>

                    <div>
                        <h3 className="text-fill-bold-color text-[40px] leading-[120%] !mb-[1rem]">2. SERVICES PROVIDED</h3>
                        <div className="text-fill-color text-[24px] leading-[120%]">
                            <ul className="pl-6">
                                <li>2.1 Token Presale and Swap. Users may connect supported digital wallets to the GOKO dApp to participate in the presale and exchange cryptocurrency for GOKO tokens.</li>
                                <li>2.2 AI Tools. The project may offer experimental AI tools, including:</li>
                                <li>GOKO Degen Oracle (AI Chat): A conversational tool providing humorous, entertainment-based predictions and insights about financial markets. This tool does not provide financial advice.</li>
                                <li>GOKO Regression Lab (Image Tool): A face-changing tool allowing users to upload images for modification. Uploaded images are processed but not permanently stored. Images may be used in an aggregated, anonymized manner to improve AI performance.</li>
                                <li>2.3 No Guarantee of Service. All Services are provided on an “as is” and “as available” basis. We reserve the right to modify, suspend, or discontinue any Service without notice.</li>
                            </ul>
                        </div>
                    </div>


                    <div>
                        <h3 className="text-fill-bold-color text-[40px] leading-[120%] !mb-[1rem]">3. ELIGIBILITY</h3>
                        <div className="text-fill-color text-[24px] leading-[120%]">
                            <p>By using GOKO Services, you confirm and agree to the following:</p>
                            <ul className="pl-6 bullet-list">
                                <li>You must be at least eighteen (18) years of age to use the Services.</li>
                                <li>By using the Services, you represent and warrant that your participation is lawful in your jurisdiction.</li>
                                <li>You are solely responsible for compliance with local laws governing cryptocurrency, token purchases, and AI tool usage.</li>
                            </ul>
                        </div>
                    </div>



                    <div>
                        <h3 className="text-fill-bold-color text-[40px] leading-[120%] !mb-[1rem]">4. NO FINANCIAL ADVICE</h3>
                        <div className="text-fill-color text-[24px] leading-[120%]">
                            <p>By using GOKO Services, you acknowledge the following:</p>
                            <ul className="pl-6 bullet-list">
                                <li>All content and outputs generated through GOKO Services are for informational and entertainment purposes only.</li>
                                <li>Nothing provided constitutes investment, legal, tax, or financial advice.</li>
                                <li>You should consult independent professional advisors before making any financial decisions.</li>
                            </ul>
                        </div>
                    </div>



                    <div>
                        <h3 className="text-fill-bold-color text-[40px] leading-[120%] !mb-[1rem]">5. USER RESPONSIBILITIES</h3>
                        <div className="text-fill-color text-[24px] leading-[120%]">
                            <ul className="pl-6 bullet-list">
                                <li>5.1 Wallet Security. Users connect their own wallets and remain solely responsible for safeguarding private keys, recovery phrases, and digital assets. We cannot access or recover lost or compromised wallets.</li>
                                <li>5.2 Assumption of Risk. Participation in the presale and token transactions involves significant risks, including loss of value, technical failures, regulatory changes, and market volatility. You agree to bear all risks associated with use of the Services.</li>
                                <li>5.3 Lawful Use. You agree not to use the Services for unlawful activities, including money laundering, terrorist financing, fraud, or distribution of harmful content.</li>
                                <li>5.4 Accurate Information. You agree to provide accurate and truthful information when using the Services and not to impersonate any person or entity.</li>
                            </ul>
                        </div>
                    </div>


                    <div>
                        <h3 className="text-fill-bold-color text-[40px] leading-[120%] !mb-[1rem]">6. DATA USE AND PRIVACY</h3>
                        <div className="text-fill-color text-[24px] leading-[120%]">
                            <p>By using GOKO Services, you acknowledge and agree to the following:</p>
                            <ul className="pl-6 bullet-list">
                                <li>GOKO does not permanently retain user-uploaded images or personal data.</li>
                                <li>Uploaded images may be processed for the intended Service and may contribute to non-identifiable training of AI systems.</li>
                                <li>We do not sell or transfer user data to third parties.</li>
                                <li>By using our AI tools, you grant GOKO a limited license to process and use submitted content for the purpose of operating and improving the Services.</li>
                            </ul>
                        </div>
                    </div>


                    <div>
                        <h3 className="text-fill-bold-color text-[40px] leading-[120%] !mb-[1rem]">7. INTELLECTUAL PROPERTY</h3>
                        <p className="text-fill-color text-[24px] leading-[120%]">
                            All content, branding, software, and underlying technology related to the Services remain the exclusive property of GOKO and its contributors. Users are granted a limited, non-exclusive, non-transferable license for personal, non-commercial use of the Services.
                        </p>
                    </div>



                    <div>
                        <h3 className="text-fill-bold-color text-[40px] leading-[120%] !mb-[1rem]">8. LIMITATION OF LIABILITY</h3>
                        <div className="text-fill-color text-[24px] leading-[120%]">
                            <p>To the maximum extent permitted by law:</p>
                            <ul className="pl-6 bullet-list">
                                <li>GOKO, its developers, and contributors shall not be liable for any damages arising out of or related to the use or inability to use the Services, including but not limited to direct, indirect, incidental, or consequential losses.</li>
                                <li>No warranties or representations are made regarding the functionality, security, or future value of GOKO tokens or Services.</li>
                            </ul>
                        </div>
                    </div>


                    <div>
                        <h3 className="text-fill-bold-color text-[40px] leading-[120%] !mb-[1rem]">9. TERMINATION</h3>
                        <div className="text-fill-color text-[24px] leading-[120%]">
                            <p>We may take the following actions regarding your access to the Services:</p>
                            <ul className="pl-6 bullet-list">
                                <li>We may suspend your access to the Services at any time.</li>
                                <li>We may terminate access if you violate these Terms.</li>
                                <li>We may restrict access for conduct we deem harmful to the project or other users.</li>
                            </ul>
                        </div>
                    </div>


                    <div>
                        <h3 className="text-fill-bold-color text-[40px] leading-[120%] !mb-[1rem]">10. INTERNATIONAL NATURE OF PROJECT</h3>
                        <div className="text-fill-color text-[24px] leading-[120%]">
                            <p>You acknowledge the following regarding the GOKO project:</p>
                            <ul className="pl-6 bullet-list">
                                <li>The GOKO project is experimental and community-developed.</li>
                                <li>GOKO is not registered as a legal entity in any jurisdiction.</li>
                                <li>These Terms provide an international framework until a governing jurisdiction is designated.</li>
                            </ul>
                        </div>
                    </div>


                    <div>
                        <h3 className="text-fill-bold-color text-[40px] leading-[120%] !mb-[1rem]">11. AMENDMENTS</h3>
                        <p className="text-fill-color text-[24px] leading-[120%]">
                            We may revise or update these Terms at any time. Continued use of the Services after any modification constitutes acceptance of the revised Terms. We may provide notice of significant changes through the website, dApp, or other communication channels, but it is your responsibility to review the Terms regularly.
                        </p>
                    </div>



                </div>


            </div>

        </section>
    )
}

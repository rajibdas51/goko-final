"use client"

import Image from "next/image"


import GrungeHeading from "../atoms/heading";

import scractchHeadingImg from "../../../public/how-to-buy/scratch-heading.jpg";


function Title() {
    return (
        <div className="flex justify-center">
            <GrungeHeading
                width="711px"
                height="504px"
                text="GOKO PRIVACY POLICY"
                scratchSrc={scractchHeadingImg}
                className="text-[42px] md:text-[68px] lg:text-[86px]"
                scratchOpacity={0.95}
            />
        </div>
    );
}



export function PrivacyPolicySection() {
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

                {/* <Image src={privacyPolicyHeadingImg} alt='privacy policy heading' className="w-[391px] h-[116px] md:w-[526px] md:h-[96px] lg:w-[689px] lg:h-[96px] mx-auto mb-[2rem]" /> */}

                <Title />



                <div className="text-fill-color mb-[3rem]">
                    <p className="text-[24px] leading-[120%]">
                        Welcome to GOKO (“Company,” “we,” “our,” or “us”). We value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your data when you use our website, our token presale platform, and our associated AI tools.
                    </p>
                    <p className="text-[24px] leading-[120%]">
                        By accessing or using our services, you acknowledge that you have read, understood, and agreed to this Privacy Policy.
                    </p>
                </div>

                <div className="flex flex-col gap-[1rem]">

                    <div>
                        <h3 className="text-fill-bold-color text-[40px] leading-[120%] !mb-[1rem]">1. INFORMATION WE COLLECT</h3>

                        <div className="text-fill-color text-[24px] leading-[120%]">
                            <p>We may collect the following categories of information:</p>

                            <ul className="pl-6 bullet-list">
                                <li>Wallet Information: To participate in our presale, you connect your cryptocurrency wallet. We never request or access your private keys, seed phrases, or passwords.</li>
                                <li>Transaction Data: Presale token swaps are recorded on the block chain, which is public and outside our control.</li>
                                <li>User-Provided Content: When using our AI tools (e.g., uploading images to the GOKO Regression Lab or sending prompts to the GOKO Degen Oracle), we may temporarily process your inputs.</li>
                                <li>Technical and Usage Data: Includes IP addresses, browser type, device information, referring/exit pages, and activity on our site, collected automatically for analytics, functionality, and security.</li>
                            </ul>

                        </div>
                    </div>

                    <div>
                        <h3 className="text-fill-bold-color text-[40px] leading-[120%] !mb-[1rem]">2. HOW WE USE INFORMATION</h3>
                        <div className="text-fill-color text-[24px] leading-[120%]">
                            <p>We may use collected information for:</p>
                            <ul className="pl-6 bullet-list">
                                <li>Providing and improving our presale services and AI tools.</li>
                                <li>Training and refining AI models.</li>
                                <li>Enhancing user experience and website functionality.</li>
                                <li>Fraud prevention, compliance, and security monitoring.</li>
                                <li>Entertainment purposes only (AI insights are not financial advice).</li>
                            </ul>

                        </div>
                    </div>


                    <div>
                        <h3 className="text-fill-bold-color text-[40px] leading-[120%] !mb-[1rem]">3. DATA RETENTION</h3>
                        <div className="text-fill-color text-[24px] leading-[120%]">
                            <ul className="pl-6 bullet-list">
                                <li>We do not permanently store uploaded images, chat messages, or personal data.</li>
                                <li>Temporary processing may occur to deliver services and enhance AI performance.</li>
                                <li>Block chain transactions are permanent and beyond our ability to modify or delete.</li>
                            </ul>
                        </div>
                    </div>



                    <div>
                        <h3 className="text-fill-bold-color text-[40px] leading-[120%] !mb-[1rem]">4. DATA SHARING AND DISCLOSURE</h3>
                        <div className="text-fill-color text-[24px] leading-[120%]">
                            <p>We do not sell or rent personal data. Information may be disclosed only in the following cases:</p>
                            <ul className="pl-6 bullet-list">
                                <li>Service Providers: With trusted partners who assist in website operation, hosting, or AI model processing.</li>
                                <li>Legal Requirements: To comply with applicable laws, regulations, subpoenas, or governmental requests.</li>
                                <li>Business Protection: To investigate fraud, enforce terms, and protect the rights, property, or safety of GOKO, our users, or the public.</li>
                            </ul>
                        </div>
                    </div>



                    <div>
                        <h3 className="text-fill-bold-color text-[40px] leading-[120%] !mb-[1rem]">5. INTERNATIONAL DATA TRANSFERS</h3>
                        <div className="text-fill-color text-[24px] leading-[120%]">
                            <ul className="pl-6 bullet-list">
                                <li>Our services are available worldwide, and your data may be processed outside your country of residence.</li>
                                <li>Different jurisdictions may have privacy and data protection laws that are less protective than those in your home country.</li>
                                <li>By using our services, you consent to the transfer and processing of your information across international borders.</li>
                            </ul>
                        </div>
                    </div>


                    <div>
                        <h3 className="text-fill-bold-color text-[40px] leading-[120%] !mb-[1rem]">6. SECURITY</h3>
                        <div className="text-fill-color text-[24px] leading-[120%]">
                            <p>We use reasonable technical, organizational, and administrative measures to safeguard your data. However:</p>
                            <ul className="pl-6 bullet-list">
                                <li>No method of transmission or storage is 100% secure.</li>
                                <li>Block chain transactions are inherently public and irreversible.</li>
                                <li>You are responsible for securing your wallet credentials.</li>
                            </ul>
                        </div>
                    </div>


                    <div>
                        <h3 className="text-fill-bold-color text-[40px] leading-[120%] !mb-[1rem]">7. CHILDREN’S PRIVACY</h3>
                        <div className="text-fill-color text-[24px] leading-[120%]">
                            <p>We are committed to protecting the privacy of minors:</p>
                            <ul className="pl-6 bullet-list">
                                <li>Our services are intended only for users aged 18 years or older.</li>
                                <li>We do not knowingly collect or process information from individuals under 18.</li>
                                <li>If we become aware that we have collected data from a minor, we will take immediate steps to delete it</li>
                            </ul>
                        </div>
                    </div>


                    <div>
                        <h3 className="text-fill-bold-color text-[40px] leading-[120%] !mb-[1rem]">8. FINANCIAL DISCLAIMER</h3>
                        <p className="text-fill-color text-[24px] leading-[120%]">The GOKO Degen Oracle (AI Chat) provides humorous commentary and entertainment only. It does not constitute financial, investment, or professional advice. Users should not make financial decisions based on AI-generated content.</p>
                    </div>



                    <div>
                        <h3 className="text-fill-bold-color text-[40px] leading-[120%] !mb-[1rem]">9. USER RIGHTS</h3>
                        <div className="text-fill-color text-[24px] leading-[120%]">
                            <p>Depending on your location, you may have rights to:</p>
                            <ul className="pl-6 bullet-list">
                                <li>Access the data we process about you.</li>
                                <li>Request deletion of your data (where applicable).</li>
                                <li>Restrict or object to processing.</li>
                                <li>Withdraw consent to data use (does not affect block chain records).</li>
                                <li>Requests can be made by contacting us (see Section 12).</li>
                            </ul>
                        </div>
                    </div>


                    <div>
                        <h3 className="text-fill-bold-color text-[40px] leading-[120%] !mb-[1rem]">10. THIRD-PARTY LINKS</h3>
                        <div className="text-fill-color text-[24px] leading-[120%]">
                            <ul className="pl-6 bullet-list">
                                <li>Our website may include links to third-party websites, applications, or services.</li>
                                <li>We do not control or endorse the content, security, or privacy practices of these external sites.</li>
                                <li>Users should review the privacy policies of any third-party sites they visit, as we are not responsible for their practices.</li>
                            </ul>
                        </div>
                    </div>



                    <div>
                        <h3 className="text-fill-bold-color text-[40px] leading-[120%] !mb-[1rem]">11. POLICY UPDATES</h3>
                        <p className="text-fill-color text-[24px] leading-[120%]">We may revise this Privacy Policy periodically. Updates will be posted on this page with a new “Effective Date.” Your continued use of our services after changes indicates acceptance of the updated policy.</p>
                    </div>


                </div>


            </div>

        </section>
    )
}

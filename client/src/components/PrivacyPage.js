import React, { Component } from 'react'

import arrow from '../uploads/collapse_arrow.svg'


export default class PrivacyPage extends Component {

    handleLead(e) {
        let sectionClass = e.target.getAttribute('value');
        let section = document.getElementById(sectionClass);
        let sectionY = Math.abs(section.getBoundingClientRect().y - document.querySelector('.privacy_header').getBoundingClientRect().y);
        document.querySelector('.col_arrow').click();

        window.scroll({
            top: sectionY, 
            left: 0, 
            behavior: 'smooth'
          });
    }

    handleCollapse(e) {
        if (e.target.classList.contains('off')) {
            e.target.style.transform = "rotate(180deg)";
            e.target.parentElement.classList.add('active');
            e.target.classList.remove('off');
        } else {
            e.target.style.transform = "rotate(0deg)";
            e.target.parentElement.classList.remove('active');
            e.target.classList.add('off');
        }
    }

    render() {
        return (
            <div className="PrivacyPage">
                <div className="privacy_menu">
                    <div className="privacy_link" onClick={this.handleLead} value="1">1. Data Collection</div>
                    <div className="privacy_link" onClick={this.handleLead} value="2">2. Data Uses</div>
                    <div className="privacy_link" onClick={this.handleLead} value="3">3. Data Location and Retention</div>
                    <div className="privacy_link" onClick={this.handleLead} value="4">4. Data Sharing</div>
                    <div className="privacy_link" onClick={this.handleLead} value="5">5. Cookies and Tracking Technologies</div>
                    <div className="privacy_link" onClick={this.handleLead} value="6">6. Communications</div>
                    <div className="privacy_link" onClick={this.handleLead} value="7">7. Data Security</div>
                    <div className="privacy_link" onClick={this.handleLead} value="8">8. Data Subject Rights</div>
                    <div className="privacy_link" onClick={this.handleLead} value="9">9. Children’s Privacy</div>
                    <div className="privacy_link" onClick={this.handleLead} value="10">10. Data Controller/Processor</div>
                    <div className="privacy_link" onClick={this.handleLead} value="11">11. Additional Notices</div>
                    <img className="col_arrow off" alt='arrow' src={arrow} onClick={this.handleCollapse}></img>
                </div>
                <div className="privacy_left">
                    <div className="privacy_link" onClick={this.handleLead} value="1">1. Data Collection</div>
                    <div className="privacy_link" onClick={this.handleLead} value="2">2. Data Uses</div>
                    <div className="privacy_link" onClick={this.handleLead} value="3">3. Data Location and Retention</div>
                    <div className="privacy_link" onClick={this.handleLead} value="4">4. Data Sharing</div>
                    <div className="privacy_link" onClick={this.handleLead} value="5">5. Cookies and Tracking Technologies</div>
                    <div className="privacy_link" onClick={this.handleLead} value="6">6. Communications</div>
                    <div className="privacy_link" onClick={this.handleLead} value="7">7. Data Security</div>
                    <div className="privacy_link" onClick={this.handleLead} value="8">8. Data Subject Rights</div>
                    <div className="privacy_link" onClick={this.handleLead} value="9">9. Children’s Privacy</div>
                    <div className="privacy_link" onClick={this.handleLead} value="10">10. Data Controller/Processor</div>
                    <div className="privacy_link" onClick={this.handleLead} value="11">11. Additional Notices</div>
                </div>
                <div className="privacy_right">
                    <div className="policy_title">Privacy Policy</div>
                    <p><b>Effective Date: December 28 2018</b></p>
                    <p>Smart Bid Ltd. (“<b>Smart.Bid</b>“, “<b>we</b>“, “<b>our</b>” or “<b>us</b>“) develops and provides marketing solution platforms (the <b>“Platform“</b>) that will help empower advertising teams and assist in delivering hyper-targeted ads across any device.</p>
                    <p>Our Platform and our website (the “<b>Site</b>”) available at www.smart.bid  (together the <b>“Services”</b>) allow advertisers (our <b>“Customer”</b> and their staff “you” ) to harness huge amounts of data for customized and highly relevant online marketing campaigns as seen by End-Users.</p>
                    <p>We respect the privacy of our visitors, End-Users and Customers, and are strongly committed to making our practices regarding their personal data more transparent and fair. This Privacy Policy describes how we collect, store, use and disclose personal data regarding individuals who visit our Site (<b>“Visitors“</b>), or use our Services (<b>“Customers”</b>), and our role as “Data Processor” of End-Users’ data. It applies whenever you visit our Services, interact with us or otherwise access or use any of our Services.</p>
                    <p><b>Please read this Privacy Policy carefully and make sure that you fully understand and agree to it. If you do not agree to this Privacy Policy, please discontinue and avoid using our Services.</b></p>
                    <p>You are not legally required to provide us with any Personal Data (defined below), but without it we may not be able to provide you with the full range of Services or with the best End-User experience when using our Services.</p>
                    <p><b id="1">1. Data Collection</b><br/>
                        We collect Personal Data regarding our End-Users as well as data regarding Visitors. Such data is typically collected and generated through the Visitor’s or End-User’s interaction with our Services, through automatic means, directly such Visitor or End-User, from our Customers, or other third parties.</p>
                    <p>Specifically, we collect the following categories of data (which, to the extent it relates to an identified or identifiable individual, is deemed data, will be deemed as <b>“Personal Data“</b>):</p>
                    <p><b>1. Data automatically collected or generated</b>: When you visit, interact with or use our Services, we may collect or generate certain technical data about you. We collect or generate such data either independently or with the help of third party services (as detailed in Section 4 below), including through the use of “cookies” and other tracking technologies (as further detailed in Section 5 below).</p>
                    <p>Such data mainly consists of connectivity, technical and aggregated usage data, such as IP addresses, non-identifying data regarding a device (such as type, screen resolution), operating system, browser version, locale and language settings used, visit history, search keywords,  activities and actions on the website, general End-User location (city, country, zip code), date and time stamp, types of advertisements viewed and click data, the d pixels installed on such device, and the activity (clicks and other interactions) of Visitors and End-Users in connection with our Services. Such data does not enable us to learn a person’s true identity or contact details. We mainly use this data to gain a better understanding on how Visitors and End-Users typically use and interact with our Services; how we could improve their End-User experience; to optimize our product; and to optimize the overall performance of our Services.</p>
                    <p><b>2. Data received from you:</b> You may provide us with Personal Data such as your first and last name, address, email and account login details (such as End-Usernames and hashed passwords) (collectively, <b>“Account Data“</b>), as well as any other data you choose to provide when you use our Services, create an End-User account or contact us. </p>
                    <p>Customers may provide us additional Account Data such as their billing details, business needs and preferences. To the extent that such data concerns a non-human entity (e.g. the bank account of a company or business), we will not regard it as “Personal Data” and this Privacy Policy shall not apply to it.</p>
                    <p><b>3. Data received from our Customers and End-Users:</b> Customers and End-Users may also provide us with data concerning their colleagues or employees, in order to register them as End-Users to our Services. Such data usually refers to such End-Users’ first names/nicknames and work e-mails, however additional data may be provided at the Customer’s or other End-User’s discretion.</p>
                    <p>Data received from third parties: we may receive your Personal Data from other sources. For example, if you participate in an event or webinar that we sponsor or participate in, we may receive your Personal Data from the event organizers. We may also receive your contact and professional details (e.g., your name, company, position, contact details and professional experience, preferences and interests) from our business partners or services provides, and through the use of tools and channels commonly used for connecting between companies and individuals in order to explore potential business and employment opportunities, such as LinkedIn.</p>
                    <p></p>
                    <p><b id="2"> 2. Data Uses</b><br/>
                    We use Personal Data as necessary for the performance of our Services; to comply with applicable law; and to support our legitimate interests in maintaining and improving our Services and offerings, understanding how our Services are used, optimizing our marketing and advertising services, customer service and support operations, and protecting and securing our End-Users, Customers, ourselves and our Services.</p>
                    <p>Specifically, we use Personal Data for the following purposes:</p>
                    <p>1. To facilitate, operate, and provide our Services;</p>
                    <p>2. To authenticate the identity of our End-Users, and to allow them access to our Services;</p>
                    <p>To provide our Visitors, End-Users and Customers with assistance and support;</p>
                    <p>3. To further develop, customize and improve the Services and your End-User experience, based on common or personal preferences, experiences and difficulties;</p>
                    <p>4. To contact our Visitors, End-Users and Customers with general or personalized service-related messages (such as password-retrieval or billing) and promotional messages (such as newsletters, webinars, new features, etc.); and to facilitate, sponsor and offer certain events and promotions;</p>
                    <p>5. To support and enhance our data security measures, including for the purposes of preventing and mitigating the risks of fraud, error or any illegal or prohibited activity;</p>
                    <p>6. To create aggregated statistical data, inferred non-personal data or anonymized or pseudonymized data (rendered non-personal), which we or our business partners may use to provide and improve our respective services; and</p>
                    <p>7. To comply with any applicable laws and regulations.</p>
                    <p><b id="3">3. Data Location & Retention</b><br/>
                    <b>Data Location:</b> Your Personal Data may be maintained, processed and stored by our authorized affiliates and Service Providers (defined below) in the United States of America, the EU and other jurisdictions, as necessary for the proper delivery of our Services, or as may be required by law.</p>
                    <p>Smart.Bid is headquartered in Israel, a jurisdiction which is considered by the European Commission to be offering an adequate level of protection for the Personal Data of EU Member State residents.</p>
                    <p>While privacy laws may vary between jurisdictions, Smart.Bid and its affiliates and Service Providers are each committed to protect Personal Data in accordance with this Privacy Policy and customary industry standards, regardless of any lesser legal requirements that may apply in their jurisdiction.</p>
                    <p><b>Data Retention</b>: We retain End-Users’ Personal Data in accordance with the instructions of their organization (our Customer), or for as long as their account is active, and we have not been notified otherwise, or as long as we consider necessary for the purposes described herein.</p>
                    <p>We keep Visitors’ Personal Data for as long as reasonably necessary in order to maintain and expand our relationship and to provide them with our Services.</p>
                    <p>We will also retain your Personal Data for as long as is required in order to comply with our legal and contractual obligations, or to protect ourselves from any potential disputes (i.e. as required by laws applicable to log-keeping, records and bookkeeping, and in order to have proof and evidence concerning our relationship, should any legal issues arise following your discontinuance of use), in accordance with our data retention policy.</p>
                    <p>Please note that except as required by applicable law, we will not be obligated to retain your Personal Data for any particular period, and we are free to securely delete it for any reason and at any time, with or without notice to you. If you have any questions about our data retention policy, please contact us by email at privacy@smart.bid.</p>
                    <p><b id="4">4. Data Sharing</b><br/>
                    <b>Legal Compliance:</b> We may disclose or allow government and law enforcement officials access to your Personal Data, in response to a subpoena, search warrant or court order (or similar requirement), or in compliance with applicable laws and regulations. Such disclosure or access may occur if we believe in good faith that we are legally compelled to do so, or that disclosure is appropriate in connection with efforts to investigate, prevent, or take action regarding actual or suspected illegal activity, fraud, or other wrongdoing.</p>
                    <p><b>Service Providers</b>: We may engage selected Third Party companies and individuals to perform services complementary to our own (e.g. hosting services, data analytics services, marketing and advertising services, data and cyber security services, payment processing services, End-User engagement services, e-mail distribution and monitoring services, text messaging services, session recording, and our business, legal and financial advisors) (collectively, <b>“Service Providers“</b>). These Service Providers may have access to your Personal Data, depending on each of their specific roles and purposes in facilitating and enhancing our Services, and may only use it for such purposes.</p>
                    <p>One of our Service Providers in particular is a tool called “Google Analytics”, used by us to collect information about use of our Services. Google Analytics collects information such as how often users visit the Services, what pages they visit when they do so, and what other sites they used prior to coming to our Services. We use the information we get from Google Analytics to maintain and improve the Services and our products. We do not combine the information collected through the use of Google Analytics with personally identifiable data. Google’s ability to use and share information collected by Google Analytics about your visits to and use of the Services is restricted by the Google Analytics Terms of Service, available at <a href="https://www.google.com/analytics/terms/us.html">https://www.google.com/analytics/terms/us.html</a>, and the Google Privacy Policy, available at <a href="https://policies.google.com/privacy">https://policies.google.com/privacy</a>. You can learn more about how Google collects and processes data specifically in connection with Google Analytics at <a href="https://policies.google.com/technologies/partner-sites">https://policies.google.com/technologies/partner-sites</a>. You may prevent your data from being used by Google Analytics by downloading and installing the Google Analytics Opt-out Browser Add-on, available at <a href="https://tools.google.com/dlpage/gaoptout/">https://tools.google.com/dlpage/gaoptout/</a>.</p>
                    <p><b>Sharing Personal Data with our Customers</b>: We may share the Personal Data of Customer Personnel with their organization (including data and communications concerning their account on the Services). In such cases, sharing such data means that other individuals from your organization may receive it on its behalf, and will be able to monitor, process and analyze your Personal Data and associated content. Please note that Smart.Bid is not responsible for and does not control any further disclosure, use or monitoring by or on behalf of your organization, that itself also acts as the “Data Controller” of such data (as further described in Section 10 below).</p>
                    <p><b>Protecting Rights and Safety</b>l Data with others if we believe in good faith that this will help protect the rights, property or personal safety of Smart.Bid, any of our End-Users or Customers, or any members of the general public.</p>
                    <p><b>Smart.Bid Subsidiaries and Affiliated Companies</b>: We may share Personal Data internally within our group for the purposes described in this Privacy Policy. In addition, should Smart.Bid or any of its subsidiaries or affiliates undergo any change in control, including by means of merger, acquisition or purchase of substantially all of its assets, your Personal Data may be shared with the parties involved in such event. If we believe that such change in control might materially affect your Personal Data then stored with us, we will notify you of this event and the choices you may have via e-mail or prominent notice on our Services.</p>
                    <p>For the avoidance of doubt, Smart.Bid may share your Personal Data in additional manners, pursuant to your explicit approval, or if we are legally obligated to do so, or if we have successfully rendered such data non-personal and anonymous. We may transfer, share or otherwise use non-personal data at our sole discretion and without the need for further approval.</p>
                    <p><b id="5">5. Cookies and Tracking Technologies</b><br/>
                    Our Services and some of our Service Providers utilize “cookies”, anonymous identifiers and other tracking technologies which help us provide, secure and improve our Services, personalize your experience and monitor the performance of our activities and campaigns. </p>
                    <p>A “cookie” is a small text file that is used, for example, to collect data about activity on our Site. Some cookies and other technologies serve to recall Personal Data, such as an IP address, previously indicated by the End-User. We recommend the use of cookies for an optimal End-User experience of our Services. </p>
                    <p>While we do not change our practices in response to a “Do Not Track” signal in the HTTP header from a browser, most browsers allow you to control cookies, including whether or not to accept them and to remove them. You may set most browsers to notify you if you receive a cookie, or you may choose to block cookies with your browser. </p>
                    <p>If you wish to prevent the use of your mobile device's advertising ID, you may change your device settings to reset such advertising ID (typically, this is available under the "Privacy" or "Ads" section in your device settings). You may also change your browser settings to reset or block cookies (typically, this is available under the "Settings" or "Help" section in your browser menu). </p>
                    <p><b id="6">6. Communications</b><br/>
                    <b>Service Communications</b>: We may contact you with important information regarding our Services. For example, we may notify you (through any of the means available to us) of changes or updates to our Services, billing issues, service changes, password-retrieval notices, etc. We may also send you notifications, messages and other updates. Typically, you will not be able to opt-out of receiving such service communications while using our Services, as they are integral to such use.</p>
                    <p><b>Notifications and Promotional Communications</b>: We may send you notifications concerning messages and other updates in your End-User account. We may also send you notifications about new features, offerings, events and special opportunities or any other information we think our Customers will find valuable. We may provide such notices through any of the contact means available to us (e.g. phone or e-mail), through the Services, or through our marketing campaigns on any other sites or platforms.</p>
                    <p>If you do not wish to receive such promotional communications, you may notify Smart.Bid at any time by sending an email to privacy@smart.bid, changing your communications preferences in your account, or by following the “unsubscribe”, “stop”, “opt-out” or “change e-mail preferences” instructions contained in the promotional communications you receive.</p>
                    <p><b id="7">7. Data Security</b><br/>
                    In order to protect your Personal Data held with us and our Service Providers, we are using industry-standard physical, procedural and electronic security measures, including encryption as appropriate. However, please be aware that regardless of any security measures used, we cannot and do not guarantee the absolute protection and security of any Personal Data stored with us or with any third parties as described in Section 4 above.</p>
                    <p><b id="8">8. Data Subject Rights</b><br/>
                    If you wish to exercise your rights under any applicable law, including the EU General Data Protection Regulation (GDPR), to request access to, and rectification or erasure of your Personal Data held with Smart.Bid, or to restrict or object to such Personal Data’s processing, or to port such Personal Data – please contact us by email at privacy@smart.bid.</p>
                    <p>Please note that once you contact us by e-mail, we may require additional information and documents, including certain Personal Data, in order to authenticate and validate your identity and to process your request. Such additional data will be then retained by us for legal purposes (e.g. as proof of the identity of the person submitting the request), in accordance with Section 3 above.</p>
                    <p><b id="9">9. Children’s Privacy</b><br/>
                    <b>Our Services are not designed to attract children under the age of 16.</b> We do not knowingly collect Personal Data from children and do not wish to do so. If we learn that a person under the age of 16 is using the Services, we will prohibit and block such use and will make all efforts to promptly delete any Personal Data stored with us with regard to such child. If you believe that we might have any such data, please contact us by email at privacy@smart.bid.</p>
                    <p><b id="10">10. Data Controller/Processor</b><br/>
                    Certain data protection laws and regulations, such as the GDPR, typically distinguish between two main roles for parties processing Personal Data: the “Data Controller”, who determines the purposes and means of processing; and the “Data Processor”, who processes the data on behalf of the Data Controller. Below we explain how these roles apply to our Services, to the extent that such laws and regulations apply.</p>
                    <p>Smart.Bid is the “Data Controller” of its Visitors and Customer’s Personal Data, and with respect to which, assumes the responsibilities of Data Controller (solely to the extent applicable under law), as set forth in this Privacy Policy.</p>
                    <p>If a Customer submits any Personal Data concerning any of its End-Users, or Smart.Bid otherwise obtains  any End-Users Personal Data on the Customer’s behalf, such Customer shall be deemed the “Data Controller” of its End-Users’ data, and Smart.Bid will process such data on this Customer’s behalf, as its “Data Processor”. This means that in such cases, we will process such End-Users’ data on behalf of our Customer and in accordance with its reasonable instructions, subject to our Terms of Service and other commercial agreements. The Customer will be solely responsible for meeting any legal requirements applicable to Data Controllers (such as establishing a legal basis for processing and responding to Data Subject Rights requests concerning the data they control).</p>
                    <p><b>If you would like to make any requests or queries regarding Personal Data we process on our Customer’s behalf, please contact the AM directly.</b> For example, if you wish to access, correct, or delete data processed by Smart.Bid on behalf of a Customer, please direct your request to the relevant Customer (who is the “Data Controller” of such data). Should we receive such requests directly, we may refer them to our Customer. </p>
                    <p><b id="11"> 11. Additional Notices</b><br/>
                    <b>Updates and Amendments</b>: We may update and amend this Privacy Policy from time to time by posting an amended version on our Services. The amended version will be effective as of the date it is so published. We will provide a 10-day prior notice if we believe any substantial changes are involved via any of the communication means available to us or via the Services. After such notice period, all amendments shall be deemed accepted by you.</p>
                    <p><b>External Links</b>: While our Services may contain links to other websites or services, we are not responsible for their privacy practices, and encourage you to pay attention when you leave our Services for the website or application of such third parties and to read the privacy policies of each and every website and service you visit. This Privacy Policy applies only to our Services.</p>
                    <p><b>Questions, Concerns or Complaints</b>: If you have any comments or questions about this Privacy Policy or if you have any concerns regarding your Personal Data, please contact us by email at privacy@smart.bid. </p>
                    <p>GDPR-Rep.eu has been designated as Smart.Bid’s representative in the European Union for data protection matters pursuant to Article 27 of the GDPR. and may be contacted only on matters related to the processing of Personal Data. If you want to make use of your GDPR data privacy rights, please visit: <a href="https://gdpr-rep.eu/q/12597705">https://gdpr-rep.eu/q/12597705</a></p>
                    <p>  Contact GDPR-Rep.eu <br/>
                        GDPR-Rep.eu<br/>
                     Maetzler Rechtsanwalts GmbH & Co KG<br/>
                      Attorneys at Law<br/>
                      c/o Smart bid<br/>
                      Schellinggasse 3/10, 1010 Vienna, Austria</p>
                    <p></p>
                    <p>Please add the following subject to all correspondence:   GDPR-REP ID: 12597705. </p>
                    <p>If you are a GDPR-protected individual, you also have the right to lodge a complaint with an EU supervisory authority.</p>
                </div>
            </div>  
        )
    }
}

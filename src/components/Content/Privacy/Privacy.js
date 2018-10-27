import React, { Component } from 'react';
import './Privacy.css';
import { Link } from 'react-router-dom';

class Privacy extends Component {

    componentDidMount() {
        window.scrollTo(0, 0);  
    }

    render() {
        return (
            <div className='privacy-content'>
                <h1>Privacy Policy</h1>
                <p>
                    Here at Riddlebit we take personal privacy very seriously.
                    As a general rule, we do not collect your personal information
                    unless you choose to provide that information to us.
                </p>
                <p>
                    Riddlebit AS (“us”, “we” or “our”) operates the riddlebit.net website
                    (hereinafter referred to as the “Service”) and all subdomains of riddlebit.net,
                    e.g. setback.riddlebit.net, to which this Privacy Policy also applies.
                </p>
                <p>
                    This page informs you of our policies regarding the collection,
                    use and disclosure of personal data when you use our Service.
                    We use your data to provide and improve the Service.
                    By using the Service, you agree to the collection and use of information in accordance with this policy.
                </p>

                <h2>Types of Data Collected</h2>
                <p>
                    While using our Service, we may ask you to provide us with certain personally identifiable information
                    that can be used to contact or identify you.
                    Personally identifiable information may include, but is not limited to:
                </p>
                <ul>
                    <li>Email address</li>
                    <li>First name</li>
                    <li>Cookies and Usage Data</li>
                </ul>

                <h2>Security of Data</h2>
                <p>
                    The security of your data is important to us, but remember that no method of transmission over the Internet,
                    or method of electronic storage is 100% secure.
                    While we strive to use commercially acceptable means to protect your data,
                    we cannot guarantee its absolute security.
                </p>

                <h2>Transfer of Data</h2>
                <p>
                    Your data may be transferred to - and maintained on - computers located outside of your state, province,
                    country or other governmental jurisdiction where the data protection laws may
                    differ from those of your jurisdiction.
                    Your consent to this Privacy Policy, followed by your submission of such data,
                    represents your agreement to that transfer.
                </p>

                <h2>Disclosure of Data</h2>
                <p>Riddlebit AS may disclose your data in the good faith belief that such action is necessary to:</p>
                <ul>
                    <li>Comply with a legal obligation</li>
                    <li>Protect and defend the rights or property of Riddlebit AS</li>
                    <li>Prevent or investigate possible wrongdoing in connection with the Service</li>
                    <li>Protect the personal safety of users of the Service or the public</li>
                    <li>Protect against legal liability</li>
                </ul>

                <h2>Service Providers</h2>
                <p>
                    We may employ third party companies and individuals to facilitate our Service (“Service Providers”),
                    to provide the Service on our behalf, to perform Service-related services
                    or to assist us in analyzing how our Service is used.
                    These third parties have access to your data only to perform these tasks on our behalf
                    and are obligated not to disclose or use it for any other purpose.
                </p>

                <h2>Google Analytics</h2>
                <p>
                    Like millions of other websites, we use Google Analytics to track and report website traffic.
                    Google Analytics records data such as:
                </p>
                <ul>
                    <li>What device and browser you’re using</li>
                    <li>How long you stay for</li>
                    <li>What pages you navigate to</li>
                    <li>What website you came from to get here</li>
                    <li>And more</li>
                </ul>
                <p>
                    All of our activity falls within the bounds
                    of the <a href='https://www.google.com/analytics/terms/'>Google Analytics Terms of Service</a>.
                    You can opt-out of having made your activity on the Service available to Google Analytics
                    by installing the Google Analytics opt-out browser add-on.
                    For more information on the privacy practices of Google,
                    please visit the <a href='https://policies.google.com/'>Google Privacy & Terms webpage</a>.
                </p>

                <h2>Links to Other Sites</h2>
                <p>
                    Our service may contain links to other sites that are not operated by us.
                    If you click on a third party link, you will be directed to that third party’s site.
                    We strongly advise you to review the Privacy Policy of every site you visit.
                    We have no control over and assume no responsibility for the content,
                    privacy policies or practices of any third party sites or services.
                </p>

                <h2>Children's Privacy</h2>
                <p>
                    Our Service does not address anyone under the age of 18.
                    We do not knowingly collect personally identifiable information from anyone under the age of 18.
                    If your are a parent or guardian and you are aware that your children has provided us with personal data,
                    please contact us.
                    If we become aware that we have collected personal data from children
                    without verification of parental consent, we take steps to remove that information from our servers.
                </p>

                <h2>Changes to this Privacy Policy</h2>
                <p>
                    We may update our Privacy Policy from time to time.
                    You are advised to review this Privacy Policy periodically for any changes.
                    Changes to this Privacy Policy are effective when they are posted on this page.
                </p>

                <h2>Contact Us</h2>
                <p>If you have any questions about this Privacy Policy, please contact us:</p>
                <ul>
                    <li>By email: <a href='mailto:contact@riddlebit.net?subject=Privacy Policy'>contact@riddlebit.net</a></li>
                    <li>Or by using our <Link to='/contact'>contact form</Link></li>
                </ul>

            </div>
        )
    }
}

export default Privacy;
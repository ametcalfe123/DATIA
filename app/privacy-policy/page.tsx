import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Privacy Policy - DATIA",
  description: "DATIA privacy policy and data protection practices",
}

export default function PrivacyPolicyPage() {
  return (
    <main className="datia-inner-page privacy-page">
      <header className="border-b border-gray-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center px-6 py-4">
          <Link href="/" aria-label="DATIA AI home" className="inline-flex">
            <Image
              src="/datia-ai-logo.png"
              alt="DATIA AI"
              width={1701}
              height={447}
              priority
              sizes="(min-width: 768px) 140px, 120px"
              className="h-auto w-[120px] md:w-[140px]"
            />
          </Link>
        </div>
      </header>
      <section className="page-hero privacy-page-hero">
        <h1>Privacy Policy</h1>
        <p>How DATIA collects, uses, and protects personal information.</p>
      </section>
      <section className="privacy-policy-content">
        <div className="privacy-policy-copy">

          <p className="text-gray-600 mb-8">Effective Date: 11th day of August 2025</p>

          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <p className="text-gray-700 mb-2">
              DATIA.io (the &quot;Site&quot;) is owned and operated by DATIA LLC. DATIA LLC can be contacted at:
            </p>
            <p className="text-gray-700 mb-1">jcallan@datia.io</p>
            <p className="text-gray-700 mb-1">(404) 353-5276</p>
            <p className="text-gray-700">1520 Park Shore Drive, Cumming, GA 30041</p>
          </div>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Purpose</h2>
            <p className="text-gray-700 mb-4">
              The purpose of this privacy policy (this &quot;Privacy Policy&quot;) is to inform users of our Site of the
              following:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>The personal data we will collect</li>
              <li>Use of collected data</li>
              <li>Who has access to the data collected</li>
              <li>The rights of Site users</li>
              <li>The Site&apos;s cookie policy</li>
            </ul>
            <p className="text-gray-700 mb-4">
              This Privacy Policy applies in addition to the terms and conditions of our Site.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Consent</h2>
            <p className="text-gray-700 mb-4">By using our Site users agree that they consent to:</p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>The conditions set out in this Privacy Policy; and</li>
              <li>The collection, use, and retention of the data listed in this Privacy Policy.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Personal Data We Collect</h2>
            <p className="text-gray-700 mb-4">
              We only collect data that helps us achieve the purpose set out in this Privacy Policy.
            </p>

            <h3 className="text-xl font-medium text-gray-900 mb-3">Data Collected Automatically</h3>
            <p className="text-gray-700 mb-4">
              When you visit and use our Site, we may automatically collect and store the following information. We may
              collect this information as a part of log files as well as through the use of cookies or other tracking
              technologies.
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>IP address; including cookie ID&apos;s</li>
              <li>Unique ID&apos;s</li>
              <li>Page URL&apos;s</li>
              <li>Referrer URL&apos;s</li>
              <li>Location</li>
              <li>Operating System; hardware and software details</li>
              <li>Clicked links; and browsing activity</li>
              <li>Content viewed</li>
            </ul>

            <h3 className="text-xl font-medium text-gray-900 mb-3">Data Collected in a Non-Automatic Way</h3>
            <p className="text-gray-700 mb-4">
              We may also collect the following data when you perform certain functions on our Site:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>First and last name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Address</li>
              <li>Auto fill data; or otherwise</li>
              <li>Job title and function</li>
              <li>Industry</li>
              <li>Organization</li>
              <li>Log information (time and date stamp)</li>
              <li>Organization size</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">How We Use Personal Data</h2>
            <p className="text-gray-700 mb-4">
              Data collected on our Site will only be used for the purposes specified in this Privacy Policy or
              indicated on the relevant pages of our Site.
            </p>

            <p className="text-gray-700 mb-4">The data we collect automatically is used for the following purposes:</p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>To improve website; and</li>
              <li>
                Send emails, develop digital campaigns, enhance intent buying signals on behalf of and regarding other
                solution provider products and services.
              </li>
            </ul>

            <p className="text-gray-700 mb-4">
              The data we collect when the user performs certain functions may be used for the following purposes:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>
                Communication and marketing about specific vendor content and products that applies to your profile.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Who We Share Personal Data With</h2>

            <h3 className="text-xl font-medium text-gray-900 mb-3">Employees</h3>
            <p className="text-gray-700 mb-4">
              We may disclose user data to any member of our organization who reasonably needs access to user data to
              achieve the purposes set out in this Privacy Policy.
            </p>

            <h3 className="text-xl font-medium text-gray-900 mb-3">Third Parties</h3>
            <p className="text-gray-700 mb-4">We may share user data with the following third parties:</p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>Marketing agency; and</li>
              <li>Third party vendors</li>
              <li>Other data providers</li>
            </ul>

            <p className="text-gray-700 mb-4">We may share the following user data with third parties:</p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>Links clicked</li>
              <li>Buying Intent</li>
              <li>Other known data</li>
            </ul>

            <p className="text-gray-700 mb-4">We may share user data with third parties for the following purposes:</p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>Targeted Advertising</li>
            </ul>

            <p className="text-gray-700 mb-4">
              Third parties will not be able to access user data beyond what is reasonably necessary to achieve the
              given purpose.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Information We Collect from Third Party Sources
            </h2>
            <p className="text-gray-700 mb-4">
              We may partner with certain third parties to collect information on our Websites to engage in analysis,
              auditing, research, reporting and to deliver advertising that we believe may interest you based on your
              activity on our Websites and other websites over time. These third parties may set and access cookies on
              your computer or other device and may also use pixel tags, web logs, web beacons, or other similar
              technologies.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">How We Use the Information We Collect</h2>
            <p className="text-gray-700 mb-4">We will use your personal information for the following purposes:</p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>
                For business purposes such as data analysis, identifying usage trends, determining the effectiveness of
                our marketing and to enhance, customize and improve our Websites and Services
              </li>
              <li>
                For internal business purposes including but not limited to data modeling and training our algorithms to
                increase the accuracy of our models
              </li>
              <li>For operational and security purposes related to our business</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Please Note</h2>
            <p className="text-gray-700 mb-4">
              If you follow hyperlinks from our Site to another Site, please note that we are not responsible for and
              have no control over their privacy policies and practices.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">How Long We Store Personal Data</h2>
            <p className="text-gray-700 mb-4">
              User data will be stored until the purpose the data was collected for has been achieved.
            </p>
            <p className="text-gray-700 mb-4">You will be notified if your data is kept for longer than this period.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">How We Protect Your Personal Data</h2>
            <p className="text-gray-700 mb-4">
              We only provide various types of content. We do not collect non-business information including but not
              limited to credit card numbers, or other private and personal information.
            </p>
            <p className="text-gray-700 mb-4">
              While we take all reasonable precautions to ensure that user data is secure and that users are protected,
              there always remains the risk of harm. The Internet as a whole can be insecure at times and therefore, we
              are unable to guarantee the security of user data beyond what is reasonably practical.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Children</h2>
            <p className="text-gray-700 mb-4">
              The minimum age to use our website is 18 years of age. We do not knowingly collect or use personal data
              from children under 13 years of age. If we learn that we have collected personal data from a child under
              13 years of age, the personal data will be deleted as soon as possible. If a child under 13 years of age
              has provided us with personal data their parent or guardian may contact our privacy officer.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              How to Access, Modify, Delete, or Challenge the Data Collected
            </h2>
            <p className="text-gray-700 mb-4">
              If you would like to know if we have collected your personal data, how we have used your personal data, if
              we have disclosed your personal data and to who we disclosed your personal data, or if you would like your
              data to be deleted or modified in any way, please contact our privacy officer here:
            </p>
            <p className="text-gray-700 mb-4">Jim Callan, jcallan@datia.io</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Do Not Track Notice</h2>
            <p className="text-gray-700 mb-4">
              Do Not Track (&quot;DNT&quot;) is a privacy preference that you can set in certain web browsers. We do not track the
              users of our Site over time and across third party websites and therefore do not respond to
              browser-initiated DNT signals. We are not responsible for and cannot guarantee how any third parties who
              interact with our Site and your data will respond to DNT signals.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              How to Opt-Out of Data Collection, Use or Disclosure
            </h2>
            <p className="text-gray-700 mb-4">
              In addition to the method(s) described in the How to Access, Modify, Delete, or Challenge the Data
              Collected section, we provide the following specific opt-out methods for the forms of collection, use, or
              disclosure of your personal data specified below:
            </p>
            <p className="text-gray-700 mb-4">
              You can opt out of the use of your personal data for marketing emails. You can opt out by clicking the
              &quot;unsubscribe&quot; on the bottom of any marketing email.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Cookie Policy</h2>
            <p className="text-gray-700 mb-4">
              A cookie is a small file, stored on a user&apos;s hard drive by a website. Its purpose is to collect data
              relating to the user&apos;s browsing habits. DATIA uses cookies to determine if a user is logged in and to
              improve site experience. We do not transfer any PII.
            </p>
            <p className="text-gray-700 mb-4">
              You can choose to disable cookies entirely in your internet browser, but this may decrease the quality of
              your user experience.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Modifications</h2>
            <p className="text-gray-700 mb-4">
              This Privacy Policy may be amended from time to time in order to maintain compliance with the law and to
              reflect any changes to our data collection process. When we amend this Privacy Policy we will update the
              &quot;Effective Date&quot; at the top of this Privacy Policy. We recommend that our users periodically review our
              Privacy Policy to ensure that they are notified of any updates. If necessary, we may notify users by email
              of changes to this Privacy Policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Information</h2>
            <p className="text-gray-700 mb-4">
              If you have any questions, concerns or complaints, you can contact our privacy officer, Jim Callan, at:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700">jcallan@datia.io</p>
            </div>
          </section>
        </div>
      </section>
      <SiteFooter />
    </main>
  )
}

import { Slide1, Slide2, Slide3, Slide4 } from './images/images';
import {
  faDesktop,
  faFolder,
  faLifeRing,
  faScrewdriverWrench,
  faCartShopping,
  faPenToSquare,
} from '@fortawesome/free-solid-svg-icons';
import { Row, Col, Image } from 'react-bootstrap';
import {
  JavaImg,
  Dotnet,
  Scssimg,
  WebDevlcont,
  Csascont,
  Ohcmcont,
  Cgpcont,
  Rpacont,
  Aimlcont,
  Blkchaincont,
  Iotcont,
  Saascont,
} from './images/images';
export const SLIDERS = [
  {
    src: Slide1,
    altText: 'Slide 1',
    captionText:
      'Value-Added Human Resources and Organizational Development Solutions',
    captionHeader: '',
  },
  {
    src: Slide2,
    altText: 'Slide 2',
    captionText: 'Leadership Development Programs in Manila, Clark, and Cebu',
    captionHeader: '',
  },
  {
    src: Slide3,
    altText: 'Slide 3',
    captionText:
      'Business Continuity Plan , Remote Work Policy , Business Recovery Strategies , Workforce Planning , Workplace Health and Safety',
    captionHeader: ' ',
  },
  {
    src: Slide4,
    altText: 'Slide 4',
    captionText: 'Developing Innovative HR Strategies',
    captionHeader: '',
  },
];

export const MENULINK = [
  {
    key: 'home',
    text: 'Home',
  },
  {
    key: 'aboutus',
    text: 'About Us',
  },
  {
    key: 'services',
    text: 'Services',
  },
  // {
  //     key: "consulting",
  //     text: "Consulting",
  // },
  {
    key: 'careers',
    text: 'Careers',
  },
  {
    key: 'contact',
    text: 'Contact',
  },
];
export const ADMINMENULINK = [];

function contentService(item) {
  return (
    <>
      {item === 'Web App Development' && (
        <>
          <div>
            <p>
              Web development, also known as website development, refers to the
              tasks associated with creating, building, and maintaining websites
              and web applications that run online on a browser. It may,
              however, also include web design, web programming, and database
              management.
              <br />
              <br />
              Web development is closely related to the job of designing the
              features and functionality of apps (web design). The term
              development is usually reserved for the actual construction of
              these things (that is to say, the programming of sites).
              <br />
              <br />
              The basic tools involved in web development are programming
              languages called HTML (Hypertext Markup Language), CSS (Cascading
              Style Sheets), and JavaScript. There are, however, a number of
              other programs used to “manage” or facilitate the construction of
              sites that would otherwise have to be done “from scratch” by
              writing code. A number of content management systems (CMS) fall
              into this category, including WordPress, Joomla!, Drupal, TYPO3,
              and Adobe Experience Manager, among others.
            </p>
          </div>
          <Row className='mt-5 mb-3'>
            <Col xs={12} md={4}>
              <div className='service-content-grid'>
                <div className='service-grid-image'>
                  <Image src={JavaImg} />
                </div>
              </div>
            </Col>
            <Col xs={12} md={4}>
              <div className='service-content-grid'>
                <div className='service-grid-image'>
                  <Image src={Dotnet} />
                </div>
              </div>
            </Col>
            <Col xs={12} md={4}>
              <div className='service-content-grid'>
                <div className='service-grid-image'>
                  <Image src={Scssimg} />
                </div>
              </div>
            </Col>
          </Row>
          {/* <Row className='mt-3 mb-3'>
                        <Col xs={12} md={4} >
                            <div className='service-img-grid'>
                                <img src=""/>
                                <h5>Advisory Consulting</h5>
                                <p>Ascertain your success from conceptualization to value realization with our holistic perspective and expertise.
                                </p>
                            </div>
                        </Col>
                        <Col xs={12} md={4} >
                            <div className='service-img-grid'>
                            <img src=""/>
                                <h5>Advisory Consulting</h5>
                                <p>Ascertain your success from conceptualization to value realization with our holistic perspective and expertise.
                                </p>
                            </div>
                        </Col>
                        <Col xs={12} md={4} >
                            <div className='service-img-grid'>
                            <img src="."/>
                                <h5>Advisory Consulting</h5>
                                <p>Ascertain your success from conceptualization to value realization with our holistic perspective and expertise.
                                </p>
                            </div>
                        </Col>
                    </Row> */}
        </>
      )}
      {item === 'Clinical SAS Programming' && (
        <div>
          <p>
            SAS ®is widely used in clinical trial data analysis in
            pharmaceutical, biotech and clinical research companies. SAS®
            programmers work closely with statisticians and clinical data
            managers. They work on CDM cleaned data and do analysis on Clinical
            data and generate reports like graphs, listing and tables
          </p>
          <h5>Clinical Trials Process</h5>
          <ul>
            <li>
              Describe the clinical research process (phases, key roles, key
              organizations).
            </li>
            <li>Interpret a Statistical Analysis Plan.</li>
            <li>
              Derive programming requirements from an SAP and an annotated Case
              Report Form.
            </li>
            <li>
              Describe regulatory requirements (principles of 21 CFR Part 11,
              International Conference on Harmonization, Good Clinical
              Practices).
            </li>
          </ul>
          <h5>Clinical Trials Data Structures</h5>
          <ul>
            <li>
              Identify the classes of clinical trials data (demographic, lab,
              baseline, concomitant medication, etc.).
            </li>
            <li>Identify key CDISC principals and terms.</li>
            <li>
              Describe the structure and purpose of the CDISC SDTM data model.
            </li>
            <li>
              Describe the structure and purpose of the CDISC ADaM data model.
            </li>
            <li>Describe the contents and purpose of define.xml.</li>
          </ul>
          <h5>Import and Export Clinical Trials Data</h5>
          <ul>
            <li>Combine SAS data sets.</li>
            <li>Efficiently import and subset SAS data sets.</li>
            <li>
              Access data in an Excel workbook (LIBNAME and PROC IMPORT/EXPORT).
            </li>
            <li>Create temporary and permanent SAS data sets.</li>
            <li>
              Apply regulatory requirements to exported SAS data sets (SAS V5
              requirements).
            </li>
          </ul>
          <h5> Manage Clinical Trials Data</h5>
          <ul>
            <li>
              Investigate SAS data libraries using base SAS utility procedures
              (PRINT, CONTENTS, FREQ).
            </li>
            <li>Access DICTIONARY Tables using the SQL procedure.</li>
            <li>Sort observations in a SAS data set.</li>
            <li>
              Create and modify variable attributes using options and statements
              in the DATA step.
            </li>
            <li>
              Examine and explore clinical trials input data (find outliers,
              missing vs. zero values, etc).
            </li>
          </ul>
          <h5> Transform Clinical Trials Data</h5>
          <ul>
            <li>Process data using DO LOOPS.</li>
            <li>Retain variables across observations.</li>
            <li>Use assignment statements in the DATA step.</li>
            <li>
              Apply categorization and windowing techniques to clinical trials
              data.
            </li>
            <li>
              Use SAS functions to convert character data to numeric and vice
              versa.
            </li>
            <li>
              Use SAS functions to manipulate character data, numeric data, and
              SAS date values.
            </li>
            <li>Transpose SAS data sets.</li>
            <li>
              Apply 'observation carry forward' techniques to clinical trials
              data (LOCF, BOCF, WOCF).
            </li>
            <li>Calculate 'change from baseline' results.</li>
            <li>Obtain counts of events in clinical trials.</li>
          </ul>
          <h5> Apply Statistical Procedures for Clinical Trials</h5>
          <ul>
            <li>
              Use SAS procedures to obtain descriptive statistics for clinical
              trials data (FREQ, UNIVARIATE, MEANS, SUMMARY).
            </li>
            <li>
              Use PROC FREQ to obtain p-values for categorical data (2x2 and NxP
              test for association).
            </li>
            <li>
              Use PROC TTEST to obtain p-values for continuous data (one-sample,
              paired and two-sample t-tests).
            </li>
            <li>Create output data sets from statistical procedures.</li>
          </ul>
          <h5>Macro Programming for Clinical Trials</h5>
          <ul>
            <li>Create and use user-defined and automatic macro variables.</li>
            <li>Automate programs by defining and calling macros.</li>
            <li>
              Use system options to debug macros and display values of macro
              variables in the SAS log (MPRINT, SYMBOLGEN, MLOGIC, MACROGEN).
            </li>
          </ul>
          <h5>Report Clinical Trials Results</h5>
          <ul>
            <li>
              Use PROC REPORT to produce tables and listings for clinical trials
              reports.
            </li>
            <li>
              Use ODS and global statements to produce and augment clinical
              trials reports.
            </li>
          </ul>
          <h5>Validate Clinical Trial Data Reporting</h5>
          <ul>
            <li>
              Explain the principles of programming validation in the clinical
              trial industry.
            </li>
            <li>
              Utilize the log file to validate clinical trial data reporting.
            </li>
            <li>
              Use programming techniques to validate clinical trial data
              reporting (PROC COMPARE, MSGLEVEL).
            </li>
            <li>Identify and Resolve data, syntax and logic errors.</li>
          </ul>
        </div>
      )}
      {item === 'Oracle HCM' && (
        <div>
          <p>
            Oracle Fusion Cloud HCM is a complete cloud solution that connects
            every human resource process—and every person—across your
            enterprise. We help you create a community where people feel valued,
            heard, and like they belong. With a single user experience and data
            model and seamless processes and infrastructure, Oracle Cloud HCM
            can help you redefine what best looks like for your people.
          </p>
        </div>
      )}
      {item === 'Cloud Technologies (Azure,Aws,Gcp)' && (
        <div>
          <p>
            {' '}
            Microsoft Azure is an example of a public cloud. With a public
            cloud, all hardware, software, and other supporting infrastructure
            is owned and managed by the cloud provider. You access these
            services and manage your account using a web browser. Learn more
            about the public cloud.
          </p>
          <p>
            AWS has significantly more services, and more features within those
            services, than any other cloud provider–from infrastructure
            technologies like compute, storage, and databases–to emerging
            technologies, such as machine learning and artificial intelligence,
            data lakes and analytics, and Internet of Things.
          </p>
          <p>
            {' '}
            Google Cloud Platform (GCP) is a suite of cloud computing services
            provided by Google. It is a public cloud computing platform
            consisting of a variety of services like compute, storage,
            networking, application development, Big Data, and more, which run
            on the same cloud infrastructure that Google uses internally for its
            end-user products, such as Google Search, Photos, Gmail and YouTube,
            etc.
          </p>
        </div>
      )}
      {item === 'Robotic Process Automation' && (
        <div>
          <p>
            {' '}
            Robotic Process Automation (RPA) is a software technology that makes
            it easy to build, deploy, and manage software robots that emulate
            humans actions interacting with digital systems and software. Just
            like people, software robots can do things like understand what’s on
            a screen, complete the right keystrokes, navigate systems, identify
            and extract data, and perform a wide range of defined actions. But
            software robots can do it faster and more consistently than people,
            without the need to get up and stretch or take a coffee break.
          </p>
        </div>
      )}
      {item === 'Artificial Intelligence and Machine Learning' && (
        <div>
          <p>
            {' '}
            An “intelligent” computer uses AI to think like a human and perform
            tasks on its own. Machine learning is how a computer system develops
            its intelligence. One way to train a computer to mimic human
            reasoning is to use a neural network, which is a series of
            algorithms that are modeled after the human brain.
          </p>
        </div>
      )}
      {item === 'Blockchain' && (
        <div>
          <p>
            {' '}
            Blockchain technology is an advanced database mechanism that allows
            transparent information sharing within a business network. A
            blockchain database stores data in blocks that are linked together
            in a chain.
          </p>
        </div>
      )}
      {item === 'Internet of Things (IoT)' && (
        <div>
          <p>
            {' '}
            In the simplest terms, the Internet of Things (IoT) represents all
            computing devices that are connected to the internet. It can be
            described as a network of responsive devices and everyday objects
            that wouldn’t necessarily be thought of as communicating with the
            internet like wearables, industrial machinery, motion sensors, and
            more. These devices are embedded with environmental sensors and
            other technologies that enable them to collect and exchange data
            without human intervention.
          </p>
          <p>
            Originally, the industrial and automotive sectors were some of the
            first pioneers in IoT, connecting their machines to talk to one
            another and report back with potential failures or overloads.
            Usually in the industrial sector, IoT is named Industrial IoT or in
            the shorter version IoT.
          </p>
        </div>
      )}
      {item === 'Software as a Service (SaaS)' && (
        <div>
          <p>
            {' '}
            Software as a service (or SaaS) is a way of delivering applications
            over the Internet—as a service. Instead of installing and
            maintaining software, you simply access it via the Internet, freeing
            yourself from complex software and hardware management.
          </p>
          <p></p>
        </div>
      )}
    </>
  );
}
export const SERVICES = [
  {
    title: 'Software as a Service (SaaS)',
    id: 'service1.1',
    icon: faDesktop,
    content: contentService('Software as a Service (SaaS)'),
    image: Saascont,
  },
  {
    title: 'Web Development',
    id: 'service1',
    icon: faDesktop,
    content: contentService('Web App Development'),
    image: WebDevlcont,
  },
  {
    title: 'Clinical SAS Programming',
    id: 'service2',
    icon: faFolder,
    content: contentService('Clinical SAS Programming'),
    image: Csascont,
  },
  {
    title: 'Oracle HCM',
    id: 'service3',
    icon: faLifeRing,
    content: contentService('Oracle HCM'),
    image: Ohcmcont,
  },
  {
    title: 'Cloud Technologies (Azure,Aws,Gcp)',
    id: 'service4',
    icon: faScrewdriverWrench,
    content: contentService('Cloud Technologies (Azure,Aws,Gcp)'),
    image: Cgpcont,
  },
  {
    title: 'Robotic Process Automation',
    id: 'service5',
    icon: faCartShopping,
    content: contentService('Robotic Process Automation'),
    image: Rpacont,
  },
  {
    title: 'Artificial Intelligence and Machine Learning',
    id: 'service6',
    icon: faPenToSquare,
    content: contentService('Artificial Intelligence and Machine Learning'),
    image: Aimlcont,
  },
  {
    title: 'Blockchain',
    id: 'service7',
    icon: faPenToSquare,
    content: contentService('Blockchain'),
    image: Blkchaincont,
  },
  {
    title: 'Internet of Things (IoT)',
    id: 'service8',
    icon: faPenToSquare,
    content: contentService('Internet of Things (IoT)'),
    image: Iotcont,
  },
];

import React from "react";
import { Routes, Route } from "react-router-dom";
import { Landing } from "../page/landing/Landing";
import { Biography } from "../page/Biography/Biography";
import { EmpoweringEducation } from "../page/Empowering Education/EmpoweringEducation";
import { Activity } from "../page/Activity/Activity";
import { Politics } from "../page/Politics/Politics";
// import { MPOfKandhamal } from "../page/MP of Kandhamal/MPOfKandhamal";
import { Media } from "../page/Media/Media";
import { Testimonial } from "../page/Testimonial/Testimonial";
import { Books } from "../components/Books/Books";
import { Contact } from "../page/Contact/Contact";
import { Live } from "../components/Live/Live";

import { ANR } from "../page/Biography/SubPages/Awaerd&Recognition/ANR";
import { ASB } from "../page/Biography/SubPages/A short Biography/ASB";
import { TNS } from "../page/Biography/SubPages/Talk&Speech/TNS";
import { ELS } from "../page/Biography/SubPages/Early Life Struggle/ELS.jsx";
import { Award } from "../page/Biography/SubPages/Awaerd&Recognition/Component/Div2/Page/Award";
import { DNS } from "../page/Politics/Subpages/DNS/DNS";
import { SPQ } from "../page/Politics/Subpages/SPQ/SPQ";
import { SPM } from "../page/Politics/Subpages/SPM/SPM";
import { QOP } from "../page/Politics/Subpages/QOP/QOP";
import { DOG } from "../page/Politics/Subpages/DOG/DOG";
import { CMM } from "../page/Politics/Subpages/CMM/CMM";
import { Aboutkm } from "../page/MP of Kandhamal/Pages/Aboutkm/Aboutkm";
import { MPReport } from "../page/MP of Kandhamal/Pages/MPReport/MPReport";
import { AllDoctorates } from "../page/Biography/SubPages/Awaerd&Recognition/Subpages/AllDoctorates/AllDoctorates";
import { AllMembership } from "../page/Biography/SubPages/Awaerd&Recognition/Subpages/AllMemberships/AllMembership";
import { MsgDetails } from "../components/FounderMsg/MsgDetails";
import AllMsg from "../components/FounderMsg/AllMsg";
import { ArticleDetails } from "../components/Article/ArticleDetails";
import { News } from "../components/News/News";
import { NewsDetails } from "../components/News/NewsDetails";
import { Articles } from "../components/Article/Articles";
import { InternationalVisit } from "../components/International Visit/InternationalVisit";
import { AllMPReports } from "../page/MP of Kandhamal/Pages/MPReport/AllMPReports";



export const AllRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      {/* founderMessage */}
      <Route path="/messages" element={<AllMsg/>} />
      <Route path="/messages/:id" element={<MsgDetails />} />
      {/* Articles */}
      <Route path="/articles" element={<Articles/>} />
      <Route path="/articles/:id" element={<ArticleDetails/>} />
      {/* News */}
      <Route path="/news" element={<News />} />
      <Route path="/news/:id" element={<NewsDetails/>} />

      





      <Route path="/biography" element={<Biography />} />
      <Route path="/empowerigEducation" element={<EmpoweringEducation />} />
      <Route path="/activity" element={<Activity />} />
      <Route path="/internationalVisit" element={<InternationalVisit />} />
      <Route path="/politics" element={<Politics />} />
      <Route path="/mpofkandhamal" element={<Aboutkm />} />
      <Route path="/media" element={<Media />} />
      <Route path="/testimonial" element={<Testimonial />} />
      <Route path="/books" element={<Books />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/live" element={<Live />} />

      <Route path="/articles" element={<Articles />} />

      
      <Route path="/els" element={<ELS />} />
      <Route path="/anr" element={<ANR />} />
      <Route path="/asb" element={<ASB />} />
      <Route path="/tns" element={<TNS />} />


      <Route path="/award" element={<Award />} />
      <Route path="/doctorates" element={<AllDoctorates/>} />
      <Route path="/memberships" element={<AllMembership />} />

      <Route path="/cmm" element={<CMM />} />
      <Route path="/disog" element={<DOG />} />
      <Route path="/qop" element={<QOP />} />
      <Route path="/spm" element={<SPM />} />
      <Route path="/spq" element={<SPQ />} />
      <Route path="/dns" element={<DNS />} />


      <Route path="/aboutkm" element={<Aboutkm />} />
      <Route path="/mpreport" element={<MPReport />} />
      <Route path = "/allmpreports" element={<AllMPReports/>}/>
    </Routes>
  );
};

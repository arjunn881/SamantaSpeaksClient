import React from "react";
// import "../Article/Article.css";
// // import A1 from "../../asset/Article/1.png";
// // import A2 from "../../asset/Article/2.png";
// // import A3 from "../../asset/Article/3.png";
// import Insta from "../../asset/Article/insta.png";
// import Fb from "../../asset/Article/fb.png";
// import Wa from "../../asset/Article/wa.png";
// import File from "../../asset/Article/file.png";
// import { Link, NavLink } from "react-router-dom";
// import { Loader } from "../Loader/Loader";

// // const article = [
// //   {
// //     id: 1,
// //     img: A1,
// //     heading: "Stadium Inaguration",
// //     date: "17 Feb, 2023",
// //     desc: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
// //   },

// //   {
// //     id: 2,
// //     img: A2,
// //     heading: "Stadium Inaguration",
// //     date: "17 Feb, 2023",
// //     desc: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
// //   },

// //   {
// //     id: 3,
// //     img: A3,
// //     heading: "Stadium Inaguration",
// //     date: "17 Feb, 2023",
// //     desc: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
// //   },

// //   {
// //     id: 4,
// //     img: A1,
// //     heading: "Stadium Inaguration",
// //     date: "17 Feb, 2023",
// //     desc: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
// //   },

// //   {
// //     id: 5,
// //     img: A2,
// //     heading: "Stadium Inaguration",
// //     date: "17 Feb, 2023",
// //     desc: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
// //   },

// //   {
// //     id: 6,
// //     img: A3,
// //     heading: "Stadium Inaguration",
// //     date: "17 Feb, 2023",
// //     desc: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
// //   },
// // ];

// export const Article = ({ article }) => {



//   return (
//     <div className="article">
//       <div className="msgff-heading">
//         <span className="heading2">ARTICLES</span>
//       </div>

//       <div className="article-container">
//         {!article?(<Loader/>):(article?.map((article) => (
//           <div className="grid-article-block" key={article?._id}>
//             <Link to={`/articles/${article?._id}`}>
//               <div className="article-block">
//                 <div className="article-img-container">
//                   <img src={article?.img} alt={article?._id} />
//                   <div className="hover1">
//                     <div className="hover1-img-container">
//                       <img src={File} alt="a" />
//                     </div>
//                     <div className="hover1-img-container">
//                       <img src={Wa} alt="b" />
//                     </div>

//                     <div className="hover1-img-container">
//                       <img src={Fb} alt="c" />
//                     </div>

//                     <div className="hover1-img-container">
//                       <img src={Insta} alt="d" />
//                     </div>
//                   </div>
//                 </div>

//                 <div className="article-text-container">
//                   <span>{article?.title}</span>
//                   <span>{new Date(article?.createdAt).toDateString()}</span>
//                   <p>{article?.desc}</p>
//                 </div>
//               </div>
//             </Link>
//           </div>
//         )))}
//       </div>

//       <NavLink to="/articles" className="msgff-view">
//         <span>View All</span>
//         <i class="fa-solid fa-arrow-right"></i>
//       </NavLink>
//     </div>
//   );
// };

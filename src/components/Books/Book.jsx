import React from "react";
import HTMLFlipBook from "react-pageflip";
import "./Book.css";
import img1 from "../../asset/Book/AS-Booklet-Print_page-0001.jpg";
import img2 from "../../asset/Book/AS-Booklet-Print_page-0002.jpg";
import img3 from "../../asset/Book/AS-Booklet-Print_page-0003.jpg";
import img4 from "../../asset/Book/AS-Booklet-Print_page-0004.jpg";
import img5 from "../../asset/Book/AS-Booklet-Print_page-0005.jpg";
import img6 from "../../asset/Book/AS-Booklet-Print_page-0006.jpg";
import img7 from "../../asset/Book/AS-Booklet-Print_page-0007.jpg";
import img8 from "../../asset/Book/AS-Booklet-Print_page-0008.jpg";
import img9 from "../../asset/Book/AS-Booklet-Print_page-0009.jpg";
import img10 from "../../asset/Book/AS-Booklet-Print_page-0010.jpg";
import img11 from "../../asset/Book/AS-Booklet-Print_page-0011.jpg";
import img12 from "../../asset/Book/AS-Booklet-Print_page-0012.jpg";
import img13 from "../../asset/Book/AS-Booklet-Print_page-0013.jpg";
import img14 from "../../asset/Book/AS-Booklet-Print_page-0014.jpg";
import img15 from "../../asset/Book/AS-Booklet-Print_page-0015.jpg";
import img16 from "../../asset/Book/AS-Booklet-Print_page-0016.jpg";
import img17 from "../../asset/Book/AS-Booklet-Print_page-0017.jpg";
import img18 from "../../asset/Book/AS-Booklet-Print_page-0018.jpg";
import img19 from "../../asset/Book/AS-Booklet-Print_page-0019.jpg";
import img20 from "../../asset/Book/AS-Booklet-Print_page-0020.jpg";
import img21 from "../../asset/Book/AS-Booklet-Print_page-0021.jpg";
import img22 from "../../asset/Book/AS-Booklet-Print_page-0022.jpg";
import img23 from "../../asset/Book/AS-Booklet-Print_page-0023.jpg";
import img24 from "../../asset/Book/AS-Booklet-Print_page-0024.jpg";
import img25 from "../../asset/Book/AS-Booklet-Print_page-0025.jpg";
import img26 from "../../asset/Book/AS-Booklet-Print_page-0026.jpg";
import img27 from "../../asset/Book/AS-Booklet-Print_page-0027.jpg";
import img28 from "../../asset/Book/AS-Booklet-Print_page-0028.jpg";
import img29 from "../../asset/Book/AS-Booklet-Print_page-0029.jpg";
import img30 from "../../asset/Book/AS-Booklet-Print_page-0030.jpg";
import img31 from "../../asset/Book/AS-Booklet-Print_page-0031.jpg";
import img32 from "../../asset/Book/AS-Booklet-Print_page-0032.jpg";
import img33 from "../../asset/Book/AS-Booklet-Print_page-0033.jpg";
import img34 from "../../asset/Book/AS-Booklet-Print_page-0034.jpg";
import img35 from "../../asset/Book/AS-Booklet-Print_page-0035.jpg";
import img36 from "../../asset/Book/AS-Booklet-Print_page-0036.jpg";
// import SamantaBook from "../../asset/Book/bookpdf/SamantaSpeaks.pdf"
const book = [
  {
    id: 1,
    img: img1,
  },
  {
    id: 2,
    img: img2,
  },
  {
    id: 3,
    img: img3,
  },
  {
    id: 4,
    img: img4,
  },
  {
    id: 5,
    img: img5,
  },
  {
    id: 6,
    img: img6,
  },
  {
    id: 7,
    img: img7,
  },
  {
    id: 8,
    img: img8,
  },
  {
    id: 9,
    img: img9,
  },
  {
    id: 10,
    img: img10,
  },
  {
    id: 11,
    img: img11,
  },
  {
    id: 12,
    img: img12,
  },
  {
    id: 13,
    img: img13,
  },
  {
    id: 14,
    img: img14,
  },
  {
    id: 15,
    img: img15,
  },
  {
    id: 16,
    img: img16,
  },
  {
    id: 17,
    img: img17,
  },
  {
    id: 17,
    img: img17,
  },
  {
    id: 18,
    img: img18,
  },
  {
    id: 19,
    img: img19,
  },
  {
    id: 20,
    img: img20,
  },
  {
    id: 21,
    img: img21,
  },
  {
    id: 22,
    img: img22,
  },
  {
    id: 23,
    img: img23,
  },
  {
    id: 24,
    img: img24,
  },
  {
    id: 25,
    img: img25,
  },
  {
    id: 26,
    img: img26,
  },
  {
    id: 27,
    img: img27,
  },
  {
    id: 28,
    img: img28,
  },

  {
    id: 29,
    img: img29,
  },
  {
    id: 30,
    img: img30,
  },
  {
    id: 31,
    img: img31,
  },
  {
    id: 32,
    img: img32,
  },
  {
    id: 33,
    img: img33,
  },

  {
    id: 34,
    img: img34,
  },
  {
    id: 35,
    img: img35,
  },
  {
    id: 36,
    img: img36,
  },
];

export const Book = () => {
  
  return (
    <div className="book-component">
      <HTMLFlipBook width={300} height={500}>
        {book.map((page) => (
          <div className="book-component-page" key={page.id}>
            <img src={page.img} alt={page.id} />
          </div>
        ))}
      </HTMLFlipBook>


      <button className="book-download">
        <a href="" download >Download</a>
      </button>
    </div>
  );
};

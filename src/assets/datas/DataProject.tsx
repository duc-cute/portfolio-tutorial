/** @format */
import img1 from "../../assets/images/img1.png";
import img2 from "../../assets/images/img2.png";
import img3 from "../../assets/images/img3.png";
import img4 from "../../assets/images/img4.png";
import img5 from "../../assets/images/img5.png";
export interface IDataProject {
  id: number;
  image: string;
  title: string;
  detail: {
    description: string;
    member: string;
    role: string;
    technology: string;
    github: string;
    demo: string;
  };
}
export const dataProject: IDataProject[] = [
  {
    id: 1,
    image: img5,
    title: "Ecommerce Book",
    detail: {
      description: "Xây dụng website thương mại điện tử clone Tiki",
      technology: "ReactJS , Ant Design ,Redux Toolkit",
      role: "FrontEnd Developer",
      member: "1",
      github: "https://github.com/duc-cute/ecommerce-book",
      demo: "https://ecommerce-book.vercel.app/",
    },
  },
  {
    id: 2,
    image: img2,
    title: "Portfolio",
    detail: {
      description: "Xây dụng website Portfolio giới thiệu về bản thân",
      technology: "ReactJS,Tailwind",
      role: "FrontEnd Developer",
      member: "1",
      github: "https://github.com/duc-cute/ecommerce-book",
      demo: "https://ecommerce-book.vercel.app/",
    },
  },
  {
    id: 3,
    image: img3,
    title: "Weather App",
    detail: {
      description:
        "Xây dụng website xem dự báo thời tiết, chức năng xem nhiệt độ , mây , tốc độ gió trong ngày",
      technology: "HTML,CSS JavaScript",
      role: "FrontEnd Developer",
      member: "1",
      github: "https://github.com/duc-cute/weather-app",
      demo: "https://duc-cute.github.io/weather-app/",
    },
  },
  {
    id: 4,
    image: img4,
    title: "Technology Devices",
    detail: {
      description:
        "Website thương mại điện tử hỗ trợ quản lý và mua bán đồ điện tử",
      technology: "HTML,CSS JavaScript",
      role: "FrontEnd Developer",
      member: "1",
      github: "https://github.com/duc-cute/technology-store",
      demo: "https://duc-cute.github.io/technology-store/",
    },
  },
  {
    id: 5,
    image: img1,
    title: "Music Player App",
    detail: {
      description: "Xây dụng web app nghe nhạc",
      technology: "HTML,CSS JavaScript",
      role: "FrontEnd Developer",
      member: "1",
      github: "https://github.com/duc-cute/music-player",
      demo: "https://duc-cute.github.io/music-player/",
    },
  },
  {
    id: 6,
    image: img3,
    title: "Weather App",
    detail: {
      description:
        "Xây dụng website xem dự báo thời tiết, chức năng xem nhiệt độ , mây , tốc độ gió trong ngày",
      technology: "HTML,CSS JavaScript",
      role: "FrontEnd Developer",
      member: "1",
      github: "https://github.com/duc-cute/weather-app",
      demo: "https://duc-cute.github.io/weather-app/",
    },
  },
  {
    id: 7,
    image: img4,
    title: "Technology Devices",
    detail: {
      description:
        "Website thương mại điện tử hỗ trợ quản lý và mua bán đồ điện tử",
      technology: "HTML,CSS JavaScript",
      role: "FrontEnd Developer",
      member: "1",
      github: "https://github.com/duc-cute/technology-store",
      demo: "https://duc-cute.github.io/technology-store/",
    },
  },
  {
    id: 8,
    image: img1,
    title: "Music Player App",
    detail: {
      description: "Xây dụng web app nghe nhạc",
      technology: "HTML,CSS JavaScript",
      role: "FrontEnd Developer",
      member: "1",
      github: "https://github.com/duc-cute/music-player",
      demo: "https://duc-cute.github.io/music-player/",
    },
  },
];

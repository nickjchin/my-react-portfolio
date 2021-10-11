import React, {useState} from "react";
import Navbar from "./Navbar"
import Header from "./pages/Header"
import About from "./pages/About"
import Projects from "./pages/Projects"
import Contact from "./pages/Contact"
import Footer from "./pages/Footer"
import "../styles/Portfolio.css";

export default function Portfolio() {
    const [currentPage, setCurrentPage] = useState("About");

    const renderPage = () =>{
        if (currentPage === "About"){
            return <About />;
        } 
        if (currentPage === "Projects"){
            return <Projects />;
        }
        if (currentPage === "Contact"){
            return <Contact />
        };
    
 const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
        <Header />

        {renderPage()}
        <Footer />
    </div>
  );
}

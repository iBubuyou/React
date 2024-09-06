import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";


const About = () => {
    return (
        <div>
            <Header />
            <div className=" container col-md-5">
            <h3>สวัสดีค่ะ</h3>
            <p className="title text-justify mt-4 mb-4">อรไพลิน อินคง 6421605605 </p>
            <h4 className="text-sucess">จาก Kasetsart Cafe</h4>
            </div>
            <Footer company= "Ku" email="Onpailin.i@ku.th"/>

        </div>
    )
}
export default About;
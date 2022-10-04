import React from "react"
import ReactDOM from "react-dom"
import { Navbar } from "../Navbar/Navbar";
import { Services } from "../Services/Services";
import { Doctor } from "../Doctors/Doctor";
import { Doctor2 } from "../Doctors/Doctor2";
import { Review } from "../PReviews/Review";
import { Review2 } from "../PReviews/Review2";
import { Appointment } from "../Appointment/Appointment";
import { Team } from "../Updates/Team";
import { Footer } from "../Footer/Footer";
export default function Home() {
    return (
        <div>
            <Navbar />
            <Services />
            <Doctor />
            <Doctor2 />
            <Review />
            <Review2 />
            <Appointment />
            <Team />
            <Footer />
        </div>
    )
}
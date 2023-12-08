import React from 'react'
import { useEffect, useRef } from 'react';
import { useLocation, } from 'react-router-dom';
import { type } from '@testing-library/user-event/dist/type';
import image1 from "../component/Images/WhatsApp Image 2023-10-21 at 20.14.12.jpeg"
import image2 from "../component/Images/Principal.jpeg"
import image3 from "../component/Images/headTeacher.jpeg"
import "./About.css"

export default function About() {
  const { location, state } = useLocation()
  console.log(location, state)
  const WelcomeRef = useRef()
  useEffect(() => {
    console.log(state?.direct)
    if (state?.direct === "Welcome") {
      console.log("Welcome")
      window.scrollTo({ top: WelcomeRef.current.offsetTop, left: 0, behavior: "smooth" })
    }
  }, [])

  return (

    <div className="about-container">
      <h1 >About us</h1>
      <div className="about welcome" ref={WelcomeRef} key={type}>
        <h1>Welcome to My First Flight</h1>
        <p>

          <p>My First Flight is a place where our specialized trained teachers helps kids in their overall development and Kids learn lots of new things. We are making their childhood awesome and memorable. Love & Care is the foundation of My First Flight Preschool. it is what helped it grow and keeps it going. My First Flight is like a castle of education & joy where every child receives abundant love and attention from professionally trained teachers. Each teacher and staff are highly trained and are experts in this domain. We have immense year of experience in this education field and we want to give quality education to kids which is also affordable to parents.</p>
          <p>Our teaching methodologies include higher number of physical & mental activities which helps kids to become more active and it makes primary education interesting for them.
            As our goal is overall development of a child so here in My First Flight we use advance teaching methods as well, we use smart creative toys and educational kits, AI based kit, Smart apps for kid’s progress & development monitoring. On daily basis we provide videos & photos to parents for their kid’s activities, dance and performance. Through this way they also get daily update about the activities performed by teachers in the school.</p>

          <p>Here in My First Flight we celebrate every big festivals and occasions hence celebration is a big part of My First Flight. Kids remain active, connected and engaged with the teachers and classmate through it. We celebrate every kid’s birthday as every kid is special to us. We make them feel special on their big day.</p>

          <p> The curriculum of our school is design by highly qualified and immense year of experienced teachers. Our books and curriculum are designed keeping in mind that no stone remain unturned in making the base strong for the kids as the base is the main important part for any student.
          </p>
        </p>

      </div>
      <div className="about mission" ref={WelcomeRef} key={type}>
        <h1> Mission & Vision</h1>
        <p>Our Mission is to spread the wings of My First Flight Preschool to every corner of India so that our country’s kids can get quality education in affordable price. We want to share our knowledge and experience with other for the benefit of society hence we are working on the franchisee part of My First Flight Preschool. We will provide complete support & training to them to build a profitable preschool which will benefit both parents and the franchisee owner.
          We fully support “Right to Education” law and we think that every kid of this country deserves quality education, it doesn’t matter to which class it belongs to hence our vision is to provide quality education to every kid of this country in affordable price.
        </p>

      </div>
      <div className='about-column' ref={WelcomeRef} key={type}>

        <div className="about approch " >
          <h1>Our Approach</h1>
          <p>At My First Flight , we believe that the journey of early childhood education is
            a remarkable and transformative one. We are a dedicated team of educators and caregivers
            who are passionate about nurturing young minds and creating a nurturing environment where
            children can grow, learn, and thrive.</p>
          <p>Our curriculum is designed to be engaging, age-appropriate, and enriched with hands-on learning experiences. We incorporate play-based learning, arts, music, physical education, and interactive activities to ignite the curiosity and creativity of our young learners.</p>

        </div>
        <div className="about team" >
          <h1>Our Team</h1>
          <p>Our team is the backbone of My First Flight. Our educators are not just teachers; they are mentors, role models, and caregivers who are dedicated to creating a nurturing and supportive environment for every child. Our staff members are highly qualified, experienced, and passionate about early childhood education.</p>

        </div>
      </div>

      <div className='about d-flex '>
        <div className=' d-flex juscontainer overflow-hidden mt-2 '>
        <img src={image1}  style={{ height:"150px",borderRadius:"20px" }} alt="" />
      </div>
        <div >
        <h1>Our School’s Director</h1>
        <p>Mr. Suresh Pal: He is a professional Data Scientist and have immense year of experience in teaching and management. He is highly educated and well qualified. His direction’s ability helped My First Flight to achieve several milestones. He helped school to innovate several programs which benefits kids and parents both PAP & PCP are the example of those programs. He has done his B.Tech from Amity School of Engineering & Technology and MBA from NIIT University. He has worked in several MNC’s and now his vision is to transform the teaching methodologies for toddlers and to provide benefits for both to kids and their parents. He wants to make quality education affordable to every parents and wants school to use advance teaching methodologies for kid’s overall development</p>
      </div>
      


      </div>
      <div className='about_flex'>

        <div className='about mission school_info ' style={{width:"40%"}}>
          <div className='container overflow-hidden mt-1 mb-2'>
        <img src={image2} style={{height:"190px" ,borderRadius:"20px", objectFit:"cover" }} alt="" />
      </div>
          <div>
          <h1>Our School's Principal:</h1>
          <p><strong>Name:</strong> Mrs. Simarjeet Kaur</p>
          <p><strong>Designation:</strong> Principal</p>
          </div>

          <ul>
            <li>Highly talented.</li>
            <li>Extraordinary communication &amp; teaching skills.</li>
            <li>Highly friendly behavior with Parents &amp; Kids.</li>
            <li>Graduated from Punjab University.</li>
            <li>Total teaching experience: 10 years.</li>
            <li>Fine arts experience: 2 years.</li>
            <li>Art &amp; Craft experience: 1 year.</li>
            <li>Running private tuition academy for the last 7 years.</li>
            <li>Highly experienced in staffing and management.</li>
            <li>B.Ed. qualified.</li>
            <li>Certified teacher.</li>
          </ul>
          
        </div>
        
        <div className='about mission school_info' style={{ width: "40%" }}>
           <div className='container overflow-hidden mt-1 mb-2' >
        <img src={image3} style={{height:"190px" ,borderRadius:"20px" }} alt="" />
      </div>
          <h1>Our School's Head Teacher:</h1>
          <p><strong>Name:</strong> Mrs. Vandana Jain</p>
          <p><strong>Designation:</strong> Head Teacher</p>

          <ul>
            <li>Highly talented &amp; skillful resource.</li>
            <li>Extraordinary communication &amp; teaching skills.</li>
            <li>Highly friendly behavior.</li>
            <li>Graduated from DU &amp; Post Graduation from IGNOU.</li>
            <li>Professional in English &amp; Computer.</li>
            <li>2-year teaching experience from Mother’s Pride School.</li>
            <li>Certified Nursery &amp; Computer teacher.</li>
            <li>3-year experience as an English Teacher.</li>
            <li>1-year experience as a Computer Teacher.</li>
            <li>B.Ed. Qualified.</li>
            <li>6-year overall experience.</li>
            <li>Certified teacher.</li>
          </ul>
        </div>

      </div>


    </div>

  )
}

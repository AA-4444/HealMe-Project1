"use client"; // Client Component 

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faTachometerAlt, faCalendarCheck, faNewspaper, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import Calendar from "react-calendar"; // Calendar connect
import "react-calendar/dist/Calendar.css"; //style for calendar
import React, { useState } from "react";

export default function Home() {
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [date, setDate] = useState(new Date());

  return (
    <main className="main flex min-h-screen">
      {/* Header */}
      <header className="header fixed top-0 left-0 w-full flex justify-between items-center p-4 z-10">
        <h1 className="logo text-4xl font-bold text-black">HealMe</h1>
        <div className="w-10 h-10 flex items-center justify-center bg-gray-200 rounded-full shadow-lg cursor-pointer">
          <FontAwesomeIcon icon={faUser} className="text-gray-600 w-5 h-5" />
        </div>
      </header>

      {/* Sidebar */}
      <aside className="sidebar w-64 h-screen p-6 fixed top-16 left-0">
        <hr className="border-gray-300 my-4 w-full" />
        <p className="text-2xl text-black-500 font-bold my-4">Primary Menu</p>

        <nav className="flex flex-col gap-4">
          <NavItem icon={faTachometerAlt} text="Dashboard" />
          <NavItem icon={faCalendarCheck} text="Appointment" />
          <NavItem icon={faNewspaper} text="News" />
        </nav>

        <hr className="border-gray-300 my-4 w-full" />
        <p className="text-2xl text-black-500 font-bold my-4">Profile</p>

        <nav className="flex flex-col gap-4">
          <NavItem icon={faUser} text="Profile Settings" />
          <NavItem icon={faInfoCircle} text="About HealMe" />
        </nav>
      </aside>

      {/* Main Content */}
      <section className="flex flex-col items-center justify-center min-h-screen w-full mr-[calc(100px/2)]">
        <div className="bg-[#ccc3ff] shadow-lg rounded-3xl p-10 w-[50%] mx-auto text-left">
          <h2 className="text-2xl text-black font-bold mb-4">Looking for specialist?</h2>
          <p className="text-gray-600">
            Choose your specialist in section Appointment, <br /> we will find you the best specialist!
          </p>
          <button
            style={{
              backgroundColor: "#432c81",
              color: "white",
              fontSize: "13px",
              fontWeight: "600",
              borderRadius: "16px",
              padding: "16px 25px",
              marginTop: "3%",
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            BOOK NOW
          </button>
        </div>
      </section>

      {/* Calendar */}
      <aside className="fixed top-20 right-10 bg-white shadow-lg rounded-2xl p-6 w-72">
        {/* header and date choice */}
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold text-gray-700">Calendar</h3>
          <select
            className="border border-gray-300 rounded-lg px-2 py-1 text-gray-700"
            value={selectedYear}
            onChange={(e) => setSelectedYear(Number(e.target.value))}
          >
            {Array.from({ length: 5 }, (_, i) => {
              const year = new Date().getFullYear() - 2 + i;
              return (
                <option key={year} value={year}>
                  {year}
                </option>
              );
            })}
          </select>
        </div>

        {/* Calendar */}
      
<Calendar
  value={date}
  onChange={(value) => setDate(value as Date)} 
  className="w-full rounded-lg border border-gray-200 shadow-sm"
/>

      </aside>
    </main>
  );
}

/* Components for navigation */
function NavItem({ icon, text }: { icon: any; text: string }) {
  return (
    <a
      href="#"
      className="flex items-center gap-3 text-gray-700 font-semibold hover:text-black transition p-3 rounded-lg hover:bg-gray-300/50"
    >
      <FontAwesomeIcon icon={icon} className="w-5 h-5" />
      <span className="text-lg">{text}</span>
    </a>
  );
}

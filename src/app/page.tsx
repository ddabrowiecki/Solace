"use client";

import { useEffect, useState } from "react";
import SpecialtyField from "./components/SpecialtyField";

interface Advocate {
  firstName: string;
  lastName: string;
  city: string;
  degree: string;
  specialties: string[];
  yearsOfExperience: string;
  phoneNumber: string;
}

export default function Home() {
  const [advocates, setAdvocates] = useState<Advocate[]>([]);
  const [filteredAdvocates, setFilteredAdvocates] = useState<Advocate[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/advocates");
      if (response.ok) {
        return response.json();
      }
    };
    fetchData().then((response) => {
      setAdvocates(response.data);
      setFilteredAdvocates(response.data);
    });
  }, []);

  const checkSpecialty = (specialties: string[], searchTerm: string) => {
    return specialties.find((specialty) =>
      specialty.toLowerCase().includes(searchTerm)
    )
      ? true
      : false;
  };

  const handleSearch = () => {
    const filteredAdvocates = advocates.filter(
      (advocate) =>
        advocate.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        advocate.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        advocate.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
        advocate.degree.toLowerCase().includes(searchTerm.toLowerCase()) ||
        checkSpecialty(advocate.specialties, searchTerm.toLowerCase()) ||
        advocate.yearsOfExperience.toString().includes(searchTerm.toLowerCase())
    );
    setFilteredAdvocates(filteredAdvocates);
  };

  useEffect(handleSearch, [searchTerm]);

  const handleReset = () => {
    setFilteredAdvocates(advocates);
  };

  return (
    <main style={{ margin: "24px", color: "#2a273a"}}>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      ></link>
      <div style={{ marginBottom: "30px", fontSize: "1.5rem" }}>
        Solace Advocates
      </div>
      <div style={{ marginBottom: "15px" }}>
        <p>Filter Search</p>
        <input
          style={{ border: "1px solid black", paddingLeft: "10px" }}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button style={{ marginLeft: "15px" }} onClick={handleReset}>
          Reset Filter
        </button>
      </div>
      <div className="table-header">
        <div>First Name</div>
        <div>Last Name</div>
        <div>City</div>
        <div>Degree</div>
        <div>Specialties</div>
        <div>Years of Experience</div>
        <div>Phone Number</div>
      </div>
      <div className="advocate-container">
        {filteredAdvocates.map((advocate: Advocate) => {
          return (
            <>
              <div className="filtered-advocate">
                <div>{advocate.firstName}</div>
                <div>{advocate.lastName}</div>
                <div>{advocate.city}</div>
                <div>{advocate.degree}</div>
                <SpecialtyField specialties={advocate.specialties} />
                <div className="y-o-e">{advocate.yearsOfExperience}</div>
                <div>{advocate.phoneNumber}</div>
              </div>
            </>
          );
        })}
      </div>
    </main>
  );
}

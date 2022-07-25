import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Button from "@mui/material/Button";
import Card from "./component/Card";

function Comp() {
  const [data, setdata] = useState({});
  const [name, setname] = useState("ashish21276");

  const getData = async () => {
    if (name.length === 0) {
      window.alert("username must not be empty");
      return;
    }
    const res = await fetch(`https://api.github.com/users/${name}`);
    const curr = await res.json();
    setdata(curr);
    setname("");
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="container">
        <section className="section about-section gray-bg" id="about">
          <div className="text-center py-3">
            <input
              type="text"
              className="rounded border-success bg-dark bg-opacity-25"
              placeholder="Search User"
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  getData();
                }
              }}
              value={name}
              onChange={(e) => {
                setname(e.target.value);
              }}
            />
            <Button
              variant="contained"
              className="btn btn-secondary mx-3 p-1"
              onClick={() => {
                getData();
              }}
            >
              Search
            </Button>
          </div>
          {Object.keys(data).length > 5 ? (
            <Card data={data} />
          ) : (
            "User Not Found"
          )}
        </section>
      </div>
    </>
  );
}

export default Comp;

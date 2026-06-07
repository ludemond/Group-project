import React from "react"
import { useState } from "react"

const EMPTY_FORM = {title:"",year:"",rating:"",status:"Plan to Watch", poster:"", genre:"", description:""};

function MovieForm({onAddMovie}){
const [form,setForm]=useState(EMPTY_FORM);
const[errors,setErrors]=useState({});

   const validate = () => {
    const errs = {};
    if (!form.title.trim()) errs.title = "Title is required";
    if (form.year && !/^\d{4}$/.test(form.year)) errs.year = "Enter a valid 4-digit year";
    if (form.rating && (isNaN(form.rating) || form.rating < 0 || form.rating > 10))
      errs.rating = "Rating must be 0–10";
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    // Clear error on change
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };
   const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) return setErrors(errs);

    onAddMovie(form);
    setForm(EMPTY_FORM);
    setErrors({});
  };

  const inputStyle = (field) => ({
    display: "block",
    width: "100%",
    padding: "8px 10px",
    marginTop: "4px",
    marginBottom: "4px",
    border: `1px solid ${errors[field] ? "#e74c3c" : "#ccc"}`,
    borderRadius: "6px",
    fontSize: "14px",
    boxSizing: "border-box",
  });

  return (
    <div style={{ padding: "20px", maxWidth: "400px" }}>
      <h2>Add a Movie</h2>
      <form onSubmit={handleSubmit} noValidate>

        <label style={{ fontSize: "14px", fontWeight: "bold" }}>
          Title *
          <input
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="e.g. The Matrix"
            style={inputStyle("title")}
          />
          {errors.title && <span style={{ color: "#e74c3c", fontSize: "12px" }}>{errors.title}</span>}
        </label>

        <label style={{ fontSize: "14px", fontWeight: "bold" }}>
          Year
          <input
            name="year"
            value={form.year}
            onChange={handleChange}
            placeholder="e.g. 1999"
            maxLength={4}
            style={inputStyle("year")}
          />
          {errors.year && <span style={{ color: "#e74c3c", fontSize: "12px" }}>{errors.year}</span>}
        </label>

        <label style={{ fontSize: "14px", fontWeight: "bold" }}>
          Rating (0–10)
          <input
            name="rating"
            value={form.rating}
            onChange={handleChange}
            placeholder="e.g. 8.5"
            style={inputStyle("rating")}
          />
          {errors.rating && <span style={{ color: "#e74c3c", fontSize: "12px" }}>{errors.rating}</span>}
        </label>

        <label style={{ fontSize: "14px", fontWeight: "bold" }}>
          Status
          <select
            name="status"
            value={form.status}
            onChange={handleChange}
            style={{ ...inputStyle("status"), backgroundColor: "#fff" }}
          >
            <option>Plan to Watch</option>
            <option>Watching</option>
            <option>Watched</option>
          </select>
        </label>

        <button
          type="submit"
          style={{
            marginTop: "12px",
            padding: "10px 24px",
            backgroundColor: "#2ecc71",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            fontSize: "15px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          + Add to Watchlist
        </button>
      </form>
    </div>
  );

}

export default MovieForm
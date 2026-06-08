import React from "react"
import { useState } from "react"

const EMPTY_FORM = {title:"",year:"",rating:"",status:"Plan to Watch", genre:"", poster:"", images:"", description:""};

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

    const payload = {
      ...form,
      images: form.images ? form.images.split(',').map(s => s.trim()).filter(Boolean) : [],
    };

    onAddMovie(payload);
    setForm(EMPTY_FORM);
    setErrors({});
  };

  const inputStyle = (field) => ({
    border: `1px solid ${errors[field] ? "#e74c3c" : "rgba(255,255,255,0.06)"}`,
  });

  return (
    <div className="form-card">
      <h2>Add a Movie</h2>
      <form onSubmit={handleSubmit} noValidate>
        <div className="form-grid">
          <div>
            <label style={{ fontSize: "14px", fontWeight: "600" }}>Title *</label>
            <input className="form-input" name="title" value={form.title} onChange={handleChange} placeholder="e.g. The Matrix" style={inputStyle("title")} />
            {errors.title && <div style={{ color: "#e74c3c", fontSize: "12px" }}>{errors.title}</div>}
          </div>

          <div>
            <label style={{ fontSize: "14px", fontWeight: "600" }}>Year</label>
            <input className="form-input" name="year" value={form.year} onChange={handleChange} placeholder="e.g. 1999" maxLength={4} style={inputStyle("year")} />
            {errors.year && <div style={{ color: "#e74c3c", fontSize: "12px" }}>{errors.year}</div>}
          </div>

          <div>
            <label style={{ fontSize: "14px", fontWeight: "600" }}>Rating (0–10)</label>
            <input className="form-input" name="rating" value={form.rating} onChange={handleChange} placeholder="e.g. 8.5" style={inputStyle("rating")} />
            {errors.rating && <div style={{ color: "#e74c3c", fontSize: "12px" }}>{errors.rating}</div>}
          </div>

          <div>
            <label style={{ fontSize: "14px", fontWeight: "600" }}>Genre</label>
            <input className="form-input" name="genre" value={form.genre} onChange={handleChange} placeholder="e.g. Action" style={inputStyle("genre")} />
          </div>

          <div>
            <label style={{ fontSize: "14px", fontWeight: "600" }}>Poster Image URL</label>
            <input className="form-input" name="poster" value={form.poster} onChange={handleChange} placeholder="https://example.com/poster.jpg" style={inputStyle("poster")} />
          </div>

          <div>
            <label style={{ fontSize: "14px", fontWeight: "600" }}>Additional Images (comma-separated)</label>
            <input className="form-input" name="images" value={form.images} onChange={handleChange} placeholder="url1, url2, url3" style={inputStyle("images")} />
          </div>

          

          <div>
            <label style={{ fontSize: "14px", fontWeight: "600" }}>Status</label>
            <select className="filter-select" name="status" value={form.status} onChange={handleChange} style={inputStyle("status")}>
              <option>Plan to Watch</option>
              <option>Watching</option>
              <option>Watched</option>
            </select>
          </div>
        </div>


        <div style={{ marginTop: 12 }}>
          <label style={{ fontSize: "14px", fontWeight: "600" }}>Description</label>
          <textarea className="form-textarea" name="description" value={form.description} onChange={handleChange} placeholder="Short description of the movie" style={inputStyle("description")}></textarea>
        </div>

        <div style={{ marginTop: 12 }}>
          <button type="submit" className="primary-btn">+ Add to Watchlist</button>
        </div>
      </form>
    </div>
  );

}

export default MovieForm
import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

const initialData = {
  name: "Aditya Goswami",
  gender: "Male",
  age: "25",
  religion: "Hindu",
  email: "aditya@example.com",
  caste: "Brahmin",
  hobbies: "Reading, Coding",
  about: "Passionate software developer looking for a like-minded partner.",
  income: "10-15 LPA",
  height: "5'10\"",
  maritalStatus: "Never Married",
  city: "New Delhi",
  state: "Delhi",
  profilePic: "https://via.placeholder.com/150",
};

function UserDashboard() {
  const [formData, setFormData] = useState(initialData);
  const [editMode, setEditMode] = useState(false);
  const [imagePreview, setImagePreview] = useState(initialData.profilePic);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImagePreview(imageUrl);
      setFormData((prev) => ({ ...prev, profilePic: imageUrl }));
    }
  };

  const handleSave = () => {
    setEditMode(false);
    alert("Profile updated successfully!");
  };

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete your profile?")) {
      setFormData({});
      setImagePreview("");
    }
  };

  return (
    <div className="container my-5 d-flex justify-content-center">
      <div className="card shadow-lg p-4 rounded-4" style={{ width: "100%", maxWidth: "600px", backgroundColor: "#fdfdfd" }}>
        <div className="text-center mb-4">
          <img
            src={imagePreview}
            alt="Profile"
            className="rounded-circle shadow-sm mb-3"
            style={{ width: "130px", height: "130px", objectFit: "cover", border: "4px solid #dee2e6" }}
          />
          <h3 className="fw-bold">{formData.name || "No Name"}</h3>

          {editMode && (
            <div className="mb-3">
              <label className="form-label fw-bold">Upload New Profile Picture:</label>
              <input type="file" className="form-control" onChange={handleImageChange} />
            </div>
          )}
        </div>

        <div>
          {Object.keys(formData).map((key) =>
            key !== "name" && key !== "profilePic" ? (
              <div className="mb-3" key={key}>
                <label className="form-label fw-bold text-capitalize">
                  {key.replace(/([A-Z])/g, ' $1')}:
                </label>
                {editMode ? (
                  <input
                    type="text"
                    className="form-control"
                    name={key}
                    value={formData[key]}
                    onChange={handleChange}
                  />
                ) : (
                  <div className="form-control-plaintext ps-2" style={{ fontWeight: "500", color: "#444" }}>
                    {formData[key]}
                  </div>
                )}
              </div>
            ) : null
          )}
        </div>

        <div className="d-flex justify-content-between mt-4">
          {editMode ? (
            <>
              <button className="btn btn-success px-4 fw-bold" onClick={handleSave}> Save</button>
              <button className="btn btn-secondary px-4" onClick={() => setEditMode(false)}>Cancel</button>
            </>
          ) : (
            <>
              <button className="btn btn-primary px-4 fw-bold" onClick={() => setEditMode(true)}> Edit</button>
              <button className="btn btn-danger px-4" onClick={handleDelete}> Delete</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default UserDashboard;

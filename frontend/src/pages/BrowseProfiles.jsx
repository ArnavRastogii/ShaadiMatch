import React, { useState } from 'react';
import Footer from '../components/Footer';

const profiles = [
  {
    id: 1,
    name: 'Aarav Mehta',
    age: 28,
    religion: 'Hindu',
    location: 'Mumbai',
    profession: 'Software Engineer',
    education: 'B.Tech',
    caste: 'Brahmin',
    bio: 'Loves technology and family values.',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 2,
    name: 'Fatima Khan',
    age: 26,
    religion: 'Muslim',
    location: 'Delhi',
    profession: 'Doctor',
    education: 'MBBS',
    caste: 'Sunni',
    bio: 'Compassionate and ambitious.',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 3,
    name: 'Avi Mehta',
    age: 30,
    religion: 'Hindu',
    location: 'Ahmedabad',
    profession: 'Data Analyst',
    education: 'MCA',
    caste: 'Vaishnav',
    bio: 'Passionate about data and traveling.',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 4,
    name: 'Kashish Fatima',
    age: 26,
    religion: 'Muslim',
    location: 'Delhi',
    profession: 'Doctor',
    education: 'MBBS',
    caste: 'Sunni',
    bio: 'Compassionate and ambitious.',
    image: 'https://via.placeholder.com/150',
  },
];

const BrowseProfiles = () => {
  const [filters, setFilters] = useState({
    ageMin: '', ageMax: '', religion: '', location: '', profession: '', caste: '', education: ''
  });
  const [filteredProfiles, setFilteredProfiles] = useState(profiles);
  const [currentPage, setCurrentPage] = useState(1);
  const profilesPerPage = 2;

  const applyFilters = () => {
    const filtered = profiles.filter(profile => {
      return (!filters.ageMin || profile.age >= parseInt(filters.ageMin)) &&
        (!filters.ageMax || profile.age <= parseInt(filters.ageMax)) &&
        (!filters.religion || profile.religion.toLowerCase().includes(filters.religion.toLowerCase())) &&
        (!filters.caste || profile.caste.toLowerCase().includes(filters.caste.toLowerCase())) &&
        (!filters.education || profile.education.toLowerCase().includes(filters.education.toLowerCase())) &&
        (!filters.location || profile.location.toLowerCase().includes(filters.location.toLowerCase())) &&
        (!filters.profession || profile.profession.toLowerCase().includes(filters.profession.toLowerCase()));
    });

    setFilteredProfiles(filtered);
    setCurrentPage(1);
  };

  const indexOfLastProfile = currentPage * profilesPerPage;
  const indexOfFirstProfile = indexOfLastProfile - profilesPerPage;
  const currentProfiles = filteredProfiles.slice(indexOfFirstProfile, indexOfLastProfile);
  const totalPages = Math.ceil(filteredProfiles.length / profilesPerPage);

  const showInterest = (name) => alert(`Interest shown in ${name}! They will be notified.`);
  const sendMessage = (name) => alert(`Message sent to ${name}!`);

  return (
    <div style={{ backgroundColor: "#f8f9fa", minHeight: "100vh" }}>
      <div className="container py-5">
        <h2 className="text-center mb-5 pb-2 border-bottom border-primary">Browse Profiles</h2>

        {/* Filters */}
        <div className="card mb-4 shadow-sm">
          <div className="card-body">
            <h5 className="mb-3 text-primary">Search Filters</h5>
            <div className="row g-2">
              {[
                { key: 'ageMin', placeholder: 'Min Age', type: 'number' },
                { key: 'ageMax', placeholder: 'Max Age', type: 'number' },
                { key: 'religion', placeholder: 'Religion' },
                { key: 'caste', placeholder: 'Caste' },
                { key: 'education', placeholder: 'Education' },
                { key: 'location', placeholder: 'Location' },
                { key: 'profession', placeholder: 'Profession' }
              ].map(({ key, placeholder, type = 'text' }) => (
                <div key={key} className="col-md-2">
                  <input
                    type={type}
                    className="form-control"
                    placeholder={placeholder}
                    value={filters[key]}
                    onChange={(e) => setFilters({ ...filters, [key]: e.target.value })}
                  />
                </div>
              ))}
              <div className="col-md-2">
                <button className="btn btn-primary w-100" onClick={applyFilters}>Search</button>
              </div>
            </div>
          </div>
        </div>

        {/* Profile Cards */}
        <div className="row">
          {currentProfiles.map(profile => (
            <div key={profile.id} className="col-md-6 mb-4">
              <div className="card h-100 shadow-sm border-0" style={{ transition: "transform 0.3s" }}
                onMouseEnter={e => e.currentTarget.style.transform = "scale(1.02)"}
                onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}>
                <div className="card-body">
                  <div className="row">
                    <div className="col-4">
                      <img src={profile.image} className="img-fluid rounded" alt={profile.name} />
                    </div>
                    <div className="col-8">
                      <h5>{profile.name}</h5>
                      <p className="text-muted mb-1">{profile.age} yrs • {profile.location}</p>
                      <p className="text-muted mb-1">{profile.profession}</p>
                      <p className="text-muted mb-1">{profile.religion} • {profile.caste}</p>
                      <p className="text-muted mb-1">{profile.education}</p>
                      <p className="mb-2">{profile.bio}</p>
                      <div className="d-flex gap-2">
                        <button className="btn btn-outline-danger btn-sm" onClick={() => showInterest(profile.name)}>
                           Show Interest
                        </button>
                        <button className="btn btn-primary btn-sm" onClick={() => sendMessage(profile.name)}>
                           Message
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <nav>
            <ul className="pagination justify-content-center">
              <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                <button className="page-link" onClick={() => setCurrentPage(currentPage - 1)}>Previous</button>
              </li>
              {[...Array(totalPages)].map((_, i) => (
                <li key={i} className={`page-item ${currentPage === i + 1 ? 'active' : ''}`}>
                  <button className="page-link" onClick={() => setCurrentPage(i + 1)}>{i + 1}</button>
                </li>
              ))}
              <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                <button className="page-link" onClick={() => setCurrentPage(currentPage + 1)}>Next</button>
              </li>
            </ul>
          </nav>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default BrowseProfiles;

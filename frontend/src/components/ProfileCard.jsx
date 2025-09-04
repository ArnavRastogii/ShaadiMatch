import React from 'react'

function ProfileCard() {
  return (
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
  )
}

export default ProfileCard
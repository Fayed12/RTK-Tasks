// react
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

// local
import { fetchUser } from "../redux/userThunk";
import "./UserPage.css";

function UserPage() {
  const userDetail = useSelector((state) => state.user.userDetails);
  const loading = useSelector((state) => state.user.loading);
  const error = useSelector((state) => state.user.error);
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="user-page">
      <header className="user-header">
        <div>
          <h1>User Detail</h1>
          <p className="subtitle">Full profile view (static)</p>
        </div>

        <div className="search">
          <input
            type="text"
            className="search-input"
            placeholder="Search by username"
            aria-label="Search by username"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <button
            type="button"
            className="search-btn"
            onClick={() => {
              dispatch(fetchUser(searchValue));
              setSearchValue("");
            }}
          >
            Search
          </button>
        </div>
      </header>
      {error === null ? (
        !loading ? (
          userDetail ? (
            <main className="user-card">
              <section className="basic">
                <div className="avatar">
                  {userDetail.name
                    .split(" ")
                    .map((n) => n[0])
                    .slice(0, 2)
                    .join("")}
                </div>
                <div className="basic-info">
                  <h2 className="name">
                    {userDetail.name}{" "}
                    <span className="username">@{userDetail.username}</span>
                  </h2>
                  <p className="email">{userDetail.email}</p>
                  <p className="website">
                    <a
                      href={`http://${userDetail.website}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {userDetail.website}
                    </a>
                  </p>
                </div>
              </section>

              <section className="details-grid">
                <div className="card-section">
                  <h3>Contact</h3>
                  <p>
                    <strong>Phone:</strong> {userDetail.phone}
                  </p>
                  <p>
                    <strong>Email:</strong> {userDetail.email}
                  </p>
                  <p>
                    <strong>Website:</strong> {userDetail.website}
                  </p>
                </div>

                <div className="card-section">
                  <h3>Address</h3>
                  <p>
                    {userDetail.address.street}, {userDetail.address.suite}
                  </p>
                  <p>
                    {userDetail.address.city} — {userDetail.address.zipcode}
                  </p>
                  <p>
                    <strong>Geo:</strong> lat {userDetail.address.geo.lat}, lng{" "}
                    {userDetail.address.geo.lng}
                  </p>
                </div>

                <div className="card-section">
                  <h3>Company</h3>
                  <p className="company-name">{userDetail.company.name}</p>
                  <p className="catch">{userDetail.company.catchPhrase}</p>
                  <p className="bs">{userDetail.company.bs}</p>
                </div>
              </section>

              <footer className="meta">
                <small>User ID: {userDetail.id}</small>
              </footer>
            </main>
          ) : (
            <main className="details-grid">
              <div className="card-section">
                <p>No data to display</p>
              </div>
            </main>
          )
        ) : (
          <main className="details-grid">
            <div className="card-section">
              <p>loading.....</p>
            </div>
          </main>
        )
      ) : (
        <main className="details-grid">
          <div className="card-section">
            <p>{error}</p>
          </div>
        </main>
      )}
    </div>
  );
}

export default UserPage;

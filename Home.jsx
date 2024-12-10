import { useState } from "react";
import "../styles/home.css";
import WhyChooseUs from "./WhyChooseUs";

const Home = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    mobile: "",
    city: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("http://localhost:4000/api/submit-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      setLoading(false);

      if (!response.ok) {
        alert(result.message || "Submission failed.");
        return;
      }

      alert(result.message);
      setFormData({ fullname: "", email: "", mobile: "", city: "" });
    } catch (error) {
      setLoading(false);
      console.error("Error:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <section>
      <div className="container">
        <div className="home-container">
          <div className="left-section">
            <h2>
              Consultation, <br />
              Design, <br />& Marketing
            </h2>
          </div>
          <div className="right-section">
            <form onSubmit={handleSubmit}>
              <h1>Get a Free Consultation</h1>
              <hr />
              <div className="form-group">
                <label htmlFor="fullname">Full Name</label>
                <input
                  type="text"
                  id="fullname"
                  placeholder="Enter your full name"
                  value={formData.fullname}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="mobile">Mobile Number</label>
                <input
                  type="tel"
                  id="mobile"
                  placeholder="Enter your mobile number"
                  value={formData.mobile}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="city">City</label>
                <input
                  type="text"
                  id="city"
                  placeholder="Enter your city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <button type="submit" disabled={loading}>
                  {loading ? "Submitting..." : "Submit"}
                </button>
              </div>
            </form>
          </div>
        </div>
        <WhyChooseUs />
      </div>
    </section>
  );
};

export default Home;

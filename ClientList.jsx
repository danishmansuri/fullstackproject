import { useEffect, useState } from "react";
import axios from "axios";
import Footer from "./Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules"; // Updated import path for modules
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../styles/clientList.css"; // Custom styles

const ClientList = () => {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/api/clients/all"
        );
        setClients(response.data); // Set the fetched clients to state
        setLoading(false);
      } catch (error) {
        console.error("Error fetching clients:", error);
        setLoading(false);
      }
    };

    fetchClients();
  }, []); // Empty dependency array ensures it runs only once

  if (loading) {
    return <p>Loading clients...</p>;
  }

  return (
    <section>
      <div className="client-slider">
        <h2>Happy Clients</h2>
        {clients.length === 0 ? (
          <p>No clients to display.</p>
        ) : (
          <Swiper
            modules={[Navigation, Pagination]} // Enable navigation and pagination
            spaceBetween={30}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            loop={true}
            className="client-swiper"
          >
            {clients.map((client) => (
              <SwiperSlide key={client._id} className="client-slide">
                <div className="client-card">
                  {client.image && (
                    <div className="client-image-container">
                      <img
                        src={`http://localhost:4000${client.image}`}
                        alt={client.name}
                        className="client-image"
                      />
                    </div>
                  )}
                  <div className="client-info">
                    <h3>{client.name}</h3>
                    <p>{client.description}</p>
                    <p>
                      <strong>{client.designation}</strong>
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
        <Footer />
      </div>
    </section>
  );
};

export default ClientList;

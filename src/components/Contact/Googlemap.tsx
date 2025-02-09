import React from "react";

const GoogleMap: React.FC = () => {
  return (
    <div className="w-full h-[500px]">
      <iframe
        title="Google Map Location"
        width="100%"
        height="100%"
        style={{ border: 0, borderRadius: "8px" }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.2128586835536!2d77.6579591750443!3d13.037626687317168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae112fbcc737eb%3A0x1746782d15eaa7d7!2s47%2C%20Sri%20Sai%20Shine%2C%202nd%20Floor%2C%20Peddanna%20Reddy%20Layout%2C%201st%20Cross%20Rd%2C%20behind%20LIVING%20WALLS%2C%20Horamavu%2C%20Bengaluru%2C%20Karnataka%20560043!5e0!3m2!1sen!2sin!4v1707471028083!5m2!1sen!2sin"
      ></iframe>
    </div>
  );
};

export default GoogleMap;

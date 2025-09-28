// components/Footer.js
export default function Footer() {
  return (
    <footer
      style={{
        textAlign: "center",
        padding: "1.5rem",
        fontSize: "0.9rem",
        color: "#6B5B4D",
        background: "#EFE7DD",
        borderRadius: "1rem",
        marginTop: "2rem",
      }}
    >
      <div style={{ marginBottom: "0.5rem" }}>
        Hours: Mon–Fri 7:30am–4pm | Sat by appointment | Sun Closed
      </div>
      <div style={{ marginBottom: "0.5rem" }}>
        📍 4395 Dardanelle Dr, Orlando, FL 32808
      </div>
      <div style={{ marginBottom: "0.75rem" }}>
        <a
          href="https://www.google.com/maps/dir/?api=1&destination=4395+Dardanelle+Dr,+Orlando,+FL+32808"
          target="_blank"
          style={{
            background: "#C0392B",
            color: "#fff",
            padding: "0.5rem 1rem",
            borderRadius: "0.5rem",
            textDecoration: "none",
          }}
        >
          Get Directions
        </a>
      </div>
      <div style={{ marginBottom: "0.5rem" }}>
        📞 (407) 294-7004 | ✉️ accessrackinc@cfl.rr.com
      </div>
      <div style={{ marginBottom: "0.5rem" }}>
        <a
          href="https://www.instagram.com/access_rack_solutions/"
          target="_blank"
        >
          Instagram
        </a>{" "}
        |{" "}
        <a href="https://www.facebook.com/AccessRackInc" target="_blank">
          Facebook
        </a>
      </div>
      <div>© {new Date().getFullYear()} Access Rack Solutions Inc.</div>
    </footer>
  );
}

export default function Footer() {
  return (
    <footer style={{ textAlign: "center", padding: "1.5rem", fontSize: "0.9rem", color: "#6B5B4D", background: "#EFE7DD", borderRadius: "1rem", marginTop: "2rem" }}>
      <div>📍 4395 Dardanelle Dr, Orlando, FL 32808</div>
      <div>📞 (407) 294-7004 | ✉️ accessrackinc@cfl.rr.com</div>
      <div>© {new Date().getFullYear()} Access Rack Solutions Inc.</div>
    </footer>
  );
}



const Footer = () => {
  return (
    <footer className="bg-neutral text-neutral-content w-full">
      <div className="footer flex flex-col sm:flex-row p-10 sm:p-20 max-w-[1300px] mx-auto justify-between items-center text-center bg-neutral w-full">
        <nav>
          <h2 className="font-bold text-2xl">CS — Ticket System</h2>
          <br />
          <p className="text-[#A1A1AA]">Lorem Ipsum is simply dummy text of the<br /> printing and typesetting industry. Lorem<br /> Ipsum has been the industry's standard<br /> dummy text ever since the 1500s, when an<br /> unknown printer took a galley of type and<br /> scrambled it to make a type specimen book.</p>
        </nav>
  <nav>
          <h6 className="font-bold">COMPANY</h6>
          <br />
    <a className="link link-hover text-[#A1A1AA]">About Us</a>
    <a className="link link-hover text-[#A1A1AA]">Our Mission</a>
    <a className="link link-hover text-[#A1A1AA]">Contact Saled</a>
  </nav>
  <nav>
          <h6 className="font-bold">Services</h6>
          <br />
    <a className="link link-hover text-[#A1A1AA]">Products & Services</a>
    <a className="link link-hover text-[#A1A1AA]">Customer Stories</a>
    <a className="link link-hover text-[#A1A1AA]">Download Apps</a>
  </nav>
  <nav>
          <h6 className="font-bold">Information</h6>
          <br />
    <a className="link link-hover text-[#A1A1AA]">Privacy Policy</a>
    <a className="link link-hover text-[#A1A1AA]">Terms & Conditions</a>
    <a className="link link-hover text-[#A1A1AA]">Join Us</a>
        </nav>
   <nav>
          <h6 className="font-bold">Social Links</h6>
          <br />
          <a className="link link-hover text-[#A1A1AA] flex gap-3"><img src="https://i.ibb.co.com/cKMgXX72/Group.png" alt="" />@CS — Ticket System</a>
          <a className="link link-hover text-[#A1A1AA] flex gap-3"><img src="https://i.ibb.co.com/spS6Z66j/fi-145807.png" alt="" />@CS — Ticket System</a>
          <a className="link link-hover text-[#A1A1AA] flex gap-3"><img src="https://i.ibb.co.com/bj9pBCbf/fi-5968764.png" alt="" />@CS — Ticket System</a>
          <a className="link link-hover text-[#A1A1AA] flex gap-3"><img src="https://i.ibb.co.com/NdnJxS8M/fi-6244710.png" alt="" />support@cst.com</a>
        </nav>
      </div>
      <div className="-translate-10 text-center ">© 2025 CS — Ticket System. All rights reserved.</div>
      </footer>
  );
};

export default Footer;
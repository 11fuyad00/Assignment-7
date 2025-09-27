

const Navber = () => {
  return (
    <div>
     <div className="navbar bg-base-100 shadow-sm ">
        <div  className="navbar max-w-[1200px] mx-auto">
            <div className="flex-1">
    <a className="btn btn-ghost text-2xl text-[#130B2D] font-bold">CS — Ticket System</a>
  </div>
  <div className="flex items-center">
        <div className='hidden md:flex items-center gap-8 mr-10 yext-[#131313] list-none'>
          <li>Home</li>
        <li>FAQ</li>
        <li>Changelog</li>
        <li>Blog</li>
        <li>Download</li>
        <li>Contact</li>
            </div>
            <button className="px-6 py-3 text-white font-semibold rounded-lg bg-gradient-to-r from-[#632EE3] to-[#9F62F2]">+ New Ticket</button>
  </div>
</div>
</div>
    </div>
  );
};

export default Navber;
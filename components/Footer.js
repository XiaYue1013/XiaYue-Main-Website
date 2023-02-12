import React from "react";

const Footer = () => {

  return (
    <>
    <footer className="bg-slate-900 text-white py-4 inset-x-0 item-center justify-center flex">
      <div className="container mx-auto">
        <p className="text-center">
          © {new Date().getFullYear()} Copyright by XiaYue
        </p>
      </div>
    </footer>
    </>
  )
};

export default Footer;

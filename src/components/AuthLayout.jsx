// import React from "react";
import logoChill from "../assets/logo-chill.png";
function AuthLayout(props) {
  return (
    <>
      <main
        className="min-h-screen bg-cover bg-center flex items-center justify-center p-4"
        style={{ backgroundImage: `url('${props.bgImage}')` }}
      >
        <section className="bg-[#181A1CD6]/84 border border-gray-800 p-8 rounded-2xl shadow-2xl w-full max-w-sm text-center text-white">
          {/* LOGO CHILL */}
          <div className="flex items-center justify-center mb-4">
            <img
              src={logoChill}
              alt="Logo Chill"
              className="h-10 w-auto object-contain"
            />
          </div>
          {/* Judul Halaman */}
          <h2 className="text-xl font-bold mb-1">{props.judul}</h2>
          <p className="text-xs text-gray-400 mb-6">{props.subJudul}</p>

          {/* Tempat Input Form */}
          {props.children}
        </section>
      </main>
    </>
  );
}
export default AuthLayout;

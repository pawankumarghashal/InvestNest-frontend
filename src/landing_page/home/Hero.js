import React from "react";

function Hero() {
  return (
    <div className="container p-5 mb-4">
      <div className="row text-center">
        <img src="Media\image\homeHero.png" alt="Hero image" className="mb-5 p-5" />

        <h1 className="mt-5">Invest in everything</h1>
        <p>
          Online platform to invest in stocks, derivatives, mutual funds, ETFs,
          bonds, and more.
        </p>
        <button
          className="p-2 btn btn-primary fs-5 mb-5"
          style={{ width: "25%", margin: "0 auto" }}
        >
          Signup Now{" "}
        </button>
      </div>
    </div>
  );
}

export default Hero;

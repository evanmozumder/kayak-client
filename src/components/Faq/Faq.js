import React from "react";

const Faq = () => {
  return (
    <div className="container my-5">
      <h2>Frequently asked questions</h2>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              How does KAYAK find such low flight prices?
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              KAYAK processes over 2 billion flight queries annually and
              displays results from hundreds of airlines and third party sites,
              allowing it to find a variety of flight prices and options. It
              also displays results from 2M+ properties along with rental cars,
              vacation packages, activities and millions of verified reviews so
              users can see as many available travel options as possible.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              How do I find the best flight deals on KAYAK?
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              A simple flight search at https://www.kayak.com/flights scans for
              prices on hundreds of travel sites in seconds. We gather flight
              deals from across the web and put them in one place. Then on the
              search results page you can use various filters to compare options
              for the same flight and easily choose the best flight deal from
              all of the deals coming straight from the travel sites to your
              screen, with no extra fee from KAYAK.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Does KAYAK query more flight providers than competitors?
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Yes, KAYAK has access to more data and information than online
              travel agencies and consistently outperforms the competition in
              accuracy, globally.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;

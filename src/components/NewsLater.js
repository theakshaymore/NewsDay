import React from "react";

function NewsLater() {
  return (
    <div>
      <section className="bg-dark text-light p-5 newslater mx-1 rounded-3">
        <div className="container">
          <div className="d-md-flex justify-content-between align-items-center">
            <h3 className="mb-3 mb-md-0">Sign Up For Our Newsletter</h3>

            <div className="input-group news-input">
              <input
                type="text"
                class="form-control"
                placeholder="Enter Email"
              />
              <button className="btn btn-lg button" type="button">
                Submit
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default NewsLater;

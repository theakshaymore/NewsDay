import React from "react";

function Showcase() {
  return (
    <div>
      <section class="text-dark p-5 p-lg-0 pt-lg-5 text-sm-start showcase">
        <div class="container">
          <div class="d-sm-flex align-items-center justify-content-between">
            <div>
              <h2>
                Apple is reportedly developing an iPad Pro with wireless
                charging
              </h2>
              <p class="lead">
                <small>
                  Apple may release an iPad Pro with wireless charging
                  capabilities sometime next year. According to Bloomberg's Mark
                  Gurman, the tech giant is currently working on a new iPad Pro
                  and a new iPad mini. …
                </small>{" "}
              </p>
              <button
                class="btn btn-lg button"
                data-bs-toggle="modal"
                data-bs-target="#enroll"
              >
                <a href="https://www.engadget.com/apple-ipad-pro-with-wireless-charging-bloomberg-report-080021362.html">
                  Read Full Article
                </a>
              </button>
            </div>
            <img
              class="img-fluid w-50 d-none d-sm-block my-img"
              src="https://s.yimg.com/os/creatr-uploaded-images/2021-06/16e7e130-c4fc-11eb-a7de-0518f1bf9460"
              alt=""
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Showcase;

import React from "react";

function NewsItem({ item, loading }) {
  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <div>
      <section className="px-3 py-3">
        <div className="py-3">
          <div className="card">
            <div className="row ">
              <div className="col-md-4">
                <img src={item.image} class="w-100 card-img" alt="img" />
              </div>
              <div className="col-md-8 px-3">
                <div className="card-block px-3">
                  <h5 className="card-title fs-4">{item.title}</h5>
                  <p className="card-text mycard-text">
                    <small>{item.description}</small>
                  </p>
                  <a href={item.url} className="btn button">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default NewsItem;

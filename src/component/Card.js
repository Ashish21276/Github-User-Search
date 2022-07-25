import React from "react";

function Card(props) {
  const getYear = (s) => {
    return (
      new Date(s).toString().substring(4, 8) +
      new Date(s).toString().substring(10, 15)
    );
  };
  return (
    <>
      <div className="container">
        <div className="row align-items-center flex-row-reverse">
          <div className="col-lg-6">
            <div className="about-text text-center go-to">
              <h3 className="dark-color">{props.data.name}</h3>
              <div className="text-center">
                <p>{props.data.bio}</p>
              </div>
              <div className="row about-list text-center">
                <div className="col-md-6">
                  <div className="media">
                    <label>Location</label>
                    <p>{props.data.location === null ? "NULL" : props.data.location}</p>
                  </div>
                  <div className="media">
                    <label> Following</label>
                    <p>{props.data.following}</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="media">
                    <label>E-mail</label>
                    <p>{props.data.email ? props.data.email : "NULL"}</p>
                  </div>
                  <div className="media">
                    <label>Twitter</label>
                    <p>
                      {props.data.twitter_username === null
                        ? "NULL"
                        : props.data.twitter_username}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-avatar">
              <img
                src={props.data.avatar_url}
                className="rounded-circle p-3"
                title=""
                alt="DP"
              />
            </div>
          </div>
        </div>
        <div className="counter">
          <div className="row">
            <div className="col-6 col-lg-3">
              <div className="count-props text-center">
                <h6 className="count h2" props-to="500" props-speed="500">
                  {props.data.followers}
                </h6>
                <p className="m-0px font-w-600">Followers</p>
              </div>
            </div>
            <div className="col-6 col-lg-3">
              <div className="count-props text-center">
                <h6 className="count h2" props-to="150" props-speed="150">
                  {props.data.public_repos}
                </h6>
                <p className="m-0px font-w-600">Public Repos</p>
              </div>
            </div>
            <div className="col-6 col-lg-3">
              <div className="count-props text-center">
                <h6 className="count h2" props-to="850" props-speed="850">
                  {getYear(props.data.created_at)}
                </h6>
                <p className="m-0px font-w-600">Created At</p>
              </div>
            </div>
            <div className="col-6 col-lg-3">
              <div className="count-props text-center">
                <h6 className="count h2" props-to="190" props-speed="190">
                  {getYear(props.data.updated_at)}
                </h6>
                <p className="m-0px font-w-600">Updated At</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;

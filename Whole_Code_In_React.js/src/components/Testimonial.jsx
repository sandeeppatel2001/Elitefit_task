import { useEffect, useState } from "react";

const Testimonial = () => {
  const [isShown3, setIsShown3] = useState(false);
  const [isShown4, setIsShown4] = useState(false);
  const [isShown1, setIsShown1] = useState(false);
  const [isShown2, setIsShown2] = useState(false);

  const [testimonials, setTestimonials] = useState([]);
  const shown = [isShown1, isShown2, isShown3, isShown4];
  const setShown = [setIsShown1, setIsShown2, setIsShown3, setIsShown4];

  useEffect(() => {
    fetch("/V2")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json(); // Corrected to response.json() to parse the data
      })
      .then((data) => {
        // this.testimonials = data.testimonials;
        setTestimonials(data.testimonials);
        console.log("Fetched testimonials:==", data.testimonials);
      })
      .catch((error) => {
        if (error) {
          console.log("errppooo", error);
        }
      });
  }, []);
  return (
    <div className="oxygen mb-5 bg-light">
      <div
        className="h2  d-flex flex-row testmonialhead justify-content-center fw-bold mt-5 pb-5"
        style={{ letterSpacing: "8px", fontWeight: "bold" }}
      >
        {" "}
        TESTIMONIALS
      </div>
      <div className="row" style={{ marginRight: "30px", marginLeft: "50px" }}>
        {testimonials.map((test, i) => {
          return (
            <>
              <div key={test.name} className="col-md-4 col-sm-6 col-lg-3 py-4">
                {
                  <div className="apibox position-relative d-flex flex-column justify-content-center align-items-center">
                    {shown[i] ? (
                      <div
                        className="apiimg rounded-5 w-100 h-100"
                        onMouseLeave={() => {
                          setShown[i](!shown[i]);
                        }}
                      >
                        <img
                          src="/img/black.png"
                          alt="Your Image"
                          className="img-fluid border rounded-5"
                          style={{ objectFit: "cover", width: "100%" }}
                        />
                        <div className="apitext position-absolute top-50 start-50 w-75 translate-middle text-white">
                          {`${test.message}`}
                        </div>
                      </div>
                    ) : (
                      <div
                        className="apiimg rounded-5"
                        onMouseEnter={() => {
                          setShown[i](!shown[i]);
                        }}
                        onMouseLeave={() => {
                          setShown[i](!shown[i]);
                        }}
                      >
                        <img
                          src={test.image}
                          alt="Your Image"
                          className="img-fluid border rounded-5"
                          style={{ objectFit: "cover", width: "100%" }}
                        />
                        <div className="position-absolute top-50 start-50 translate-middle text-center text-white h2">
                          {" "}
                          {test.name}{" "}
                        </div>
                      </div>
                    )}
                  </div>
                }
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Testimonial;

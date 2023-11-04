import Hrscroll from "./Hrscroll";

const About = () => {
  return (
    <div className="aboutbox row">
      <div className="flex-column justify-content-center align-items-center col-lg-6 ">
        <Hrscroll />
      </div>
      <div className="col-lg-6 my-auto">
        <div className="justify-content-center d-flex flex-column ">
          <div className="mx-auto w-75 mt-3">
            <h1 className="mx-auto text-space oxygen abouthead ">
              {" "}
              ABOUT PISTONS
            </h1>
            <div className="mt-2 m-auto description abouttext ">
              Established in 1897, our beloved fountain pen haven, 'PISTONS,'
              has been a haven for pen enthusiasts for generations. With a
              century-long dedication to fine writing instruments, we've bridged
              tradition and modernity, offering a curated selection of vintage
              and contemporary fountain pens. Our little shop, nestled in the
              heart of town, continues to inspire a love for the art of writing,
              connecting past and present through the timeless elegance of ink
              on paper.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

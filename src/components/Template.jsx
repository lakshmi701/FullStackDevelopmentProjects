import img from './fsd.jpg';

function Template() {
  return (
    <div className="container">
      <div className="header">
        <div className="heading">
          KL University
          <div className="menu">
            <span> Home</span>
            <span> About</span>
            <span> Portfolio</span>
            <span> Login</span>
          </div>
        </div>
      </div>

      <div className="content">
        <div className="plogo">
          <img src={img} alt="No image" height={100} width={100} />
          <div className="pdesc">
            <p>pname</p>
            <p>Rs:50000</p>
            <p>2025</p>
          </div>
        </div>
      </div>

      <div className="Footer">
        <div className="slogos"></div>
      </div>
    </div>
  );
}

export default Template;

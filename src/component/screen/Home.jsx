import "./Home.css"

function Home() {
  return (
    <>
      <div>
        <div className="cardHome">
          <div className="card-body">
            <span className="homeCompDive">
              WELCOME TO MY 1<sup>st</sup> REACT APP
            </span>
            <br />
            <img
              src="https://media-exp1.licdn.com/dms/image/C5603AQHYuakWc3Hc1Q/profile-displayphoto-shrink_800_800/0/1637557082620?e=1669248000&v=beta&t=h1cZjZv4nHXym6Y6LrQ6gqlhwcLZ91BbFVMDY8FFFhE"
              alt=""
              className="card_imgView"
            />
            <div className="myself">Hi, it's me Vishnu Sonkar</div>
            <div className="myInfo">
              “I’m a software developer who has been working in the field for
              more than years. I’m passionate about creating quality products
              that meet all of the customer’s needs, and I love learning new
              techniques and technologies that allow me to make that happen.”
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;

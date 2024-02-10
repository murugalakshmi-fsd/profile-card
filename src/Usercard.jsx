import PropTypes from 'prop-types'
const userdata = [
  {
    name: "Angela",
    city: "paris",
    description: "Frontend developer",
    skills: ["Html", "Css", "React", "Node", "Javascript", "Mongodb"],
    image: "images/img1.png",
    online: true
  },
  {
    name: "aarathya",
    city: "coimbatore",
    description: "data science",
    skills: ["Html", "Css", "React", "Node", "Javascript", "Mongodb", "typing"],
    image: "images/img3.png",
    online: true
  },
  {
    name: "ayazhi",
    city: "madurai",
    description: "cyber safety",
    skills: ["Html", "Css", "React", "Node", "Javascript", "Mongodb"],
    image: "images/img4.png",
    online: false
  }]
function User(props) {
  return <div className="card-container">
    <span className={props.online ? "pro online" : "pro offline"}>{props.online ? "ONLINE" : "OFFLINE"}</span>
    <img className="img" src={props.image} alt="user" />
    <h3>{props.name}</h3>
    <h3>{props.city}</h3>
    <p>{props.description}</p>
    <div className="buttons">
      <button className="primary">Message</button>
      <button className="outline">Following</button>
    </div>
    <div className="skills">
      <h6>Skills:</h6>
      <ul>
        {props.skills.map((skill, index) => (<li key={index}>{skill}</li>))}
      </ul>
    </div>
  </div>
}
const Usercard = () => {
  return (
    <>
      {
        userdata.map((user, index) => (
          <User key={index} name={user.name} city={user.city} description={user.description} image={user.image} online={user.online} skills={user.skills}></User>
        ))
      }
    </>
  )
};
export default Usercard
User.propTypes={
  name:PropTypes.string.isRequired,
  city:PropTypes.string.isRequired,
  description:PropTypes.string.isRequired,
  image:PropTypes.string.isRequired,
  skills:PropTypes.arrayOf(PropTypes.string).isRequired,
  online:PropTypes.bool.isRequired
}

//<User names="Angela" city="Newyork" description="Frontend developer" skills={["UI/UX","Javascript","Css","React","Node"]} online={false} profile="images/img1.png"></User>
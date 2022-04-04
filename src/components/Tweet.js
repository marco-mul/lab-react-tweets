import Action from "./Actions";
import Message from "./Message";
import ProfileImage from "./ProfileImage";
import TimeStamp from "./Timestamp";
import User from "./User";

function Tweet(props) {

  return (
    <div className="tweet">
      <ProfileImage image={props.tweet.user.image} />

      <div className="body">
        <div className="top">       
            <User name={props.tweet.user.name}/>
            <User handle={props.tweet.user.handle}/>
            <TimeStamp timestamp={props.tweet.timestamp} />
        </div>

        <Message message= {props.tweet.message}/>
        <Action />
        
      </div>

      <i class="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;

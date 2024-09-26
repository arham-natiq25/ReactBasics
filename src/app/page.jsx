import Check from "./Check";
import Fetch from "./Fetch";
import First from "./First";
import New from "./New";
import Practice from "./Pratice";
import Time from "./Time";
export default function Home() {
  return (
    
    <div>
      <Time/>
      <Fetch/>
      <Check/>
      <New/>
      <First/>
      <Practice name="arham" practice="first"/> 
      <h3>Hello</h3>
      <h4>Hi I am arham</h4>
      <span>
        this is my first react app
      </span>
      <hr/>
    </div>
  );
}

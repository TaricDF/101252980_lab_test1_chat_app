import Topbar from "../../components/topbar/Topbar";
import "./home.css"

export default function Home() {
  return (
    <>
      <Topbar />
      <div className="homeContainer">
        Welcome to my chatroom :)
      </div>
    </>
  );
}

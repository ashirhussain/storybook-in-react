import "./styles.css";
import { Button } from "../src/stories/Button";

export default function App() {
  return (
    <div className="App">
      <Button label="story button1" size="large" primary="true"></Button>
      <Button label="story button2" size="small"></Button>
    </div>
  );
}

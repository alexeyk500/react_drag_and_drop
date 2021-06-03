import classes from './App.module.css'
import SortCards from "./SortCards/SortCards";

function App() {
  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <SortCards />
      </div>
    </div>
  );
}

export default App;

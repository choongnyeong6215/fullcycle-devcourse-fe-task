import ToDoList from "./components/ToDoList";
import Clock from "./components/Clock";
import MyWeather from "./components/MyWeather";

const App = () => {
  return (
    <div className="max-w-md mx-auto my-20 px-10">
      <Clock />
      <MyWeather todayWeather="☀️" />
      <ToDoList />
    </div>
  );
};

export default App;

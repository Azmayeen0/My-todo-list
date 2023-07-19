import './App.css';
import Header from "./myComponents/Header";
import { Todos } from "./myComponents/Todos";
import { Footer } from "./myComponents/Footer";

function App() {
  const onDelete = ()=>{
    console.log("I am onDelete of todo" , todos);
  }
  let todos = [
    {
      Sno: 1,
      title: "Drink 5L Water Daily",
      Desc: "Keep yourself hydrated"
    },{
      Sno: 2,
      title: "Go to the gym and eat healthy foods",
      Desc: "Need to workout Daily"
    },
    {
      Sno: 3,
      title: "Study ",
      Desc: "Learn new skills "
    }
  ]
  return (
    <>
      <Header title="My Todos-List" searchBar={true} />
      <Todos todos={todos} onDelete={ onDelete }/>
      <Footer />
    </>
  );
}

export default App;

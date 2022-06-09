import { SearchBar } from "../src/components/SearchBar";
import { TodoList } from "../src/components/TodoList";
import { Apifetch } from "./components/Apifetch";
import TableList from "./components/TableList";
import Boot from "./components/Boot";
import SpeedMeter from "./components/SpeedMeter";
import { Api } from "./components/Api";
import { Api2 } from "./components/Api2";
import { Todotask } from "./components/Todotask";
import { TodoCard } from "./todoCard/TodoCard";
import { ApiCard } from "./Api/ApiCard";
import { TodoList1 } from "./todoCard/TodolList1";
import { CounterFile } from "./Counter/CounterFile";
import "./components/common.css";
import { TodolistTask } from "./todoCard/TodolistTask";
import { Chat } from "./ChatBox/Chat";
function App() {
  return (
    <div className="main">
      {/* <Boot /> */}
      {/* <Api2 /> */}
      {/* <Api /> */}
      {/* <SearchBar /> */}
      {/* <TodoList /> */}
      {/* <TableList /> */}
      {/* <SpeedMeter /> */}

      {/* <Apifetch /> */}
      {/* <Todotask /> */}
      {/* <TodoCard /> */}
      {/* <ApiCard /> */}
      {/* <TodoList1 /> */}
      {/* <CounterFile /> */}
      <TodolistTask/>
      {/* <Chat/> */}
    </div>
  );
}

export default App;

import "./App.css";
import ClassComponent from "./components/ClassComponent";
import FunctionalComponent from "./components/FunctionalComponent";
import WithProp from "./components/WithProp";
import WithChildrenProp from "./components/WithChildrenProp";
import WithState from "./components/WithState";
import StateMergeExample from "./components/StateMergeExample";
import IncrementExample from "./components/IncrementExample";
import Parent from "./components/PassingDataUp/Parent";
import ConditionalRendering from "./components/ConditionalRendering";
import ListRendering from "./components/ListRendering";
import CssModulesExample from "./components/CssModulesExample/CssModulesExample";
function App() {
  return (
    <div className="App">
      <FunctionalComponent></FunctionalComponent>
      <ClassComponent></ClassComponent>
      <WithProp name={"Ali"}></WithProp>
      <WithChildrenProp>{"Ahmed"}</WithChildrenProp>
      <WithState></WithState>
      <StateMergeExample></StateMergeExample>
      <IncrementExample></IncrementExample>
      <Parent></Parent>
      <ConditionalRendering></ConditionalRendering>
      <ListRendering></ListRendering>
      <CssModulesExample></CssModulesExample>
    </div>
  );
}

export default App;

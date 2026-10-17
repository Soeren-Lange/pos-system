import NumpadAndInputField from "./components/NumpadAndInputField.tsx";
import './App.css'
import {PriceField} from "./components/PriceField.tsx";
import {ArticleListService} from "./domain/ArticleListService.tsx";

function App() {

  return (
  <div className="h-full my-1">
    <PriceField/>
    <ArticleListService/>
    <NumpadAndInputField/>

 </div>
  )

}

export default App;
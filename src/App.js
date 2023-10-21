import "./App.css";
import { data } from "./constants";

function App() {
  console.log(data)
  return (
    <div className="playoff-table">
      <div className="playoff-table-content">

        {/* Round 1 start */}
        <div className="playoff-table-tour">
          <div className="playoff-table-group">
            <div className="playoff-table-pair playoff-table-pair-style">
              <div className="playoff-table-left-player">Иванов</div>
              <div className="playoff-table-right-player">Сидоров</div>
            </div>
            <div className="playoff-table-pair playoff-table-pair-style">
              <div className="playoff-table-left-player">Иванов</div>
              <div className="playoff-table-right-player">Сидоров</div>
            </div>
          </div>
          <div className="playoff-table-group">
            <div className="playoff-table-pair playoff-table-pair-style">
              <div className="playoff-table-left-player">Иванов</div>
              <div className="playoff-table-right-player">Сидоров</div>
            </div>
            <div className="playoff-table-pair playoff-table-pair-style">
              <div className="playoff-table-left-player">Иванов</div>
              <div className="playoff-table-right-player">Сидоров</div>
            </div>
          </div>
          <div className="playoff-table-group">
            <div className="playoff-table-pair playoff-table-pair-style">
              <div className="playoff-table-left-player">Иванов</div>
              <div className="playoff-table-right-player">Сидоров</div>
            </div>
            <div className="playoff-table-pair playoff-table-pair-style">
              <div className="playoff-table-left-player">Иванов</div>
              <div className="playoff-table-right-player">Сидоров</div>
            </div>
          </div>
          <div className="playoff-table-group">
            <div className="playoff-table-pair playoff-table-pair-style">
              <div className="playoff-table-left-player">Иванов</div>
              <div className="playoff-table-right-player">Сидоров</div>
            </div>
            <div className="playoff-table-pair playoff-table-pair-style">
              <div className="playoff-table-left-player">Иванов</div>
              <div className="playoff-table-right-player">Сидоров</div>
            </div>
          </div>
        </div>
        {/* Round 2 start */}
        <div className="playoff-table-tour">
          <div className="playoff-table-group">
            <div className="playoff-table-pair playoff-table-pair-style">
              <div className="playoff-table-left-player">Иванов</div>
              <div className="playoff-table-right-player">Сидоров</div>
            </div>
            <div className="playoff-table-pair playoff-table-pair-style">
              <div className="playoff-table-left-player">Иванов</div>
              <div className="playoff-table-right-player">Сидоров</div>
            </div>
          </div>
          <div className="playoff-table-group">
            <div className="playoff-table-pair playoff-table-pair-style">
              <div className="playoff-table-left-player">Иванов</div>
              <div className="playoff-table-right-player">Сидоров</div>
            </div>
            <div className="playoff-table-pair playoff-table-pair-style">
              <div className="playoff-table-left-player">Иванов</div>
              <div className="playoff-table-right-player">Сидоров</div>
            </div>
          </div>
        </div>
        {/* Round 3 start */}
        <div className="playoff-table-tour">
          <div className="playoff-table-group">
            <div className="playoff-table-pair playoff-table-pair-style">
              <div className="playoff-table-left-player">Иванов</div>
              <div className="playoff-table-right-player">Сидоров</div>
            </div>
            <div className="playoff-table-pair playoff-table-pair-style">
              <div className="playoff-table-left-player">Иванов</div>
              <div className="playoff-table-right-player">Сидоров</div>
            </div>
          </div>
        </div>
        {/* Round 4 start */}
        <div className="playoff-table-tour">
          <div className="playoff-table-group">
            <div className="playoff-table-pair playoff-table-pair-style">
              <div className="playoff-table-left-player">Иванов</div>
              <div className="playoff-table-right-player">Сидоров</div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

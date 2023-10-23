import "./App.css";
import { data2,data } from "./constants";

function App() {
  // Helper function to get player names or placeholders
  function getName(player) {
    if (player === "bye") return "Bye";
    if (player === "tbd") return "TBD";
    return `Player ${player}`;
  }
  let temp = [];
  return (
    <>
      <div>with Dynamic Data</div>
      <div className="playoff-table">
        <div className="playoff-table-content">
          {Object.keys(data).map((roundKey, roundIndex) => (
            <div key={roundKey} className="playoff-table-tour">
              {data[roundKey].map((pair, index) => {
                if(temp.length===2) temp =[]
                temp.push(pair);
                if ((index !== 0 && index % 2 !== 0) || roundIndex ===Object.keys(data).length-1) {
                  return (
                    <div key={index} className={"playoff-table-group"}>
                      {temp.map((pairItem, subIndex) => (
                        <div key= {subIndex} className="playoff-table-pair playoff-table-pair-style">
                          <div className="playoff-table-left-player">
                            {getName(pairItem[0])}
                          </div>
                          <div className="playoff-table-right-player">
                            {getName(pairItem[1])}
                          </div>
                        </div>
                      ))}
                    </div>
                  );
                } else {
                  return null;
                }
              })}
            </div>
          ))}
        </div>
      </div>
      <div>With Static Data</div>
      <div className="playoff-table">
        <div className="playoff-table-content">
          {/* Round 1 start */}
          <div className="playoff-table-tour">
            <div className="playoff-table-group">
              <div className="playoff-table-pair playoff-table-pair-style">
                <div className="playoff-table-left-player">Иванов1</div>
                <div className="playoff-table-right-player">Сидоров</div>
              </div>
              <div className="playoff-table-pair playoff-table-pair-style">
                <div className="playoff-table-left-player">Иванов2</div>
                <div className="playoff-table-right-player">Сидоров</div>
              </div>
            </div>
            <div className="playoff-table-group">
              <div className="playoff-table-pair playoff-table-pair-style">
                <div className="playoff-table-left-player">Иванов3</div>
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
                <div className="playoff-table-left-player">Иванов5</div>
                <div className="playoff-table-right-player">Сидоров</div>
              </div>
              <div className="playoff-table-pair playoff-table-pair-style">
                <div className="playoff-table-left-player">Иванов6</div>
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
    </>
  );
}

export default App;

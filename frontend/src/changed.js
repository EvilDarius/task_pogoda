class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        viewCompleted: false,
        activeItem: {
          dateOfWeatherSummary: "",
          atmospherePressure: "",
          humidity: ""
        },
        weatherList: []
        };
    }
  
      async componentDidMount() {
        try {
          const res = await fetch('http://localhost:8000/api/weathers/');
          const weatherList = await res.json();
          this.setState({
            weatherList
          });
        } catch (e) {
          console.log(e);
      }
      }
      renderItems = () => {
        const { viewCompleted } = this.state;
        const newItems = this.state.weatherList.filter(
          item => item.completed === viewCompleted
        );
        return newItems.map(item => (
          <li 
            key={item.id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <span 
              className={`todo-title mr-2 ${
                this.state.viewCompleted ? "completed-weather" : ""
              }`}
              title={item.description}
              >
                {item.title}
              </span>
          </li>
        ));
      };
  
      render() {
        return (
          <main className="content">
          <div className="row">
            <div className="col-md-6 col-sm-10 mx-auto p-0">
              <div className="card p-3">
                <ul className="list-group list-group-flush">
                  {this.renderItems()}
                </ul>
              </div>
            </div>
          </div>
        </main>
        )
      }
    }
    
  export default App;
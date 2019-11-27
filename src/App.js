import React, {Component} from 'react'
import Run from './Run'
import NavBar from './NavBar'
import footer from './footer'
class App extends Component {
  render() {
    return(<div>
      hello react
      <Run/>
      <NavBar/>
      <footer/>
    </div>
    )
  }
}

export default App;
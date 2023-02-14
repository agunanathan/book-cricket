import React, { Component } from 'react'

export default class Teamview extends Component {
    constructor(props){
        super(props)
        this.state = {
            runs: props.initialRun,
            score: props.initialScore,
            name: props.teamName,
            status: props.status,
            outs: props.outs,
            message: props.message
        }
    }
  render() {
    
    return (
      <div>
        <h3> Team Name: {this.state.name} </h3>
        <h4> {this.state.message}</h4>
        <h4> Score: {this.state.score} </h4>
        <h4> Outs: {this.state.outs}</h4>
        <h4> Status: {this.state.status} </h4>

        <div>
            <button onClick={() => this.changeResult()} disabled={this.state.status} > Bat </button>
            <span> Runs: {this.state.runs}</span>
            <span> Score:{this.state.score}</span>
        </div>
      </div>
    )
  }
  changeResult() {
    var battingResult=Math.floor((Math.random() * 9) + 0);
    switch (battingResult) {
        case 0: //Out

            this.setState(prevState => {
                return { outs: prevState.outs + 1,
                runs: battingResult,
                message: "Bowled Out"
            }

            })
            break;
            case 1: // 1 Run
            this.setState(prevState => {
                return { score: prevState.score + 1,
                runs: battingResult,
                message: "1 Run"
            }
            })
            break;
            case 2: // 2 Runs
                this.setState(prevState => {
                    return { score: prevState.score + 2,
                    runs: battingResult,
                    message: "2 Runs"
                }
            })
            break;
            case 3: // 3 Runs
                this.setState(prevState => {
                    return { score: prevState.score + 3,
                    runs: battingResult,
                    message: "3 Runs"
                }
            })
            break;
            case 4: // Four!!
                this.setState(prevState => {
                    return { score: prevState.score + 4,
                    runs: battingResult,
                    message: "!! 4 Runs !!"    
                }
            })
            break;
            case 5: // Caught out
                this.setState(prevState => {
                    return { outs: prevState.outs + 1,
                    runs: battingResult - 5,
                    message: "Caught!"    
                }
            })
                if (this.state.outs>=2){
        this.setState(prevState => {
            return { status: !this.state.status,
            message: "All Out"}
        })
    }
            break;
            case 6: // Sixer
                this.setState(prevState => {
                    return { score: prevState.score + 6,
                    runs: battingResult,
                    message: "!!! 6 Runs !!!"
                }
            })
            break;
            case 7: // Wide
                this.setState(prevState => {
                    return { score: prevState.score + 1,
                    runs: battingResult - 6,
                    message: "Wide Ball - 1 Run"
                }
            })
            break;
            case 8: // Four!!
                this.setState(prevState => {
                    return { score: prevState.score + 4,
                    runs: battingResult - 4,
                    message: " 4 Runs !!!"
                }
            })
            break;
            case 9: // No Run
                this.setState(prevState => {
                    return { score: prevState.score + 0,
                    runs: battingResult - 9,
                    message: "No Run"
                }
            })
            break;
        default:
            break;
    }
/*
    if (this.state.outs>=2){
        this.setState(prevState => {
            return { status: !this.state.status,
            message: "All Out"}
        })
    } 
*/
    /*
    this.setState(prevState => {
        return { score: prevState.score + battingResult,
        runs: battingResult}
    })*/
}
}

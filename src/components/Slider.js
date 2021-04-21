import React from "react";
import { RangeStepInput } from "react-range-step-input";

const forceNumber = function (n) {
    n = Number(n);
    if (isNaN(n) || typeof n === "undefined") {
        n = 0;
    }
    return n;
};

class Slider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 2,
        };
    }

    render() {
        return (
            <div>
                <div className="slidecontainer">
                    <RangeStepInput
                        class="slider"
                        id="myRange"
                        min={1}
                        max={3}
                        value={this.state.value}
                        step={1}
                        onChange={this.onChange.bind(this)}
                    />
                    <div className="input-group-append">
                        <span className="input-group-text ml-2">
                            {this.state.value}
                        </span>
                    </div>
                </div>
                <div>
                    Difficulty level:{" "}
                    {(() => {
                        if (this.state.value === 1) {
                            return "easy";
                        } else if (this.state.value === 2) {
                            return "medium";
                        } else {
                            return "hard";
                        }
                    })()}
                </div>
            </div>
        );
    }
    onChange(e) {
        const newVal = forceNumber(e.target.value);
        this.setState({ value: newVal });
    }
}

export default Slider;

/* @flow */

import * as React from 'react';
import 'papercss/dist/paper.min.css';

type Props = {};

type State = {
  value: string,
  valute?: Array<Object>,
};

export default class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.fetchData = this.fetchData.bind(this);

    this.state = {
      value: '',
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  onChange: (SyntheticInputEvent<>) => void;

  onChange(e: SyntheticInputEvent<>) {
    this.setState({ value: e.target.value });
  }

  fetchData: () => void;

  fetchData() {
    fetch('https://www.cbr-xml-daily.ru/daily_json.js')
      .then(res => res.json())
      .then(data => {
        this.setState({ valute: data.Valute });
      });
  }

  render() {
    const { value } = this.state;

    return (
      <div>
        <div className="row flex-center">
          <div className="col col-6">
            <div className="row flex-center">
              <input
                type="text"
                placeholder="Enter the amount of your salary in rubles"
                onChange={this.onChange}
                value={value}
              />
            </div>
          </div>
        </div>
        <div className="row flex-center">
          <div className="col col-6">
            <div className="row flex-center">
              <button onClick={() => {}}>CALCULATE</button>
              <button onClick={() => {}}>IN DOLLARS</button>
              <button onClick={() => {}}>IN EURO</button>
              <button onClick={() => {}}>IN TENGE</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

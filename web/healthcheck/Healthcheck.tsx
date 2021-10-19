import React, {Component} from "react";

export class Healthcheck extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      health: ''
    };
  }

  async componentDidMount() {
    const healthResponse: Response = await fetch(`/healthcheck`);
    const health = (await healthResponse.json()).message;
    this.setState({
      isLoaded: true,
      health
    });
  }

  getMessage() {
    // @ts-ignore - they're there
    const { isLoaded, health } = this.state;
    if (isLoaded) {
      return health;
    }
    return 'Fetching Health'
  }

  render() {
    return <div>
      <p>{this.getMessage()}</p>
      </div>;
  }
}

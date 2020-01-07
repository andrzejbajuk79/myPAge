import React, { Component } from 'react';

const TITLES = [
  'Lubię czasami ucieć z miasta w góry albo do lasu',
  'Zawsze znajdę czas żeby obejrzec dobry film',
  '....... albo przeczytać dobrą książkę',
  'a tak poza tym  zwyczajny  czlowiek z malego miasteczka na wschodzie Wlodawa ',
  '..polecam rejony swoją drogą'
];

class Title extends Component {
  state = { titleIndex: 0, fadeIn: true };

  componentDidMount() {
    this.timeout = setTimeout(() => this.setState({ fadeIn: false }), 2000);
    this.animateTitles();
  }

  componentWillUnmount() {
    clearInterval(this.titleInterval);
    clearTimeout(this.timeout);
  }

  animateTitles = () => {
    this.titleInterval = setInterval(() => {
      const titleIndex = (this.state.titleIndex + 1) % TITLES.length;
      this.setState({ titleIndex, fadeIn: true });
      this.timeout = setTimeout(() => this.setState({ fadeIn: false }), 2000);
    }, 4000);
  }

  render() {
    const { fadeIn, titleIndex } = this.state;
    const title = TITLES[titleIndex];

    return (
      <p className={fadeIn ? 'title-fade-in' : 'title-fade-out'}>{title}</p>
    )
  }
}

export default Title;
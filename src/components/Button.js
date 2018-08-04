import React from 'react';

export default function Button(props) {
  /* state = {
    clickCounter: 0,
    currentTimestamp: new Date(),
  };

  handleClick = () => {
    this.setState((prevState) => {
     return { clickCounter: prevState.clickCounter + 1 };
    });
  };

  componentDidMount() {
   setInterval(() => {
     this.setState({ currentTimestamp: new Date() })
    }, 1000);
  } */
  /* onClick = (e) => {

  }; */
  return (
    <button
      type="button"
      {...props}
    >
      {
        props.label
      }
    </button>
  );
}

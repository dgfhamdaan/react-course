function Random() {
  let Number = Math.random() * 100;

  return <h1 style={{color: "purple"}}>Random number is: {Math.round(Number)}</h1>
}

export default Random;
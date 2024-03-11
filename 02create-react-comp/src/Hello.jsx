function Hello() {
  
  let  username = "dev";
  let fullName = () => {
    return 'dgf dev';
  }

  let Message = {
    Id: 456
  }


 return <p>MessageNo: {Message.Id} I am your AI {fullName()}
  </p>
}

export default Hello;
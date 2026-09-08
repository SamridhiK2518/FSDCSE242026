const container= document.getElementById('root');
console.log(container);
const root= ReactDOM.createRoot(container);
// const h2= React.createElement("h2", {style:{color:"red"}}, "Hello React");
// const h1= React.createElement("h1", {style:{color:"brown"}}, "ABESEC");
// const img= React.createElement('img', {src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6lxRsnU_Ue7RL38s6hDYQDseL2cRLZxd326fX5vllDQ&s=10', style: {height: '200px', width: '200px'}});

// const div= React.createElement('div',{style: {border: '2px solid black'}}, h1, h2, img);

const h21= <h2>Hello World</h2> //jsx
const h22= <h2>ABES Engineering College</h2>
const div= <div>{h21}{h22}</div>;

const wrapper= <div style={{border: '2px solid black', backgroundColor: 'salmon'}}>
    {div}
    <h2>Hey, Using JSX</h2>
    </div>

root.render(wrapper);

// import react from "react";
import './App.scss';
const RotatingText = ({ text = "", startAngle = 0, duration = 3}) => {
    let chars = text
        .split("")
        .map((item, i) => <span key={i} style={{"--i": i - startAngle}}>{item}</span>);

    return (
        <div
            className="container"
            style={{ "--duration": `${duration}s` }}
        >
            {chars}
        </div>
    )
}
const App = () => {
    return (
        <>
            <RotatingText text="Hamid" duraiton="1.75" startAngle={1}/>
            <RotatingText text="Yarali" duration="4.5" startAngle={5}/>
            <RotatingText text="Official" duration="3.5" startAngle={-1}/>
        </>
    );
};

export default App;



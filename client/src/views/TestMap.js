import React, {useState} from "react";
const TestMap = (props) => {
    const [height, setHeight] = useState(500);
    const [width, setWidth] = useState(1000);
    const [url, setUrl] = useState("https://c1.staticflickr.com/5/4052/4503898393_303cfbc9fd_b.jpg");
    const [alt, setAlt] = useState("generic");
    const handleOnClick = (e) => {
        e.preventDefault();
        console.log("You have clicked in the specified area")
    }

        return (
        <div>
            <img src={url} height={height} width={width} alt={alt} useMap="#workmap"/>
            <map id = "workmap" name="workmap">
                <area shape="poly" coords="50,47,56,454,257,357,254,139" alt="test" href="https://c1.staticflickr.com/5/4052/4503898393_303cfbc9fd_b.jpg" onClick={handleOnClick}/>
            </map>
        </div>
    )
}

export default TestMap
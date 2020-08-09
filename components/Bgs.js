import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { shapes } from "./contexts/shapes";

const Bgs = () => {
    const router = useRouter()

    const [styles, setStyle] = useState([]);
  

    // const shapes = shapes;
    const randNum = (min = 0, max = 100) => {
        return Math.round(Math.random() * (max - min) + min);
    }
    useEffect(() => {
        gernateStyles()
        // router.events.on('routeChangeStart', gernateStyles)
},[]);

const gernateStyles = () =>{
    const styles = []
    for (let index = 0; index < shapes.length; index++) {
        styles.push({
            width: `${randNum(50, 350)}px`
            , top: `${randNum()}%`,
            right: `${randNum()}%`
        })
        
    }
    setStyle(styles);
}


    return (
        <div className="bgs">
            {shapes.map((shape, i) => (
                <div
                    key={i}
                    dangerouslySetInnerHTML={{ __html: shape }}
                    style={styles[i]}
                    className="bg" />
            ))}
        </div>
    );
}

export default Bgs;
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { SHAPES } from "./contexts/shapes";

const Bgs = () => {
    const router = useRouter()
    const [styles, setStyle] = useState([]);
    const [shapes, setShapes] = useState([...SHAPES]);

    const randNum = (min = 0, max = 100) => {
        return Math.round(Math.random() * (max - min) + min);
    }

    useEffect(() => {
        gernateStyles();
        setShapes([shuffle(SHAPES),shuffle(SHAPES),shuffle(SHAPES)].flat())
        router.events.on('routeChangeComplete', gernateStyles)
    }, []);

    function shuffle(array) {
        return array.sort(function(){ 
          return .5 - Math.random(); 
        });
      }

    const gernateStyles = () => {
        const styles = [];
        const tops = shuffle([...new Array(50)].map((x,i)=> (i*4)));
        const rights = shuffle([...new Array(48)].map((x,i)=> (i*2)));
        for (let index = 0; index < shapes.length; index++) {
            let top =tops[0]
            tops.shift()
            let right =rights[0]
            rights.shift()
            styles.push({
                width: `25em`,
                // top: `${top}%`,
                // right: `${right}%`,
                transition: `all ${randNum(0.1, 0.7)}s`,
                transform:` translate(${randNum(-100,100)}px, ${randNum(-100,100)}px) scale(${randNum(0.5,1.5)})`
            })
        }
        setStyle(styles);
    }


    return (
        <div className="bgs">
            { shapes.map((shape, i) => (
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
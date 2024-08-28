import {useEffect, useState} from "react";
import { useLocation } from "react-router-dom";
import Spinner from './Spinner';
const Scroll = () => {
    const {pathname} = useLocation();
    useEffect(()=>{
        window.scrollTo(0, 0)
      }, [pathname]);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate a loading process
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }, []);
     return (
         <div className="App">
             {loading ? (
                 <Spinner />
             ) : null}
         </div>
     );
}

export default Scroll
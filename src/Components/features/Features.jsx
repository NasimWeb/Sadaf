import React , {useContext} from 'react'
import './Features.css'
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { darkmoodContext } from '../../Contexts/darkmood';



export default function Features() {

   
   const {darkMood , setDarkMood} = useContext(darkmoodContext)


  return (
    <>
       <section className="features">
        <section className="featuresItem">
            <section className="featuresTitle">Revanue</section>
            <section className="featuresContainer">
                <span className="featureMoney">$2,415</span>
                <span className="featureRate">
                -11.4 <ArrowDownwardIcon className="featureIcon negative" />
                </span>
            </section>
            <span className={`featureSub ${darkMood ? 'dark-mode' : ''}`}>Compared to last month</span>
        </section>

        <section className="featuresItem">
            <section className="featuresTitle">Sales</section>
            <section className="featuresContainer">
                <span className="featureMoney">$2,415</span>
                <span className="featureRate">
                -1.4 <ArrowDownwardIcon className="featureIcon negative" />
                </span>
            </section>
            <span className={`featureSub ${darkMood ? 'dark-mode' : ''} `}>Compared to last month</span>
        </section>

        <section className="featuresItem">
            <section className="featuresTitle">Cost</section>
            <section className="featuresContainer">
                <span className="featureMoney">$2,415</span>
                <span className="featureRate negative">
                +2.4 <ArrowUpwardIcon className="featureIcon" />
                </span>
            </section>
            <span className={`featureSub ${darkMood ? 'dark-mode' : ''}`}>Compared to last month</span>
        </section>
       </section>
    
    </>
  )
}

import { useSelector } from 'react-redux'
import Card from '../Card'
import { motion, AnimatePresence } from 'framer-motion';
import './displayItem.css'
export default function DisplayItems(){
     const dummyData = useSelector(state=>state.filters.values)
    return (<>
<motion.div layout className="itemsContainer" >
        <AnimatePresence>
        {dummyData.map((card,ind)=>{
            return (<Card key={ind} title={card.title} price={card.price} image={card.image}/>)
        })}
        </AnimatePresence>
    </motion.div></>)
}

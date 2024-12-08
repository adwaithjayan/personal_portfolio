import { useMotionValue,motion } from "framer-motion"

const Achievement = ({title,number,icon}) => {
    const num = useMotionValue(0);

    const count = (amount)=>{
        let i =0;
        const updateCount =()=>{
            let timeOut ;
            if(i<=amount){
                num.set(i++);
                timeOut = setTimeout(updateCount, 0);
            }else{
                clearTimeout(timeOut);
            };
        };
        updateCount();
    };

  return (
    <div className='flex items-end gap-x-3 '>
        <span className='text-4xl text-gray-300 lg:text-2xl'>{icon}</span>
        <h1 className='flex flex-col gap-y-2'>
            <motion.span className='text-2xl  lg:text-xl font-light text-yellow-500' whileInView={()=>count(number)} viewport={{once:true}}>{num}</motion.span>
            <span className='text-sm dark:text-white transition-colors tracking-wide text-gray-500' >{title}</span>
        </h1>
    </div>
  )
}

export default Achievement
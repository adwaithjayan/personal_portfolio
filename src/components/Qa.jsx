
import { motion } from "framer-motion"

import Heading from "./sub/Heading"
import Qusetion from "./sub/Qusetion"
import { questions } from "@/assets"

const Qa = () => {
  return (
    <div className="py-20" id="questions">
        <Heading title={'Questions & Answers'}/>
        <div>
            <ul className="flex flex-col gap-y-3">
                {questions.map((data,i)=>
                <Qusetion question={data.question} answer={data.answer} i={i} key={`id-${i}`}/>
            )}
            </ul>
        </div>
    </div>
  )
}

export default Qa
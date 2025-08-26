import { motion } from "framer-motion";
import { BorderBeam } from "./magicui/border-beam";

export function QABeam() {
  return (
    <div className="relative w-fit h-12 overflow-hidden  rounded-md bg-white dark:bg-black/50 flex justify-center mx-auto md:mx-0">
      <div className="flex items-center justify-start h-full px-6">
        <motion.p
          className="text-xl font-bold tracking-widest text-gray-900 dark:text-gray-100"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.4 }}
        >
          QA Engineer Trainee
        </motion.p>
      </div>


      <BorderBeam
        duration={6}
        size={280} 
        className="absolute inset-0 from-transparent via-red-500 to-transparent dark:via-red-400 rounded-xl pointer-events-none"
      />
      <BorderBeam
        duration={6}
        delay={3}
        size={280}
        className="absolute inset-0 from-transparent via-blue-500 to-transparent dark:via-blue-400 rounded-xl pointer-events-none"
      />
    </div>
  );
}
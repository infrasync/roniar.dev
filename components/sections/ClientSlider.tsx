import { useEffect, useState } from "react"
import Image from "next/image"
import { AnimatePresence, motion } from "framer-motion"

const InfiniteSlider = ({ items }: { items: any }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length)
    }, 1500) // Ganti slide setiap 3 detik

    return () => clearInterval(interval)
  }, [items.length])

  return (
    <div className="slider-container relative overflow-hidden">
      <motion.div
        className="slider-track flex flex-row gap-4"
        initial={{ x: 0 }}
        animate={{ x: -currentIndex * 100 + "%" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <AnimatePresence>
          {items.map((item: any, index: any) => (
            <motion.div
              key={index}
              className="slider-item"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {/* Content of each slider item */}
              <Image src={item.image} alt={item.alt} className="h-auto w-16" />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}

export default InfiniteSlider

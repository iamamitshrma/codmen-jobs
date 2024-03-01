
'use client'
import React from 'react'
import { motion } from "framer-motion"
import Sidebar from '@/components/Sidebar'

export default function RootTemplate({ children }: { children: React.ReactNode }) {
    return <motion.div
        initial={{ scaleY: 0.5, opacity: 0 }}
        animate={{ scaleY: 1, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.55 }}
    >
        {children}
    </motion.div>
}
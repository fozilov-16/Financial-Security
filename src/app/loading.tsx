"use client"

import React from "react"

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-[#0b0c2b] to-[#1c1f4a] px-4">
        
      <p className="relative text-white text-[20px] sm:text-[40px] font-nico animate-pulse z-10">
        ...loading
      </p>

    </div>
  )
}
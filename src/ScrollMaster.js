import React, { useState, useEffect } from 'react'
import Layout from './Layout'
import { useScrollPosition } from '@n8tb1t/use-scroll-position' // use this to detect viewport scroll and intercept in project section

export default function ScrollMaster(){
  const [percentScrolled, setPercentScrolled] = useState(0)
  const [scrollPos, setScrollPos] = useState(0)
  const [totalHeight, setTotalHeight] = useState(document.body.scrollHeight)
  const [windowHeight, setWindowHeight] = useState(window.innerHeight)

  useScrollPosition(({ prevPos, currPos }) => {
    console.log(currPos.y)
    setScrollPos(currPos.y)
  }, null, null, false, 100)
  useEffect(() => {
    setPercentScrolled(-1*(scrollPos/document.body.scrollHeight))
    console.log(document.body.scrollHeight)
    console.log(percentScrolled)
  },[scrollPos])

  const handleResize = () => {
      setTotalHeight(document.body.scrollHeight)
      setWindowHeight(window.innerHeight)
    }
  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  },[])

  return <Layout scrollPercentage={percentScrolled} totalHeight={totalHeight} windowHeight={windowHeight}/>
}

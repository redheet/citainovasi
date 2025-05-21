import React from 'react'
import FlipBook from '@/components/Section/PdfView/Flipbook';

export default function Pdf() {
    const pages = [
        "/images/guidebook/1.png",
        "/images/guidebook/2.png",
        "/images/guidebook/3.png",
        "/images/guidebook/4.png",
        "/images/guidebook/5.png",
        "/images/guidebook/6.png",
        "/images/guidebook/7.png",
        "/images/guidebook/8.png",
        "/images/guidebook/9.png",
        "/images/guidebook/10.png",
        "/images/guidebook/11.png",
        "/images/guidebook/12.png",
        "/images/guidebook/15.png",
        "/images/guidebook/16.png",
        "/images/guidebook/17.png",
        "/images/guidebook/18.png",
        "/images/guidebook/19.png",
        
        // ... more images
      ];
  return (
    <div>
      <FlipBook 
        pages={pages}
        title="Guide Book GSIC"
        endTitle="END Guide Book"
        width={90}
        height={100}
      />
    </div>
  )
}
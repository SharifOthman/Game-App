import React from 'react'
import './GamingLibrary.css'
import {GamingLibraryCard,SectionHeader,SectionWrapper} from '../../components/index'
import GamingLibraryData from '../../Data/GamingLibrary'
const GamingLibrary = () => {
    const cards=GamingLibraryData.map(card =>{
        return <GamingLibraryCard key={card.id} image={card.image} title={card.title} hours_played={card.hours_played} category={card.category} date_added={card.date_added} download={card.download} />
       })
  return (
    <SectionWrapper>
      <SectionHeader>Gaming Library</SectionHeader>
       <div className='gaming-library-cards'>
            {cards}
       </div>
    </SectionWrapper>
  )
}

export default GamingLibrary
import React, { useState } from 'react'

export default function DnDMenu() {
  const [playlist, setPlaylist] = useState([
    '1111111111',
    '2222222222',
    '3333333333',
    '4444444444',
    '5555555555',
  ])
  const [incomingSongList, setSongList] = useState(['one', 'two', 'three'])
  const [currentIdx, setCurrentIdx] = useState()

  function handleOnDrag(e, item) {
    e.dataTransfer.setData('menuItem', item)
  }

  function onDragOver(e) {
    e.preventDefault()
  }

  function handleDragEnter(e, index) {
    // console.log('enter:', index)
    setCurrentIdx(index)
    e.target.className = 'dropTarget'
  }

  function handleDragLeave(e) {
    e.target.className = 'menuItem'
  }

  function onDrop(e) {
    e.target.className = 'menuItem'
    const item = e.dataTransfer.getData('menuItem')
    // console.log('Drop item:', item)
    //remove old thing first
    let temp = playlist.filter((x) => x != item)
    temp.splice(currentIdx, 0, item)
    setPlaylist(temp)
  }

  function oldMenuItemCreator(name) {
    return (
      <div
        className='menuItem'
        draggable
        onDragStart={(e) => handleOnDrag(e, name)}
        key={name}
      >
        {name}
      </div>
    )
  }

  return (
    <>
      <div className='menuParent'>
        <div>{incomingSongList.map((x) => oldMenuItemCreator(x))}</div>
        <div className='menuHolder' onDrop={onDrop} onDragOver={onDragOver}>
          {playlist.map((item, index) => {
            return (
              <div
                className='menuItem'
                draggable
                onDragStart={(e) => handleOnDrag(e, item)}
                onDragEnter={(e) => handleDragEnter(e, index)}
                onDragLeave={(e) => handleDragLeave(e)}
                // onDragEnd={dragEnd}
                key={index}
              >
                {item}
              </div>
            )
          })}
          This is where the new/final order will be and be re-arrangeable
        </div>
      </div>
     
    </>
  )
}

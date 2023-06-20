import React from 'react'

function FunctionClick() {

    function clickHandler() {
        console.log('button clicked using functional component')
    }

  return (
    <div>
      <button onClick={clickHandler}>Click</button>
    </div>
  )
}

export default FunctionClick

import React, {Component, useState, useEffect, useRef, useMemo} from "react";


const render = {
  count1: 0,
  count2: 0,
}

// React.memo - грубо говоря это функция высшего порядка, позволяет
// разделять свои данные с другими компонентами (братьями этого компонента).
// Рендер данных для каждого из них будет отдельным

export default React.memo(function Count( {id, value} ) {
  console.warn(`Count ${id} render: ${++render[`count${id}`] }`);

  return (
    <div>
      <h1 className="cyan">Тек - {value}</h1>
    </div>
  )
})







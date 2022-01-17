const today = new Date()
const dd = today.getDate();
const mm = today.getMonth();
const yyyy = today.getFullYear();


const n = new Date(yyyy, mm+1, 1)
n.setMonth(n.getMonth() + 1)

export function getDates(location) { 
   
  const defaultDateArrive = new Date(yyyy, mm, dd)
  defaultDateArrive.setDate(defaultDateArrive.getDate() + 1)

  const defaultDateDeparture = new Date(yyyy, mm, dd)
  defaultDateDeparture.setDate(defaultDateDeparture.getDate() + 2) 

  if (location === 'defaultArrive') {
    return defaultDateArrive.toISOString().slice(0,10)
  } else if (location === 'defaultDeparture') {
    return defaultDateDeparture.toISOString().slice(0,10)
  } 
}

export const minMaxDates = {
  min: new Date().toISOString().slice(0,10),
  max: n.toISOString().slice(0,10),
}
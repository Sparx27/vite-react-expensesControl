
export const toCurrency = (quantity) => {
  return quantity.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD'
  })
}

export const generateID = () => {
  return Date.now().toString(36) + Math.random().toString(36).substring(2)
}

export const generateDate = (date) => {
  const newDate = new Date(date)
  const config = {
    year: 'numeric',
    month: 'long',
    day: '2-digit'
  }

  return newDate.toDateString('en-US', config)
}
import React from 'react'

export default function Price({price,locale,currency}) {
    const formatPrice = () =>
    new Intl.NumberFormat(locale, {
        style: 'currency',
        currency: currency,
        }).format(price);

  return (
    <span>{formatPrice()}</span>
  )
}

Price.defaultProps = {
    local: 'en-US',
    currency: 'USD',
  };
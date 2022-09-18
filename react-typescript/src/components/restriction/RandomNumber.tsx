import React from 'react'

// Prop restriction

type RandomNumberType = {
    value: number
}
type PositiveNumberType = RandomNumberType & {
    isPositive: boolean
    isNegative?: never
    isZero?: never
}

type NegativeNumberType = RandomNumberType & {
    isNegative: boolean
    isPositive?: never
    isZero?: never
}
type ZeroType = RandomNumberType & {
    isZero: boolean
    isPositive?: never
    isNegative?: never
}

type RandomNumberProps = PositiveNumberType | NegativeNumberType | ZeroType

function RandomNumber({ value, isPositive, isNegative, isZero }: RandomNumberProps) {
    return (
        <div>
            {value} {isPositive && 'positive'}{isNegative && 'negative'}
            {' '}
            {isZero && 'zero'}

        </div>
    )
}

export default RandomNumber
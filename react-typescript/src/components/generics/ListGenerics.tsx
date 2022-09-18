import React from 'react'

type ListProps<T> = {
    items: T[]
    onClick: (value: T) => void
}

// function ListGenerics<T extends {}>({ items, onClick }: ListProps<T>) {

// function ListGenerics<T extends { id: number }>({ items, onClick }: ListProps<T>) { // restricting item to have id property

// function ListGenerics<T extends string | number>({ items, onClick }: ListProps<T>) { --> we can define which type can be come in the props by writing types ahead of extends  keyword


function ListGenerics<T extends { id: number, first: string, last: string }>({ items, onClick }: ListProps<T>) {

    return (
        <div>
            <h2>List of items</h2>
            {items.map((item, index) => {
                return (
                    // <div key={index} onClick={() => onClick(item)}>
                    <div key={item.id} onClick={() => onClick(item)}>
                        First name - {item.first} || Last name - {item.last}
                    </div>
                )
            })}
        </div>
    )
}


export default ListGenerics
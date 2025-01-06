import { useState } from 'react'
import { AddCategory, GifGrid } from './components'

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['Yellowston']);

    const onAddCategory = (categorie) => {
        if (categories.includes(categorie)) return
        setCategories([categorie, ...categories])
    }
    return (
        <>
            <h1>
                GifExpertApp
            </h1>

                <AddCategory
                    onNewCategory={value => onAddCategory(value)}
                />
                {/* <button onClick={onAddCategory}>Agregar</button> */}


            {
                categories.map((category) =>
                (
                    <GifGrid key={category} category={category} />
                )
                )
            }
        </>
    )
}
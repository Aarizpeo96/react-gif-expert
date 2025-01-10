import { render, screen } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";


describe('Prueba de componente GifExperApp', () => {
    test('should first', () => {
        render(<GifExpertApp />)
        screen.debug()
    })
})
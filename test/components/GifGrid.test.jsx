import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs')

describe('Pruebas en el componente <GifGrid/>', () => {
    const category = 'RDR2';
    test('Debe de mostrar el loading inicialmemnte', () => {

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        })

        render(<GifGrid category={category} />);
        expect(screen.getByText('Cargando...'))
        expect(screen.getByText(category))
    });

    test('Debe de mostrar items cuando se carga las imagenes, mediante el useFetchGifs', () => {

        const gifs = [
            {
                id: "123",
                title: "Alexiz",
                url: "https://arizpe/a.jpg"
            },
            {
                id: "456",
                title: "Israel",
                url: "https://arizpe/b.jpg"
            },

        ]

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        });
        render(<GifGrid category={category} />);
        expect(screen.getAllByRole('img').length).toBe(2)
        screen.debug()

    })
})
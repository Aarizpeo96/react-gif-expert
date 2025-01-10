import { render, screen } from "@testing-library/react"
import { GifItem } from "../../src/components/GifItem"

describe('Pruebas con snapshot', () => {
    const title = 'RDR 2';
    const url = 'https://imagen/rdr2.jpg';
    test('Debe de hacer match con el snapshot', () => {

        const { container } = render(<GifItem title={title} url={url} />);

        expect(container).toMatchSnapshot();
    });

    test('Debe mostrar la imagen con el URL y el ALT indicado', () => {
        render(<GifItem title={title} url={url} />);
        const { src, alt } = screen.getByRole('img')
        expect(src).toBe(url);
        expect(alt).toBe(title);

    });

    test('Debe de mostrar el titulo en el componente', () => {
        render(<GifItem title={title} url={url} />);
        expect(screen.getByText(title)).toBeTruthy();
    })
})
import { getGifs } from '../../src/helpers/getGifs'
describe('Pruebas en getGifs', () => {
    test('debe de retornar un arreglo de gifs, con la estructura correcta', async () => {
        const gifs = await getGifs('RDR 2');
        expect(gifs.length).toBeGreaterThan(0);
        expect(gifs[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String)

        })
        // console.log(gifs)
    })
})
import cloudinary from 'cloudinary';

import { fileUpload } from '../../helpers/fileUpload';

cloudinary.config({
  cloud_name: 'dliwhrdin',
  api_key: '934142494971472',
  api_secret: '2YMb50fKLmylwpRsmAv0B2tQ2Ok',
});

describe('Pruebas en fileUpload', () => {
  test('debe de cargar un archivo y retornar el URL', async () => {
    const resp = await fetch(
      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/PNG_transparency_demonstration_2.png/300px-PNG_transparency_demonstration_2.png'
    );
    const blob = await resp.blob();

    const file = new File([blob], 'foto.png');
    const url = await fileUpload(file);

    expect(typeof url).toBe('string');

    //Borrar imagen por ID
    const segments = url.split('/');
    const imageId = segments[segments.length - 1].replace('.png', '');

    await cloudinary.v2.api.delete_resources(imageId);
  });

  test('debe de retornar un error', async () => {
    const file = new File([], 'foto.png');
    const url = await fileUpload(file);

    expect(url).toBe(null);
  });
});

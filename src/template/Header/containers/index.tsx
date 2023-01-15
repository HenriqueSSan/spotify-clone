import { Actions } from './_Actions';
import { Navigation } from './_Navigation';

function Containers() {
  console.log('Renderizando');

  return {
    Navigation,
    Actions,
  };
}

export default Containers();

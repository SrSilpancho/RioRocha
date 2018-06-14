import axios from 'axios';

import { url } from '../lib/backend';

class Resources {
 saveInformation(datas) {
   axios.post(url('/api/v1/marcadores'),datas);
 }
}

export default Resources;

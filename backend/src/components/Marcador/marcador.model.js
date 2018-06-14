import mongoose from 'mongoose';

import marcadorSchema from './marcador.schema';

export default mongoose.model('marcadores', marcadorSchema);

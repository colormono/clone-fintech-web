import { setupWorker } from 'msw';
import { handlers as coincapHandlers } from './resolvers/coincap';

export const worker = setupWorker(...coincapHandlers);

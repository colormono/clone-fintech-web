import { setupServer } from 'msw/node';
import { handlers as coincapHandlers } from './resolvers/coincap';

export const server = setupServer(...coincapHandlers);

import { z } from 'zod';

export const TechsSchema = z.object({
  status: z.string().min(1, 'O nível é obrigatório.'),
});

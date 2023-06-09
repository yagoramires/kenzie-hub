import { z } from 'zod';

export const TechsSchema = z.object({
  title: z.string().min(1, 'O nome da tecnologia é obrigatório.'),
  status: z.string().min(1, 'O nível é obrigatório.'),
});

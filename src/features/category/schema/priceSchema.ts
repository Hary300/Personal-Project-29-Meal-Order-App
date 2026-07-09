import z from 'zod';

export const priceSchema = z
  .object({
    minPrice: z.number().min(0).optional(),
    maxPrice: z.number().min(0).optional(),
  })
  .refine(
    ({ minPrice, maxPrice }) =>
      minPrice === undefined || maxPrice === undefined || maxPrice >= minPrice,
    {
      message: 'Maximum price must be greater than or equal to minimum price.',
      path: ['maxPrice'],
    }
  );

export type PriceSchema = z.infer<typeof priceSchema>;

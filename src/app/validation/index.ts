import { z } from 'zod';

const phoneRegex = /^(\+420|\+421)\s?\d{3}\s?\d{3}\s?\d{3}$/;

export const contributionSchema = z
  .object({
    // Step 1
    donationType: z.enum(['foundation', 'shelter']),
    shelterId: z.number().optional(),
    amount: z
      .number()
      .positive({ message: 'Zadajte sumu, ktorou chcete prispieť.' }),

    // Step 2
    firstName: z
      .string()
      .min(2, 'Meno musí mať aspoň 2 znaky.')
      .max(20, 'Meno môže mať maximálne 20 znakov.')
      .optional()
      .or(z.literal('')),
    lastName: z
      .string()
      .min(2, 'Priezvisko musí mať aspoň 2 znaky.')
      .max(30, 'Priezvisko môže mať maximálne 30 znakov.'),
    email: z.email({ message: 'Zadajte platnú e-mailovú adresu.' }),
    phone: z.string().regex(phoneRegex, {
      message: 'Zadajte platné slovenské alebo české číslo.',
    }),

    // Step 3
    consent: z.boolean().refine((value) => value === true, {
      message: 'Musíte súhlasiť so spracovaním osobných údajov.',
    }),
  })
  .refine(
    (data) => {
      if (data.donationType === 'shelter') {
        return data.shelterId !== undefined;
      }
      return true;
    },
    {
      message: 'Vyberte útulok.',
      path: ['shelterId'],
    },
  );

export type ContributionData = z.infer<typeof contributionSchema>;

import { z } from 'zod'

export const livroSchema = z.object({
    titulo: z.string({ error: "Título é obrigatório." })
             .min(2, "Título deve ter pelo menos 2 caracteres.")
             .max(100, "Título deve ter no máximo 100 caracteres."),

    autor: z.string({ error: "Autor é obrigatório." })
            .min(2, "Autor deve ter pelo menos 2 caracteres.")
            .max(100, "Autor deve ter no máximo 100 caracteres."),

    ano: z.number({ error: "Ano deve ser um número." })
          .int("Ano deve ser um número inteiro.")
          .min(1000, "Ano inválido.")
          .max(new Date().getFullYear(), `Ano não pode ser maior que ${new Date().getFullYear()}.`)
          .optional()
})

export const livroUpdateSchema = livroSchema.partial()
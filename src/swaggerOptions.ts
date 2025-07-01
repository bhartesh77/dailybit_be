// swaggerOptions.ts
export const swaggerOptions = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'DailyBit API',
        version: '1.0.0',
        description: 'API for DailyBit',
      },
      servers: [
        {
          url: 'http://localhost:4000',
        },
      ],
    },
    apis: ['./src/routes/*.route.ts'],
  };
  
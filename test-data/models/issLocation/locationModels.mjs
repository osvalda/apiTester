export const issSchema = {
    title: 'iss location schema v1.0',

    type: 'object',
    required: ['timestamp', 'iss_position', 'message'],
    properties: {
        timestamp: {
            type: 'number',
            minimum: 100000
        },
        iss_position: {
            type: 'object',
            required: ['latitude', 'longitude'],
            properties: {
                latitude: {
                    type: 'string',
                    minLength: 3
                },
                longitude: {
                    type: 'string',
                    minLength: 3
                }
            }
        },
        message: {
            type: 'string',
            minLength: 3
        }
    }
}
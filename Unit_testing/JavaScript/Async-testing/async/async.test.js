import { expect, it } from 'vitest';

import { generateToken } from './async';

it('should generate a token value', (done) => {
    const testUserEmail = 'test@test.com';

    generateToken(testUserEmail, (error, token) => {
        // expect(token).toBeDefined();
        // expect(token).toBe(2);
        try {
            expect(token).toBeDefined();
            // expect(token).toBe(2);
            done();
        } catch (error) {
            done(error);
        }
        done();
    })
})
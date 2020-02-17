import supertest from 'supertest'
import app from '../../__test__/server'

describe('GET /values', () => {
    it('try success request', async () => {
      await supertest(app)
        .get('/value')
        .expect(200)
    })
})

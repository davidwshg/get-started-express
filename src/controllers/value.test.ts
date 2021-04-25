import request from 'supertest'
import app from '../app'

describe('GET /values', () => {
  it('Should return status 200', async () => {
    const response = await request(app).get('/values')
    expect(response.status).toBe(200)
  })

  it('Should return status 200', async () => {
    const response = await request(app).get('/values/1')
    expect(response.status).toBe(200)
  })

  it('Should return status 404', async () => {
    const response = await request(app).get('/values/4')
    expect(response.status).toBe(404)
  })
})

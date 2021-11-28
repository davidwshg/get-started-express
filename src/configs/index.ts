export const configs = {
  env: (<'develop' | 'test' | undefined>process.env.NODE_ENV) || 'develop',
  port: process.env.PORT || '5000'
}

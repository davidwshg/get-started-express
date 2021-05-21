export const env: 'develop' | 'test' = (<'develop' | 'test' | undefined>process.env.NODE_ENV) || 'develop'

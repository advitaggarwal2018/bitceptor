interface RateLimitEntry {
    count: number
    resetTime: number
}

const store = new Map<string, RateLimitEntry>()

setInterval(() => {
  const now = Date.now()
  for (const [key, entry] of store.entries()) {
    if (entry.resetTime < now) {
      store.delete(key)
    }
  }
}, 5 * 60 * 1000)

export const ratelimit = {
  limit: async (identifier: string) => {
    const now = Date.now()
    const windowMs = 60 * 1000 // 60 seconds
    const maxRequests = 3

    const entry = store.get(identifier)

    if (!entry || entry.resetTime < now) {
      // New window
      store.set(identifier, {
        count: 1,
        resetTime: now + windowMs,
      })
      return { success: true }
    }

    if (entry.count >= maxRequests) {
      return { success: false }
    }

    entry.count++
    return { success: true }
  },
}
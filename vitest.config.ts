import { defineConfig } from 'vitest/config'
import { Window } from 'happy-dom'

export default defineConfig({
  test: {
    environment: 'happy-dom'
  },
  define: {
    global: {
      window: Window.prototype
    }
  }
})

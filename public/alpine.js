import Alpine from 'alpinejs'
window.Alpine = Alpine
document.addEventListener('alpine:init', () => {
  console.log('Alpine started')
  window.Alpine.data('calculatorData', () => {
    return {
      count: 8000,
    }
  })
})
Alpine.start()

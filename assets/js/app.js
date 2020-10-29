/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', {{'../assets/js/particles.json' | relative_url}}, function() {
  console.log('callback - particles.js config loaded');
});
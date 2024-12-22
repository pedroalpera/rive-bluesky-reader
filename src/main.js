// This is the High level JS runtime for Rive
// https://rive.app/community/doc/web-js/docvlgbnS1mp

const riveInstance = new rive.Rive({
  src: "helloworld.riv",
  canvas: document.getElementById("canvas"),
  autoplay: true,
  artboard: "Artboard",
  stateMachines: "State Machine 1",

  onLoad: () => {
    riveInstance.resizeDrawingSurfaceToCanvas();

    async function fetchRSSFeed(url) {
      try {
          const response = await fetch(url);
          if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
          }
          const rssText = await response.text();
          console.log(rssText); // Output raw XML text
      } catch (error) {
          console.error('Error fetching RSS feed:', error);
      }
  }
  
  // Example RSS feed URL
  const rssUrl = 'https://bsky.app/profile/did:plc:i5wttwj4azeu2oprybwxf46t/rss';
  fetchRSSFeed(rssUrl);
    
  },
});

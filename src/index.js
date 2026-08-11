// Cloudflare Workers script — serves static assets and handles root routing
export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const path = url.pathname;

    // Serve index.html at root
    if (path === "/" || path === "") {
      return env.ASSETS.fetch(new Request(new URL("/index.html", request.url), request));
    }

    // All other paths serve from the assets directory
    return env.ASSETS.fetch(request);
  }
};
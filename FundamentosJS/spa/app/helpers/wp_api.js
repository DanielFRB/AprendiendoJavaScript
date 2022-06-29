const NAME = "malvestida",
  DOMAIN = `https://${NAME}.com`,
  SITE = `${DOMAIN}/wp-json`,
  API_WP = `${SITE}/wp/v2`,
  POSTS = `${API_WP}/posts?_embed`,
  POST = `${API_WP}/posts`,
  SEARCH = `${API_WP}/search?_embed&search=`,
  CATEGORIES = `${API_WP}/categories`;

export default {
  NAME : NAME,
  DOMAIN : DOMAIN,
  SITE : SITE,
  API_WP : API_WP,
  POSTS : POSTS,
  POST : POST,
  CATEGORIES : CATEGORIES,
  SEARCH : SEARCH
}

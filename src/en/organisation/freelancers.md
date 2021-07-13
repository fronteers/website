---
## this file is a liquid file, so we could setup pagination correctly and use liquid in this file. Also check the permalink, which conditionally adds bits to the URL per generated paginated page.
layout: layouts/freelancers-home.liquid
permalink: "/{{ page.filePathStem }}/{% if pagination.pageNumber > 0 %}{{ pagination.pageNumber }}/{% endif %}index.html"

tags: pages
# navigation
key: freelancers
order: "60"
parent: about

title: Freelancers

pagination:
  data: collections.freelancers_en
  size: 9
  reverse: true
  alias: paginated_freelancers
---

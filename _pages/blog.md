---
layout: archive
title: "Blog Posts"
permalink: /bog/
author_profile: true
---

{% include base_path %}

{% for post in site.portfolio reversed %}
  {% include archive-single.html %}
{% endfor %}

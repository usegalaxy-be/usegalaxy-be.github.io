---
title: Scheduled Maintenance
---

<div style="max-width:600px;margin:60px auto;text-align:center">
  <h1>Scheduled Maintenance</h1>
  <p style="color:#6c757d;margin-bottom:2rem">Galaxy @ Belgium is temporarily unavailable.</p>

  {% if site.data.notices.size > 0 %}
  <div style="text-align:left;border-left:4px solid #2c7bb6;padding:1rem 1.5rem;background:#e8f4f8;border-radius:4px;margin-bottom:2rem">
    {% for notice in site.data.notices limit:3 %}
    <strong>{{ notice.title }}</strong>
    {% for item in notice.messages %}
    <p style="margin-top:.5rem">{{ item.message }}</p>
    {% endfor %}
    {% unless forloop.last %}<hr style="margin:.75rem 0;border:none;border-top:1px solid #c8e0ed">{% endunless %}
    {% endfor %}
  </div>
  {% endif %}

  <p style="color:#6c757d;font-size:.9rem">
    Questions? <a href="mailto:datacore.galaxy@vib.be">datacore.galaxy@vib.be</a>
  </p>
</div>

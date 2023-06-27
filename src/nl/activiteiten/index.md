---
title: "Activiteiten"
excludeFromCollection: true
---
{%- for activity in paginated_activities limit:1 -%}
    {%- if activity.data.graphic.src -%}
        <div class="activities-hero-graphic-wrapper">
            <div class="img-background">
                <img src="/assets/images/{{ activity.data.graphic.src }}" alt="{{ activity.data.graphic.alt }}" class="activities-hero-graphic-img" width="{{ activity.data.graphic.width }}" height="{{ activity.data.graphic.height }}" />
            </div>
            <div class="img-background--bottom"></div>
        </div>
    {%- endif -%}
{%- endfor -%}

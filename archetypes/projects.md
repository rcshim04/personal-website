---
title: "{{ replace .Name "-" " " }}"
date: {{ .Date }}
intro: ""
description: ""
tags: []
archived: false
winner: false
links: 
    github: 
        type: "github"
        link: ""
        weight: 1
    devpost:
        type: "devpost"
        link: ""
        weight: 2
    musescore:
        type: "musescore"
        link: ""
        weight: 3
    link:
        type: "link"
        link: ""
        weight: 4
thumbnail: "thumbnails/{{ replace .Name " " "-" | lower }}.png"
slug: "{{ replace .Name " " "-" | lower}}"
---


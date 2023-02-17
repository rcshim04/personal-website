---
title: "{{ replace .Name "-" " " | title }}"
date: {{ .Date }}
description: ""
tags: []
archived: false
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
layout: project
---

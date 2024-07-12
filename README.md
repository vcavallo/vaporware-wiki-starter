# A Customizable Obsidian Publish alternative using Next.JS

This is the next.js workhorse that powers a wiki site built from
obsidian-managed markdown notes.

The markdown collection is here: [https://github.com/vcavallo/vaporware-obsidian-wiki](https://github.com/vcavallo/vaporware-obsidian-wiki)

This repo is referenced in the `.github/workflows/publish.yml` file of the
aforementioned project. When changes are pushed to source files in that repo,
this one is used to build the next.js site and publish it to Vercel.

---

To fork this project, make sure to change next.js settings
(templates, configs, etc.) and also fork the markdown collection repo and
follow the directions there as well.

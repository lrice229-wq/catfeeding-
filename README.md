# Island Paws Pantry

Website for a community cat food pantry concept in St. Thomas, U.S. Virgin Islands. Includes the existing site's home and founder pages, three uploaded photographs, and two videos.

## Run locally

No dependencies or build step are required. With Python 3 installed:

```sh
python3 -m http.server 8000 --directory dist
```

Open http://localhost:8000 in your browser.

## Edit the website

- `dist/index.html`: home page content and layout.
- `dist/founder.html`: founder page.
- `dist/assets/`: stylesheets and JavaScript for each page.
- `dist/media/`: original uploaded photographs and videos.
- `.openai/hosting.json`: existing ChatGPT Sites identity and static hosting configuration.

Publish the `dist` directory with any static website host. Relative page and media links also support hosting under a repository subdirectory.

Donation, contact, social links, and the founder story remain the placeholders shown on the existing site. Replace them with verified details when ready. No payments are processed and no visitor submissions are collected.

Existing hosted website: https://island-paws-pantry.soaringskink.chatgpt.site

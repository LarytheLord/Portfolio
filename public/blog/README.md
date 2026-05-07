# My Blog Portfolio - Multi-Blog System

## Overview
This is a comprehensive blog portfolio containing multiple specialized blogs. The system was originally built for the LEWS (Lock-in Early Warning System) project for the EA Animal Welfare Hackathon 2025, but has been extended to support multiple blog sites in a single portfolio.

## Project Structure
```
blog/
├── index.html              # Main portfolio homepage
├── css/
│   └── style.css           # Main stylesheet
├── js/
│   └── main.js             # JavaScript functionality
├── images/                 # Project images
├── lews-blog/              # Original LEWS blog content
│   ├── index.html
│   ├── about.html
│   ├── system.html
│   ├── implementation.html
│   ├── methodology.html
│   ├── uncertainty.html
│   ├── ui.html
│   └── navigation.html
└── sample-blog/            # Sample tech blog example
    ├── index.html
    ├── about.html
    ├── articles.html
    ├── contact.html
    └── post1.html
```

## Features
- **Multi-Blog Support**: Host multiple specialized blogs in a single portfolio
- **Category Filtering**: Filter blogs by category (Technology, Research, Effective Altruism)
- **Search Functionality**: Search across blog titles, descriptions, and tags
- **Responsive Design**: Optimized for all devices
- **Clean Navigation**: Intuitive navigation between blogs and portfolio
- **Tagging System**: Organize content with tags for better discoverability
- **Modern UI**: Consistent design language across all blogs

## Blog Sections
1. **LEWS Blog**: Lock-in Early Warning System for animal welfare technology assessment
2. **Sample Tech Blog**: Example of a technology-focused blog
3. **Additional blogs can be added** by creating new subdirectories

## Adding New Blogs
To add a new blog:
1. Create a new subdirectory in the `blog/` folder (e.g., `new-blog/`)
2. Add necessary HTML files (index.html, about.html, etc.)
3. Ensure navigation includes a link back to the main portfolio (`../index.html`)
4. Update the main `index.html` file to include your new blog in the listing

## Customization
- Update `blog/index.html` to add new blog entries to the main listing
- Modify `css/style.css` for design changes
- Update `js/main.js` for enhanced functionality
- Add new tags and categories to organize content

## Deployment
This is a static site that can be deployed to any web server or hosting platform (Netlify, Vercel, GitHub Pages, etc.).

## Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile-friendly responsive design

## License
This project was created for the EA Animal Welfare Hackathon 2025.
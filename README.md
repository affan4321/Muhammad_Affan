# Muhammad Affan Portfolio

A modern, responsive portfolio website showcasing my work as a Creative Technologist specializing in AI, Automation & Media Production.

**Live Site:** [https://smaffan.com](https://smaffan.com)

## Video Upload System

The portfolio includes an automated video upload system that syncs local video projects to Cloudflare R2:

### Project Structure
Create video projects in the `video-projects/` folder:
```
video-projects/
└── project-name/
    ├── video.mp4
    ├── thumbnail.jpg
    └── metadata.json
```

### metadata.json Format
```json
{
  "title": "Project Title",
  "description": "Project description",
  "tags": ["editing", "production"],
  "duration": "00:00",
  "category": "Commercial"
}
```

### Upload Videos
```bash
npm run upload-videos
```

## License

© 2025 Muhammad Affan. All rights reserved.

## Contact

- **Website:** [https://smaffan.com](https://smaffan.com)
- **Email:** Available through contact form on the site
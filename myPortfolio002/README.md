# Almijar Sariul Portfolio

A modern, responsive portfolio website built with Tailwind CSS, HTML, CSS, and JavaScript.

## 📁 File Structure

```
Portfolio/
├── index.html          # Home/Hero page
├── about.html          # About section
├── skills.html         # Skills with carousel animation
├── projects.html       # Projects section
├── photos.html         # Photo gallery
├── contact.html        # Contact information
├── styles.css          # Custom styles & light mode theme
├── script.js           # JavaScript functionality
├── myProfile.JPG       # Profile picture
├── c++.png             # C++ logo
├── html.png            # HTML logo
├── css.png             # CSS logo
├── cs.png              # C# logo
└── README.md           # This file
```

## ✅ Setup Instructions

### Option 1: Simple Local Setup (Recommended)
1. **Download all files** to a single folder on your computer
2. **Keep all files in the same folder** - this is important!
3. **Open `index.html`** in your web browser
4. **Done!** Your portfolio is now running locally

### Option 2: Web Server Setup (For Testing)
If you want to test with a local server:

```bash
# Using Python 3
python -m http.server 8000

# Using Python 2
python -m SimpleHTTPServer 8000

# Using Node.js (with http-server installed)
http-server

# Using PHP
php -S localhost:8000
```

Then open `http://localhost:8000` in your browser.

## 🚀 Features

✨ **Fully Responsive Design**
- Works perfectly on mobile, tablet, and desktop
- Mobile navigation with bottom tab bar
- Hamburger menu for smaller screens

🌓 **Dark/Light Theme Toggle**
- Switch between dark and light modes
- Theme preference is saved in browser (localStorage)
- Smooth transitions between themes

🎨 **Beautiful Animations**
- Loading screen animation
- Profile circle hover effect
- Skills carousel (auto-scrolling, pauses on hover)
- Smooth transitions and hover effects
- Mobile-friendly bottom navigation

💻 **Clean Code Structure**
- Separated HTML pages (no massive single file)
- Modular CSS with no repeated classes
- Optimized JavaScript for all pages
- Easy to maintain and update

📱 **Mobile Optimized**
- Bottom navigation bar for easy access
- Touch-friendly buttons
- Safe area support for notched phones
- Optimized for all screen sizes

## 🛠️ Customization

### Change Your Name & Info
Edit these files and replace the content:
- `about.html` - Your bio and description
- `contact.html` - Your contact information

### Update Skills
Edit `skills.html` and modify:
- Add/remove skill cards
- Update skill percentages
- Change skill logos

### Add Projects
Edit `projects.html` to add your projects

### Add Photos
Edit `photos.html` and add your image files

### Change Colors
Edit `styles.css` to customize the color scheme
- Current colors: Cyan and Blue gradients
- Light mode: Purple theme

## 🎯 Navigation

All pages link to each other through:
- **Top Navigation Bar** - Desktop menu with links
- **Mobile Menu** - Hamburger menu for mobile
- **Bottom Navigation** - Mobile tab bar (visible on small screens)
- **Hero Links** - Quick navigation buttons

## 🌐 Deploy to GitHub Pages

1. Create a GitHub repository
2. Upload all files to the repository
3. Go to Settings → Pages
4. Select "Deploy from a branch"
5. Choose `main` branch and `/root` folder
6. Your portfolio is live at `https://yourusername.github.io/repository-name`

## 🐛 Troubleshooting

### Portfolio won't load?
- ✓ Make sure all files are in the same folder
- ✓ Check that file names match (case-sensitive on Linux/Mac)
- ✓ Verify image files exist: `myProfile.JPG`, `c++.png`, `html.png`, `css.png`, `cs.png`

### Images not showing?
- ✓ Images must be in the same folder as HTML files
- ✓ Check file names and extensions
- ✓ Make sure image files are not corrupted

### Styles not applying?
- ✓ Ensure `styles.css` is in the same folder
- ✓ Check browser cache (Ctrl+Shift+Delete or Cmd+Shift+Delete)
- ✓ Open DevTools (F12) and check Console for errors

### JavaScript not working?
- ✓ Ensure `script.js` is in the same folder
- ✓ Check browser Console for JavaScript errors
- ✓ Make sure you're using a modern browser

### Theme toggle not working?
- ✓ Refresh the page (Ctrl+R or Cmd+R)
- ✓ Check if browser allows localStorage
- ✓ Try a different browser

## 📱 Browser Support

Works on:
- ✅ Chrome/Chromium (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 File Size Info

- All HTML files: ~10KB each
- CSS file: ~4.5KB
- JavaScript file: ~5KB
- Total (without images): ~60KB
- Images: ~100-500KB depending on quality

## 🎓 Technologies Used

- **HTML5** - Semantic structure
- **Tailwind CSS** - Utility-first CSS framework
- **CSS3** - Custom animations and light mode theme
- **Vanilla JavaScript** - No dependencies
- **Font Awesome 6.4** - Icons
- **Responsive Design** - Mobile-first approach

## 💡 Tips

1. **Update Your Links**
   - Replace empty social media links in `contact.html`
   - Add your actual GitHub, LinkedIn, Instagram URLs

2. **Optimize Images**
   - Compress images before uploading
   - Use proper image formats (JPG for photos, PNG for logos)

3. **SEO Optimization**
   - Add meta descriptions to each HTML file
   - Update page titles
   - Add keyword meta tags if needed

4. **Performance**
   - Images load lazily (modern browsers)
   - CSS is optimized with no unused styles
   - JavaScript is minimal and efficient

## 📞 Contact Information

Update in `contact.html`:
- Email: almijarsariul@gmail.com
- Facebook: https://www.facebook.com/almijar.sariul
- TikTok: https://www.tiktok.com/@mjr_srl
- YouTube: https://www.youtube.com/@MIJAR_ORG_2024

## 📝 License

This portfolio template is free to use and modify for personal use.

## ✨ Latest Updates

- ✅ Split into 6 separate HTML pages (no more large diffs on GitHub)
- ✅ Removed all repeated Tailwind CSS classes
- ✅ Optimized CSS and JavaScript
- ✅ Improved mobile responsiveness
- ✅ Added loading screen animation
- ✅ Added light/dark theme toggle
- ✅ Skills carousel with smooth animation

---

**Happy Coding! 🚀**

For questions or improvements, feel free to update the portfolio files.

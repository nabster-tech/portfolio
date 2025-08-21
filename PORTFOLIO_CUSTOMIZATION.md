# Portfolio Customization Guide

This portfolio has been set up with a centralized data management system that makes it easy to update all content from a single location.

## 📁 Key File to Update

**Most Important:** `src/data/personalData.ts`

This file contains all your personal information, experience, skills, projects, and contact details. Update this file with your actual resume information to customize the entire portfolio.

## 🔧 How to Customize Your Portfolio

### 1. Personal Information
Update the `personalInfo` object with your details:
- **name**: Your full name
- **title**: Your professional title (e.g., "Full Stack Developer", "UX Designer")
- **subtitle**: Your professional tagline/elevator pitch
- **bio**: Your professional bio (supports multiple paragraphs)
- **location**: Your city and state/country
- **email**: Your contact email
- **phone**: Your phone number
- **socialLinks**: Your social media and professional profiles

### 2. Professional Experience
Update the `experiences` array with your work history:
- Add/remove experience objects as needed
- Include job titles, companies, locations, dates
- List key achievements and technologies used
- Set `current: true` for your current position

### 3. Skills & Technologies
Update the `skills` array with your technical skills:
- Add/remove skills as needed
- Set appropriate proficiency levels (0-100)
- Assign relevant categories
- Add fun emoji icons for visual appeal
- Include years of experience (optional)

### 4. Education
Update the `education` array with your academic background:
- Degrees, institutions, graduation dates
- GPA, honors, relevant coursework (optional)

### 5. Projects & Portfolio
Update the `projects` array with your best work:
- Project titles, descriptions, categories
- Add images, live URLs, GitHub links
- Include detailed case study information
- List technologies, challenges, solutions, results

### 6. Statistics & Metrics
Update the `heroStats` object with your numbers:
- Number of projects completed
- Years of experience
- Number of clients/companies worked with

## 🚀 Quick Start

1. **Extract information from your resume** - Gather all relevant details
2. **Update `src/data/personalData.ts`** - Replace placeholder data with your information
3. **Add project images** - Upload your project screenshots and update image URLs
4. **Test the portfolio** - Run `npm run dev` to see your changes
5. **Deploy** - Your portfolio is ready to showcase your work!

## 📝 Content That Gets Updated Automatically

When you update `personalData.ts`, these sections automatically reflect your changes:

- **Hero Section**: Name, title, subtitle, stats
- **About Page**: Bio, experience timeline, personal details
- **Skills Section**: Technical skills, proficiency levels
- **Contact Page**: Email, phone, location, social links
- **Navigation**: Dynamic routing based on your content

## 🎨 Adding Your Projects

For each project in the `projects` array, you can include:
- **Basic Info**: Title, category, description, year
- **Media**: Featured image, live demo URL, GitHub repository
- **Details**: Your role, duration, technologies used
- **Case Study**: Challenges faced, solutions implemented, results achieved
- **Links**: Live site, code repository, detailed case study

## 🔧 Advanced Customization

### Adding New Sections
If you need additional sections (certifications, awards, etc.), you can:
1. Add new data arrays to `personalData.ts`
2. Create new components that import and use this data
3. Add routes in `App.tsx` if needed

### Styling & Branding
- Update colors, fonts, and styling in the CSS files
- Replace the default images with your own branding
- Modify animations and transitions to match your style

### SEO & Performance
- Update meta tags in `index.html`
- Add proper alt text for images
- Optimize image sizes for web

## 💡 Tips for Best Results

1. **Use high-quality project images** - They make a big difference
2. **Write compelling project descriptions** - Focus on impact and results
3. **Keep skills up to date** - Regular updates keep your portfolio current
4. **Include metrics and achievements** - Numbers tell a powerful story
5. **Test on mobile devices** - Ensure responsive design works well

## 🚨 Important Notes

- Always backup your `personalData.ts` file before making major changes
- Test the portfolio locally after updates before deploying
- Ensure all URLs (social links, project links) are valid and working
- Consider privacy - only include information you're comfortable sharing publicly

## 📞 Need Help?

If you encounter any issues while customizing your portfolio:
1. Check the browser console for error messages
2. Ensure all required fields in the data interfaces are filled
3. Validate that all URLs are properly formatted
4. Make sure image URLs are accessible

---

**Your portfolio is now ready to showcase your amazing work! 🎉**

Remember to keep it updated with your latest projects and achievements.

# Public Folder

## How to Add Your CV

1. Place your CV file in this `public` folder
2. Name it `cv.pdf` (or update the file name in the components)
3. The CV will be accessible at `/cv.pdf`

### Supported Formats
- PDF (recommended): `cv.pdf`
- You can also use other formats like `.docx` or `.doc`, but PDF is recommended for best compatibility

### File Size
- Keep the file size under 5MB for best user experience
- Compress the PDF if it's too large

### Update File Name
If you want to use a different file name, update these files:
- `components/Hero.tsx` - line with `href="/cv.pdf"`
- `components/Contact.tsx` - line with `href="/cv.pdf"`

Also update the `download` attribute to match your desired download filename.






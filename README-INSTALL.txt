RUDRA PORTFOLIO — MOTION UPGRADE

This upgrade preserves the existing black / white / orange theme.

WHAT IT ADDS
- Smooth hero entrance and subtle ambient orange glow
- Scroll-triggered section reveals
- Animated project-card hover sheen and lift
- Animated navigation underline
- Thin orange reading-progress line in the sticky header
- Reduced-motion accessibility support

INSTALL ON GITHUB (ANDROID)
1. Extract this ZIP on your phone.
2. In your GitHub repository, tap Add file > Upload files.
3. Upload motion.css and script.js from this extracted folder, then commit.
4. Open index.html in GitHub and tap the pencil (Edit).
5. In the <head>, directly below the existing style.css link, add:
   <link rel="stylesheet" href="motion.css">
6. Just above </body>, add:
   <script src="script.js" defer></script>
7. Commit changes, wait a minute, then refresh the live website.

Do not replace or delete style.css. The new motion.css layers on top of it.

# Instructions for Adding Lottie Animation

## File Placement

Place your Lottie animation file here:
```
f:\portfolio website\vrocus\public\animations\nav-tab-menu.json
```

**Note:** If your file is named "Interactive IOS 26 inspired tab menu.lottie", please:
1. Rename it to `nav-tab-menu.json` OR
2. Convert .lottie to .json format using LottieFiles website
3. Place it in the `public/animations/` folder

## How It Works

The navbar now includes:
- ✅ **Lottie Tab Indicator**: Animated indicator that follows the active/hovered tab
- ✅ **Smooth Transitions**: Uses CSS variables for consistent 300ms animations  
- ✅ **Dynamic Import**: Lottie loads only when needed for better performance
- ✅ **iOS 26 Style**: Spring physics for fluid tab switching (stiffness: 380, damping: 30)

## Animation Behavior

- **Hover**: Animation follows your mouse across navigation links
- **Click**: Animation stays under the active page link
- **Mobile**: Works seamlessly with the mobile menu overlay

## Lenis Scroll Status

✅ **Already Active**: Smooth scrolling is enabled via `SmoothScroll.tsx`
- Lerp: 0.1 (smooth interpolation)
- Duration: 1.2s
- Dynamic import for performance

No additional setup needed for scroll animations!

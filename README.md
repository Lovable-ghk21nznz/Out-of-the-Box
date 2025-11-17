# Party Games App 🎉

A mobile-friendly React app with party games that can be deployed as a web app or native iOS app.

---

## 🚀 Quick Start - Local Development

```bash
# Install dependencies
npm install

# Run locally on PC
npm run dev
# Opens at http://localhost:8080

# Build for production
npm run build

# Serve built files locally
npx serve dist
```

---

## 📱 Deployment Options

### Option 1: Local Network Only (Testing)

**What it does:** Runs on your PC, accessible only on your home WiFi.

```bash
# Build and serve
npm run build
npx serve dist

# Temporarily allow through firewall
sudo ufw allow 3000

# Access from iPhone on same WiFi
# Go to: http://YOUR_PC_IP:3000

# When done, remove firewall rule
sudo ufw delete allow 3000
```

**Pros:** Quick testing  
**Cons:** PC must be running, WiFi only, can't share with friends

---

### Option 2: Vercel (FREE Online Hosting) ⭐ RECOMMENDED

**What it does:**

- Deploys your app to the cloud (FREE forever)
- Gets a URL like: `your-app.vercel.app`
- Works from anywhere in the world (WiFi, cellular, etc.)

**Steps:**

```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel (creates free account)
vercel login

# Deploy to production (FREE)
vercel --prod

# You'll get a URL like: https://party-games-xyz.vercel.app
# Share this link via WhatsApp!
```

**Pros:**  
✅ FREE forever  
✅ Share with anyone worldwide  
✅ Works 24/7 even when PC is off  
✅ Automatic HTTPS/SSL  
✅ Fast global CDN

---

### Option 2.5: Add PWA Support (Progressive Web App)

**What is PWA?**  
Makes your website behave like a native app:

- 📲 Installable - "Add to Home Screen" creates app icon
- 📴 Works offline - Caches data for offline use
- 🔔 Push notifications (optional)
- 🚀 Faster loading after first visit
- 📱 Full-screen like native app

**Why use PWA?**

- Users get an "app" without App Store
- Works offline at parties (no WiFi needed)
- Feels like a real app
- No Mac or developer account needed

**Setup PWA:**

```bash
# Install PWA plugin
npm install vite-plugin-pwa -D

# Configure vite.config.ts, vercel.json, package.json scripts, manifest.json (can be generated trought vite.config.ts)

# Then deploy to Vercel
vercel --prod
```

**Users install it:**

1. Visit your Vercel URL in Safari
2. Tap Share → "Add to Home Screen"
3. App icon appears on iPhone!
4. Opens full-screen like native app

---

### Option 3: Native iOS App (Capacitor + TestFlight)

**What it does:**  
Wraps your web app as a real iOS app that can be distributed via TestFlight.

**Requirements:**  
⚠️ **Requires a Mac** (MacBook, iMac, Mac Mini)  
⚠️ Cannot be done on Linux/Windows PC  
⚠️ Xcode (Mac-only software)

**What is TestFlight?**

- Apple's official app testing platform
- FREE to use (no $99 developer fee needed for testing)
- Share invite link via WhatsApp
- Up to 100 testers
- Apps expire after 90 days (need to re-upload)

**Steps (Mac Required):**

```bash
# Install Capacitor
npm install @capacitor/core @capacitor/cli @capacitor/ios

# Initialize Capacitor
npx cap init

# Build web app
npm run build

# Add iOS platform
npx cap add ios

# Copy web files to iOS
npx cap copy ios

# Open in Xcode (Mac only!)
npx cap open ios

# In Xcode:
# 1. Sign with Apple ID (free)
# 2. Connect iPhone via USB
# 3. Click "Run" to install on your iPhone
# 4. OR Archive → Upload to TestFlight → Share invite link
```

**Pros:**  
✅ Real native app  
✅ Better performance  
✅ Access to native features (camera, etc.)  
✅ Shareable via TestFlight link

**Cons:**  
❌ Requires Mac ($1000+)  
❌ More complex setup  
❌ Apps expire every 90 days

---

### Option 4: App Store Distribution

**What it does:** Publish app to Apple App Store for public download.

**Requirements:**

- Mac with Xcode
- Apple Developer Account: **$99/year**
- App review process (1-2 weeks)

**Steps:**
Same as Option 3, but:

- Pay $99 for developer account
- Submit to App Store instead of TestFlight
- Pass Apple's review process

**Pros:**  
✅ Professional distribution  
✅ Unlimited users  
✅ No expiration

**Cons:**  
❌ $99/year  
❌ Review process  
❌ Requires Mac

---

## 🎯 Recommendations

| Use Case                      | Best Option                                           |
| ----------------------------- | ----------------------------------------------------- |
| **Personal use only**         | Option 1 (Local) or Option 2 (Vercel)                 |
| **Share with friends**        | Option 2 + PWA ⭐                                     |
| **Offline support needed**    | Option 2 + PWA                                        |
| **Want native app feel**      | Option 2 + PWA (easier) or Option 3 (if you have Mac) |
| **Professional distribution** | Option 4 (App Store)                                  |

**Best overall:** Option 2 (Vercel) + PWA Support

- FREE forever
- Share via WhatsApp
- Works offline
- No Mac needed
- No $99/year needed

---

## 📋 Summary

```bash
# For most users (RECOMMENDED):
npm install -g vercel
vercel --prod
# Share the URL → Friends add to Home Screen → Done! 🎉

# For local testing:
npm run build
npx serve dist

# For native iOS app (requires Mac):
npx cap add ios
npx cap open ios
```

---

## 🔧 Tech Stack

- React + TypeScript
- Vite
- Tailwind CSS
- Shadcn/ui components
- React Router
- Framer Motion

---

## 📝 Notes

- No backend required - all data is static JSON files
- No database needed
- Works completely client-side
- Perfect for offline party games

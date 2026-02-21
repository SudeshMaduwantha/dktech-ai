# 📘 THE ULTIMATE FULL-STACK AI MASTERCLASS GUIDE
> **Project:** Building a Multi-UI AI Ecosystem with Next.js 15  
> **Instructor:** Sudesh Kumarasiri | **Status:** Batch 01 (10/10 Enrolled)

## 👨‍🏫 INSTRUCTOR'S NOTE: THE ROAD TO MASTERY

ආයුබෝවන්!

මුලින්ම, මෙම "AI-Powered Full-Stack Bootcamp" එකේ සාර්ථක බැච් එකක් වුණු **Batch 01** සඳහා තේරී පත්වුණු ළමුන් 10 දෙනාටම මගේ උණුසුම් සුබපැතුම් පිරිනමනවා. අපි මේ ගෙවා දැමූ කාලය ඇතුළත හුදෙක් කෝඩ් එකක් ලියන හැටි විතරක් නෙවෙයි, ලෝකයේ පවතින අභියෝගාත්මක තාක්ෂණයන් (Modern AI Ecosystems) සමඟ ගැටෙමින් විසඳුම් සොයන ආකාරය ප්‍රායෝගිකව අත්හදා බැලුවා.

මම විශ්වාස කරන දෙයක් තියෙනවා: **"කෝඩ් එකක් ලියන්න ඕනෑම කෙනෙකුට පුළුවන්, නමුත් පද්ධතියක් (System) නිර්මාණය කරන්න පුළුවන් වෙන්නේ හොඳ දැක්මක් තියෙන ඩෙවලොපර් කෙනෙකුට විතරයි."**

අපි මේ ප්‍රොජෙක්ට් එකේදී මුහුණ දුන් අභියෝග—විශේෂයෙන්ම Prisma 7 වල සිට Prisma 6 දක්වා මාරු වෙමින්, Error Fix කරමින් කළ ගමන—සැබෑ ලෝකයේ ඩෙවලොපර් කෙනෙක් මුහුණ දෙන අත්දැකීම්වලට සමානයි. අද ඔබ අතේ තියෙන්නේ නිකන්ම වෙබ් අඩවියක් නෙවෙයි; එය ඉතා සංකීර්ණ, MongoDB දත්ත ගබඩාවක් සහ Groq AI "මොළයක්" සහිත සම්පූර්ණ පරිසර පද්ධතියක් (Ecosystem).

මම උගන්වන 10 දෙනාට මට දෙන්න තියෙන ලොකුම පණිවිඩය මෙයයි: **කිසිම විටක ඉගෙනීම නතර කරන්න එපා.** තාක්ෂණය දිනෙන් දින වෙනස් වෙනවා. අද ඔබ ඉගෙන ගත් දේ හෙට අලුත් වෙන්න පුළුවන්. ඒ වෙනසට බය නොවී, විසඳුම් සොයා යන ගමන දිගටම යන්න.

ඔබ සියලු දෙනාම සාර්ථක Full-Stack Developers ලා ලෙස ලෝකයට යනවා දකින්න මම බලාපොරොත්තුවෙන් ඉන්නවා.

**Keep Building. Keep Scaling.**

**Sudesh Kumarasiri** Instructor, DK Tech AI Bootcamp
---

## 🚀 01. INTRODUCTION
මෙම අත්පොත මගින් සරල Next.js යෙදුමක සිට සංකීර්ණ AI පද්ධතියක් (Ecosystem) දක්වා නිර්මාණය කරන ආකාරය පියවරෙන් පියවර උගන්වනු ලබයි.

### 🛠️ The Tech Stack
* **Framework:** Next.js 15 (App Router)
* **Styling:** Tailwind CSS
* **Icons:** Lucide React
* **AI Engine:** Google Gemini 1.5 Pro API
* **Language:** TypeScript

---

## 💻 02. PROJECT SETUP (PHASE A)
මුලින්ම අපගේ පරිගණකය සංවර්ධන කටයුතු සඳහා සූදානම් කරගනිමු.

### Step 1: Initialize Next.js
Terminal එකේ පහත විධානය ක්‍රියාත්මක කරන්න:
```bash
npx create-next-app@latest ai-ecosystem 
```
(Settings: TypeScript: Yes, ESLint: Yes, Tailwind: Yes, App Router: Yes)

### Step 2: Environment Variables

අපගේ AI API Key එක ආරක්ෂිතව තබා ගැනීමට `.env.local` ගොනුවක් සාදා එහි පහත දේ ඇතුළත් කරන්න:
```bash
GEMINI_API_KEY=your_api_key_here
```
## 🧠 03. BUILDING THE CORE (PHASE B)

අපි මුලින්ම AI සමඟ සන්නිවේදනය කළ හැකි ප්‍රධාන Chat Interface එක නිර්මාණය කරමු.

### Step 3: API Route Handler

`app/api/chat/route.ts` ගොනුව සාදා AI එක සමඟ සම්බන්ධතාවය ගොඩනගන්න. මෙය Backend එක ලෙස ක්‍රියා කරයි.

## 🎨 04. UI ECOSYSTEM - THE 8 DESIGNS

අපි එකම ව්‍යාපෘතියක් තුළ විවිධ අවශ්‍යතා සඳහා ගැළපෙන Styles 8ක් නිර්මාණය කළෙමු.
| Design | Style Name | Route | Highlights |
|:---|:---|:---|:---|
| 01 | Professional Chat | / | Sidebar, Chat History view |
| 02 | Glassmorphism | /design2 | Frosted glass, Backdrop blur |
| 03 | Cyberpunk | /design3 | Hacker mode, Matrix green neon |
| 04 | Minimalist | /design4 | Apple-style, Ultra-clean white |
| 05 | Nebula Dashboard | /design5 | Dark mode pro, Activity stats |
| 06 | Cloud POS | /pos | Inventory & Retail Billing UI |
| 07 | Mobile Fitness | /mobile | Mobile-first, Health tracking |
| 08 | Safari Landing | /safari | High-end visual storytelling |

## 📂 05. FOLDER STRUCTURE TIPS

Routes නිවැරදිව ක්‍රියා කිරීමට නම් Folder Structure එක මෙසේ තිබිය යුතුය:

-   `app/page.tsx` (Default UI)
    
-   `app/design2/page.tsx`
    
-   `app/design3/page.tsx`
    
-   `app/pos/page.tsx`
    
-   `app/api/chat/route.ts` (Backend API)

## 🏆 06. THE MASTER PORTFOLIO

අවසානයේ මෙම සියලු නිර්මාණ එක තැනක පෙන්වීමට **Bentogrid Portfolio** එකක් `/portfolio` ලෙස නිර්මාණය කළෙමු. මෙය ඔබගේ දක්ෂතාවය ලෝකයට පෙන්වීමට ඇති ප්‍රධානම මෙවලමයි.

## 📝 NEXT STEPS

Bootcamp එකේ ඉදිරි දිනවලදී අපි පහත උසස් කොටස් සම්පූර්ණ කරමු:

1.  **Database Integration:** MongoDB හරහා දත්ත ගබඩා කිරීම.
    
2.  **Authentication:** Google/GitHub Login පද්ධතියක් ඇතුළත් කිරීම.
    
3.  **Deployment:** Vercel හරහා පද්ධතිය සජීවීව (Live) අන්තර්ජාලයට මුදා හැරීම.

---

## 🗄️ 07. PHASE 1: DATABASE INTEGRATION (MONGODB)
චැට් එක රිප්‍රෙෂ් කළත් මැකී නොයන ලෙස දත්ත ගබඩා කිරීම සඳහා අපි MongoDB සහ Prisma භාවිතා කරමු.

### Step 1: Why Prisma?
Prisma යනු ORM (Object Relational Mapper) එකකි. එමගින් ඉතා ලේසියෙන් Database එක සමඟ ගනුදෙනු කිරීමට කෝඩ් ලියා ගත හැක.

### Step 2: Saving Chat History
අපගේ `app/api/chat/route.ts` එක ඇතුළත, AI එකෙන් රිස්පොන්ස් එක ලැබුණු විගස එය Database එකේ සේව් කිරීමට පහත ආකාරයට කෝඩ් එක වෙනස් කළ යුතුය:

```typescript
// Example Logic
await prisma.chat.create({
  data: {
    role: 'assistant',
    content: aiResponseText,
  },
});
```

---

## 🕒 08. PHASE 2: RECENT CHATS & SIDEBAR LOGIC
පරිශීලකයා මීට පෙර සිදු කරන ලද සංවාද නැවත ලබා ගැනීම සහ Sidebar එකේ පෙන්වීම මෙහිදී සිදු වේ.

### Step 1: Database එකෙන් Data ලබා ගැනීම
Prisma හරහා අපට ඉතා ලේසියෙන් දත්ත ලබා ගත හැක:
```typescript
const history = await prisma.chat.findMany({
  orderBy: { createdAt: 'desc' },
  take: 10 // අන්තිමට කරපු චැට් 10ක් පමණක් පෙන්වීමට
});
```
## 🔄 09. CONNECTING FRONTEND & BACKEND
Database එකේ ඇති දත්ත Frontend එක වෙත ගෙන ඒම (Fetching) සහ පෙන්වීම (Rendering) මෙහිදී සිදු වේ.

1. **State Management:** React හි `useState` භාවිතා කර දත්ත ගබඩා කිරීම.
2. **Lifecycle Hooks:** `useEffect` හරහා පද්ධතිය ආරම්භයේදීම දත්ත ලබා ගැනීම.
3. **Dynamic Rendering:** `map()` භාවිතා කර Sidebar එක තුළ පරණ චැට් පෙන්වීම.

## 🛠️ 11. PRISMA 7 & NEXT.JS 16 COMPATIBILITY
සමහර විට අලුත්ම Versions වලදී Type definitions පරස්පර විය හැක.

1. **JSON Error:** පද්ධතිය Crash වූ විට API එකක් HTML Error Page එකක් එවයි. එය `Unexpected token <` ලෙස දිස්වේ.
2. **The Fix:** `PrismaClient` එකට `as any` භාවිතා කර TypeScript දැඩි නීති (Strict mode) තාවකාලිකව ලිහිල් කර, `DATABASE_URL` එක කෙලින්ම ලබා දීම.

## 🛠️ 12. THE TRANSITION TO STABLE PRISMA (VERSION 6)
අලුත්ම සංස්කරණවල (v7) ඇති වූ තාක්ෂණික ගැටලු සහ Compatibility Issues මගහරවා ගැනීම සඳහා අපි වඩාත් ස්ථාවර (Stable) Prisma 6 සංස්කරණය භාවිතා කිරීමට තීරණය කළෙමු.

### Step 1: Singleton Pattern (`lib/prisma.ts`)
සෑම Request එකකදීම අලුතින් Database Connection එකක් සෑදීම වෙනුවට පවතින එකම instance එක නැවත භාවිතා කිරීමට පහත ආකාරයට Singleton Pattern එක සැකසිය යුතුය.
- **වාසිය:** 'Too many connections' error එක මගහැරී පද්ධතියේ වේගය වැඩි වීම.

### Step 2: Forcing Node.js Runtime
Next.js API Routes වලදී ඇතිවන ගැටලු අවම කිරීමට API Route ගොනුව තුළ runtime එක Node.js ලෙස නිර්වචනය කිරීම සිදු කරයි.
```typescript
export const runtime = 'nodejs';
```
## 📅 13. DATA MODELS & ENHANCED STORAGE
සෑම සංවාදයකටම අනන්‍ය වූ අර්ථයක් ලබා දීම සඳහා අපගේ Schema එක තවත් දියුණු කළෙමු.

The Chat Model
අලුත් Schema එකෙහි මැසේජ් එකේ 'Content' එකට අමතරව 'Title' එකක් සහ කාලය (Timestamp) ගබඩා කරනු ලබයි.

Title: පරිශීලකයා එවන ප්‍රොම්ප්ට් එකෙහි මුල් අකුරු 50 'Chat Title' එක ලෙස ස්වයංක්‍රීයව සේව් වේ.

## 🎨 14. DYNAMIC SIDEBAR & REAL-TIME SYNC
මෙම පියවරේදී අපි Frontend එක සහ Backend එක අතර සැබෑ සම්බන්ධතාවය (Real-time Feel) ගොඩනගමු.

Step 1: Smart History Loading
පරිශීලකයා මැසේජ් එකක් යැවූ සැණින්, Sidebar එක Refresh නොවී අලුත් මැසේජ් එක "Recent Conversations" ලැයිස්තුවට එකතු වීමට useEffect dependency array එක නිවැරදිව භාවිතා කිරීම.

Step 2: Custom Scrollbars & UI Enhancements
Sidebar එකේ ඇති පරණ චැට් ලැයිස්තුව දිගු වන විට එය ලස්සනට පෙන්වීමට Tailwind හරහා custom-scrollbar සහ truncate ගුණාංග භාවිතා කිරීම.

## 🏆 15. FINAL PROJECT POLISHING
Bootcamp එකේ අවසාන අදියර ලෙස අපි සම්පූර්ණ පද්ධතියම එකට එකතු කළෙමු.

Enrollment Badge: පන්තියේ සිටින ළමයින් 10 දෙනාම සැබෑ ලෙසම System එකට සම්බන්ධ වී ඇති බව පෙන්වීමට 'Live Enrollment Sync' කාඩ් එකක් නිම කිරීම.

Error Boundaries: API එකක් ක්‍රියා විරහිත වුවහොත් HTML Error එකක් වෙනුවට ලස්සන සිංහල පණිවිඩයක් පරිශීලකයාට පෙන්වීම.

---

## 🔐 16. IDENTITY & SECURITY: THE CLERK ARCHITECTURE
අපගේ AI පද්ධතියට සැබෑ වටිනාකමක් ලැබෙන්නේ පරිශීලකයා හඳුනා ගැනීම (Authentication) සහ ඔවුන්ගේ දත්ත ආරක්ෂා කිරීම (Data Privacy) මගිනි.

### Step 1: Clerk Provider Integration (layout.tsx)
මුළු ඇප් එකටම Clerk හි පහසුකම් ලබා දීම සඳහා පද්ධතියේ ප්‍රධාන Layout එක තුළ ClerkProvider භාවිතා කළ යුතුය. මෙය නොමැතිව කිසිදු Auth Hook එකක් (useUser, useAuth) ක්‍රියා නොකරයි.

### Step 2: Conditional Rendering (SignedOut vs SignedIn)
පරිශීලකයා ලොග් වී ඇත්නම් පමණක් AI සමඟ චැට් කිරීමට ඉඩ දීම සහSidebar එකේ හිස්ට්‍රිය පෙන්වීම මෙහිදී සිදු වේ.

- SignedOut: ලොග් වී නොමැති විට "Sign In" බටන් එක පෙන්වීම.

- SignedIn: ලොග් වූ පසු UserButton (Profile Picture, Logout) සහ පරණ සංවාද පෙන්වීම.

### Step 3: Middleware - The Border Guard
අපගේ middleware.ts ගොනුව මගින් අවසර නොලත් පරිශීලකයින්ට අපගේ API Routes (/api/chat, /api/history) වෙත කෙලින්ම පිවිසීම වළක්වයි. මෙය සැබෑ ලෝකයේ පද්ධතියක ආරක්ෂාව තහවුරු කරන ප්‍රධානම ක්‍රමයයි.

### Step 4: User Personalization
ලොග් වූ පසු පරිශීලකයාගේ නම ලබාගෙන ඔහුට පෞද්ගලිකව ආමන්ත්‍රණය කිරීමට (user.firstName) අපට හැකියාව ලැබේ. මෙය යූසර් සහ AI අතර ඇති සම්බන්ධය තවදුරටත් සමීප කරයි.


"Technology represents the tools, but your vision represents the product." Designed & Developed by Sudesh Kumarasiri | © 2026

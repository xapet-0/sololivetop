# SoloLiveTop Monorepo

هيكل المشروع مبني على مجلدين رئيسيين ضمن `apps/`:

- `apps/web`: واجهة Next.js (React).
- `apps/api`: خدمة API مبنية على Node.js.

## المتطلبات

- Node.js 20+
- npm 10+

## التشغيل محليًا

1. تثبيت الاعتمادات من جذر المشروع:

   ```bash
   npm install
   ```

2. تشغيل الواجهة الأمامية (Next.js):

   ```bash
   npm run dev:web
   ```

   افتح المتصفح على: `http://localhost:3000`

3. تشغيل خدمة الـ API:

   ```bash
   npm run dev:api
   ```

   نقطة الفحص الصحية: `http://localhost:4000/health`

## الهيكل

```text
apps/
  web/
    src/pages/index.tsx
  api/
    src/index.ts
```

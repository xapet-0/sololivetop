const DashboardPlaceholder = () => {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#0f172a",
        color: "#e2e8f0",
        padding: "48px",
        fontFamily: "\"Inter\", system-ui, sans-serif",
      }}
    >
      <section
        style={{
          maxWidth: "960px",
          margin: "0 auto",
          display: "grid",
          gap: "24px",
        }}
      >
        <header>
          <p style={{ margin: 0, fontSize: "14px", color: "#94a3b8" }}>
            لوحة التحكم
          </p>
          <h1 style={{ margin: "8px 0 0", fontSize: "32px" }}>
            مرحبًا! لنبدأ بإعداد بياناتك.
          </h1>
        </header>

        <div
          style={{
            border: "1px dashed #334155",
            borderRadius: "16px",
            padding: "32px",
            background: "rgba(15, 23, 42, 0.6)",
          }}
        >
          <h2 style={{ marginTop: 0, fontSize: "20px" }}>
            لا توجد عناصر بعد
          </h2>
          <p style={{ marginBottom: "24px", color: "#94a3b8" }}>
            سيظهر هنا ملخص نشاطك وأهم المؤشرات بمجرد إضافة بياناتك الأولى.
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
              gap: "16px",
            }}
          >
            {[
              "إضافة بيانات",
              "إنشاء تقرير",
              "دعوة فريق العمل",
            ].map((label) => (
              <button
                key={label}
                type="button"
                style={{
                  background: "#1e293b",
                  color: "#e2e8f0",
                  border: "1px solid #334155",
                  borderRadius: "12px",
                  padding: "12px 16px",
                  cursor: "pointer",
                  textAlign: "left",
                }}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default DashboardPlaceholder;

const DashboardPlaceholder = () => {
  const highlights = [
    { label: "المرحلة الحالية", value: "الشهر 2 • ليل المتابعة" },
    { label: "التركيز اليومي", value: "17 ساعة إنتاجية" },
    { label: "النوم الثابت", value: "7 ساعات رمادية" },
    { label: "مؤشر الحسم", value: "92٪ ثبات" },
  ];

  const timeline = [
    { label: "ممر البداية", time: "05:00 - 07:00", note: "تجهيز عقل + طقوس" },
    { label: "النواة السوداء", time: "07:00 - 12:00", note: "عمل عميق" },
    { label: "الصدى", time: "12:00 - 14:00", note: "مراجعة / ضبط" },
    { label: "الحقل المغناطيسي", time: "14:00 - 18:00", note: "تنفيذ سريع" },
    { label: "بوابة الإقفال", time: "18:00 - 22:00", note: "تسليم" },
    { label: "غرفة الاسترداد", time: "22:00 - 05:00", note: "نوم + تعافي" },
  ];

  const missions = [
    {
      title: "مهمة 01 — إعادة تشكيل الأسبوع",
      detail: "تفكيك 12 هدفًا إلى موجات، وربط كل موجة بنقطة قياس.",
    },
    {
      title: "مهمة 02 — المختبر الأحمر",
      detail: "جلسة هندسة نظام متابعة كل 10 دقائق.",
    },
    {
      title: "مهمة 03 — حارس الجودة",
      detail: "تحقق من الاتساق بين الوقت والنتيجة.",
    },
  ];

  const microMetrics = [
    { label: "دقائق مركزة", value: "640 دقيقة" },
    { label: "مراجعات سريعة", value: "14 نقطة" },
    { label: "انقطاعات", value: "1 فقط" },
    { label: "زمن تعافٍ", value: "45 دقيقة" },
  ];

  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at 20% 20%, rgba(30, 58, 138, 0.35), transparent 50%), radial-gradient(circle at 80% 0%, rgba(139, 92, 246, 0.35), transparent 50%), #020409",
        color: "#e2e8f0",
        padding: "48px 24px 80px",
        fontFamily: "\"Space Grotesk\", \"Inter\", system-ui, sans-serif",
      }}
    >
      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gap: "24px",
        }}
      >
        <header
          style={{
            display: "grid",
            gap: "20px",
            border: "1px solid rgba(148, 163, 184, 0.2)",
            borderRadius: "24px",
            padding: "28px",
            background: "linear-gradient(135deg, #0f172a, #05070f)",
            boxShadow: "0 20px 40px rgba(2, 6, 23, 0.6)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "16px",
            }}
          >
            <div>
              <p style={{ margin: 0, fontSize: "13px", color: "#94a3b8" }}>
                Solo Loveling • Black Hole Protocol
              </p>
              <h1
                style={{
                  margin: "10px 0 0",
                  fontSize: "34px",
                  lineHeight: 1.2,
                  color: "#f8fafc",
                }}
              >
                المنظومة الخرافية لإدارة الوقت والمهام والدراسة
              </h1>
              <p
                style={{
                  margin: "12px 0 0",
                  color: "#cbd5f5",
                  maxWidth: "640px",
                }}
              >
                تصميم مستوحى من فضاء Solo Loveling وبنية مدرسة 42: كل دقيقة
                محسوبة، كل موجة محسومة، وكل شهر يترابط مع التحدي الكلي.
              </p>
            </div>
            <div
              style={{
                display: "flex",
                gap: "12px",
                flexWrap: "wrap",
              }}
            >
              <button
                type="button"
                style={{
                  background: "linear-gradient(120deg, #6366f1, #8b5cf6)",
                  color: "#f8fafc",
                  border: "none",
                  borderRadius: "14px",
                  padding: "12px 18px",
                  cursor: "pointer",
                  fontWeight: 600,
                  boxShadow: "0 10px 20px rgba(99, 102, 241, 0.35)",
                }}
              >
                تشغيل بروتوكول اليوم
              </button>
              <button
                type="button"
                style={{
                  background: "transparent",
                  color: "#e2e8f0",
                  border: "1px solid #334155",
                  borderRadius: "14px",
                  padding: "12px 18px",
                  cursor: "pointer",
                }}
              >
                إعادة هندسة اللوحة
              </button>
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "14px",
            }}
          >
            {highlights.map((card) => (
              <div
                key={card.label}
                style={{
                  borderRadius: "16px",
                  padding: "16px",
                  background: "rgba(2, 6, 23, 0.8)",
                  border: "1px solid rgba(148, 163, 184, 0.2)",
                }}
              >
                <p style={{ margin: 0, color: "#94a3b8", fontSize: "12px" }}>
                  {card.label}
                </p>
                <h2 style={{ margin: "10px 0 0", fontSize: "20px" }}>
                  {card.value}
                </h2>
              </div>
            ))}
          </div>
        </header>

        <section
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "16px",
          }}
        >
          <div
            style={{
              borderRadius: "20px",
              padding: "22px",
              background: "rgba(15, 23, 42, 0.75)",
              border: "1px solid rgba(148, 163, 184, 0.2)",
            }}
          >
            <h3 style={{ marginTop: 0, fontSize: "18px" }}>
              جدول الدقيقة-بدقيقة
            </h3>
            <p style={{ marginTop: "8px", color: "#94a3b8" }}>
              خريطة اليوم مفصّلة، مع طبقات عمل عميق واسترداد سريع.
            </p>
            <div style={{ display: "grid", gap: "12px", marginTop: "16px" }}>
              {timeline.map((block) => (
                <div
                  key={block.label}
                  style={{
                    display: "grid",
                    gap: "6px",
                    padding: "12px 14px",
                    borderRadius: "14px",
                    background: "rgba(2, 6, 23, 0.7)",
                    border: "1px solid rgba(99, 102, 241, 0.25)",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      fontSize: "14px",
                    }}
                  >
                    <span>{block.label}</span>
                    <span style={{ color: "#94a3b8" }}>{block.time}</span>
                  </div>
                  <span style={{ color: "#a5b4fc", fontSize: "12px" }}>
                    {block.note}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gap: "16px",
            }}
          >
            <div
              style={{
                borderRadius: "20px",
                padding: "22px",
                background: "rgba(15, 23, 42, 0.75)",
                border: "1px solid rgba(148, 163, 184, 0.2)",
              }}
            >
              <h3 style={{ marginTop: 0, fontSize: "18px" }}>
                موجات المهام الحاسمة
              </h3>
              <p style={{ marginTop: "8px", color: "#94a3b8" }}>
                توزيع المهام حسب التأثير، مع نقاط ضبط زمنية دقيقة.
              </p>
              <div style={{ display: "grid", gap: "12px", marginTop: "16px" }}>
                {missions.map((task) => (
                  <div
                    key={task.title}
                    style={{
                      padding: "12px 14px",
                      borderRadius: "14px",
                      border: "1px solid rgba(148, 163, 184, 0.2)",
                      background: "rgba(2, 6, 23, 0.7)",
                    }}
                  >
                    <p style={{ margin: 0, fontWeight: 600 }}>{task.title}</p>
                    <p style={{ margin: "8px 0 0", color: "#94a3b8" }}>
                      {task.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div
              style={{
                borderRadius: "20px",
                padding: "22px",
                background: "linear-gradient(135deg, #0f172a, #020617)",
                border: "1px solid rgba(99, 102, 241, 0.3)",
              }}
            >
              <h3 style={{ marginTop: 0, fontSize: "18px" }}>
                مؤشرات دقيقة
              </h3>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                  gap: "12px",
                  marginTop: "16px",
                }}
              >
                {microMetrics.map((metric) => (
                  <div
                    key={metric.label}
                    style={{
                      borderRadius: "12px",
                      padding: "12px",
                      background: "rgba(2, 6, 23, 0.7)",
                      border: "1px solid rgba(148, 163, 184, 0.2)",
                    }}
                  >
                    <p style={{ margin: 0, color: "#94a3b8", fontSize: "12px" }}>
                      {metric.label}
                    </p>
                    <p style={{ margin: "8px 0 0", fontWeight: 600 }}>
                      {metric.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          style={{
            borderRadius: "22px",
            padding: "24px",
            background: "rgba(2, 6, 23, 0.8)",
            border: "1px dashed rgba(148, 163, 184, 0.3)",
          }}
        >
          <h3 style={{ marginTop: 0, fontSize: "18px" }}>
            غرفة التحكم والتخصيص
          </h3>
          <p style={{ marginTop: "8px", color: "#94a3b8" }}>
            حدّد الأشهر، خصّص أعمدة العمل، وأضف أدوات تتبع بدقة ميكروية.
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "12px",
              marginTop: "16px",
            }}
          >
            {[
              "ضبط تحدي 7 أشهر",
              "إضافة لوحة دراسة",
              "تصميم جدول مراجعة",
              "بناء خارطة إنجاز",
              "تفعيل وضع المرعبة",
              "تصدير تقرير اليوم",
            ].map((label) => (
              <button
                key={label}
                type="button"
                style={{
                  background: "rgba(15, 23, 42, 0.6)",
                  color: "#e2e8f0",
                  border: "1px solid rgba(99, 102, 241, 0.35)",
                  borderRadius: "14px",
                  padding: "12px 16px",
                  cursor: "pointer",
                  textAlign: "right",
                }}
              >
                {label}
              </button>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
};

export default DashboardPlaceholder;

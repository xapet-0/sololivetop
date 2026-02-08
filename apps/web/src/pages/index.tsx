const DashboardPlaceholder = () => {
  const quickActions = [
    "إنشاء مهمة جديدة",
    "جدولة جلسة تركيز",
    "إضافة مؤشر أداء",
    "تعديل الأهداف الأسبوعية",
  ];

  const focusBlocks = [
    { label: "تركيز عميق", time: "08:00 - 12:00" },
    { label: "استراحة نشطة", time: "12:00 - 13:00" },
    { label: "مشاريع أساسية", time: "13:00 - 17:00" },
    { label: "مراجعة ختامية", time: "18:00 - 20:00" },
  ];

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "radial-gradient(circle at top, #111827, #020617)",
        color: "#e2e8f0",
        padding: "48px 24px",
        fontFamily: "\"Inter\", system-ui, sans-serif",
      }}
    >
      <section
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "grid",
          gap: "24px",
        }}
      >
        <header
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            gap: "16px",
            flexWrap: "wrap",
          }}
        >
          <div>
            <p style={{ margin: 0, fontSize: "14px", color: "#94a3b8" }}>
              لوحة التحكم — نظام إدارة الإنتاجية
            </p>
            <h1 style={{ margin: "8px 0 0", fontSize: "32px" }}>
              رحلة الـ Black Hole: سبعة أشهر من التحول الكامل
            </h1>
            <p style={{ margin: "12px 0 0", color: "#cbd5f5" }}>
              متابعة دقيقة بالدقيقة لأهدافك، إدارة مهامك، وتتبع وقتك اليومي.
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
                background: "#6366f1",
                color: "#f8fafc",
                border: "none",
                borderRadius: "12px",
                padding: "10px 16px",
                cursor: "pointer",
                fontWeight: 600,
              }}
            >
              بدء يوم الإنتاجية
            </button>
            <button
              type="button"
              style={{
                background: "transparent",
                color: "#e2e8f0",
                border: "1px solid #334155",
                borderRadius: "12px",
                padding: "10px 16px",
                cursor: "pointer",
              }}
            >
              تخصيص اللوحة
            </button>
          </div>
        </header>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "16px",
          }}
        >
          {[
            { label: "تقدم التحدي", value: "الأسبوع 3 من 28" },
            { label: "إجمالي الإنتاجية", value: "17 ساعة/اليوم" },
            { label: "النوم المستهدف", value: "7 ساعات ثابتة" },
            { label: "المهام الحرجة", value: "5 مهام اليوم" },
          ].map((card) => (
            <div
              key={card.label}
              style={{
                border: "1px solid #1f2937",
                borderRadius: "16px",
                padding: "20px",
                background: "rgba(15, 23, 42, 0.75)",
              }}
            >
              <p style={{ margin: 0, color: "#94a3b8", fontSize: "13px" }}>
                {card.label}
              </p>
              <h2 style={{ margin: "10px 0 0", fontSize: "22px" }}>
                {card.value}
              </h2>
            </div>
          ))}
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "16px",
          }}
        >
          <section
            style={{
              border: "1px solid #1f2937",
              borderRadius: "18px",
              padding: "24px",
              background: "rgba(2, 6, 23, 0.85)",
            }}
          >
            <h3 style={{ marginTop: 0, fontSize: "18px" }}>
              جدول تتبع الوقت
            </h3>
            <p style={{ marginTop: "8px", color: "#94a3b8" }}>
              تخطيط اليوم بالدقيقة مع توزيع 17 ساعة إنتاجية و7 ساعات نوم.
            </p>
            <div
              style={{
                display: "grid",
                gap: "12px",
                marginTop: "16px",
              }}
            >
              {focusBlocks.map((block) => (
                <div
                  key={block.label}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "12px 16px",
                    borderRadius: "12px",
                    background: "rgba(30, 41, 59, 0.8)",
                    border: "1px solid #334155",
                  }}
                >
                  <span>{block.label}</span>
                  <span style={{ color: "#94a3b8" }}>{block.time}</span>
                </div>
              ))}
            </div>
          </section>

          <section
            style={{
              border: "1px solid #1f2937",
              borderRadius: "18px",
              padding: "24px",
              background: "rgba(2, 6, 23, 0.85)",
            }}
          >
            <h3 style={{ marginTop: 0, fontSize: "18px" }}>
              إدارة المهام والمشاريع
            </h3>
            <p style={{ marginTop: "8px", color: "#94a3b8" }}>
              قسّم المهام إلى موجات، وخصص المسؤوليات، وحدد مؤشرات الإنجاز.
            </p>
            <ul style={{ padding: 0, listStyle: "none", marginTop: "16px" }}>
              {[
                "موجة اليوم: إطلاق 3 مهام عالية التأثير",
                "مراجعة التقدم مع الفريق عند 16:30",
                "تحديث مؤشر الإنجاز في نهاية اليوم",
              ].map((task) => (
                <li
                  key={task}
                  style={{
                    padding: "10px 12px",
                    borderRadius: "10px",
                    border: "1px solid #1f2937",
                    marginBottom: "10px",
                    background: "rgba(15, 23, 42, 0.6)",
                  }}
                >
                  {task}
                </li>
              ))}
            </ul>
          </section>
        </div>

        <section
          style={{
            border: "1px dashed #334155",
            borderRadius: "18px",
            padding: "24px",
            background: "rgba(15, 23, 42, 0.5)",
          }}
        >
          <h3 style={{ marginTop: 0, fontSize: "18px" }}>
            مركز التخصيص السريع
          </h3>
          <p style={{ marginTop: "8px", color: "#94a3b8" }}>
            أضف وحدات جديدة، حدّد الأشهر ضمن التحدي، وتتبع تقدمك يوميًا.
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
              gap: "12px",
              marginTop: "16px",
            }}
          >
            {quickActions.map((label) => (
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
        </section>
      </section>
    </main>
  );
};

export default DashboardPlaceholder;

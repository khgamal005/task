// SectionHeading.jsx
const SectionHeading = ({ title }) => {
  return (
    <div className="relative inline-block">
      <h2
        className="font-poppins font-semibold text-[24px] leading-[24px] mb-2"
        style={{ letterSpacing: "0", lineHeight: "100%" }}
      >
        {title}
      </h2>

      {/* Bottom line */}
      <div
        className="absolute left-0 bottom-0"
        style={{
          width: "30px",
          height: "4px",
          backgroundColor: "#BE968E",
          borderRadius: "16px",
        }}
      />
    </div>
  );
};

export default SectionHeading;
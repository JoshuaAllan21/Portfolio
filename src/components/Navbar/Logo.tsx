const Logo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width="40" height="40" viewBox="0 0 40 40" {...props}>
    <circle cx="20" cy="20" r="20" fill="#2563eb" /> {/* Blue circle */}
    <text
      x="50%" y="55%"
      textAnchor="middle"
      fill="white"
      fontSize="18"
      fontFamily="Arial, Helvetica, sans-serif"
      fontWeight="bold"
      dy=".3em"
    >
      JA
    </text>
  </svg>
)
export default Logo

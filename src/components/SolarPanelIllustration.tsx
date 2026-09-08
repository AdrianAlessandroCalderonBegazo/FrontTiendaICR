export default function SolarPanelIllustration({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 320 220" className={className} fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="panelFill" x1="40" y1="20" x2="280" y2="180" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#123a7a" />
          <stop offset="55%" stopColor="#0a2050" />
          <stop offset="100%" stopColor="#050f2e" />
        </linearGradient>
        <linearGradient id="panelSheen" x1="40" y1="20" x2="200" y2="200" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.22" />
          <stop offset="35%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* soft cloud shapes */}
      <g opacity="0.92">
        <ellipse cx="252" cy="34" rx="34" ry="16" fill="#fff" />
        <ellipse cx="278" cy="26" rx="24" ry="14" fill="#fff" />
        <ellipse cx="230" cy="26" rx="20" ry="12" fill="#fff" />
      </g>
      <g opacity="0.85">
        <ellipse cx="34" cy="150" rx="26" ry="13" fill="#fff" />
        <ellipse cx="14" cy="158" rx="18" ry="10" fill="#fff" />
      </g>

      {/* panel frame + fill */}
      <polygon points="40,60 260,20 280,140 60,180" fill="url(#panelFill)" stroke="#c7d4e6" strokeWidth="3" strokeLinejoin="round" />

      {/* grid lines: 3 vertical */}
      <line x1="95" y1="50" x2="115" y2="170" stroke="#c7d4e6" strokeWidth="1.5" opacity="0.7" />
      <line x1="150" y1="40" x2="170" y2="160" stroke="#c7d4e6" strokeWidth="1.5" opacity="0.7" />
      <line x1="205" y1="30" x2="225" y2="150" stroke="#c7d4e6" strokeWidth="1.5" opacity="0.7" />

      {/* grid lines: 2 horizontal */}
      <line x1="46.7" y1="100" x2="266.7" y2="60" stroke="#c7d4e6" strokeWidth="1.5" opacity="0.7" />
      <line x1="53.3" y1="140" x2="273.3" y2="100" stroke="#c7d4e6" strokeWidth="1.5" opacity="0.7" />

      {/* glass sheen */}
      <polygon points="40,60 260,20 280,140 60,180" fill="url(#panelSheen)" />

      {/* mounting legs */}
      <line x1="90" y1="172" x2="80" y2="212" stroke="#8a97ab" strokeWidth="6" strokeLinecap="round" />
      <line x1="240" y1="132" x2="252" y2="200" stroke="#8a97ab" strokeWidth="6" strokeLinecap="round" />
    </svg>
  )
}

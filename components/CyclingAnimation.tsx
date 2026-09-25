export default function CyclingAnimation() {
  return (
    <div className="flex h-72 w-72 items-center justify-center xl:h-80 xl:w-80">
      <svg
        viewBox="0 0 320 320"
        className="h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <style>
          {`
            @keyframes spin-wheel {
              from { transform: rotate(0deg); }
              to { transform: rotate(360deg); }
            }
            @keyframes pedal-legs {
              0%, 100% { transform: translateY(0px); }
              50% { transform: translateY(-6px); }
            }
            @keyframes bob-rider {
              0%, 100% { transform: translateY(0px); }
              50% { transform: translateY(-3px); }
            }
            .wheel-back, .wheel-front {
              transform-origin: center;
              animation: spin-wheel 1.4s linear infinite;
            }
            .rider {
              animation: bob-rider 1.4s ease-in-out infinite;
              transform-origin: center;
            }
            .leg-front {
              animation: pedal-legs 1.4s ease-in-out infinite;
              transform-origin: 168px 210px;
            }
            .leg-back {
              animation: pedal-legs 1.4s ease-in-out infinite reverse;
              transform-origin: 168px 210px;
            }
            @media (prefers-reduced-motion: reduce) {
              .wheel-back, .wheel-front, .rider, .leg-front, .leg-back {
                animation: none;
              }
            }
          `}
        </style>

        {/* ground line */}
        <line x1="30" y1="256" x2="290" y2="256" stroke="#26282d" strokeWidth="2" />

        {/* back wheel */}
        <g className="wheel-back">
          <circle cx="95" cy="220" r="46" fill="none" stroke="#ccff00" strokeWidth="5" />
          <circle cx="95" cy="220" r="5" fill="#ccff00" />
          <line x1="95" y1="220" x2="95" y2="176" stroke="#ccff00" strokeWidth="2" opacity="0.6" />
          <line x1="95" y1="220" x2="95" y2="264" stroke="#ccff00" strokeWidth="2" opacity="0.6" />
          <line x1="95" y1="220" x2="139" y2="220" stroke="#ccff00" strokeWidth="2" opacity="0.6" />
          <line x1="95" y1="220" x2="51" y2="220" stroke="#ccff00" strokeWidth="2" opacity="0.6" />
          <line x1="95" y1="220" x2="127" y2="188" stroke="#ccff00" strokeWidth="2" opacity="0.6" />
          <line x1="95" y1="220" x2="63" y2="252" stroke="#ccff00" strokeWidth="2" opacity="0.6" />
        </g>

        {/* front wheel */}
        <g className="wheel-front">
          <circle cx="225" cy="220" r="46" fill="none" stroke="#ccff00" strokeWidth="5" />
          <circle cx="225" cy="220" r="5" fill="#ccff00" />
          <line x1="225" y1="220" x2="225" y2="176" stroke="#ccff00" strokeWidth="2" opacity="0.6" />
          <line x1="225" y1="220" x2="225" y2="264" stroke="#ccff00" strokeWidth="2" opacity="0.6" />
          <line x1="225" y1="220" x2="269" y2="220" stroke="#ccff00" strokeWidth="2" opacity="0.6" />
          <line x1="225" y1="220" x2="181" y2="220" stroke="#ccff00" strokeWidth="2" opacity="0.6" />
          <line x1="225" y1="220" x2="257" y2="188" stroke="#ccff00" strokeWidth="2" opacity="0.6" />
          <line x1="225" y1="220" x2="193" y2="252" stroke="#ccff00" strokeWidth="2" opacity="0.6" />
        </g>

        {/* frame */}
        <g stroke="#f4f4f0" strokeWidth="5" strokeLinecap="round" fill="none">
          <line x1="95" y1="220" x2="150" y2="180" />
          <line x1="150" y1="180" x2="225" y2="220" />
          <line x1="150" y1="180" x2="168" y2="220" />
          <line x1="95" y1="220" x2="168" y2="220" />
          <line x1="150" y1="180" x2="140" y2="148" />
        </g>
        {/* seat + handlebar */}
        <line x1="140" y1="148" x2="122" y2="146" stroke="#f4f4f0" strokeWidth="5" strokeLinecap="round" />
        <line x1="150" y1="180" x2="150" y2="150" stroke="#f4f4f0" strokeWidth="5" strokeLinecap="round" />
        <line x1="150" y1="150" x2="168" y2="146" stroke="#f4f4f0" strokeWidth="5" strokeLinecap="round" />

        {/* rider */}
        <g className="rider">
          <circle cx="118" cy="122" r="12" fill="#ccff00" />
          <line x1="120" y1="134" x2="140" y2="170" stroke="#f4f4f0" strokeWidth="6" strokeLinecap="round" />
          <line x1="120" y1="140" x2="156" y2="152" stroke="#f4f4f0" strokeWidth="6" strokeLinecap="round" />

          <g className="leg-front">
            <line x1="140" y1="170" x2="168" y2="210" stroke="#f4f4f0" strokeWidth="6" strokeLinecap="round" />
            <line x1="168" y1="210" x2="150" y2="220" stroke="#f4f4f0" strokeWidth="6" strokeLinecap="round" />
          </g>
          <g className="leg-back">
            <line x1="140" y1="170" x2="168" y2="210" stroke="#9a9ca3" strokeWidth="6" strokeLinecap="round" opacity="0.5" />
            <line x1="168" y1="210" x2="186" y2="220" stroke="#9a9ca3" strokeWidth="6" strokeLinecap="round" opacity="0.5" />
          </g>
        </g>
      </svg>
    </div>
  );
}

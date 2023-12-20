import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedLinkedinSmIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 13 22'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M11.75 4.625c.255 0 .465.082.629.246a.912.912 0 0 1 .246.629V16a.912.912 0 0 1-.246.629.852.852 0 0 1-.629.246H1.25a.852.852 0 0 1-.629-.246A.913.913 0 0 1 .375 16V5.5c0-.237.082-.447.246-.629a.852.852 0 0 1 .629-.246zm-7.684 10.5h.028V9.273H2.262v5.852zM3.164 8.48c.31 0 .556-.1.738-.3.2-.2.31-.447.328-.739a1.137 1.137 0 0 0-.328-.765c-.182-.2-.428-.301-.738-.301-.292 0-.538.1-.738.3-.2.201-.301.457-.301.766 0 .292.1.538.3.739.201.2.447.3.74.3m7.711 6.645v-3.2c.037-.801-.091-1.467-.383-1.995-.292-.51-.884-.775-1.777-.793-.456 0-.83.1-1.121.3-.292.183-.492.392-.602.63h-.027v-.794h-1.75v5.852h1.832v-2.898c-.018-.402.036-.748.164-1.04.146-.291.447-.446.902-.464.456.036.73.21.82.52.11.327.156.674.137 1.038v2.844z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLinkedinSmIcon);
export default ForwardRef;

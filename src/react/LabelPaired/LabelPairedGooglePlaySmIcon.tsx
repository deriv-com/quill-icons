import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedGooglePlaySmIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={22}
    viewBox='0 0 14 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m8.887 10.176 1.64-1.64-7.683-4.43zM1.285 3.75l7 7-7 7a1.04 1.04 0 0 1-.601-.957V4.734c0-.437.246-.793.601-.984m11.621 6.18c.52.383.52 1.285.028 1.668l-1.641.93-1.805-1.778L11.293 9zM2.844 17.395l6.043-6.043 1.64 1.64z' />
    </g>
    <defs>
      <clipPath id='a0064c0e6ee8a0a5a1a601717df5fd58__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedGooglePlaySmIcon);
export default ForwardRef;

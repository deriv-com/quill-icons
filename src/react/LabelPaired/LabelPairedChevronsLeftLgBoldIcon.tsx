import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChevronsLeftLgBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={30}
    viewBox='0 0 20 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m1.836 14.836 7.5-7.461c.351-.39.937-.39 1.328 0a.92.92 0 0 1 0 1.29L3.79 15.5l6.836 6.875c.39.352.39.938 0 1.29a.856.856 0 0 1-1.29 0l-7.5-7.5c-.39-.352-.39-.938 0-1.33m15-7.5v.039c.352-.39.937-.39 1.328 0a.92.92 0 0 1 0 1.29l-6.875 6.874 6.836 6.836c.39.352.39.938 0 1.29a.856.856 0 0 1-1.29 0l-7.5-7.5c-.39-.352-.39-.938 0-1.33z' />
    </g>
    <defs>
      <clipPath id='a67a1f4aacac1d4760dc6e806870dc4b__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronsLeftLgBoldIcon);
export default ForwardRef;

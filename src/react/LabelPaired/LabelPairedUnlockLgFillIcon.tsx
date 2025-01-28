import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedUnlockLgFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={30}
    viewBox='0 0 18 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M5.875 11.125V13h9.375c1.367 0 2.5 1.133 2.5 2.5V23c0 1.406-1.133 2.5-2.5 2.5H2.75A2.47 2.47 0 0 1 .25 23v-7.5c0-1.367 1.094-2.5 2.5-2.5h.625v-1.875C3.375 8.039 5.875 5.5 9 5.5c2.227 0 4.18 1.328 5.078 3.242.274.625 0 1.367-.625 1.64-.586.313-1.367.04-1.64-.585C11.305 8.742 10.21 8 9 8a3.11 3.11 0 0 0-3.125 3.125' />
    </g>
    <defs>
      <clipPath id='cb548240aed8c1fbab6e2ba5eab759dd__a'>
        <path d='M0 0h18v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedUnlockLgFillIcon);
export default ForwardRef;

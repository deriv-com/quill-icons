import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSlidersSmBoldIcon = (
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
      <path d='M0 15.125c0-.355.273-.656.656-.656H2.27a2.22 2.22 0 0 1 2.105-1.531 2.21 2.21 0 0 1 2.078 1.53h6.89c.356 0 .657.302.657.657 0 .383-.3.656-.656.656h-6.89a2.17 2.17 0 0 1-2.079 1.531c-.984 0-1.832-.628-2.105-1.53H.656A.63.63 0 0 1 0 15.124m3.5 0c0 .492.383.875.875.875a.88.88 0 0 0 .875-.875.9.9 0 0 0-.875-.875.88.88 0 0 0-.875.875m5.25-4.375c0 .492.383.875.875.875a.88.88 0 0 0 .875-.875.9.9 0 0 0-.875-.875.88.88 0 0 0-.875.875m.875-2.187c.957 0 1.805.656 2.078 1.53h1.64c.356 0 .657.302.657.657 0 .383-.3.656-.656.656h-1.64a2.17 2.17 0 0 1-2.079 1.531c-.984 0-1.832-.628-2.105-1.53H.656A.63.63 0 0 1 0 10.75c0-.355.273-.656.656-.656H7.52a2.22 2.22 0 0 1 2.105-1.531M5.25 7.25a.88.88 0 0 0 .875-.875.9.9 0 0 0-.875-.875.88.88 0 0 0-.875.875c0 .492.383.875.875.875m2.078-1.531h6.016c.355 0 .656.3.656.656 0 .383-.3.656-.656.656H7.328A2.17 2.17 0 0 1 5.25 8.563c-.984 0-1.832-.63-2.105-1.532H.656A.63.63 0 0 1 0 6.375c0-.355.273-.656.656-.656h2.489A2.22 2.22 0 0 1 5.25 4.187 2.21 2.21 0 0 1 7.328 5.72' />
    </g>
    <defs>
      <clipPath id='5b21aaa2d9e9ab0ef246d4631d095fed__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSlidersSmBoldIcon);
export default ForwardRef;

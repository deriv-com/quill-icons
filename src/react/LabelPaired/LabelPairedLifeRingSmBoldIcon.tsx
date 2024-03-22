import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLifeRingSmBoldIcon = (
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
      <path d='M10.527 15.234 8.313 13.02c-.383.246-.848.355-1.313.355-.492 0-.957-.11-1.34-.355l-2.215 2.214A5.75 5.75 0 0 0 7 16.438a5.73 5.73 0 0 0 3.527-1.204m1.86 0 .3.329a.6.6 0 0 1 0 .902.6.6 0 0 1-.902 0l-.328-.3c-1.23.983-2.762 1.585-4.457 1.585a7.1 7.1 0 0 1-4.484-1.586l-.328.3a.6.6 0 0 1-.903 0c-.273-.245-.273-.655 0-.929l.3-.3A7.1 7.1 0 0 1 0 10.75c0-1.695.602-3.227 1.586-4.457l-.3-.328c-.274-.246-.274-.656 0-.93.245-.246.655-.246.929 0l.3.328C3.747 4.38 5.278 3.75 7 3.75c1.695 0 3.227.629 4.457 1.613l.328-.3c.246-.274.656-.274.93 0a.644.644 0 0 1 0 .902l-.328.328C13.37 7.523 14 9.055 14 10.75c0 1.723-.629 3.254-1.613 4.484m-.93-.93a5.77 5.77 0 0 0 1.23-3.554 5.75 5.75 0 0 0-1.23-3.527L9.242 9.438c.246.382.383.847.383 1.312 0 .492-.137.957-.383 1.34zm-.93-8.011A5.75 5.75 0 0 0 7 5.063c-1.34 0-2.57.464-3.555 1.23L5.66 8.508a2.45 2.45 0 0 1 1.313-.383c.492 0 .957.137 1.34.383zM4.73 12.09c-.246-.383-.355-.848-.355-1.313 0-.492.11-.957.355-1.34L2.516 7.224a5.73 5.73 0 0 0-1.203 3.527c0 1.34.437 2.57 1.203 3.555zm.957-1.34c0 .492.247.902.657 1.148.383.247.902.247 1.312 0 .383-.246.657-.656.657-1.148 0-.465-.274-.875-.657-1.121-.41-.246-.93-.246-1.312 0-.41.246-.657.656-.657 1.121' />
    </g>
    <defs>
      <clipPath id='a4ab5bf7630887bdd6219cadaad5b42c__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLifeRingSmBoldIcon);
export default ForwardRef;

import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMobileNotchRotateSmBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={22}
    viewBox='0 0 16 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M.563 5.938c0-1.204.957-2.188 2.187-2.188H8c1.203 0 2.188.984 2.188 2.188v3.39c-.137.055-.274.137-.41.192-.22-.274-.548-.438-.903-.493v-3.09A.9.9 0 0 0 8 5.063h-.875V5.5a.45.45 0 0 1-.437.438H4.063a.43.43 0 0 1-.438-.438v-.437H2.75a.88.88 0 0 0-.875.875v9.625c0 .492.383.874.875.874h5.14c.274.438.63.82 1.012 1.122A2.06 2.06 0 0 1 8 17.75H2.75a2.16 2.16 0 0 1-2.187-2.187zM8 10.53c0-.355.273-.656.656-.656.356 0 .656.3.656.656v.356a3.87 3.87 0 0 1 2.626-1.012c1.613 0 2.98.984 3.609 2.379a.655.655 0 0 1-.356.848.62.62 0 0 1-.847-.329 2.65 2.65 0 0 0-2.406-1.585c-.793 0-1.477.355-1.97.874h.876c.355 0 .656.301.656.657 0 .383-.3.656-.656.656H8.656A.63.63 0 0 1 8 12.719zm.328 4.867c-.164-.328 0-.71.328-.875.328-.136.711.028.875.356.383.93 1.313 1.559 2.406 1.559.766 0 1.477-.329 1.942-.875h-.848a.63.63 0 0 1-.656-.657c0-.355.273-.656.656-.656h2.188c.355 0 .656.3.656.656v2.188c0 .383-.3.656-.656.656a.63.63 0 0 1-.656-.656v-.328c-.711.629-1.641.984-2.626.984a3.89 3.89 0 0 1-3.609-2.352' />
    </g>
    <defs>
      <clipPath id='635254621534899e7cb920bfb2f15a8b__a'>
        <path d='M0 0h16v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMobileNotchRotateSmBoldIcon);
export default ForwardRef;

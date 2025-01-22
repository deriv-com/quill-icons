import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedEllipsisVerticalCaptionBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={3}
    height={18}
    viewBox='0 0 3 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.5 12.125c.398 0 .75.234.96.563.212.351.212.796 0 1.124a1.122 1.122 0 0 1-1.945 0 1.08 1.08 0 0 1 0-1.124c.212-.329.563-.563.985-.563m0-3.75c.398 0 .75.234.96.563.212.351.212.796 0 1.124a1.122 1.122 0 0 1-1.945 0 1.08 1.08 0 0 1 0-1.124c.212-.329.563-.563.985-.563M2.625 5.75c0 .422-.234.773-.562.984-.352.211-.797.211-1.126 0a1.122 1.122 0 0 1 0-1.945c.329-.21.774-.21 1.126 0 .328.211.562.563.562.961' />
    </g>
    <defs>
      <clipPath id='d2bacccd4d15e9d06099bef9c586048f__a'>
        <path d='M0 0h3v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedEllipsisVerticalCaptionBoldIcon);
export default ForwardRef;

import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedWindowMaximizeCaptionBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={18}
    viewBox='0 0 12 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M0 5.61c.023-.212.07-.4.164-.563.14-.234.328-.445.586-.586.164-.094.375-.164.586-.188.047 0 .094-.023.164-.023h9c.82 0 1.5.68 1.5 1.5v7.5c0 .844-.68 1.5-1.5 1.5h-9a1.48 1.48 0 0 1-1.5-1.5V5.61m1.125 3.14v4.5c0 .21.164.375.375.375h9a.385.385 0 0 0 .375-.375v-4.5z' />
    </g>
    <defs>
      <clipPath id='92ffa4301e19939d3146c5b1a98d7c2c__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedWindowMaximizeCaptionBoldIcon);
export default ForwardRef;

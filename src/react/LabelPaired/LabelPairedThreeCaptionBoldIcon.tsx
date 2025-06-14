import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedThreeCaptionBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={8}
    height={18}
    viewBox='0 0 8 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M.25 4.813c0-.305.234-.563.563-.563h6c.21 0 .421.14.515.375.094.21.024.445-.14.61L3.695 8.561h.961c1.688 0 3.094 1.407 3.094 3.094a3.106 3.106 0 0 1-3.094 3.094H2.523a2.46 2.46 0 0 1-2.18-1.336l-.046-.094a.555.555 0 0 1 .258-.75.555.555 0 0 1 .75.258l.047.07c.21.446.68.727 1.171.727h2.133a1.966 1.966 0 0 0 1.969-1.969 1.98 1.98 0 0 0-1.969-1.969H2.313a.59.59 0 0 1-.54-.351.59.59 0 0 1 .141-.61l3.492-3.351H.813a.54.54 0 0 1-.563-.562' />
    </g>
    <defs>
      <clipPath id='a8288b14c3f267abb938cf699b16eb1b__a'>
        <path d='M0 0h8v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedThreeCaptionBoldIcon);
export default ForwardRef;

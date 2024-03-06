import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChevronsLeftCaptionBoldIcon = (
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
      <path d='m1.102 9.102 4.5-4.5q.397-.33.796 0 .33.397 0 .796L2.297 9.5l4.101 4.102q.33.397 0 .796-.397.33-.796 0l-4.5-4.5q-.33-.397 0-.796m9-4.5q.397-.33.796 0 .33.397 0 .796L6.797 9.5l4.101 4.102q.33.397 0 .796-.397.33-.796 0l-4.5-4.5q-.33-.397 0-.796z' />
    </g>
    <defs>
      <clipPath id='e15c0bc66c3794443e4eeaa63883670b__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronsLeftCaptionBoldIcon);
export default ForwardRef;

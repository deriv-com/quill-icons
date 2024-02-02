import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChevronLeftCaptionBoldIcon = (
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
      <path d='m.602 9.102 4.5-4.5q.397-.33.796 0 .33.397 0 .796L1.797 9.5l4.101 4.102q.33.397 0 .796-.397.33-.796 0l-4.5-4.5q-.33-.397 0-.796' />
    </g>
    <defs>
      <clipPath id='f18f3314312bdddb4e378142c69e8e9f__a'>
        <path d='M0 0h8v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronLeftCaptionBoldIcon);
export default ForwardRef;

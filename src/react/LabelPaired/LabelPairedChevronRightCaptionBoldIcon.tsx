import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChevronRightCaptionBoldIcon = (
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
      <path d='M7.398 9.102q.33.397 0 .796l-4.5 4.5q-.397.33-.796 0-.33-.397 0-.796L6.203 9.5 2.102 5.398q-.33-.397 0-.796.397-.33.796 0z' />
    </g>
    <defs>
      <clipPath id='b1e0af5c000967b718e53671f2bd3593__a'>
        <path d='M0 0h8v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronRightCaptionBoldIcon);
export default ForwardRef;

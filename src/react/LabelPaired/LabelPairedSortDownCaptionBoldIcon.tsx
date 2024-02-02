import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSortDownCaptionBoldIcon = (
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
      <path d='m4 13.46 2.086-2.085H1.914zm-.54 1.08-3-3q-.327-.375-.163-.821A.77.77 0 0 1 1 10.25h6a.77.77 0 0 1 .703.469q.165.445-.164.82l-3 3A.78.78 0 0 1 4 14.75a.78.78 0 0 1-.54-.21' />
    </g>
    <defs>
      <clipPath id='f8cd6a29644eb240__a'>
        <path d='M0 0h8v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSortDownCaptionBoldIcon);
export default ForwardRef;

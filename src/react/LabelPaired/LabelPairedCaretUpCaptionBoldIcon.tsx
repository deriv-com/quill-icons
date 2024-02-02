import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCaretUpCaptionBoldIcon = (
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
      <path d='M4 7.79 1.914 9.874h4.172zm-.54-1.08A.78.78 0 0 1 4 6.5q.305 0 .54.21l3 3q.327.375.163.821A.77.77 0 0 1 7 11H1a.77.77 0 0 1-.703-.469q-.165-.445.164-.82z' />
    </g>
    <defs>
      <clipPath id='ecc66748ef8b1890__a'>
        <path d='M0 0h8v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCaretUpCaptionBoldIcon);
export default ForwardRef;

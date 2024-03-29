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
      <path d='M4 7.79 1.89 9.874h4.196zm-.54-1.056a.723.723 0 0 1 1.056 0l3 3c.21.211.28.54.164.82A.715.715 0 0 1 7 11H1a.75.75 0 0 1-.703-.445.76.76 0 0 1 .164-.82z' />
    </g>
    <defs>
      <clipPath id='d276a9093f0034dc9ca914bf531fc206__a'>
        <path d='M0 0h8v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCaretUpCaptionBoldIcon);
export default ForwardRef;

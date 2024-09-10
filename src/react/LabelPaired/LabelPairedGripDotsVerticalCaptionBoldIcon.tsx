import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedGripDotsVerticalCaptionBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={6}
    height={18}
    viewBox='0 0 6 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.5 6.5a.74.74 0 0 1-.75-.75c0-.398.328-.75.75-.75.398 0 .75.352.75.75 0 .422-.352.75-.75.75m0 3.75a.74.74 0 0 1-.75-.75c0-.398.328-.75.75-.75.398 0 .75.352.75.75 0 .422-.352.75-.75.75m.75 3c0 .422-.352.75-.75.75a.74.74 0 0 1-.75-.75c0-.398.328-.75.75-.75.398 0 .75.352.75.75M4.5 6.5a.74.74 0 0 1-.75-.75c0-.398.328-.75.75-.75.398 0 .75.352.75.75 0 .422-.352.75-.75.75m.75 3c0 .422-.352.75-.75.75a.74.74 0 0 1-.75-.75c0-.398.328-.75.75-.75.398 0 .75.352.75.75M4.5 14a.74.74 0 0 1-.75-.75c0-.398.328-.75.75-.75.398 0 .75.352.75.75 0 .422-.352.75-.75.75' />
    </g>
    <defs>
      <clipPath id='cbf5fe509a38b767d8bd345139090d91__a'>
        <path d='M0 0h6v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedGripDotsVerticalCaptionBoldIcon);
export default ForwardRef;

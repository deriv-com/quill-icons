import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpRightCaptionFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={9}
    height={18}
    viewBox='0 0 9 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M8.25 6.5v5.25c0 .422-.352.75-.75.75a.74.74 0 0 1-.75-.75V8.328L2.016 13.04a.723.723 0 0 1-1.055 0 .723.723 0 0 1 0-1.055L5.67 7.25H2.25a.74.74 0 0 1-.75-.75c0-.398.328-.75.75-.75H7.5c.398 0 .75.352.75.75' />
    </g>
    <defs>
      <clipPath id='e0807c0101fcc4115491a61aa47a1d3b__a'>
        <path d='M0 0h9v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpRightCaptionFillIcon);
export default ForwardRef;

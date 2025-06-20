import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedEuroSignCaptionFillIcon = (
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
      <path d='M1.375 9.125H1a.74.74 0 0 1-.75-.75c0-.398.328-.75.75-.75h.656A5.09 5.09 0 0 1 6.438 4.25H7c.398 0 .75.352.75.75 0 .422-.352.75-.75.75h-.562c-1.36 0-2.555.773-3.141 1.875H6.25c.398 0 .75.352.75.75 0 .422-.352.75-.75.75H2.875v.75H6.25c.398 0 .75.352.75.75 0 .422-.352.75-.75.75H3.297a3.53 3.53 0 0 0 3.14 1.875H7c.398 0 .75.352.75.75 0 .422-.352.75-.75.75h-.562c-2.204 0-4.102-1.406-4.782-3.375H1a.74.74 0 0 1-.75-.75c0-.398.328-.75.75-.75h.375v-.75' />
    </g>
    <defs>
      <clipPath id='efba26dc71a82d2e47f838cf02dae730__a'>
        <path d='M0 0h8v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedEuroSignCaptionFillIcon);
export default ForwardRef;

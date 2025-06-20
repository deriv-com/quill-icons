import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowDownLeftCaptionFillIcon = (
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
      <path d='M.75 12.5V7.25c0-.398.328-.75.75-.75.398 0 .75.352.75.75v3.445l4.71-4.71a.723.723 0 0 1 1.056 0 .723.723 0 0 1 0 1.054L3.305 11.75H6.75c.398 0 .75.352.75.75 0 .422-.352.75-.75.75H1.5a.74.74 0 0 1-.75-.75' />
    </g>
    <defs>
      <clipPath id='693b4edea8b319f77dc460d1954d9137__a'>
        <path d='M0 0h9v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownLeftCaptionFillIcon);
export default ForwardRef;

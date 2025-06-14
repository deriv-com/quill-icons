import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpFromBracketCaptionFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={11}
    height={18}
    viewBox='0 0 11 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m6.016 3.734 3 3a.723.723 0 0 1 0 1.055.723.723 0 0 1-1.055 0L6.25 6.08V11c0 .422-.352.75-.75.75a.74.74 0 0 1-.75-.75V6.078L3.016 7.79a.723.723 0 0 1-1.055 0 .723.723 0 0 1 0-1.055l3-3a.723.723 0 0 1 1.055 0M1.75 11.75v1.5c0 .422.328.75.75.75h6c.398 0 .75-.328.75-.75v-1.5c0-.398.328-.75.75-.75.398 0 .75.352.75.75v1.5A2.25 2.25 0 0 1 8.5 15.5h-6a2.25 2.25 0 0 1-2.25-2.25v-1.5c0-.398.328-.75.75-.75.398 0 .75.352.75.75' />
    </g>
    <defs>
      <clipPath id='b8df657a6b3cae298829b3d1d8a09e8c__a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpFromBracketCaptionFillIcon);
export default ForwardRef;

import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSlidersCaptionFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={18}
    viewBox='0 0 12 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M0 13.25c0-.398.328-.75.75-.75h1.266a1.92 1.92 0 0 1 1.734-1.125c.75 0 1.43.469 1.71 1.125h5.79c.398 0 .75.352.75.75 0 .422-.352.75-.75.75H5.46a1.85 1.85 0 0 1-1.71 1.125A1.88 1.88 0 0 1 2.016 14H.75a.74.74 0 0 1-.75-.75m3 0c0 .422.328.75.75.75.398 0 .75-.328.75-.75a.77.77 0 0 0-.75-.75.755.755 0 0 0-.75.75M7.5 9.5c0 .422.328.75.75.75.398 0 .75-.328.75-.75a.77.77 0 0 0-.75-.75.755.755 0 0 0-.75.75m.75-1.875c.75 0 1.43.469 1.71 1.125h1.29c.398 0 .75.352.75.75 0 .422-.352.75-.75.75H9.96a1.85 1.85 0 0 1-1.71 1.125 1.88 1.88 0 0 1-1.734-1.125H.75A.74.74 0 0 1 0 9.5c0-.398.328-.75.75-.75h5.766A1.92 1.92 0 0 1 8.25 7.625M4.5 6.5c.398 0 .75-.328.75-.75A.77.77 0 0 0 4.5 5a.755.755 0 0 0-.75.75c0 .422.328.75.75.75M6.21 5h5.04c.398 0 .75.352.75.75 0 .422-.352.75-.75.75H6.21A1.85 1.85 0 0 1 4.5 7.625 1.88 1.88 0 0 1 2.766 6.5H.75A.74.74 0 0 1 0 5.75C0 5.352.328 5 .75 5h2.016A1.92 1.92 0 0 1 4.5 3.875c.75 0 1.43.469 1.71 1.125' />
    </g>
    <defs>
      <clipPath id='4427ff7b23866edbfccbb092c0c449b6__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSlidersCaptionFillIcon);
export default ForwardRef;

import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpToLineCaptionFillIcon = (
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
      <path d='M.75 4.25h7.5c.398 0 .75.352.75.75 0 .422-.352.75-.75.75H.75A.74.74 0 0 1 0 5c0-.398.328-.75.75-.75m4.266 3.234 3 3a.723.723 0 0 1 0 1.055.723.723 0 0 1-1.055 0L5.25 9.83V14c0 .422-.352.75-.75.75a.74.74 0 0 1-.75-.75V9.828L2.016 11.54a.723.723 0 0 1-1.055 0 .723.723 0 0 1 0-1.055l3-3a.723.723 0 0 1 1.055 0' />
    </g>
    <defs>
      <clipPath id='971a97135ebd33f5be3ffb8d880a329a__a'>
        <path d='M0 0h9v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpToLineCaptionFillIcon);
export default ForwardRef;

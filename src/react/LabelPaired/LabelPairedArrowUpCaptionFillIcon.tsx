import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpCaptionFillIcon = (
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
      <path d='m5.016 4.484 3.75 3.75a.723.723 0 0 1 0 1.055.723.723 0 0 1-1.055 0L5.25 6.83V14c0 .422-.352.75-.75.75a.74.74 0 0 1-.75-.75V6.828L1.266 9.29a.723.723 0 0 1-1.055 0 .723.723 0 0 1 0-1.055l3.75-3.75a.723.723 0 0 1 1.055 0' />
    </g>
    <defs>
      <clipPath id='7a5b1d83b103eec00a4a109f698a532f__a'>
        <path d='M0 0h9v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpCaptionFillIcon);
export default ForwardRef;

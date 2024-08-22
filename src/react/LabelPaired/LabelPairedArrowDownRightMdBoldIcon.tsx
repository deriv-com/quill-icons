import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowDownRightMdBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={24}
    viewBox='0 0 12 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M10.25 17h-7.5a.72.72 0 0 1-.75-.75.74.74 0 0 1 .75-.75h5.688l-7.22-7.219c-.312-.281-.312-.75 0-1.062.282-.282.75-.282 1.063 0l7.219 7.25V8.75a.74.74 0 0 1 .75-.75.76.76 0 0 1 .75.75v7.5a.74.74 0 0 1-.75.75' />
    </g>
    <defs>
      <clipPath id='720a06e729a2b9847502ac5ac3d68743__a'>
        <path d='M0 0h12v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownRightMdBoldIcon);
export default ForwardRef;

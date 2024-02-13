import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowDownRightXlRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={36}
    viewBox='0 0 18 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M15.75 25.5H5.25q-.703-.046-.75-.75.046-.704.75-.75h8.672L1.734 11.766q-.468-.516 0-1.032.516-.468 1.032 0L15 22.922V14.25q.047-.703.75-.75.704.047.75.75v10.5q-.046.704-.75.75' />
    </g>
    <defs>
      <clipPath id='3a2d66834c7281f1bd9580e6970591c8__a'>
        <path d='M0 0h18v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownRightXlRegularIcon);
export default ForwardRef;

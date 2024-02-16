import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowDownRightMdRegularIcon = (
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
      <path d='M10.5 17h-7q-.469-.03-.5-.5.031-.469.5-.5h5.781L1.156 7.844q-.312-.345 0-.688.345-.312.688 0L10 15.281V9.5q.031-.469.5-.5.47.031.5.5v7q-.03.47-.5.5' />
    </g>
    <defs>
      <clipPath id='c7226bc607733428e2f97001cb2b6018__a'>
        <path d='M0 0h12v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownRightMdRegularIcon);
export default ForwardRef;

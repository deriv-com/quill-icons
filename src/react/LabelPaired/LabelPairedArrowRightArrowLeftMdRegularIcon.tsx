import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowRightArrowLeftMdRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={24}
    viewBox='0 0 14 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m13.844 8.344-3 3q-.345.312-.688 0-.312-.345 0-.688L12.281 8.5H.5Q.031 8.47 0 8q.031-.469.5-.5h11.781l-2.125-2.156q-.312-.345 0-.688.345-.312.688 0l3 3q.312.345 0 .688m-10.688 11-3-3q-.312-.345 0-.688l3-3q.345-.312.688 0 .312.345 0 .688L1.719 15.5H13.5q.47.031.5.5-.03.47-.5.5H1.719l2.125 2.156q.312.345 0 .688-.345.312-.688 0' />
    </g>
    <defs>
      <clipPath id='def4e65f7db12682fb33b7d089376f3c__a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowRightArrowLeftMdRegularIcon);
export default ForwardRef;

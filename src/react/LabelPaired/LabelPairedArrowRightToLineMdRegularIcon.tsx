import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowRightToLineMdRegularIcon = (
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
      <path d='M14 6.5v11q-.03.47-.5.5-.469-.03-.5-.5v-11q.031-.469.5-.5.47.031.5.5m-3.156 5.844-4 4q-.345.312-.688 0-.312-.345 0-.688L9.281 12.5H.5q-.469-.03-.5-.5.031-.469.5-.5h8.781L6.156 8.344q-.312-.345 0-.688.345-.312.688 0l4 4q.312.345 0 .688' />
    </g>
    <defs>
      <clipPath id='8c947635b9efb738ec09dcdb10f635ad__a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowRightToLineMdRegularIcon);
export default ForwardRef;

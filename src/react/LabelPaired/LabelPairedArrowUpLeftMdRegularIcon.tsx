import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpLeftMdRegularIcon = (
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
      <path d='M1.5 7h7q.47.031.5.5-.03.47-.5.5H2.719l8.125 8.156q.312.345 0 .688-.345.312-.688 0L2 8.719V14.5q-.03.47-.5.5-.469-.03-.5-.5v-7q.031-.469.5-.5' />
    </g>
    <defs>
      <clipPath id='07804e70ca671f6022469c9d9cf42302__a'>
        <path d='M0 0h12v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpLeftMdRegularIcon);
export default ForwardRef;

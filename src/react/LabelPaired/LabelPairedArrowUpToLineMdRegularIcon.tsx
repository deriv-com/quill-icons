import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpToLineMdRegularIcon = (
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
      <path d='M.5 5h11q.47.031.5.5-.03.47-.5.5H.5q-.469-.03-.5-.5.031-.469.5-.5m5.844 3.156 4 4q.312.345 0 .688-.345.312-.688 0L6.5 9.719V18.5q-.03.47-.5.5-.469-.03-.5-.5V9.719l-3.156 3.125q-.345.312-.688 0-.312-.345 0-.688l4-4q.345-.312.688 0' />
    </g>
    <defs>
      <clipPath id='5fe2e71dd0a4644452daf31cb770539d__a'>
        <path d='M0 0h12v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpToLineMdRegularIcon);
export default ForwardRef;

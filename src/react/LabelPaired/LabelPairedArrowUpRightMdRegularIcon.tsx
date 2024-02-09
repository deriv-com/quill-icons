import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpRightMdRegularIcon = (
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
      <path d='M10.5 7q.47.031.5.5v7q-.03.47-.5.5-.469-.03-.5-.5V8.719l-8.156 8.125q-.345.312-.688 0-.312-.345 0-.688L9.281 8H3.5q-.469-.03-.5-.5.031-.469.5-.5z' />
    </g>
    <defs>
      <clipPath id='2ff3b655b93afe6900626b7858900c28__a'>
        <path d='M0 0h12v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpRightMdRegularIcon);
export default ForwardRef;

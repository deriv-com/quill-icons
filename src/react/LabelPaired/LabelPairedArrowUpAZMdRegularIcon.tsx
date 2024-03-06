import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpAZMdRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={24}
    viewBox='0 0 18 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m5.344 5.156 3 3q.312.345 0 .688-.345.312-.688 0L5.5 6.719V18.5q-.03.47-.5.5-.469-.03-.5-.5V6.719L2.344 8.844q-.345.312-.688 0-.312-.345 0-.688l3-3q.345-.312.688 0M11 13h4q.312 0 .438.281a.54.54 0 0 1-.032.531L12.031 18H15q.47.031.5.5-.03.47-.5.5h-4a.44.44 0 0 1-.437-.281.5.5 0 0 1 .062-.532L13.969 14H11q-.469-.03-.5-.5.031-.469.5-.5m2-8q.312 0 .438.281l2 4h.03l.47 1q.187.437-.22.656-.405.189-.655-.218L14.687 10h-3.374l-.376.719q-.218.406-.656.219-.406-.219-.219-.657l.5-1 2-4A.44.44 0 0 1 13 5m-1.187 4h2.374L13 6.625z' />
    </g>
    <defs>
      <clipPath id='ce789898b12477856c2986188bf1545c__a'>
        <path d='M0 0h18v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpAZMdRegularIcon);
export default ForwardRef;

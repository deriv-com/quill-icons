import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowLeftToLineMdRegularIcon = (
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
      <path d='M0 17.5v-11q.031-.469.5-.5.47.031.5.5v11q-.03.47-.5.5-.469-.03-.5-.5m3.156-5.844 4-4q.345-.312.688 0 .312.345 0 .688L4.719 11.5H13.5q.47.031.5.5-.03.47-.5.5H4.719l3.125 3.156q.312.345 0 .688-.345.312-.688 0l-4-4q-.312-.345 0-.688' />
    </g>
    <defs>
      <clipPath id='87e60e45e6afc2163e49ce2b6e125801__a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowLeftToLineMdRegularIcon);
export default ForwardRef;

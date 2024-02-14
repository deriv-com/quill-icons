import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowDownLeftMdRegularIcon = (
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
      <path d='M1.5 17q-.469-.03-.5-.5v-7q.031-.469.5-.5.47.031.5.5v5.781l8.156-8.125q.345-.312.688 0 .312.345 0 .688L2.719 16H8.5q.47.031.5.5-.03.47-.5.5z' />
    </g>
    <defs>
      <clipPath id='e32ec75c4388bc02bf659cc5aa218e4a__a'>
        <path d='M0 0h12v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownLeftMdRegularIcon);
export default ForwardRef;

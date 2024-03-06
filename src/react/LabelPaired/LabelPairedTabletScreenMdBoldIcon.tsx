import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedTabletScreenMdBoldIcon = (
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
      <path d='M1.5 18q.031.47.5.5h10q.47-.03.5-.5v-2.5h-11zm0-4h11V6q-.03-.469-.5-.5H2q-.469.031-.5.5zM0 6q.03-.843.594-1.406Q1.157 4.032 2 4h10q.844.03 1.406.594Q13.97 5.156 14 6v12q-.03.844-.594 1.406-.563.563-1.406.594H2q-.843-.03-1.406-.594Q.032 18.844 0 18zm6 10.5h2q.47.031.5.5-.03.47-.5.5H6q-.469-.03-.5-.5.031-.469.5-.5' />
    </g>
    <defs>
      <clipPath id='1f6fd1af28d6c4b6a281e3ee7cf83c8a__a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedTabletScreenMdBoldIcon);
export default ForwardRef;

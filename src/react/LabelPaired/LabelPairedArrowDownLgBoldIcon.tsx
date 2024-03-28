import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowDownLgBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={30}
    viewBox='0 0 15 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M6.797 23.977.234 17.102c-.351-.391-.351-.977.04-1.329.39-.351.976-.351 1.328.04l4.96 5.195V7.688c0-.508.391-.938.938-.938a.95.95 0 0 1 .938.938v13.32l4.921-5.195a.93.93 0 0 1 1.329-.04c.39.352.39.938.039 1.329l-6.563 6.875a.92.92 0 0 1-.664.273c-.273 0-.508-.078-.703-.273' />
    </g>
    <defs>
      <clipPath id='883bb2d93151bea8b6b6105f74713e74__a'>
        <path d='M0 0h15v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownLgBoldIcon);
export default ForwardRef;

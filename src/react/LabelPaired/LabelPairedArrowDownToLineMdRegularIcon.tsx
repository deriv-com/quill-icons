import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowDownToLineMdRegularIcon = (
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
      <path d='M.5 19q-.469-.03-.5-.5.031-.469.5-.5h11q.47.031.5.5-.03.47-.5.5zm5.844-3.156q-.345.312-.688 0l-4-4q-.312-.345 0-.688.345-.312.688 0L5.5 14.281V5.5q.031-.469.5-.5.47.031.5.5v8.781l3.156-3.125q.345-.312.688 0 .312.345 0 .688z' />
    </g>
    <defs>
      <clipPath id='1cbef24bb1147a352a0509ca1f86c667__a'>
        <path d='M0 0h12v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownToLineMdRegularIcon);
export default ForwardRef;

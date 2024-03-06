import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowDownRightMdBoldIcon = (
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
      <path d='M10.25 17h-7.5q-.687-.063-.75-.75.063-.687.75-.75h5.688l-7.22-7.219q-.435-.531 0-1.062.533-.438 1.063 0L9.5 14.438V8.75q.063-.687.75-.75.687.063.75.75v7.5q-.063.687-.75.75' />
    </g>
    <defs>
      <clipPath id='5b4b8772b27644fcfc4620b2574b7646__a'>
        <path d='M0 0h12v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownRightMdBoldIcon);
export default ForwardRef;

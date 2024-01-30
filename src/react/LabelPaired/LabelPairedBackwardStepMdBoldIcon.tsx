import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBackwardStepMdBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={10}
    height={24}
    viewBox='0 0 10 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2.5 6.75v3.281l5.531-3.875A.9.9 0 0 1 8.562 6q.407 0 .657.281a.84.84 0 0 1 .281.657v10.125q0 .406-.281.656a.84.84 0 0 1-.656.281 1 1 0 0 1-.532-.156L2.5 13.969v3.281q-.063.687-.75.75-.687-.063-.75-.75V6.75q.063-.687.75-.75.687.063.75.75m0 5.375L8 16V8.031l-5.5 3.844z' />
    </g>
    <defs>
      <clipPath id='93898cf8517f0d658fb6662d4b7046dd__a'>
        <path d='M0 0h10v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBackwardStepMdBoldIcon);
export default ForwardRef;

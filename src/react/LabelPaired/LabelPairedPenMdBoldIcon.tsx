import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPenMdBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={24}
    viewBox='0 0 16 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.125 15.281a2.66 2.66 0 0 1 .719-1.156l9.5-9.531q.624-.563 1.406-.563.813 0 1.406.563l1.25 1.25.25.312a2 2 0 0 1 .313 1.282q-.063.687-.563 1.218l-9.5 9.5-.125.125a3 3 0 0 1-1.062.594l-2.438.719-1.312.375a.71.71 0 0 1-.75-.188.71.71 0 0 1-.188-.75l.375-1.312zm1.438.406-.188.75-.531 1.72 1.719-.5.75-.22q.28-.093.53-.312l7.126-7.156L10.03 8.03l-7.125 7.125-.031.031-.031.032a1.6 1.6 0 0 0-.281.469' />
    </g>
    <defs>
      <clipPath id='8b5cfa55a8a0315b1be87eed68f22231__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPenMdBoldIcon);
export default ForwardRef;

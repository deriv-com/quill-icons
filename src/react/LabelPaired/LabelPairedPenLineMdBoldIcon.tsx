import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPenLineMdBoldIcon = (
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
      <path d='m.406 17.719.719-2.438a2.66 2.66 0 0 1 .719-1.156l9.5-9.531a1.98 1.98 0 0 1 1.406-.563q.781 0 1.406.563l1.25 1.25q.126.125.25.312a2 2 0 0 1 .313 1.282q-.063.687-.563 1.218l-9.5 9.5-.125.125a3 3 0 0 1-1.062.594l-2.438.719-1.312.375a.71.71 0 0 1-.75-.188q-.281-.312-.188-.75zm1.969-1.282-.531 1.72 1.719-.5.75-.22q.28-.093.53-.312l7.126-7.156L10.03 8.03l-7.125 7.125-.062.063a1.6 1.6 0 0 0-.281.469zM7.75 18.5h9.5q.687.063.75.75-.063.687-.75.75h-9.5q-.687-.063-.75-.75.063-.687.75-.75' />
    </g>
    <defs>
      <clipPath id='87421772abeeeb5b6a5e674ce8476d26__a'>
        <path d='M0 0h18v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPenLineMdBoldIcon);
export default ForwardRef;

import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMapMdRegularIcon = (
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
      <path d='M5.313 5.063a.37.37 0 0 1 .312-.032L12.469 7l4.5-1.812C17.437 5 18 5.344 18 5.875v10.469a.7.7 0 0 1-.5.687l-4.844 1.938c-.094.062-.187.062-.312.031L5.5 17.031 1 18.844a.733.733 0 0 1-1-.688V7.688C0 7.375.188 7.094.469 7zM1 7.842v9.938l4-1.593V6.25zm11 10V7.907L6 6.188v9.937zm1-.062 4-1.593V6.25l-4 1.594z' />
    </g>
    <defs>
      <clipPath id='448ccc174b9ca747da131bed5d19265e__a'>
        <path d='M0 0h18v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMapMdRegularIcon);
export default ForwardRef;

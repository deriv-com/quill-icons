import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMapMdFillIcon = (
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
      <path d='m12 18.906-6-1.718V5.124l6 1.719zm1-.062V6.78l3.969-1.593C17.437 5 18 5.344 18 5.875v10.469a.7.7 0 0 1-.5.687zM.469 7 5 5.188V17.25l-4 1.594a.733.733 0 0 1-1-.688V7.688C0 7.375.188 7.094.469 7' />
    </g>
    <defs>
      <clipPath id='cae98ecac22bc27de853a3e42dbfd9b5__a'>
        <path d='M0 0h18v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMapMdFillIcon);
export default ForwardRef;

import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMapMdBoldIcon = (
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
      <path d='M17.656 5.156A.71.71 0 0 1 18 5.75v10.5c0 .313-.219.594-.5.719l-5.25 2a.7.7 0 0 1-.5 0L6 17.062 1 18.97a.68.68 0 0 1-.687-.094C.093 18.75 0 18.5 0 18.25V7.75c0-.312.188-.562.469-.687l5.25-2a.7.7 0 0 1 .5 0l5.75 1.906 5-1.907a.68.68 0 0 1 .687.094M1.5 8.281v8.907l3.75-1.438V6.844zm9.75 8.938V8.312l-4.5-1.5v8.907zm1.5-.032 3.75-1.437V6.844L12.75 8.28z' />
    </g>
    <defs>
      <clipPath id='23c1884c023e6abeefbaef0229c28c43__a'>
        <path d='M0 0h18v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMapMdBoldIcon);
export default ForwardRef;

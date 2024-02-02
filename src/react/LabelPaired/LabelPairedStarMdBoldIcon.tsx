import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedStarMdBoldIcon = (
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
      <path d='M9 4q.47.03.688.438l2.124 4.406 4.782.687q.468.095.625.531a.71.71 0 0 1-.188.75l-3.468 3.438.812 4.875q.063.438-.312.75a.71.71 0 0 1-.782.031L9 17.625l-4.281 2.281q-.407.219-.782-.062t-.312-.719l.813-4.875-3.47-3.437a.71.71 0 0 1-.187-.75.78.78 0 0 1 .625-.532l4.782-.687 2.125-4.406A.79.79 0 0 1 9 4m0 2.469L7.344 9.844q-.156.344-.563.437l-3.687.531L5.78 13.47q.25.28.219.656l-.656 3.75 3.312-1.75a.68.68 0 0 1 .688 0l3.281 1.75-.625-3.75a.72.72 0 0 1 .219-.656l2.687-2.656-3.687-.532q-.407-.093-.563-.437z' />
    </g>
    <defs>
      <clipPath id='147de5f750c1f082__a'>
        <path d='M0 0h18v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedStarMdBoldIcon);
export default ForwardRef;

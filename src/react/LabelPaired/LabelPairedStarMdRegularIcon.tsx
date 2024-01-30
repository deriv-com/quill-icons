import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedStarMdRegularIcon = (
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
      <path d='M7.094 9.281q-.25.469-.782.563l-4.28.625 3.124 3.094q.344.343.282.874l-.75 4.344L8.53 16.75a.94.94 0 0 1 .938 0l3.844 2.031-.75-4.343q-.062-.532.28-.876l3.126-3.093-4.313-.625a1.03 1.03 0 0 1-.75-.563L9 5.312zm6.187 10.625L9 17.625l-4.281 2.281q-.407.219-.782-.062t-.312-.719l.813-4.875-3.47-3.437a.71.71 0 0 1-.187-.75.72.72 0 0 1 .625-.5l4.782-.72 2.125-4.405A.79.79 0 0 1 9 4q.47.03.688.438l2.124 4.406 4.782.687q.468.095.625.531a.71.71 0 0 1-.188.75l-3.468 3.438.812 4.875q.063.438-.312.719t-.782.062' />
    </g>
    <defs>
      <clipPath id='324801ccee68756932f679bf051e0f56__a'>
        <path d='M0 0h18v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedStarMdRegularIcon);
export default ForwardRef;

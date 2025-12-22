import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleSortMdFillIcon = (
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
      <path d='M0 12a7.94 7.94 0 0 1 4-6.906c2.469-1.438 5.5-1.438 8 0C14.469 6.53 16 9.156 16 12c0 2.875-1.531 5.5-4 6.938-2.5 1.437-5.531 1.437-8 0A7.95 7.95 0 0 1 0 12m8.344-4.844a.53.53 0 0 0-.719 0l-3 3c-.125.156-.187.375-.094.563.063.156.25.281.469.281h6c.188 0 .375-.094.438-.281.093-.188.03-.406-.094-.563zm-.719 9.719a.53.53 0 0 0 .719 0l3-3c.125-.156.187-.375.094-.562A.47.47 0 0 0 11 13H5a.48.48 0 0 0-.469.313c-.093.187-.031.406.094.562z' />
    </g>
    <defs>
      <clipPath id='366c02e1911aa57a1e418e99221d3826__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleSortMdFillIcon);
export default ForwardRef;

import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedDerivBrandLogoMdFillIcon = (
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
      <path d='m11.688 15.938-.032.156C11.281 17.656 9.812 18.906 8.22 19H5.75c-2.219-.125-3.687-1.969-3.281-4.219l.187-1c.406-2.25 2.5-4.125 4.75-4.219l.219-.03h2.5l.75-4.063L13.594 5zm-4.376-3.876c-1 .094-1.875.938-2.062 1.907l-.094.625c-.187 1.031.5 1.906 1.563 1.906H8c.5 0 .969-.437 1.094-.937l.594-3.5H7.313' />
    </g>
    <defs>
      <clipPath id='95061b634f74ae06ea2cf207a08f5e43__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedDerivBrandLogoMdFillIcon);
export default ForwardRef;

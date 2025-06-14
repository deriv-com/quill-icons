import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedRightToBracketMdRegularIcon = (
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
      <path d='M9.969 12.063S10 12.03 10 12l-.031-.031-4.125-3.906A.24.24 0 0 0 5.687 8c-.093 0-.187.094-.187.219V10c0 .281-.25.5-.5.5H1.25a.246.246 0 0 0-.25.25v2.5c0 .156.094.25.25.25H5c.25 0 .5.25.5.5v1.813c0 .093.094.187.188.187.062 0 .125 0 .156-.031zM11 12c0 .313-.125.594-.344.813l-4.125 3.874c-.218.22-.531.313-.843.313A1.187 1.187 0 0 1 4.5 15.813V14.5H1.25C.531 14.5 0 13.969 0 13.25v-2.5c0-.687.531-1.25 1.25-1.25H4.5V8.219C4.5 7.563 5.031 7 5.688 7c.312 0 .625.125.843.344l4.125 3.875c.219.219.344.5.344.781m-.5 6h3a1.5 1.5 0 0 0 1.5-1.5v-9c0-.812-.687-1.5-1.5-1.5h-3a.494.494 0 0 1-.5-.5c0-.25.219-.5.5-.5h3C14.875 5 16 6.125 16 7.5v9c0 1.406-1.125 2.5-2.5 2.5h-3a.494.494 0 0 1-.5-.5c0-.25.219-.5.5-.5' />
    </g>
    <defs>
      <clipPath id='052881ba27b2b78409cca074f2ae3827__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedRightToBracketMdRegularIcon);
export default ForwardRef;

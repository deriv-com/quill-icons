import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedStarMdFillIcon = (
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
      <path d='m9.875 4.563 2.031 4.156 4.469.656c.375.063.688.313.813.688a.93.93 0 0 1-.25 1l-3.25 3.218.78 4.563a.98.98 0 0 1-.405.968c-.313.25-.72.25-1.063.094L9 17.75l-4.031 2.156a.96.96 0 0 1-1.032-.093.98.98 0 0 1-.406-.97l.75-4.562-3.25-3.219c-.25-.25-.343-.656-.25-1 .125-.374.438-.624.813-.687l4.5-.656 2-4.156A.97.97 0 0 1 9 4c.375 0 .719.219.875.563' />
    </g>
    <defs>
      <clipPath id='d3b46f075ffbc37b79bded37b55a90c5__a'>
        <path d='M0 0h18v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedStarMdFillIcon);
export default ForwardRef;

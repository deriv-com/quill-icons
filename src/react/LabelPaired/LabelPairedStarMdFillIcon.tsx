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
      <path d='m9.906 4.563 2 4.125 4.5.687a.98.98 0 0 1 .813.656q.155.594-.25 1.031l-3.25 3.22.75 4.562q.093.593-.406.968-.501.344-1.032.063L9 17.75l-4 2.125q-.563.282-1.062-.062a1.03 1.03 0 0 1-.407-.97l.781-4.562-3.25-3.219q-.437-.437-.25-1.03.188-.563.782-.657l4.5-.687 2-4.126Q8.406 4.032 9 4q.625.03.906.563' />
    </g>
    <defs>
      <clipPath id='c0061f3e1afc93d4__a'>
        <path d='M0 0h18v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedStarMdFillIcon);
export default ForwardRef;

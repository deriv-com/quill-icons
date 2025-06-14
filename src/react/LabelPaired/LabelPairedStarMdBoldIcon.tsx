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
      <path d='M8.969 4c.312 0 .562.188.687.438l2.156 4.406 4.782.719c.281.03.5.218.593.5a.74.74 0 0 1-.187.78l-3.469 3.438.813 4.844a.75.75 0 0 1-.281.75c-.25.156-.563.188-.813.063l-4.281-2.313-4.25 2.313a.84.84 0 0 1-.813-.063c-.219-.187-.344-.469-.281-.75l.813-4.844-3.47-3.437a.74.74 0 0 1-.187-.781c.094-.25.313-.47.594-.5l4.781-.72 2.157-4.405c.124-.25.374-.438.656-.438m0 2.469L7.344 9.875c-.125.219-.313.375-.563.406l-3.687.531L5.75 13.47c.188.187.281.437.219.656l-.625 3.75 3.281-1.75a.74.74 0 0 1 .719 0l3.281 1.75L12 14.156a.65.65 0 0 1 .219-.656l2.656-2.687-3.687-.532c-.25-.031-.438-.187-.563-.406z' />
    </g>
    <defs>
      <clipPath id='f57cfba902b38ad18446a9b3b4b5f413__a'>
        <path d='M0 0h18v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedStarMdBoldIcon);
export default ForwardRef;

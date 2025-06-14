import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedScissorsMdBoldIcon = (
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
      <path d='M15.813 17.75a.78.78 0 0 1-1.063.094l-5-4.188 1.156-1 4.813 4.031a.78.78 0 0 1 .094 1.063M3.5 5.5c-.719 0-1.375.406-1.75 1-.344.625-.344 1.406 0 2 .375.625 1.031 1 1.75 1a2.02 2.02 0 0 0 1.719-1c.343-.594.343-1.375 0-2-.375-.594-1.032-1-1.719-1m0-1.5C5.406 4 7 5.594 7 7.5c0 .563-.156 1.094-.375 1.563l2.344 1.968 5.781-4.844a.78.78 0 0 1 1.063.094.78.78 0 0 1-.094 1.063l-9.094 7.625c.219.469.375 1 .375 1.531C7 18.438 5.406 20 3.5 20A3.494 3.494 0 0 1 0 16.5C0 14.594 1.563 13 3.5 13c.813 0 1.594.313 2.188.781L7.813 12l-2.125-1.75A3.56 3.56 0 0 1 3.5 11 3.494 3.494 0 0 1 0 7.5C0 5.594 1.563 4 3.5 4m2 12.5c0-.687-.406-1.344-1-1.719-.625-.344-1.406-.344-2 0a2.02 2.02 0 0 0-1 1.719c0 .719.375 1.375 1 1.75.594.344 1.375.344 2 0 .594-.375 1-1.031 1-1.75' />
    </g>
    <defs>
      <clipPath id='853497d76af3b0adfc32c2a50c0dc57a__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedScissorsMdBoldIcon);
export default ForwardRef;

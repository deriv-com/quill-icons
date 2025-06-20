import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleQuestionMdRegularIcon = (
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
      <path d='M15 12c0-2.5-1.344-4.781-3.5-6.031-2.187-1.282-4.844-1.282-7 0A6.9 6.9 0 0 0 1 12c0 2.531 1.313 4.813 3.5 6.063 2.156 1.28 4.813 1.28 7 0A6.98 6.98 0 0 0 15 12M0 12a7.94 7.94 0 0 1 4-6.906c2.469-1.438 5.5-1.438 8 0C14.469 6.53 16 9.156 16 12c0 2.875-1.531 5.5-4 6.938-2.5 1.437-5.531 1.437-8 0A7.95 7.95 0 0 1 0 12m5.25-2.687C5.469 8.563 6.156 8 6.938 8H8.75c1.094 0 2 .906 2 2.031 0 .75-.437 1.438-1.094 1.781l-1.156.594V13c0 .281-.25.5-.5.5a.494.494 0 0 1-.5-.5v-.906c0-.188.094-.375.25-.438l1.438-.75a.96.96 0 0 0 .562-.875C9.75 9.47 9.281 9 8.75 9H6.938c-.313 0-.625.25-.72.563v.03c-.062.25-.343.438-.593.345a.494.494 0 0 1-.375-.594zm2 5.687a.74.74 0 0 1 .75-.75.76.76 0 0 1 .75.75.74.74 0 0 1-.75.75.72.72 0 0 1-.75-.75' />
    </g>
    <defs>
      <clipPath id='162b8d8da5c46868e4e6b8bc3534a307__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleQuestionMdRegularIcon);
export default ForwardRef;

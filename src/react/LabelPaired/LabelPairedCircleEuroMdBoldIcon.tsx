import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleEuroMdBoldIcon = (
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
      <path d='M14.5 12c0-2.312-1.25-4.437-3.25-5.625a6.52 6.52 0 0 0-6.5 0C2.719 7.563 1.5 9.688 1.5 12a6.51 6.51 0 0 0 3.25 5.656 6.52 6.52 0 0 0 6.5 0c2-1.187 3.25-3.312 3.25-5.656M0 12a7.94 7.94 0 0 1 4-6.906c2.469-1.438 5.5-1.438 8 0C14.469 6.53 16 9.156 16 12c0 2.875-1.531 5.5-4 6.938-2.5 1.437-5.531 1.437-8 0A7.95 7.95 0 0 1 0 12m4 .5h.5c-.031-.156-.031-.312-.031-.469s0-.344.031-.531H4a.494.494 0 0 1-.5-.5c0-.25.219-.5.5-.5h.75C5.344 9.063 6.813 8 8.469 8H9.78a.76.76 0 0 1 .75.75.74.74 0 0 1-.75.75H8.47c-.813 0-1.531.406-2 1H9c.25 0 .5.25.5.5 0 .281-.25.5-.5.5H6c-.031.188-.031.344-.031.531 0 .156 0 .344.031.469h3c.25 0 .5.25.5.5 0 .281-.25.5-.5.5H6.438c.468.656 1.187 1.063 2.03 1.063h1.313a.76.76 0 0 1 .75.75.76.76 0 0 1-.75.75H8.47A3.98 3.98 0 0 1 4.75 13.5H4a.494.494 0 0 1-.5-.5c0-.25.219-.5.5-.5' />
    </g>
    <defs>
      <clipPath id='17361a41079982ad45c1b1e3c4df590b__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleEuroMdBoldIcon);
export default ForwardRef;

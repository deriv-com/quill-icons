import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleFourMdBoldIcon = (
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
      <path d='M14.5 12c0-2.312-1.25-4.437-3.25-5.625a6.52 6.52 0 0 0-6.5 0C2.719 7.563 1.5 9.688 1.5 12a6.51 6.51 0 0 0 3.25 5.656 6.52 6.52 0 0 0 6.5 0c2-1.187 3.25-3.312 3.25-5.656M0 12a7.94 7.94 0 0 1 4-6.906c2.469-1.438 5.5-1.438 8 0C14.469 6.53 16 9.156 16 12c0 2.875-1.531 5.5-4 6.938-2.5 1.437-5.531 1.437-8 0A7.95 7.95 0 0 1 0 12m6.969-3.937c.406.124.625.53.468.937l-1.156 3.5H8.5v-1.75a.74.74 0 0 1 .75-.75.76.76 0 0 1 .75.75v1.75h.25a.76.76 0 0 1 .75.75.74.74 0 0 1-.75.75H10v1.25a.74.74 0 0 1-.75.75.72.72 0 0 1-.75-.75V14H5.25a.73.73 0 0 1-.625-.312c-.125-.188-.187-.438-.094-.657l1.5-4.5c.125-.406.563-.625.938-.469' />
    </g>
    <defs>
      <clipPath id='92cca878fab6b5e2da11c188834ecdcb__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleFourMdBoldIcon);
export default ForwardRef;

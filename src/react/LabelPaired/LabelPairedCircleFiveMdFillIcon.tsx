import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleFiveMdFillIcon = (
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
      <path d='M8 20c-2.875 0-5.5-1.5-6.937-4-1.438-2.469-1.438-5.5 0-8A8.02 8.02 0 0 1 8 4c2.844 0 5.469 1.531 6.906 4 1.438 2.5 1.438 5.531 0 8A7.94 7.94 0 0 1 8 20M6.5 8h-.031c-.344 0-.657.281-.719.625l-.5 2.75a.8.8 0 0 0 .125.594c.125.156.313.25.531.281l2.719.313a.98.98 0 0 1 .875.968.98.98 0 0 1-1 .969H7.375c-.344 0-.687-.156-.906-.469l-.125-.187a.75.75 0 0 0-1.032-.219c-.343.25-.437.719-.187 1.063l.125.187C5.719 15.594 6.531 16 7.375 16H8.5c1.375 0 2.5-1.094 2.5-2.469 0-1.25-.969-2.312-2.219-2.469l-1.906-.218.25-1.344H9.75a.74.74 0 0 0 .75-.75.76.76 0 0 0-.75-.75z' />
    </g>
    <defs>
      <clipPath id='a34529da8abba35aa25d8bab5f011f58__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleFiveMdFillIcon);
export default ForwardRef;

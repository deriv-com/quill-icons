import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleSterlingMdBoldIcon = (
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
      <path d='M14.5 12c0-2.312-1.25-4.437-3.25-5.625a6.52 6.52 0 0 0-6.5 0C2.719 7.563 1.5 9.688 1.5 12a6.51 6.51 0 0 0 3.25 5.656 6.52 6.52 0 0 0 6.5 0c2-1.187 3.25-3.312 3.25-5.656M0 12a7.94 7.94 0 0 1 4-6.906c2.469-1.438 5.5-1.438 8 0C14.469 6.53 16 9.156 16 12c0 2.875-1.531 5.5-4 6.938-2.5 1.437-5.531 1.437-8 0A7.95 7.95 0 0 1 0 12m8.156-3c-.531 0-.937.438-.937.969V11H8.5c.25 0 .5.25.5.5 0 .281-.25.5-.5.5H7.219v.313q0 .89-.282 1.687h3.313a.76.76 0 0 1 .75.75.74.74 0 0 1-.75.75h-4.5c-.281 0-.531-.125-.656-.344a.8.8 0 0 1-.032-.75l.313-.562c.25-.469.344-1 .344-1.5V12H5.5a.494.494 0 0 1-.5-.5c0-.25.219-.5.5-.5h.219V9.969c0-1.344 1.093-2.469 2.437-2.469.313 0 .625.063.906.188l.97.375a.75.75 0 0 1 .406.968.74.74 0 0 1-.97.438L8.5 9.094A.63.63 0 0 0 8.156 9' />
    </g>
    <defs>
      <clipPath id='931f4f4a8602169cc921037a8b3c2d9e__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleSterlingMdBoldIcon);
export default ForwardRef;

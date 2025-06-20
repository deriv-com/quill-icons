import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleEuroMdRegularIcon = (
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
      <path d='M15 12c0-2.5-1.344-4.781-3.5-6.031-2.187-1.282-4.844-1.282-7 0A6.9 6.9 0 0 0 1 12c0 2.531 1.313 4.813 3.5 6.063 2.156 1.28 4.813 1.28 7 0A6.98 6.98 0 0 0 15 12M0 12a7.94 7.94 0 0 1 4-6.906c2.469-1.438 5.5-1.438 8 0C14.469 6.53 16 9.156 16 12c0 2.875-1.531 5.5-4 6.938-2.5 1.437-5.531 1.437-8 0A7.95 7.95 0 0 1 0 12m4 .5h.75c-.031-.156-.031-.312-.031-.469s0-.344.031-.531H4a.494.494 0 0 1-.5-.5c0-.25.219-.5.5-.5h1.063c.562-1.156 1.78-2 3.156-2H9.53c.25 0 .5.25.5.5 0 .281-.25.5-.5.5H8.22c-.813 0-1.531.406-2 1H9c.25 0 .5.25.5.5 0 .281-.25.5-.5.5H5.75c-.031.188-.031.344-.031.531 0 .156 0 .344.031.469H9c.25 0 .5.25.5.5 0 .281-.25.5-.5.5H6.188c.468.656 1.187 1.063 2.03 1.063h1.313c.25 0 .5.218.5.5 0 .28-.25.5-.5.5H8.22c-1.406 0-2.625-.844-3.188-2.063H4a.494.494 0 0 1-.5-.5c0-.25.219-.5.5-.5' />
    </g>
    <defs>
      <clipPath id='8e058ebfbf1cd5a36fe9ddacb8a43de3__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleEuroMdRegularIcon);
export default ForwardRef;

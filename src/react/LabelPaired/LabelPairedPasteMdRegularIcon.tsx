import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPasteMdRegularIcon = (
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
      <path d='M4.25 5.625C4.219 5.844 4 6 3.75 6H3.5c-.281 0-.5.25-.5.5V7h4v-.5c0-.25-.25-.5-.5-.5h-.281a.51.51 0 0 1-.5-.375C5.656 5.281 5.344 5 5 5a.77.77 0 0 0-.75.625M5 4c.688 0 1.281.438 1.563 1H8c1.094 0 2 .906 2 2H9c0-.531-.469-1-1-1h-.094c.063.156.094.344.094.5v.563A2.45 2.45 0 0 0 6.5 8H3c-.562 0-1-.437-1-1v-.5c0-.156.031-.344.063-.5H2c-.562 0-1 .469-1 1v9c0 .563.438 1 1 1h4v1H2c-1.125 0-2-.875-2-2V7c0-1.094.875-2 2-2h1.406c.281-.562.875-1 1.594-1m9 15c.531 0 1-.437 1-1v-6.375a.5.5 0 0 0-.156-.344l-2.125-2.125A.5.5 0 0 0 12.375 9H9c-.562 0-1 .469-1 1v8c0 .563.438 1 1 1zm1.531-8.437c.281.28.469.687.469 1.062V18c0 1.125-.906 2-2 2H9c-1.125 0-2-.875-2-2v-8c0-1.094.875-2 2-2h3.375c.375 0 .781.156 1.063.438z' />
    </g>
    <defs>
      <clipPath id='9e4d0f5cea692716e53533c3b371fa48__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPasteMdRegularIcon);
export default ForwardRef;

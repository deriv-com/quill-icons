import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSlidersMdBoldIcon = (
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
      <path d='M0 17a.74.74 0 0 1 .75-.75h1.844c.312-1 1.281-1.75 2.406-1.75 1.094 0 2.063.75 2.375 1.75h7.875A.76.76 0 0 1 16 17a.74.74 0 0 1-.75.75H7.375A2.485 2.485 0 0 1 5 19.5c-1.125 0-2.094-.719-2.406-1.75H.75A.72.72 0 0 1 0 17m4 0c0 .563.438 1 1 1 .531 0 1-.437 1-1 0-.531-.469-1-1-1-.562 0-1 .469-1 1m6-5c0 .563.438 1 1 1 .531 0 1-.437 1-1 0-.531-.469-1-1-1-.562 0-1 .469-1 1m1-2.5c1.094 0 2.063.75 2.375 1.75h1.875A.76.76 0 0 1 16 12a.74.74 0 0 1-.75.75h-1.875A2.485 2.485 0 0 1 11 14.5c-1.125 0-2.094-.719-2.406-1.75H.75A.72.72 0 0 1 0 12a.74.74 0 0 1 .75-.75h7.844c.312-1 1.281-1.75 2.406-1.75M6 8c.531 0 1-.437 1-1 0-.531-.469-1-1-1-.562 0-1 .469-1 1 0 .563.438 1 1 1m2.375-1.75h6.875A.76.76 0 0 1 16 7a.74.74 0 0 1-.75.75H8.375A2.485 2.485 0 0 1 6 9.5c-1.125 0-2.094-.719-2.406-1.75H.75A.72.72 0 0 1 0 7a.74.74 0 0 1 .75-.75h2.844C3.906 5.25 4.875 4.5 6 4.5c1.094 0 2.063.75 2.375 1.75' />
    </g>
    <defs>
      <clipPath id='b1e9b5eba69bb366608adc7a6118c870__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSlidersMdBoldIcon);
export default ForwardRef;

import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleNineMdBoldIcon = (
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
      <path d='M14.5 12c0-2.312-1.25-4.437-3.25-5.625a6.52 6.52 0 0 0-6.5 0C2.719 7.563 1.5 9.688 1.5 12a6.51 6.51 0 0 0 3.25 5.656 6.52 6.52 0 0 0 6.5 0c2-1.187 3.25-3.312 3.25-5.656M0 12a7.94 7.94 0 0 1 4-6.906c2.469-1.438 5.5-1.438 8 0C14.469 6.53 16 9.156 16 12c0 2.875-1.531 5.5-4 6.938-2.5 1.437-5.531 1.437-8 0A7.95 7.95 0 0 1 0 12m8-2.5c-.562 0-1.031.313-1.312.75-.282.469-.282 1.063 0 1.5.28.469.75.75 1.312.75.531 0 1-.281 1.281-.75.281-.437.281-1.031 0-1.5C9 9.813 8.531 9.5 8 9.5m-.812 4.406A3.02 3.02 0 0 1 5 11a3 3 0 0 1 6 0c0 1.031-.469 2-1.219 2.656L7.22 15.844a.78.78 0 0 1-1.063-.094.78.78 0 0 1 .094-1.062z' />
    </g>
    <defs>
      <clipPath id='2f08f78413672f9de02ea9318c4a3d12__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleNineMdBoldIcon);
export default ForwardRef;

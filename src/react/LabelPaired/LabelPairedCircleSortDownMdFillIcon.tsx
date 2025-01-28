import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleSortDownMdFillIcon = (
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
      <path d='M16 12c0 2.875-1.531 5.5-4 6.938-2.5 1.437-5.531 1.437-8 0A7.95 7.95 0 0 1 0 12a7.94 7.94 0 0 1 4-6.906c2.469-1.438 5.5-1.438 8 0C14.469 6.53 16 9.156 16 12m-7.656 4.875 3-3c.125-.156.187-.375.094-.562A.47.47 0 0 0 11 13H5a.48.48 0 0 0-.469.313c-.093.187-.031.406.094.562l3 3a.53.53 0 0 0 .719 0m0-9.719a.53.53 0 0 0-.719 0l-3 3c-.125.156-.187.375-.094.563.063.187.25.281.469.281h6a.49.49 0 0 0 .438-.281c.093-.188.03-.406-.094-.563zM9.78 10H6.187L8 8.219z' />
    </g>
    <defs>
      <clipPath id='30b89a67f71084ba3aa4aa93061b2fcd__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleSortDownMdFillIcon);
export default ForwardRef;

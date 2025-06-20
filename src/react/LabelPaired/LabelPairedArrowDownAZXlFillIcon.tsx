import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowDownAZXlFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={27}
    height={36}
    viewBox='0 0 27 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M8.578 28.031c-.281.328-.656.469-1.078.469s-.844-.14-1.125-.469l-4.125-4.5a1.487 1.487 0 0 1 .094-2.11 1.487 1.487 0 0 1 2.11.095L6 23.156V9c0-.797.656-1.5 1.5-1.5.797 0 1.5.703 1.5 1.5v14.156l1.5-1.64c.563-.61 1.5-.657 2.11-.094.609.562.656 1.5.093 2.11zM15 21c0-.797.656-1.5 1.5-1.5h6c.563 0 1.125.375 1.36.938a1.52 1.52 0 0 1-.329 1.64L20.11 25.5H22.5c.797 0 1.5.703 1.5 1.5 0 .844-.703 1.5-1.5 1.5h-6c-.61 0-1.172-.328-1.406-.89a1.52 1.52 0 0 1 .328-1.641l3.422-3.469H16.5A1.48 1.48 0 0 1 15 21m4.5-13.5c.563 0 1.078.328 1.313.844l3 6 .75 1.5c.375.75.093 1.64-.657 2.015s-1.64.094-2.015-.656l-.328-.703H17.39l-.328.703c-.375.75-1.266 1.031-2.016.656s-1.031-1.265-.656-2.015l.75-1.5 3-6c.234-.516.75-.844 1.359-.844m-.984 6.75h1.922l-.938-1.875z' />
    </g>
    <defs>
      <clipPath id='0dc4bae90d0539f204c61bf4365b4159__a'>
        <path d='M0 0h27v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownAZXlFillIcon);
export default ForwardRef;

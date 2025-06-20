import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpOneNineXlBoldIcon = (
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
      <path d='M21.375 8.625v5.625H22.5c.61 0 1.125.516 1.125 1.125A1.11 1.11 0 0 1 22.5 16.5H18c-.656 0-1.125-.469-1.125-1.125 0-.61.469-1.125 1.125-1.125h1.125v-4.031l-.797.234c-.562.188-1.219-.094-1.406-.703-.188-.61.094-1.219.703-1.406l2.25-.75c.328-.14.703-.094 1.031.14.282.188.469.563.469.891M6.703 7.828a1.104 1.104 0 0 1 1.547 0l4.5 4.5c.469.469.469 1.172 0 1.594a1.027 1.027 0 0 1-1.547 0l-2.578-2.578v16.031A1.11 1.11 0 0 1 7.5 28.5c-.656 0-1.125-.469-1.125-1.125V11.344l-2.578 2.578c-.469.469-1.172.469-1.594 0a1.027 1.027 0 0 1 0-1.547l4.5-4.5zM19.875 20.25a1.89 1.89 0 0 0-1.64.938c-.329.609-.329 1.312 0 1.875.328.609.937.937 1.64.937.656 0 1.266-.328 1.594-.937.328-.563.328-1.266 0-1.875-.328-.563-.938-.938-1.594-.938m-.844 5.953c-1.875-.422-3.281-2.062-3.281-4.078A4.13 4.13 0 0 1 19.875 18C22.125 18 24 19.875 24 22.125a4.3 4.3 0 0 1-.984 2.719l-2.672 3.281c-.375.469-1.078.516-1.594.14-.469-.374-.516-1.078-.14-1.593z' />
    </g>
    <defs>
      <clipPath id='8f81c0b90cbfc944a95f9e5d4e7de1df__a'>
        <path d='M0 0h27v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpOneNineXlBoldIcon);
export default ForwardRef;

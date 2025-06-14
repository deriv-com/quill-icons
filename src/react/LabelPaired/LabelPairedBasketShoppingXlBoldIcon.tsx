import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBasketShoppingXlBoldIcon = (
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
      <path d='M11.39 6.14c.516.282.75.985.47 1.548L8.015 15h10.922l-3.844-7.312c-.281-.563-.047-1.266.469-1.547.562-.282 1.265-.047 1.546.468L21.47 15h4.406c.61 0 1.125.516 1.125 1.125a1.11 1.11 0 0 1-1.125 1.125h-.937l-2.625 10.5c-.329 1.313-1.547 2.25-2.907 2.25H7.594c-1.407 0-2.578-.937-2.953-2.25l-2.578-10.5h-.938C.469 17.25 0 16.781 0 16.125 0 15.515.469 15 1.125 15h4.359l4.36-8.39c.281-.516.984-.75 1.547-.47M4.36 17.25l2.484 9.938a.76.76 0 0 0 .75.562h11.812c.328 0 .61-.234.703-.562l2.485-9.938zm6.14 3.375v3.75A1.11 1.11 0 0 1 9.375 25.5c-.656 0-1.125-.469-1.125-1.125v-3.75c0-.61.469-1.125 1.125-1.125.61 0 1.125.516 1.125 1.125m3-1.125c.61 0 1.125.516 1.125 1.125v3.75A1.11 1.11 0 0 1 13.5 25.5c-.656 0-1.125-.469-1.125-1.125v-3.75c0-.61.469-1.125 1.125-1.125m5.25 1.125v3.75a1.11 1.11 0 0 1-1.125 1.125c-.656 0-1.125-.469-1.125-1.125v-3.75c0-.61.469-1.125 1.125-1.125.61 0 1.125.516 1.125 1.125' />
    </g>
    <defs>
      <clipPath id='0b155f6e11cc0e88b80ff4f348f54576__a'>
        <path d='M0 0h27v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBasketShoppingXlBoldIcon);
export default ForwardRef;

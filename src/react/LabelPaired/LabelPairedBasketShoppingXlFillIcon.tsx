import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBasketShoppingXlFillIcon = (
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
      <path d='M11.86 7.688 8.015 15h10.922l-3.844-7.312c-.281-.563-.047-1.266.469-1.547.562-.282 1.265-.047 1.546.468L21.47 15H25.5c.797 0 1.5.703 1.5 1.5 0 .844-.703 1.5-1.5 1.5l-2.437 9.75c-.329 1.313-1.547 2.25-2.907 2.25H6.844c-1.407 0-2.578-.937-2.953-2.25L1.5 18A1.48 1.48 0 0 1 0 16.5c0-.797.656-1.5 1.5-1.5h3.984l4.36-8.39c.281-.516.984-.75 1.547-.47.515.282.75.985.468 1.548M9 20.25c0-.375-.375-.75-.75-.75-.422 0-.75.375-.75.75v4.5c0 .422.328.75.75.75.375 0 .75-.328.75-.75zm4.5-.75c-.422 0-.75.375-.75.75v4.5c0 .422.328.75.75.75.375 0 .75-.328.75-.75v-4.5c0-.375-.375-.75-.75-.75m6 .75c0-.375-.375-.75-.75-.75-.422 0-.75.375-.75.75v4.5c0 .422.328.75.75.75.375 0 .75-.328.75-.75z' />
    </g>
    <defs>
      <clipPath id='41a654953114a628a81a3bd1ba4949c3__a'>
        <path d='M0 0h27v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBasketShoppingXlFillIcon);
export default ForwardRef;

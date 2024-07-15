import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLinkSimpleXlBoldIcon = (
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
      <path d='M0 18c0-4.125 3.328-7.5 7.5-7.5h3.375c.61 0 1.125.516 1.125 1.125a1.11 1.11 0 0 1-1.125 1.125H7.5c-2.906 0-5.25 2.39-5.25 5.25a5.24 5.24 0 0 0 5.25 5.25h3.375c.61 0 1.125.516 1.125 1.125a1.11 1.11 0 0 1-1.125 1.125H7.5A7.46 7.46 0 0 1 0 18m27 0c0 4.172-3.375 7.5-7.5 7.5h-3.375c-.656 0-1.125-.469-1.125-1.125 0-.61.469-1.125 1.125-1.125H19.5c2.86 0 5.25-2.344 5.25-5.25 0-2.86-2.39-5.25-5.25-5.25h-3.375c-.656 0-1.125-.469-1.125-1.125 0-.61.469-1.125 1.125-1.125H19.5c4.125 0 7.5 3.375 7.5 7.5M8.625 16.875h9.75c.61 0 1.125.516 1.125 1.125a1.11 1.11 0 0 1-1.125 1.125h-9.75c-.656 0-1.125-.469-1.125-1.125 0-.61.469-1.125 1.125-1.125' />
    </g>
    <defs>
      <clipPath id='7542a7bc54777ea68b7bfc27fe8e04c1__a'>
        <path d='M0 0h27v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLinkSimpleXlBoldIcon);
export default ForwardRef;

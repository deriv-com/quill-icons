import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleEightXlFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={24}
    height={36}
    viewBox='0 0 24 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M0 18A11.91 11.91 0 0 1 6 7.64c3.703-2.156 8.25-2.156 12 0 3.703 2.157 6 6.094 6 10.36 0 4.313-2.297 8.25-6 10.406-3.75 2.157-8.297 2.157-12 0C2.25 26.25 0 22.313 0 18m12.375-6h-.75C9.75 12 8.25 13.547 8.25 15.375c0 .75.234 1.453.61 1.969A3.74 3.74 0 0 0 7.5 20.25c0 2.11 1.64 3.75 3.75 3.75h1.5c2.063 0 3.75-1.64 3.75-3.75 0-1.172-.562-2.203-1.406-2.906.422-.516.656-1.219.656-1.969 0-1.828-1.547-3.375-3.375-3.375m-.75 4.5c-.656 0-1.125-.469-1.125-1.125 0-.61.469-1.125 1.125-1.125h.75c.61 0 1.125.516 1.125 1.125a1.11 1.11 0 0 1-1.125 1.125zm.75 2.25h.375c.797 0 1.5.703 1.5 1.5 0 .844-.703 1.5-1.5 1.5h-1.5a1.48 1.48 0 0 1-1.5-1.5c0-.797.656-1.5 1.5-1.5h1.125' />
    </g>
    <defs>
      <clipPath id='1d035a9f8c6488929fe986fa66e74c19__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleEightXlFillIcon);
export default ForwardRef;

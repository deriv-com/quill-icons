import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPersonChalkboardMdBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={24}
    viewBox='0 0 20 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M6 7a1.5 1.5 0 0 1-1.312-.75c-.282-.437-.282-1.031 0-1.5C4.968 4.313 5.438 4 6 4c.531 0 1 .313 1.281.75.282.469.282 1.063 0 1.5C7 6.719 6.531 7 6 7m-.437 2.5c-.032 0-.063.031-.063.031V13.5h1v-4zM5.5 19.25a.74.74 0 0 1-.75.75.72.72 0 0 1-.75-.75V11l-1.375 2.375a.7.7 0 0 1-1 .281.7.7 0 0 1-.281-1l1.812-3.25C3.656 8.562 4.562 8 5.563 8H10V5.5A1.5 1.5 0 0 1 11.5 4h7c.813 0 1.5.688 1.5 1.5v7a1.5 1.5 0 0 1-1.5 1.5h-7a1.48 1.48 0 0 1-1.5-1.5V11h1.5v1.5h7v-7h-7V8h.75a.76.76 0 0 1 .75.75.74.74 0 0 1-.75.75H8v9.75a.74.74 0 0 1-.75.75.72.72 0 0 1-.75-.75V15h-1z' />
    </g>
    <defs>
      <clipPath id='ecb11b83f9d9bfb80ae69406ea32235c__a'>
        <path d='M0 0h20v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPersonChalkboardMdBoldIcon);
export default ForwardRef;

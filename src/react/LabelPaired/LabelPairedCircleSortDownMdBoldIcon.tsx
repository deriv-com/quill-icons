import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleSortDownMdBoldIcon = (
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
      <path d='M1.5 12a6.51 6.51 0 0 0 3.25 5.656 6.52 6.52 0 0 0 6.5 0c2-1.187 3.25-3.312 3.25-5.656 0-2.312-1.25-4.437-3.25-5.625a6.52 6.52 0 0 0-6.5 0C2.719 7.563 1.5 9.688 1.5 12M16 12c0 2.875-1.531 5.5-4 6.938-2.5 1.437-5.531 1.437-8 0A7.95 7.95 0 0 1 0 12a7.94 7.94 0 0 1 4-6.906c2.469-1.438 5.5-1.438 8 0C14.469 6.53 16 9.156 16 12m-7.656 4.875a.53.53 0 0 1-.719 0l-3-3c-.125-.156-.187-.375-.094-.562A.48.48 0 0 1 5 13h6a.47.47 0 0 1 .438.313c.093.187.03.406-.094.562zm0-9.719 3 3c.125.156.187.375.094.563-.063.187-.25.281-.438.281H5c-.219 0-.406-.125-.469-.281-.093-.188-.031-.406.094-.563l3-3a.53.53 0 0 1 .719 0M9.78 10 8 8.219 6.188 10z' />
    </g>
    <defs>
      <clipPath id='48e0a2b0fb02fef85912253f2e4fbc07__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleSortDownMdBoldIcon);
export default ForwardRef;

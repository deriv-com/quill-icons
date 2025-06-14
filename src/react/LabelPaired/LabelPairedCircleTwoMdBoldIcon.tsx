import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleTwoMdBoldIcon = (
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
      <path d='M8 5.5c-2.344 0-4.469 1.25-5.656 3.25a6.52 6.52 0 0 0 0 6.5A6.51 6.51 0 0 0 8 18.5c2.313 0 4.438-1.219 5.625-3.25a6.52 6.52 0 0 0 0-6.5C12.438 6.75 10.313 5.5 8 5.5M8 20c-2.875 0-5.5-1.5-6.937-4-1.438-2.469-1.438-5.5 0-8A8.02 8.02 0 0 1 8 4c2.844 0 5.469 1.531 6.906 4 1.438 2.5 1.438 5.531 0 8A7.94 7.94 0 0 1 8 20M6.938 9.781l-.75.563a.74.74 0 0 1-1.032-.125c-.281-.344-.187-.813.125-1.063l.75-.562c.5-.375 1.094-.594 1.719-.563h.125c1.438.031 2.625 1.188 2.625 2.656a2.7 2.7 0 0 1-.844 1.938L7.625 14.5h2.625a.76.76 0 0 1 .75.75.74.74 0 0 1-.75.75h-4.5a.79.79 0 0 1-.719-.469.79.79 0 0 1 .188-.812l3.406-3.188C8.844 11.312 9 11 9 10.687c0-.624-.531-1.156-1.156-1.156H7.75c-.312 0-.594.094-.812.25' />
    </g>
    <defs>
      <clipPath id='4a0903c99f783d5a4f435106c6fc1261__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleTwoMdBoldIcon);
export default ForwardRef;

import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleThreeMdFillIcon = (
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
      <path d='M8 20c-2.875 0-5.5-1.5-6.937-4-1.438-2.469-1.438-5.5 0-8A8.02 8.02 0 0 1 8 4c2.844 0 5.469 1.531 6.906 4 1.438 2.5 1.438 5.531 0 8A7.94 7.94 0 0 1 8 20M5.75 8a.74.74 0 0 0-.75.75c0 .438.313.75.75.75h2.063l-1.594 1.469a.72.72 0 0 0-.188.812.79.79 0 0 0 .719.469h1.594c.625 0 1.125.5 1.125 1.125s-.5 1.125-1.125 1.125h-.875c-.407 0-.782-.187-1.032-.562l-.062-.126c-.219-.343-.687-.468-1.031-.25-.344.22-.469.688-.25 1.032l.093.125C5.658 15.53 6.532 16 7.5 16h.844C9.813 16 11 14.844 11 13.375a2.61 2.61 0 0 0-2.344-2.594l1.594-1.469c.219-.218.313-.53.188-.812-.126-.281-.407-.5-.688-.5z' />
    </g>
    <defs>
      <clipPath id='91e4870bfaa5ff14e6613dff0b075460__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleThreeMdFillIcon);
export default ForwardRef;

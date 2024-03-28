import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleSortMdRegularIcon = (
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
      <path d='M15 12c0-2.5-1.344-4.781-3.5-6.031-2.187-1.282-4.844-1.282-7 0A6.9 6.9 0 0 0 1 12c0 2.531 1.313 4.813 3.5 6.063 2.156 1.28 4.813 1.28 7 0A6.98 6.98 0 0 0 15 12M0 12a7.94 7.94 0 0 1 4-6.906c2.469-1.438 5.5-1.438 8 0C14.469 6.53 16 9.156 16 12c0 2.875-1.531 5.5-4 6.938-2.5 1.437-5.531 1.437-8 0A7.95 7.95 0 0 1 0 12m7.625-4.844a.53.53 0 0 1 .719 0l3 3c.125.156.187.375.094.563A.49.49 0 0 1 11 11H5c-.219 0-.406-.094-.469-.281-.093-.188-.031-.406.094-.563zM6.188 10H9.78L8 8.219zm-1.563 3.875c-.125-.156-.187-.375-.094-.562A.48.48 0 0 1 5 13h6a.47.47 0 0 1 .438.313c.093.187.03.406-.094.562l-3 3a.53.53 0 0 1-.719 0zM8 15.813 9.781 14H6.187z' />
    </g>
    <defs>
      <clipPath id='5b6e8eac5dafb768edbf53fd6d8fb384__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleSortMdRegularIcon);
export default ForwardRef;

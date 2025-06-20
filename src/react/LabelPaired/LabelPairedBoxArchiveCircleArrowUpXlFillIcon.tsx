import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBoxArchiveCircleArrowUpXlFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={30}
    height={36}
    viewBox='0 0 30 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M0 9c0-.797.656-1.5 1.5-1.5h21c.797 0 1.5.703 1.5 1.5v1.5c0 .844-.703 1.5-1.5 1.5h-21A1.48 1.48 0 0 1 0 10.5zm1.5 4.5h21v1.547c-4.219.375-7.5 3.937-7.5 8.203 0 2.016.703 3.844 1.875 5.25H4.5c-1.687 0-3-1.312-3-3zm6 3.75c0 .422.328.75.75.75h7.5c.375 0 .75-.328.75-.75 0-.375-.375-.75-.75-.75h-7.5c-.422 0-.75.375-.75.75m9 6c0-2.39 1.266-4.64 3.375-5.812 2.063-1.22 4.64-1.22 6.75 0A6.74 6.74 0 0 1 30 23.25c0 2.438-1.312 4.64-3.375 5.86-2.11 1.218-4.687 1.218-6.75 0a6.71 6.71 0 0 1-3.375-5.86m3.563-.89c-.282.28-.282.796 0 1.078.28.28.796.28 1.078 0l1.359-1.36v4.172c0 .422.328.75.75.75.375 0 .75-.328.75-.75v-4.172l1.313 1.36c.28.28.796.28 1.078 0 .28-.282.28-.797 0-1.079l-2.625-2.625c-.282-.28-.797-.28-1.078 0-.844.891-1.735 1.735-2.625 2.625' />
    </g>
    <defs>
      <clipPath id='41f6e32bbbffa2679d933aa4b9b8f320__a'>
        <path d='M0 0h30v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBoxArchiveCircleArrowUpXlFillIcon);
export default ForwardRef;

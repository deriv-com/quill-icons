import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBoxArchiveCircleArrowDownXlBoldIcon = (
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
      <path d='M0 9c0-.797.656-1.5 1.5-1.5h21c.797 0 1.5.703 1.5 1.5v3.75c0 .844-.703 1.5-1.5 1.5h-21a1.48 1.48 0 0 1-1.5-1.5zm1.5 6.75h2.25v9.75c0 .422.328.75.75.75h11.063c.28.844.75 1.594 1.312 2.25H4.5c-1.687 0-3-1.312-3-3zm.75-6V12h19.5V9.75zm5.25 7.875c0-.61.469-1.125 1.125-1.125h6.75c.61 0 1.125.516 1.125 1.125a1.11 1.11 0 0 1-1.125 1.125h-6.75c-.656 0-1.125-.469-1.125-1.125m9 5.625c0-2.39 1.266-4.64 3.375-5.812 2.063-1.22 4.64-1.22 6.75 0A6.74 6.74 0 0 1 30 23.25c0 2.438-1.312 4.64-3.375 5.86-2.11 1.218-4.687 1.218-6.75 0a6.71 6.71 0 0 1-3.375-5.86m3.563-.14c-.282.28-.282.796 0 1.078.89.843 1.78 1.734 2.625 2.625.28.28.796.28 1.078 0 .89-.891 1.734-1.782 2.625-2.625.28-.282.28-.797 0-1.079-.282-.28-.797-.28-1.078 0-.422.47-.891.891-1.313 1.36V20.25c0-.375-.375-.75-.75-.75-.422 0-.75.375-.75.75v4.219c-.469-.469-.937-.89-1.36-1.36-.28-.28-.796-.28-1.078 0' />
    </g>
    <defs>
      <clipPath id='86ca4984549108c900a004a451df8770__a'>
        <path d='M0 0h30v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBoxArchiveCircleArrowDownXlBoldIcon);
export default ForwardRef;

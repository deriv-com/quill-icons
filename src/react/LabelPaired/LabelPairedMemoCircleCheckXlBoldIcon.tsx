import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMemoCircleCheckXlBoldIcon = (
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
      <path d='M3 8.25c-.422 0-.75.375-.75.75v18c0 .422.328.75.75.75h10.313A8 8 0 0 0 15.422 30H3c-1.687 0-3-1.312-3-3V9c0-1.64 1.313-3 3-3h12c1.64 0 3 1.36 3 3v6.328c-.844.235-1.594.563-2.25 1.031V9c0-.375-.375-.75-.75-.75zM5.625 12h6.75c.61 0 1.125.516 1.125 1.125a1.11 1.11 0 0 1-1.125 1.125h-6.75c-.656 0-1.125-.469-1.125-1.125 0-.61.469-1.125 1.125-1.125m0 4.5h6.75c.61 0 1.125.516 1.125 1.125a1.11 1.11 0 0 1-1.125 1.125h-6.75c-.656 0-1.125-.469-1.125-1.125 0-.61.469-1.125 1.125-1.125m0 4.5h2.25C8.485 21 9 21.516 9 22.125a1.11 1.11 0 0 1-1.125 1.125h-2.25c-.656 0-1.125-.469-1.125-1.125 0-.61.469-1.125 1.125-1.125M27 23.25c0 2.438-1.312 4.64-3.375 5.86-2.11 1.218-4.687 1.218-6.75 0a6.71 6.71 0 0 1-3.375-5.86 6.7 6.7 0 0 1 3.375-5.812c2.063-1.22 4.64-1.22 6.75 0C25.688 18.656 27 20.859 27 23.25m-3.61-2.016c-.28-.28-.796-.28-1.078 0l-2.812 2.86-1.36-1.36c-.28-.28-.796-.28-1.078 0-.28.282-.28.797 0 1.078l1.875 1.875c.282.282.797.282 1.079 0l3.375-3.375c.28-.28.28-.796 0-1.078' />
    </g>
    <defs>
      <clipPath id='ea7884e700604ab0b319b9df0ffb11bf__a'>
        <path d='M0 0h27v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMemoCircleCheckXlBoldIcon);
export default ForwardRef;

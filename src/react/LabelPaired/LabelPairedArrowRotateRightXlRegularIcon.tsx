import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowRotateRightXlRegularIcon = (
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
      <path d='M21.75 15h-6a.74.74 0 0 1-.75-.75c0-.375.328-.75.75-.75h4.031C18.234 10.828 15.328 9 12 9c-4.969 0-9 4.031-9 9s4.031 9 9 9c3.14 0 5.953-1.64 7.547-4.078.14-.235.422-.422.703-.422.563 0 .938.61.61 1.125C19.03 26.578 15.702 28.5 12 28.5 6.188 28.5 1.5 23.813 1.5 18 1.5 12.234 6.188 7.5 12 7.5c3.797 0 7.125 2.063 9 5.11V8.25c0-.375.328-.75.75-.75.375 0 .75.375.75.75v6c0 .422-.375.75-.75.75' />
    </g>
    <defs>
      <clipPath id='7c121b66e75c4ce4e95ad9621b7d8036__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowRotateRightXlRegularIcon);
export default ForwardRef;

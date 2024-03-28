import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedWalletSignalXlFillIcon = (
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
      <path d='M0 10.5c0-1.64 1.313-3 3-3h18c.797 0 1.5.703 1.5 1.5 0 .844-.703 1.5-1.5 1.5H3.75c-.422 0-.75.375-.75.75 0 .422.328.75.75.75H21c1.64 0 3 1.36 3 3v2.531a12.3 12.3 0 0 0-4.875-1.031c-1.453 0-2.625 1.219-2.625 2.625V28.5H3c-1.687 0-3-1.312-3-3zm18 8.625c0-.61.469-1.125 1.125-1.125C25.125 18 30 22.875 30 28.875A1.11 1.11 0 0 1 28.875 30c-.656 0-1.125-.469-1.125-1.125 0-4.734-3.89-8.625-8.625-8.625-.656 0-1.125-.469-1.125-1.125m0 4.5c0-.61.469-1.125 1.125-1.125a6.38 6.38 0 0 1 6.375 6.375A1.11 1.11 0 0 1 24.375 30c-.656 0-1.125-.469-1.125-1.125 0-2.25-1.875-4.125-4.125-4.125-.656 0-1.125-.469-1.125-1.125m0 4.875c0-.797.656-1.5 1.5-1.5.797 0 1.5.703 1.5 1.5 0 .844-.703 1.5-1.5 1.5a1.48 1.48 0 0 1-1.5-1.5' />
    </g>
    <defs>
      <clipPath id='c2a59d76b838ab1787d20d0f94ac940f__a'>
        <path d='M0 0h30v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedWalletSignalXlFillIcon);
export default ForwardRef;

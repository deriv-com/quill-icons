import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedWalletSignalXlBoldIcon = (
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
      <path d='M0 11.625A4.13 4.13 0 0 1 4.125 7.5h17.25c.61 0 1.125.516 1.125 1.125a1.11 1.11 0 0 1-1.125 1.125H4.125a1.85 1.85 0 0 0-1.875 1.875v12.75c0 1.078.797 1.875 1.875 1.875H16.5v2.25H4.125A4.1 4.1 0 0 1 0 24.375zm4.5 1.5c0-.61.469-1.125 1.125-1.125h14.25C22.125 12 24 13.875 24 16.125v1.406a14 14 0 0 0-2.25-.75v-.656a1.88 1.88 0 0 0-1.875-1.875H5.625c-.656 0-1.125-.469-1.125-1.125m13.5 6c0-.61.469-1.125 1.125-1.125C25.125 18 30 22.875 30 28.875A1.11 1.11 0 0 1 28.875 30c-.656 0-1.125-.469-1.125-1.125 0-4.734-3.89-8.625-8.625-8.625-.656 0-1.125-.469-1.125-1.125m0 4.5c0-.61.469-1.125 1.125-1.125a6.38 6.38 0 0 1 6.375 6.375A1.11 1.11 0 0 1 24.375 30c-.656 0-1.125-.469-1.125-1.125 0-2.25-1.875-4.125-4.125-4.125-.656 0-1.125-.469-1.125-1.125m0 4.875c0-.797.656-1.5 1.5-1.5.797 0 1.5.703 1.5 1.5 0 .844-.703 1.5-1.5 1.5a1.48 1.48 0 0 1-1.5-1.5' />
    </g>
    <defs>
      <clipPath id='e57626a16c81cf228af4611bfed9b503__a'>
        <path d='M0 0h30v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedWalletSignalXlBoldIcon);
export default ForwardRef;

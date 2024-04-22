import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLinkSimpleMdFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={24}
    viewBox='0 0 18 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M0 12c0-2.75 2.219-5 5-5h2c.531 0 1 .469 1 1 0 .563-.469 1-1 1H5a3 3 0 0 0 0 6h2c.531 0 1 .469 1 1 0 .563-.469 1-1 1H5c-2.781 0-5-2.219-5-5m18 0c0 2.781-2.25 5-5 5h-2c-.562 0-1-.437-1-1 0-.531.438-1 1-1h2a3 3 0 0 0 0-6h-2c-.562 0-1-.437-1-1 0-.531.438-1 1-1h2c2.75 0 5 2.25 5 5M6 11h6c.531 0 1 .469 1 1 0 .563-.469 1-1 1H6c-.562 0-1-.437-1-1 0-.531.438-1 1-1' />
    </g>
    <defs>
      <clipPath id='9ee221c2b9f9b5934014f030fc493817__a'>
        <path d='M0 0h18v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLinkSimpleMdFillIcon);
export default ForwardRef;

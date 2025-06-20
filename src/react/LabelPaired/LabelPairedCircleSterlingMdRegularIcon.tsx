import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleSterlingMdRegularIcon = (
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
      <path d='M15 12c0-2.5-1.344-4.781-3.5-6.031-2.187-1.282-4.844-1.282-7 0A6.9 6.9 0 0 0 1 12c0 2.531 1.313 4.813 3.5 6.063 2.156 1.28 4.813 1.28 7 0A6.98 6.98 0 0 0 15 12M0 12a7.94 7.94 0 0 1 4-6.906c2.469-1.438 5.5-1.438 8 0C14.469 6.53 16 9.156 16 12c0 2.875-1.531 5.5-4 6.938-2.5 1.437-5.531 1.437-8 0A7.95 7.95 0 0 1 0 12m8.094-3.5c-.625 0-1.125.531-1.125 1.156V11H8.5c.25 0 .5.25.5.5 0 .281-.25.5-.5.5H6.969a4.36 4.36 0 0 1-.563 2h3.844c.25 0 .5.25.5.5 0 .281-.25.5-.5.5H5.5a.55.55 0 0 1-.469-.25.63.63 0 0 1 .032-.531l.312-.406A3.7 3.7 0 0 0 5.969 12H5.5a.494.494 0 0 1-.5-.5c0-.25.219-.5.5-.5h.469V9.656C5.937 8.47 6.906 7.5 8.094 7.5c.344 0 .656.094.969.25l.656.313c.25.124.344.437.219.687a.513.513 0 0 1-.688.219l-.656-.344a1.3 1.3 0 0 0-.5-.094z' />
    </g>
    <defs>
      <clipPath id='8019997bcda92aa76f6bac4612dd6abf__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleSterlingMdRegularIcon);
export default ForwardRef;

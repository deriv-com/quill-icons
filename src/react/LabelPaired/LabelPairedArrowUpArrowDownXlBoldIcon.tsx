import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpArrowDownXlBoldIcon = (
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
      <path d='m24.797 23.672-4.5 4.5c-.469.469-1.172.469-1.594 0l-4.5-4.5a1.027 1.027 0 0 1 0-1.547c.422-.469 1.125-.469 1.594 0l2.578 2.578V8.625c0-.61.469-1.125 1.125-1.125.61 0 1.125.516 1.125 1.125v16.078l2.578-2.578c.422-.469 1.125-.469 1.594 0a1.103 1.103 0 0 1 0 1.547M8.297 7.828l4.453 4.5c.469.469.469 1.172 0 1.594-.422.469-1.125.469-1.594 0l-2.578-2.578v16.031c0 .656-.469 1.125-1.125 1.125a1.11 1.11 0 0 1-1.125-1.125V11.344L3.75 13.922a1.027 1.027 0 0 1-1.547 0c-.469-.422-.469-1.125 0-1.594l4.5-4.5c.422-.422 1.125-.422 1.594 0' />
    </g>
    <defs>
      <clipPath id='252abdf12d86f9f71e6efe0694aa9915__a'>
        <path d='M0 0h27v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpArrowDownXlBoldIcon);
export default ForwardRef;

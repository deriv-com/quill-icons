import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedAtMdBoldIcon = (
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
      <path d='M8 5.5c-3.594 0-6.5 2.938-6.5 6.5 0 3.594 2.906 6.5 6.5 6.5a.76.76 0 0 1 .75.75A.74.74 0 0 1 8 20c-4.437 0-8-3.562-8-8 0-4.406 3.563-8 8-8 4.406 0 8 3.594 8 8v.875a2.887 2.887 0 0 1-2.875 2.875c-1 0-1.844-.469-2.375-1.219A3.7 3.7 0 0 1 8 15.75 3.72 3.72 0 0 1 4.25 12 3.74 3.74 0 0 1 8 8.25c.875 0 1.719.344 2.344.844.156-.188.375-.344.656-.344a.76.76 0 0 1 .75.75v3.375c0 .781.594 1.375 1.375 1.375.75 0 1.375-.594 1.375-1.375V12c0-3.562-2.937-6.5-6.5-6.5m2.25 6.5c0-.781-.437-1.531-1.125-1.937-.719-.407-1.562-.407-2.25 0A2.22 2.22 0 0 0 5.75 12c0 .813.406 1.563 1.125 1.969.688.406 1.531.406 2.25 0A2.3 2.3 0 0 0 10.25 12' />
    </g>
    <defs>
      <clipPath id='a96c3d3e07682b650a4ef630cbceeca9__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedAtMdBoldIcon);
export default ForwardRef;

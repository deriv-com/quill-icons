import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedTriangleExclamationXlBoldIcon = (
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
      <path d='M11.625 9.984 2.344 25.22c-.094.14-.094.234-.094.375a.64.64 0 0 0 .656.656h18.14c.376 0 .704-.281.704-.656 0-.14-.047-.235-.14-.375L12.327 9.984A.35.35 0 0 0 12 9.75c-.187 0-.281.094-.375.234M9.703 8.813A2.7 2.7 0 0 1 12 7.5c.89 0 1.781.516 2.25 1.313l9.281 15.234c.282.469.469.984.469 1.547 0 1.593-1.312 2.906-2.953 2.906H2.907A2.92 2.92 0 0 1 0 25.594q0-.844.422-1.547zM13.5 23.25c0 .844-.703 1.5-1.5 1.5a1.48 1.48 0 0 1-1.5-1.5c0-.797.656-1.5 1.5-1.5.797 0 1.5.703 1.5 1.5m-.375-8.625v4.5A1.11 1.11 0 0 1 12 20.25c-.656 0-1.125-.469-1.125-1.125v-4.5c0-.61.469-1.125 1.125-1.125.61 0 1.125.516 1.125 1.125' />
    </g>
    <defs>
      <clipPath id='cb00840d6880c8a6f14fcf86c61d35af__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedTriangleExclamationXlBoldIcon);
export default ForwardRef;

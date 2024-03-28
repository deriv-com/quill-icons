import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLightbulbLgBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={30}
    viewBox='0 0 15 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M11.602 15.227a4.95 4.95 0 0 0 .898-2.852c0-2.734-2.266-5-5-5-2.773 0-5 2.266-5 5 0 1.094.313 2.07.86 2.852.156.234.312.468.507.703.508.703 1.094 1.523 1.563 2.343.39.743.625 1.524.703 2.227H4.258c-.117-.469-.235-.898-.469-1.328-.39-.703-.86-1.367-1.367-2.031l-.586-.82C1.055 15.186.625 13.858.625 12.374A6.86 6.86 0 0 1 7.5 5.5c3.79 0 6.875 3.086 6.875 6.875 0 1.484-.469 2.813-1.25 3.945l-.586.82c-.508.665-.976 1.329-1.367 2.032-.235.43-.352.86-.469 1.328H8.828c.117-.703.313-1.484.703-2.227.469-.82 1.055-1.64 1.563-2.343.195-.235.351-.47.508-.703M7.5 10.5c-1.055 0-1.875.86-1.875 1.875A.64.64 0 0 1 5 13a.617.617 0 0 1-.625-.625A3.11 3.11 0 0 1 7.5 9.25c.313 0 .625.313.625.625a.64.64 0 0 1-.625.625m0 15c-1.758 0-3.125-1.367-3.125-3.125v-.625h6.25v.625A3.11 3.11 0 0 1 7.5 25.5' />
    </g>
    <defs>
      <clipPath id='bcbb4c7391cfd4e2e1f61c0aa6bff1d2__a'>
        <path d='M0 0h15v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLightbulbLgBoldIcon);
export default ForwardRef;

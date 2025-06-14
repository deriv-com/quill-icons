import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLoaderLgRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={30}
    viewBox='0 0 20 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M10.625 6.125v3.75A.64.64 0 0 1 10 10.5a.617.617 0 0 1-.625-.625v-3.75c0-.312.273-.625.625-.625.313 0 .625.313.625.625m0 15v3.75A.64.64 0 0 1 10 25.5a.617.617 0 0 1-.625-.625v-3.75c0-.312.273-.625.625-.625.313 0 .625.313.625.625M0 15.5c0-.312.273-.625.625-.625h3.75c.313 0 .625.313.625.625a.64.64 0 0 1-.625.625H.625A.617.617 0 0 1 0 15.5m15.625-.625h3.75c.313 0 .625.313.625.625a.64.64 0 0 1-.625.625h-3.75A.617.617 0 0 1 15 15.5c0-.312.273-.625.625-.625M17.07 8.43c.235.273.235.664 0 .898l-2.656 2.656c-.273.235-.664.235-.898 0-.235-.234-.235-.625 0-.898l2.656-2.656c.234-.235.625-.235.898 0M6.445 19.953 3.79 22.57a.553.553 0 0 1-.86 0 .553.553 0 0 1 0-.86l2.618-2.655c.273-.235.664-.235.898 0 .235.234.235.625 0 .898M2.93 8.43a.613.613 0 0 1 .86 0l2.655 2.656c.235.273.235.664 0 .898-.234.235-.625.235-.898 0L2.93 9.328c-.274-.234-.274-.625 0-.898m11.484 10.625 2.656 2.656a.613.613 0 0 1 0 .86c-.273.273-.664.273-.898 0l-2.656-2.618c-.235-.273-.235-.664 0-.898.234-.235.625-.235.898 0' />
    </g>
    <defs>
      <clipPath id='6e791c605efb9bd555b16208309f7b5f__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLoaderLgRegularIcon);
export default ForwardRef;

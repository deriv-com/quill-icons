import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSunBrightLgRegularIcon = (
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
      <path d='M10 5.5c.313 0 .625.313.625.625V9.25a.64.64 0 0 1-.625.625.617.617 0 0 1-.625-.625V6.125c0-.312.273-.625.625-.625m-10 10c0-.312.273-.625.625-.625H3.75c.313 0 .625.313.625.625a.64.64 0 0 1-.625.625H.625A.617.617 0 0 1 0 15.5m15.625 0c0-.312.273-.625.625-.625h3.125c.313 0 .625.313.625.625a.64.64 0 0 1-.625.625H16.25a.617.617 0 0 1-.625-.625M10 21.125c.313 0 .625.313.625.625v3.125A.64.64 0 0 1 10 25.5a.617.617 0 0 1-.625-.625V21.75c0-.312.273-.625.625-.625M2.93 8.43a.613.613 0 0 1 .86 0l2.226 2.226c.234.235.234.625 0 .899a.66.66 0 0 1-.899 0L2.93 9.328c-.274-.234-.274-.625 0-.898m0 14.14a.553.553 0 0 1 0-.86l2.187-2.226a.66.66 0 0 1 .899 0 .66.66 0 0 1 0 .899L3.789 22.57a.553.553 0 0 1-.86 0m11.015-11.015c-.234-.274-.234-.664 0-.899l2.227-2.226c.234-.235.625-.235.898 0 .235.273.235.664 0 .898l-2.226 2.227c-.235.234-.625.234-.899 0m0 7.93c.274-.235.664-.235.899 0l2.226 2.226a.613.613 0 0 1 0 .86c-.273.273-.664.273-.898 0l-2.227-2.188a.66.66 0 0 1 0-.899m-.82-3.985c0-1.094-.625-2.11-1.562-2.695-.977-.547-2.188-.547-3.126 0-.976.586-1.562 1.601-1.562 2.695 0 1.133.586 2.148 1.563 2.734.937.547 2.148.547 3.124 0 .938-.586 1.563-1.601 1.563-2.734m-7.5 0c0-1.562.82-2.969 2.188-3.75 1.328-.82 3.007-.82 4.375 0 1.328.781 2.187 2.188 2.187 3.75 0 1.602-.86 3.008-2.187 3.79-1.368.82-3.047.82-4.376 0-1.367-.782-2.187-2.188-2.187-3.79' />
    </g>
    <defs>
      <clipPath id='64ed629b187d95d0df07d522f1171705__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSunBrightLgRegularIcon);
export default ForwardRef;

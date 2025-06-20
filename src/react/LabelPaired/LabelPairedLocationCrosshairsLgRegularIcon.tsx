import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLocationCrosshairsLgRegularIcon = (
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
      <path d='M10 5.5c.313 0 .625.313.625.625v1.914a7.515 7.515 0 0 1 6.836 6.836h1.914c.313 0 .625.313.625.625a.64.64 0 0 1-.625.625h-1.914c-.313 3.672-3.203 6.563-6.836 6.875v1.875A.64.64 0 0 1 10 25.5a.617.617 0 0 1-.625-.625V23A7.52 7.52 0 0 1 2.5 16.125H.625A.617.617 0 0 1 0 15.5c0-.312.273-.625.625-.625H2.5c.313-3.633 3.203-6.523 6.875-6.836V6.125c0-.312.273-.625.625-.625m-6.25 10a6.22 6.22 0 0 0 3.125 5.43c1.914 1.133 4.297 1.133 6.25 0 1.914-1.133 3.125-3.164 3.125-5.43 0-2.227-1.21-4.258-3.125-5.39-1.953-1.133-4.336-1.133-6.25 0-1.953 1.132-3.125 3.163-3.125 5.39m8.75 0c0-.86-.508-1.68-1.25-2.148-.781-.43-1.758-.43-2.5 0-.781.468-1.25 1.289-1.25 2.148a2.54 2.54 0 0 0 1.25 2.188c.742.43 1.719.43 2.5 0 .742-.47 1.25-1.29 1.25-2.188m-6.25 0c0-1.328.703-2.54 1.875-3.242 1.133-.664 2.578-.664 3.75 0 1.133.703 1.875 1.914 1.875 3.242 0 1.367-.742 2.578-1.875 3.281-1.172.664-2.617.664-3.75 0-1.172-.703-1.875-1.914-1.875-3.281' />
    </g>
    <defs>
      <clipPath id='c0fb65a0d3a930a595f2ebe4ed08ebce__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLocationCrosshairsLgRegularIcon);
export default ForwardRef;

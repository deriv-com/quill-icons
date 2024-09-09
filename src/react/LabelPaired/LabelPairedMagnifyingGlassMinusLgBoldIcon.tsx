import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMagnifyingGlassMinusLgBoldIcon = (
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
      <path d='M8.125 7.375c-2.266 0-4.297 1.21-5.43 3.125-1.132 1.953-1.132 4.336 0 6.25a6.22 6.22 0 0 0 5.43 3.125c2.227 0 4.258-1.172 5.39-3.125 1.133-1.914 1.133-4.297 0-6.25-1.132-1.914-3.163-3.125-5.39-3.125m0 14.375A8.12 8.12 0 0 1 0 13.625C0 9.172 3.633 5.5 8.125 5.5c4.453 0 8.125 3.672 8.125 8.125a8.25 8.25 0 0 1-1.758 5.078l5.195 5.235c.391.351.391.937 0 1.289a.856.856 0 0 1-1.289 0l-5.234-5.196a8.2 8.2 0 0 1-5.039 1.719m-2.812-9.062h5.625a.95.95 0 0 1 .937.937c0 .547-.43.938-.937.938H5.312c-.546 0-.937-.391-.937-.938 0-.508.39-.937.938-.937' />
    </g>
    <defs>
      <clipPath id='dc02a02e15ec46fe0c00723377962fa9__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMagnifyingGlassMinusLgBoldIcon);
export default ForwardRef;

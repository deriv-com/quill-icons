import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMemoCircleCheckLgBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={23}
    height={30}
    viewBox='0 0 23 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2.75 7.375A.64.64 0 0 0 2.125 8v15c0 .352.273.625.625.625h8.594a6.7 6.7 0 0 0 1.758 1.875H2.75A2.47 2.47 0 0 1 .25 23V8c0-1.367 1.094-2.5 2.5-2.5h10c1.367 0 2.5 1.133 2.5 2.5v5.273c-.703.196-1.328.47-1.875.86V8c0-.312-.312-.625-.625-.625zM4.938 10.5h5.625a.95.95 0 0 1 .937.938c0 .546-.43.937-.937.937H4.937c-.546 0-.937-.39-.937-.937 0-.508.39-.938.938-.938m0 3.75h5.625a.95.95 0 0 1 .937.938c0 .546-.43.937-.937.937H4.937c-.546 0-.937-.39-.937-.937 0-.508.39-.938.938-.938m0 3.75h1.875a.95.95 0 0 1 .937.938c0 .546-.43.937-.937.937H4.938c-.547 0-.938-.39-.938-.937 0-.508.39-.938.938-.938m17.812 1.875c0 2.031-1.094 3.867-2.812 4.883-1.758 1.015-3.907 1.015-5.625 0a5.6 5.6 0 0 1-2.813-4.883 5.58 5.58 0 0 1 2.813-4.844c1.718-1.015 3.867-1.015 5.624 0 1.72 1.016 2.813 2.852 2.813 4.844m-3.008-1.68a.66.66 0 0 0-.898 0L16.5 20.578l-1.133-1.133a.66.66 0 0 0-.898 0 .66.66 0 0 0 0 .899l1.562 1.562a.66.66 0 0 0 .899 0l2.812-2.812a.66.66 0 0 0 0-.899' />
    </g>
    <defs>
      <clipPath id='6a352b027942ce0d5c3073cb8631f8bc__a'>
        <path d='M0 0h23v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMemoCircleCheckLgBoldIcon);
export default ForwardRef;

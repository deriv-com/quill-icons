import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedUserCheckLgBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={25}
    height={30}
    viewBox='0 0 25 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M8.75 7.375c-1.133 0-2.148.625-2.734 1.563-.547.976-.547 2.187 0 3.124a3.16 3.16 0 0 0 2.734 1.563c1.094 0 2.11-.586 2.695-1.562.547-.938.547-2.149 0-3.126C10.86 8 9.844 7.376 8.75 7.376m0 8.125A4.97 4.97 0 0 1 4.414 13c-.898-1.523-.898-3.437 0-5 .899-1.523 2.54-2.5 4.336-2.5 1.758 0 3.398.977 4.297 2.5.898 1.563.898 3.477 0 5a4.96 4.96 0 0 1-4.297 2.5m-1.797 3.75c-2.578 0-4.687 1.914-5.039 4.375h13.633c-.352-2.46-2.461-4.375-5.04-4.375zm0-1.875h3.555a6.985 6.985 0 0 1 6.992 6.992c0 .625-.547 1.133-1.172 1.133H1.133A1.134 1.134 0 0 1 0 24.367c0-3.867 3.086-6.992 6.953-6.992m17.461-4.96-5 5c-.39.39-.977.39-1.328 0l-2.5-2.5a.856.856 0 0 1 0-1.29c.351-.39.937-.39 1.328 0l1.836 1.836 4.336-4.336c.352-.39.937-.39 1.328 0a.92.92 0 0 1 0 1.29' />
    </g>
    <defs>
      <clipPath id='bc9539ab742432a8cc2e5a5a8acfcbe8__a'>
        <path d='M0 0h25v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedUserCheckLgBoldIcon);
export default ForwardRef;

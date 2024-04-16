import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBellLgBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={30}
    viewBox='0 0 18 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M9 5.5c.664 0 1.25.586 1.25 1.25v.781c2.852.547 5 3.086 5 6.094v1.016c0 1.757.586 3.476 1.68 4.882l.586.704c.234.312.273.703.117 1.015a.91.91 0 0 1-.82.508H1.188c-.391 0-.704-.195-.86-.508-.156-.312-.117-.703.117-1.015l.586-.704c1.094-1.406 1.719-3.125 1.719-4.882v-1.016c0-3.008 2.148-5.547 5-6.094V6.75c0-.664.547-1.25 1.25-1.25m0 3.75c-2.422 0-4.375 1.992-4.375 4.375v1.016a9.56 9.56 0 0 1-1.562 5.234h11.835c-1.015-1.562-1.523-3.36-1.523-5.234v-1.016c0-2.383-1.992-4.375-4.375-4.375M11.5 23c0 .664-.273 1.328-.742 1.797S9.664 25.5 9 25.5s-1.328-.234-1.797-.703S6.5 23.664 6.5 23h5' />
    </g>
    <defs>
      <clipPath id='2e09cb6e6336d10059c8601cdacdb053__a'>
        <path d='M0 0h18v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBellLgBoldIcon);
export default ForwardRef;

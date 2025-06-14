import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedWalletCirclePlusLgBoldIcon = (
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
      <path d='M0 10.188A3.443 3.443 0 0 1 3.438 6.75h14.375a.95.95 0 0 1 .937.938c0 .546-.43.937-.937.937H3.438c-.899 0-1.563.703-1.563 1.563v10.625c0 .898.664 1.562 1.563 1.562h9.53c.235.703.626 1.328 1.095 1.875H3.438A3.42 3.42 0 0 1 0 20.813zm3.75 1.25c0-.508.39-.938.938-.938h11.875c1.562 0 2.89 1.094 3.28 2.54-.155 0-.312-.04-.468-.04-.508 0-1.016.078-1.484.156-.274-.43-.782-.781-1.328-.781H4.688c-.547 0-.938-.39-.938-.937m10 8.437c0-3.086 2.5-5.625 5.625-5.625 3.086 0 5.625 2.54 5.625 5.625a5.626 5.626 0 0 1-5.625 5.625 5.6 5.6 0 0 1-5.625-5.625m2.5 0c0 .352.273.625.625.625h1.875v1.875c0 .352.273.625.625.625a.64.64 0 0 0 .625-.625V20.5h1.875a.64.64 0 0 0 .625-.625c0-.312-.312-.625-.625-.625H20v-1.875c0-.312-.312-.625-.625-.625a.64.64 0 0 0-.625.625v1.875h-1.875a.64.64 0 0 0-.625.625' />
    </g>
    <defs>
      <clipPath id='723b27256ec03625af52d482d57d9e06__a'>
        <path d='M0 0h25v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedWalletCirclePlusLgBoldIcon);
export default ForwardRef;

import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedChartLineLgBoldIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={30}
    viewBox='0 0 20 30'
    role='img'
    ref={ref}
    {...props}
  >
    <g>
      <path d='M1.875 7.688v13.75q.078.858.938.937h16.25q.858.078.937.938-.078.858-.937.937H2.813Q1.6 24.21.82 23.43q-.78-.781-.82-1.992V7.688q.078-.86.938-.938.859.078.937.938m16.602 4.414-5.313 5.312q-.664.547-1.328 0L8.75 14.328l-3.086 3.086q-.664.547-1.328 0-.547-.664 0-1.328l3.75-3.75a.9.9 0 0 1 .664-.274q.39 0 .664.274l3.086 3.086 4.648-4.649q.665-.546 1.329 0 .546.664 0 1.329' />
    </g>
    <defs>
      <clipPath id='0d6e9b6f009a55b2f62e26e23b99afce__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartLineLgBoldIcon);
export default ForwardRef;

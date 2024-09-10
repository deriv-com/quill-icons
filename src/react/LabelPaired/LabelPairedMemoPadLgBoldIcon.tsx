import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMemoPadLgBoldIcon = (
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
      <path d='M15.875 10.5H2.125V23c0 .352.273.625.625.625h12.5a.64.64 0 0 0 .625-.625zM2.75 5.5h12.5c1.367 0 2.5 1.133 2.5 2.5v15c0 1.406-1.133 2.5-2.5 2.5H2.75A2.47 2.47 0 0 1 .25 23V8c0-1.367 1.094-2.5 2.5-2.5M4 13.313c0-.508.39-.938.938-.938h8.125a.95.95 0 0 1 .937.938c0 .546-.43.937-.937.937H4.937c-.546 0-.937-.39-.937-.937m0 3.75c0-.508.39-.938.938-.938h8.125a.95.95 0 0 1 .937.938c0 .546-.43.937-.937.937H4.937C4.392 18 4 17.61 4 17.063m0 3.75c0-.508.39-.938.938-.938h4.375a.95.95 0 0 1 .937.938c0 .546-.43.937-.937.937H4.937c-.546 0-.937-.39-.937-.937' />
    </g>
    <defs>
      <clipPath id='3e6c465008f7ef0533f09ff900a3b76b__a'>
        <path d='M0 0h18v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMemoPadLgBoldIcon);
export default ForwardRef;

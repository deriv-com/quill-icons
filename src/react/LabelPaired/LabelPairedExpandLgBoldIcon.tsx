import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedExpandLgBoldIcon = (
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
      <path d='M5.563 6.75q.859.078.937.938-.078.858-.937.937H2.125v3.438q-.079.858-.937.937-.86-.079-.938-.937V7.687q.078-.859.938-.937zM.25 18.938q.078-.86.938-.938.858.078.937.938v3.437h3.438q.859.078.937.938-.078.858-.937.937H1.188q-.86-.079-.938-.937zM16.813 6.75q.858.078.937.938v4.375q-.078.858-.937.937-.86-.079-.938-.937V8.625h-3.437q-.86-.078-.938-.937.078-.86.938-.938zm-.938 12.188q.078-.86.938-.938.858.078.937.938v4.375q-.078.858-.937.937h-4.375q-.86-.079-.938-.937.078-.86.938-.938h3.437z' />
    </g>
    <defs>
      <clipPath id='3a8cd9b743207d66b947e1eaa5976bbd__a'>
        <path d='M0 0h18v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedExpandLgBoldIcon);
export default ForwardRef;

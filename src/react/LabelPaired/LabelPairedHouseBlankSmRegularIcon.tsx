import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedHouseBlankSmRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={22}
    viewBox='0 0 16 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M7.7 3.86q.3-.219.6 0l7.438 6.562q.274.3.028.629-.3.273-.63.027l-1.011-.902v5.387q-.027.93-.629 1.558-.63.601-1.559.629H4.064q-.93-.027-1.56-.629-.6-.63-.628-1.558v-5.387l-1.012.902q-.327.246-.629-.027-.246-.328.028-.63zM2.75 9.41v6.153q.027.546.383.93.382.355.93.382h7.875q.546-.027.93-.383.355-.382.382-.93V9.41L8 4.762z' />
    </g>
    <defs>
      <clipPath id='a5fef71910b641657cc437b6f0d432e8__a'>
        <path d='M0 0h16v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedHouseBlankSmRegularIcon);
export default ForwardRef;

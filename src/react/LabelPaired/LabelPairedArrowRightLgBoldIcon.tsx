import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowRightLgBoldIcon = (
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
      <path d='m17.477 16.164-6.875 6.563q-.704.546-1.329 0-.546-.704 0-1.329l5.196-4.96H1.188q-.86-.079-.938-.938.078-.86.938-.937h13.28L9.314 9.602q-.586-.625-.04-1.329.625-.546 1.329 0l6.875 6.563a.9.9 0 0 1 .273.664q0 .39-.273.664' />
    </g>
    <defs>
      <clipPath id='e84f9491c783ef002190caaedbb2cbb9__a'>
        <path d='M0 0h18v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowRightLgBoldIcon);
export default ForwardRef;

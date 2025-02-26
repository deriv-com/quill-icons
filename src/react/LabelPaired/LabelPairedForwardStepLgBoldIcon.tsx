import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedForwardStepLgBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={13}
    height={30}
    viewBox='0 0 13 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M9.625 8.938c0-.508.39-.938.938-.938a.95.95 0 0 1 .937.938v13.124c0 .547-.43.938-.937.938-.547 0-.938-.39-.938-.937V17.96l-6.914 4.844c-.195.156-.43.195-.664.195a1.15 1.15 0 0 1-1.172-1.172V9.211C.875 8.547 1.383 8 2.047 8c.234 0 .469.078.664.234l6.914 4.844zm0 6.757v-.351L2.75 10.539V20.5z' />
    </g>
    <defs>
      <clipPath id='6f83b4d7e3b5e06c61a93b453f952305__a'>
        <path d='M0 0h13v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedForwardStepLgBoldIcon);
export default ForwardRef;

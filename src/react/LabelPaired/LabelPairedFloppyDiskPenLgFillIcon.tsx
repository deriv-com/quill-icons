import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFloppyDiskPenLgFillIcon = (
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
      <path d='M2.75 6.75h9.453c.664 0 1.328.273 1.797.742l3.008 3.008c.469.469.742 1.133.742 1.797v2.422l-6.21 6.21a2.5 2.5 0 0 0-.665 1.173l-.547 2.148H2.75a2.47 2.47 0 0 1-2.5-2.5V9.25c0-1.367 1.094-2.5 2.5-2.5m0 3.75V13c0 .703.547 1.25 1.25 1.25h7.5c.664 0 1.25-.547 1.25-1.25v-2.5c0-.664-.586-1.25-1.25-1.25H4c-.703 0-1.25.586-1.25 1.25M9 16.75c-.898 0-1.719.508-2.187 1.25-.43.781-.43 1.758 0 2.5A2.54 2.54 0 0 0 9 21.75c.86 0 1.68-.469 2.148-1.25.43-.742.43-1.719 0-2.5-.468-.742-1.289-1.25-2.148-1.25m12.695-2.031.586.586c.586.586.586 1.601 0 2.187l-1.172 1.172-2.773-2.773 1.172-1.172c.586-.586 1.601-.586 2.187 0m-9.297 7.11 5.079-5.079 2.773 2.773-5.078 5.079a1.1 1.1 0 0 1-.547.312l-2.383.586c-.195.04-.43 0-.586-.156-.156-.157-.195-.39-.156-.586l.586-2.383c.039-.195.156-.39.312-.547' />
    </g>
    <defs>
      <clipPath id='3936c44a0174653c227a0dd4cca66968__a'>
        <path d='M0 0h23v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFloppyDiskPenLgFillIcon);
export default ForwardRef;

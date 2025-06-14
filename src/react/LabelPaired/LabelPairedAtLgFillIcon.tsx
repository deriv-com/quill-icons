import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedAtLgFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={30}
    viewBox='0 0 20 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M10 8c-4.14 0-7.5 3.36-7.5 7.5S5.86 23 10 23c.664 0 1.25.586 1.25 1.25 0 .703-.586 1.25-1.25 1.25a9.97 9.97 0 0 1-10-10c0-5.508 4.453-10 10-10 5.508 0 10 4.492 10 10v1.25c0 2.07-1.68 3.75-3.75 3.75a3.86 3.86 0 0 1-2.89-1.29c-.86.821-2.07 1.29-3.36 1.29-2.773 0-5-2.227-5-5 0-2.734 2.227-5 5-5 1.055 0 2.07.352 2.89.977.235-.196.508-.352.86-.352.664 0 1.25.586 1.25 1.25v4.375c0 .703.547 1.25 1.25 1.25.664 0 1.25-.547 1.25-1.25V15.5c0-4.14-3.36-7.5-7.5-7.5m2.5 7.5c0-.86-.508-1.68-1.25-2.148-.781-.43-1.758-.43-2.5 0-.781.468-1.25 1.289-1.25 2.148a2.54 2.54 0 0 0 1.25 2.188c.742.43 1.719.43 2.5 0 .742-.47 1.25-1.29 1.25-2.188' />
    </g>
    <defs>
      <clipPath id='62ca173f8c82a0edcb4b9101e9be2a92__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedAtLgFillIcon);
export default ForwardRef;

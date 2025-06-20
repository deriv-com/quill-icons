import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMapSmRegularIcon = (
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
      <path d='M4.773 4.68a.32.32 0 0 1 .274-.028l5.988 1.723 3.938-1.586c.41-.164.902.137.902.602v9.16c0 .273-.164.52-.437.601l-4.239 1.696c-.082.054-.164.054-.273.027l-5.988-1.723L1 16.738a.64.64 0 0 1-.875-.601v-9.16c0-.274.164-.52.41-.602zM1 7.113v8.696l3.5-1.395V5.72zm9.625 8.75V7.168l-5.25-1.504v8.695zm.875-.054 3.5-1.395V5.72l-3.5 1.394z' />
    </g>
    <defs>
      <clipPath id='8cd1e0e56374eec5af3d5943d429b6c8__a'>
        <path d='M0 0h16v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMapSmRegularIcon);
export default ForwardRef;

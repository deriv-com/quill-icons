import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleFiveSmRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={22}
    viewBox='0 0 14 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M7 4.625a6.11 6.11 0 0 0-5.305 3.063c-1.12 1.914-1.12 4.238 0 6.125C2.79 15.727 4.785 16.875 7 16.875a6.04 6.04 0 0 0 5.277-3.062c1.121-1.887 1.121-4.211 0-6.126A6.1 6.1 0 0 0 7 4.626M7 17.75a6.96 6.96 0 0 1-6.07-3.5c-1.258-2.16-1.258-4.812 0-7A7.02 7.02 0 0 1 7 3.75c2.488 0 4.785 1.34 6.043 3.5 1.258 2.188 1.258 4.84 0 7A6.95 6.95 0 0 1 7 17.75M5.688 7.25H8.75a.47.47 0 0 1 .438.438.45.45 0 0 1-.438.437H6.016L5.578 9.93l2.188.218c1.039.11 1.832 1.012 1.832 2.051a2.03 2.03 0 0 1-2.051 2.051H6.344c-.739 0-1.45-.355-1.86-.984l-.054-.082a.42.42 0 0 1 .136-.602.437.437 0 0 1 .602.11l.055.081c.246.383.683.602 1.12.602h1.204c.656 0 1.203-.52 1.203-1.176 0-.601-.465-1.094-1.066-1.176l-2.707-.273c-.137 0-.247-.082-.329-.164a.55.55 0 0 1-.054-.356l.656-2.625c.055-.218.219-.355.438-.355' />
    </g>
    <defs>
      <clipPath id='de2ffc3efddeef3c67cbc67c96ae6d90__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleFiveSmRegularIcon);
export default ForwardRef;

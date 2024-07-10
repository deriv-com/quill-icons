import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleArrowLeftLgFillIcon = (
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
      <path d='M20 15.5c0 3.594-1.914 6.875-5 8.672-3.125 1.797-6.914 1.797-10 0-3.125-1.797-5-5.078-5-8.672a9.93 9.93 0 0 1 5-8.633c3.086-1.797 6.875-1.797 10 0 3.086 1.797 5 5.078 5 8.633M9.023 10.46l-4.375 4.415a.856.856 0 0 0 0 1.29l4.375 4.374c.352.39.938.39 1.29 0 .39-.352.39-.937 0-1.328l-2.774-2.773h7.149c.507 0 .937-.391.937-.938a.95.95 0 0 0-.937-.937H7.539l2.774-2.774c.39-.351.39-.937 0-1.328a.92.92 0 0 0-1.29 0' />
    </g>
    <defs>
      <clipPath id='8bec8435daa9496d2289e66e0b84f400__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleArrowLeftLgFillIcon);
export default ForwardRef;

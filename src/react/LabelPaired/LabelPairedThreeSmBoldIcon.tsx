import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedThreeSmBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={9}
    height={22}
    viewBox='0 0 9 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M.125 5.281c0-.355.273-.656.656-.656h7c.246 0 .492.164.602.438.11.246.027.519-.164.71L4.145 9.656h1.12c1.97 0 3.61 1.64 3.61 3.61 0 1.996-1.64 3.609-3.61 3.609H2.778a2.87 2.87 0 0 1-2.543-1.559l-.054-.109a.647.647 0 0 1 .3-.875.647.647 0 0 1 .875.3l.055.083c.246.52.793.848 1.367.848h2.489a2.293 2.293 0 0 0 2.297-2.297 2.31 2.31 0 0 0-2.297-2.297H2.53a.69.69 0 0 1-.629-.41.69.69 0 0 1 .164-.711l4.075-3.91H.78a.63.63 0 0 1-.656-.657' />
    </g>
    <defs>
      <clipPath id='3ddfbb0510dc8f5a0e205ef943af0f6b__a'>
        <path d='M0 0h9v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedThreeSmBoldIcon);
export default ForwardRef;

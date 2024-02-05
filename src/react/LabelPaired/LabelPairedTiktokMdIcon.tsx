import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedTiktokMdIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={24}
    viewBox='0 0 14 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M14 10.563a6.5 6.5 0 0 1-3.844-1.22v5.563q0 1.626-.906 2.906-.875 1.282-2.375 1.875-1.53.532-3.031.157-1.5-.376-2.594-1.594a5.18 5.18 0 0 1-1.219-2.781q-.156-1.531.594-2.969.781-1.406 2.156-2.125a5.3 5.3 0 0 1 3-.5v2.813q-.75-.219-1.437.03a2.3 2.3 0 0 0-1.157.845 2.35 2.35 0 0 0-.437 1.374q0 .72.438 1.376.468.593 1.187.812.688.25 1.438 0 .718-.25 1.156-.844t.437-1.375V4h2.75q0 .344.063.688.343 1.593 1.687 2.5A4 4 0 0 0 14 7.844z' />
    </g>
    <defs>
      <clipPath id='8c281dd92519af82153cc016a0deb57d__a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedTiktokMdIcon);
export default ForwardRef;

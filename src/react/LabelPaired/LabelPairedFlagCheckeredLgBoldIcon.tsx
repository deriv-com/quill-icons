import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFlagCheckeredLgBoldIcon = (
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
      <path d='M1.188 5.5a.95.95 0 0 1 .937.938V7.53l3.32-.82c1.485-.352 3.047-.195 4.414.508a6.45 6.45 0 0 0 5.743 0l.39-.196c.781-.39 1.758.196 1.758 1.094v10.899c0 .547-.352 1.015-.82 1.172l-1.367.507c-1.797.703-3.829.586-5.547-.273a6.95 6.95 0 0 0-4.766-.547l-3.125.781v3.907c0 .546-.43.937-.937.937-.547 0-.938-.39-.938-.937V6.437c0-.508.39-.938.938-.938m.937 5.898 3.125-.664v-2.03l-3.125.78zm0 1.915v1.835l3.125-.664v-1.836zm0 3.75v1.68l2.656-.665.469-.117v-1.563zm5 .742q1.935.058 3.75.937V16.79l-2.187-.625a4.3 4.3 0 0 0-1.563-.156zm5.625 1.445c.703.078 1.445-.04 2.148-.312l.977-.352V16.75l-1.016.234c-.703.196-1.406.235-2.109.196zm3.125-4.414V13l-1.016.234c-.703.196-1.406.235-2.109.196v1.875c.547.039 1.133 0 1.68-.117zm0-3.75V9.133a8 8 0 0 1-3.125.625v1.758c.547.078 1.133.039 1.68-.079zm-5-1.524c-.664-.156-1.25-.39-1.836-.664a5 5 0 0 0-1.914-.507v1.992a6.5 6.5 0 0 1 2.11.234l1.64.469zm0 3.477-2.187-.625a4.3 4.3 0 0 0-1.563-.156v1.875a6.5 6.5 0 0 1 2.11.234l1.64.469z' />
    </g>
    <defs>
      <clipPath id='fc015285bc058cf05006cf01a3bbbd6e__a'>
        <path d='M0 0h18v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFlagCheckeredLgBoldIcon);
export default ForwardRef;

import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBarsFilterLgBoldIcon = (
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
      <path d='M.25 8.938C.25 8.43.64 8 1.188 8h15.625a.95.95 0 0 1 .937.938c0 .546-.43.937-.937.937H1.188c-.547 0-.938-.39-.938-.937m2.5 6.25c0-.508.39-.938.938-.938h10.625a.95.95 0 0 1 .937.938c0 .546-.43.937-.937.937H3.688c-.547 0-.938-.39-.938-.937m8.75 6.25c0 .546-.43.937-.937.937H7.437c-.546 0-.937-.39-.937-.937 0-.508.39-.938.938-.938h3.125a.95.95 0 0 1 .937.938' />
    </g>
    <defs>
      <clipPath id='120ac28d294dcde75760690106f3c196__a'>
        <path d='M0 0h18v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBarsFilterLgBoldIcon);
export default ForwardRef;

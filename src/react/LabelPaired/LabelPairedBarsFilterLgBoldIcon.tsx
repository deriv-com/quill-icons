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
      <path d='M.25 8.938q.078-.86.938-.938h15.625q.858.078.937.938-.078.858-.937.937H1.188q-.86-.079-.938-.937m2.5 6.25q.078-.86.938-.938h10.625q.858.078.937.938-.079.858-.937.937H3.688q-.86-.078-.938-.937m8.75 6.25q-.079.858-.937.937H7.437q-.859-.079-.937-.937.078-.86.938-.938h3.125q.858.078.937.938' />
    </g>
    <defs>
      <clipPath id='db787475d351f323__a'>
        <path d='M0 0h18v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBarsFilterLgBoldIcon);
export default ForwardRef;

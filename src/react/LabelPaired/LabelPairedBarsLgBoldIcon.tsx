import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBarsLgBoldIcon = (
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
      <path d='M.25 8.938q.078-.86.938-.938h15.625q.858.078.937.938-.078.858-.937.937H1.188q-.86-.079-.938-.937m0 6.25q.078-.86.938-.938h15.625q.858.078.937.938-.078.858-.937.937H1.188q-.86-.078-.938-.937m17.5 6.25q-.078.858-.937.937H1.188q-.86-.079-.938-.937.078-.86.938-.938h15.625q.858.078.937.938' />
    </g>
    <defs>
      <clipPath id='3e9992bce560387571ae3d4bcca9f725__a'>
        <path d='M0 0h18v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBarsLgBoldIcon);
export default ForwardRef;

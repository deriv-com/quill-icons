import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSevenLgBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={13}
    height={30}
    viewBox='0 0 13 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M.25 7.688q.078-.86.938-.938h10.625a.89.89 0 0 1 .82.469 1 1 0 0 1 0 .937L3.258 23.781q-.508.703-1.29.352-.702-.508-.312-1.29l8.516-14.218H1.188q-.86-.078-.938-.937' />
    </g>
    <defs>
      <clipPath id='b4e21eca3b15611160ab4e0a4b6b3709__a'>
        <path d='M0 0h13v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSevenLgBoldIcon);
export default ForwardRef;

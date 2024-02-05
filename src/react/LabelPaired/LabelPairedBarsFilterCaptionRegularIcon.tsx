import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBarsFilterCaptionRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={11}
    height={18}
    viewBox='0 0 11 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M.25 5.375Q.273 5.023.625 5h9.75q.352.023.375.375-.023.352-.375.375H.625Q.273 5.727.25 5.375m1.5 3.75q.023-.352.375-.375h6.75q.352.023.375.375-.023.352-.375.375h-6.75q-.352-.023-.375-.375M7 12.875q-.023.352-.375.375h-2.25q-.352-.023-.375-.375.023-.352.375-.375h2.25q.352.023.375.375' />
    </g>
    <defs>
      <clipPath id='de104d673ac74a47dd090ccdad890b2c__a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBarsFilterCaptionRegularIcon);
export default ForwardRef;

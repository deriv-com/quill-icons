import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCompressCaptionRegularIcon = (
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
      <path d='M4 4.625v3q-.023.352-.375.375h-3Q.273 7.977.25 7.625q.023-.352.375-.375H3.25V4.625q.023-.352.375-.375.352.023.375.375M.625 11h3q.352.023.375.375v3q-.023.352-.375.375-.352-.023-.375-.375V11.75H.625q-.352-.023-.375-.375.023-.352.375-.375M7.75 4.625V7.25h2.625q.352.023.375.375-.023.352-.375.375h-3Q7.023 7.977 7 7.625v-3q.023-.352.375-.375.352.023.375.375M7.375 11h3q.352.023.375.375-.023.352-.375.375H7.75v2.625q-.023.352-.375.375-.352-.023-.375-.375v-3q.023-.352.375-.375' />
    </g>
    <defs>
      <clipPath id='62594d83ff92aee34e0ac92fb3ec96a3__a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCompressCaptionRegularIcon);
export default ForwardRef;

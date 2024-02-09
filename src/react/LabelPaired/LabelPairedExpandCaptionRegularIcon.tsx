import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedExpandCaptionRegularIcon = (
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
      <path d='M3.625 4.25q.352.023.375.375-.023.352-.375.375H1v2.625Q.977 7.977.625 8 .273 7.977.25 7.625v-3q.023-.352.375-.375zM.25 11.375q.023-.352.375-.375.352.023.375.375V14h2.625q.352.023.375.375-.023.352-.375.375h-3q-.352-.023-.375-.375zM10.375 4.25q.352.023.375.375v3q-.023.352-.375.375-.352-.023-.375-.375V5H7.375Q7.023 4.977 7 4.625q.023-.352.375-.375zM10 11.375q.023-.352.375-.375.352.023.375.375v3q-.023.352-.375.375h-3q-.352-.023-.375-.375.023-.352.375-.375H10z' />
    </g>
    <defs>
      <clipPath id='6c6aa0c432460ef4b224c9b6017d3b78__a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedExpandCaptionRegularIcon);
export default ForwardRef;

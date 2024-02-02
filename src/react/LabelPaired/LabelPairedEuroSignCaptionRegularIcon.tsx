import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedEuroSignCaptionRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={8}
    height={18}
    viewBox='0 0 8 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.047 8.75H.625Q.273 8.727.25 8.375.273 8.023.625 8h.586a5.25 5.25 0 0 1 1.875-2.695Q4.445 4.273 6.25 4.25h1.148q.353.023.375.375-.022.352-.375.375H6.25q-1.5.024-2.625.844A4.56 4.56 0 0 0 2.008 8h4.617q.352.023.375.375-.023.352-.375.375H1.82a4.1 4.1 0 0 0 0 1.5h4.805q.352.023.375.375-.023.352-.375.375H2.008q.492 1.336 1.617 2.156T6.25 14h1.148q.353.023.375.375-.022.352-.375.375H6.25q-1.805-.024-3.164-1.055A5.25 5.25 0 0 1 1.21 11H.625q-.352-.023-.375-.375.023-.352.375-.375h.422a6 6 0 0 1 0-1.5' />
    </g>
    <defs>
      <clipPath id='f28c12d494750f87__a'>
        <path d='M0 0h8v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedEuroSignCaptionRegularIcon);
export default ForwardRef;

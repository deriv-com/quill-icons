import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFiveCaptionRegularIcon = (
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
      <path d='M1.398 4.531q.071-.257.352-.281h4.875q.352.023.375.375-.023.352-.375.375h-4.57l-.938 3.75H4.75q1.266.024 2.133.867.843.868.867 2.133-.024 1.266-.867 2.133-.868.843-2.133.867H2.242a2.05 2.05 0 0 1-1.101-.305 1.97 1.97 0 0 1-.75-.843l-.094-.188q-.141-.304.164-.492.329-.141.492.164l.117.187q.375.704 1.172.727H4.75q.96-.024 1.594-.656.632-.633.656-1.594-.024-.96-.656-1.594Q5.71 9.523 4.75 9.5H.625a.38.38 0 0 1-.305-.14.47.47 0 0 1-.07-.329z' />
    </g>
    <defs>
      <clipPath id='3a6efe285b31b05adef2e1fe5d109b7a__a'>
        <path d='M0 0h8v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFiveCaptionRegularIcon);
export default ForwardRef;

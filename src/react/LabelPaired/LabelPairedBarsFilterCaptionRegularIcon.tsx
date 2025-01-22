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
      <path d='M.25 5.375C.25 5.188.414 5 .625 5h9.75c.188 0 .375.188.375.375 0 .21-.187.375-.375.375H.625a.37.37 0 0 1-.375-.375m1.5 3.75c0-.187.164-.375.375-.375h6.75c.188 0 .375.188.375.375 0 .21-.187.375-.375.375h-6.75a.37.37 0 0 1-.375-.375M7 12.875c0 .21-.187.375-.375.375h-2.25A.37.37 0 0 1 4 12.875c0-.187.164-.375.375-.375h2.25c.188 0 .375.188.375.375' />
    </g>
    <defs>
      <clipPath id='bb34dd0c3198e91931ad87429ac46d91__a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBarsFilterCaptionRegularIcon);
export default ForwardRef;

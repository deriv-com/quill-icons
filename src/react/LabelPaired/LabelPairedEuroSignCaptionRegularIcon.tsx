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
      <path d='M1.047 8.75H.625a.37.37 0 0 1-.375-.375C.25 8.188.414 8 .625 8h.586A5.25 5.25 0 0 1 6.25 4.25h1.148c.188 0 .375.188.375.375 0 .21-.187.375-.375.375H6.25C4.281 5 2.617 6.266 1.984 8h4.641c.188 0 .375.188.375.375 0 .21-.187.375-.375.375H1.797c-.047.258-.047.516-.047.75 0 .258.023.516.047.75h4.828c.188 0 .375.188.375.375 0 .21-.187.375-.375.375h-4.64a4.52 4.52 0 0 0 4.265 3h1.148c.188 0 .375.188.375.375 0 .21-.187.375-.375.375H6.25A5.224 5.224 0 0 1 1.21 11H.626a.37.37 0 0 1-.375-.375c0-.187.164-.375.375-.375h.422C1 10.016 1 9.758 1 9.5c0-.234 0-.492.047-.75' />
    </g>
    <defs>
      <clipPath id='82cb04bd60689e1447d0bd8e4dc8b287__a'>
        <path d='M0 0h8v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedEuroSignCaptionRegularIcon);
export default ForwardRef;

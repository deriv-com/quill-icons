import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLinkSimpleCaptionRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={18}
    viewBox='0 0 14 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M.25 9.5A3.746 3.746 0 0 1 4 5.75h1.875c.188 0 .375.188.375.375 0 .21-.187.375-.375.375H4c-1.664 0-3 1.36-3 3 0 1.664 1.336 3 3 3h1.875c.188 0 .375.188.375.375 0 .21-.187.375-.375.375H4A3.73 3.73 0 0 1 .25 9.5m13.5 0A3.746 3.746 0 0 1 10 13.25H8.125a.37.37 0 0 1-.375-.375c0-.187.164-.375.375-.375H10c1.64 0 3-1.336 3-3 0-1.64-1.36-3-3-3H8.125a.37.37 0 0 1-.375-.375c0-.187.164-.375.375-.375H10a3.76 3.76 0 0 1 3.75 3.75m-9.937-.375h6.374c.188 0 .376.188.376.375 0 .21-.188.375-.376.375H3.814a.37.37 0 0 1-.376-.375c0-.187.165-.375.376-.375' />
    </g>
    <defs>
      <clipPath id='451ee95a3eb06d6ec8ca126aa3166d90__a'>
        <path d='M0 0h14v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLinkSimpleCaptionRegularIcon);
export default ForwardRef;

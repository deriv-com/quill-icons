import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleEuroCaptionRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={18}
    viewBox='0 0 12 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M11.25 9.5a5.23 5.23 0 0 0-2.625-4.523 5.14 5.14 0 0 0-5.25 0A5.18 5.18 0 0 0 .75 9.5a5.19 5.19 0 0 0 2.625 4.547c1.617.96 3.61.96 5.25 0A5.24 5.24 0 0 0 11.25 9.5M0 9.5a5.96 5.96 0 0 1 3-5.18 5.97 5.97 0 0 1 6 0 6 6 0 0 1 3 5.18 6.01 6.01 0 0 1-3 5.203 5.97 5.97 0 0 1-6 0A5.97 5.97 0 0 1 0 9.5m3 .375h.563c-.024-.117-.024-.234-.024-.352s0-.257.023-.398H3a.37.37 0 0 1-.375-.375c0-.187.164-.375.375-.375h.797c.422-.867 1.336-1.5 2.367-1.5h.984c.188 0 .375.188.375.375 0 .21-.187.375-.375.375h-.984c-.61 0-1.148.305-1.5.75H6.75c.188 0 .375.188.375.375 0 .21-.187.375-.375.375H4.313c-.024.14-.024.258-.024.398 0 .118 0 .258.024.352H6.75c.188 0 .375.188.375.375 0 .21-.187.375-.375.375H4.64c.352.492.891.797 1.524.797h.984c.188 0 .375.164.375.375 0 .21-.187.375-.375.375h-.984a2.64 2.64 0 0 1-2.39-1.547H3a.37.37 0 0 1-.375-.375c0-.187.164-.375.375-.375' />
    </g>
    <defs>
      <clipPath id='7d62f0008c2a11d75210c847cd20b014__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleEuroCaptionRegularIcon);
export default ForwardRef;

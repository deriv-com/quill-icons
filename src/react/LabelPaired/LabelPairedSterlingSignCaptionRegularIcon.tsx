import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSterlingSignCaptionRegularIcon = (
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
      <path d='M2.125 7.063V9.5h3.75c.188 0 .375.188.375.375 0 .21-.187.375-.375.375H2.102A9.35 9.35 0 0 1 1.234 14h6.141c.188 0 .375.188.375.375 0 .21-.187.375-.375.375H.625a.41.41 0 0 1-.328-.164.36.36 0 0 1 0-.375l.023-.047a8.4 8.4 0 0 0 1.032-3.914H.625a.37.37 0 0 1-.375-.375c0-.187.164-.375.375-.375h.75V7.063A2.806 2.806 0 0 1 4.188 4.25h.164c.304 0 .585.07.89.164l1.875.61c.188.07.281.28.235.492-.07.187-.282.28-.493.234l-1.875-.633A1.9 1.9 0 0 0 4.352 5h-.165a2.066 2.066 0 0 0-2.062 2.063' />
    </g>
    <defs>
      <clipPath id='2207a31fbb21179e5e2975a7fbdc296f__a'>
        <path d='M0 0h8v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSterlingSignCaptionRegularIcon);
export default ForwardRef;

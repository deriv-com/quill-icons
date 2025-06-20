import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPenCircleCaptionRegularIcon = (
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
      <path d='M11.25 9.5a5.23 5.23 0 0 0-2.625-4.523 5.14 5.14 0 0 0-5.25 0A5.18 5.18 0 0 0 .75 9.5a5.19 5.19 0 0 0 2.625 4.547c1.617.96 3.61.96 5.25 0A5.24 5.24 0 0 0 11.25 9.5M0 9.5a5.96 5.96 0 0 1 3-5.18 5.97 5.97 0 0 1 6 0 6 6 0 0 1 3 5.18 6.01 6.01 0 0 1-3 5.203 5.97 5.97 0 0 1-6 0A5.97 5.97 0 0 1 0 9.5m7.758-2.156c-.14-.14-.375-.14-.54 0l-.491.492.937.937.492-.492a.357.357 0 0 0 0-.539zm-3.492 2.953a.5.5 0 0 0-.094.187l-.281 1.149 1.148-.305c.047 0 .117-.047.164-.094l1.922-1.921-.937-.938zm2.437-3.492a1.12 1.12 0 0 1 1.594 0l.398.422a1.09 1.09 0 0 1 0 1.57l-2.953 2.976c-.164.141-.328.235-.539.282l-1.758.445a.39.39 0 0 1-.351-.094.39.39 0 0 1-.094-.351l.445-1.758c.047-.211.14-.375.282-.54z' />
    </g>
    <defs>
      <clipPath id='34113a4e462e666a60e1a7f6e5ab562a__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPenCircleCaptionRegularIcon);
export default ForwardRef;

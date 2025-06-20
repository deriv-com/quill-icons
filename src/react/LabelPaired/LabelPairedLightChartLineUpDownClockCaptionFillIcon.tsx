import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLightChartLineUpDownClockCaptionFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={18}
    viewBox='0 0 15 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M0 5c0-.398.328-.75.75-.75.398 0 .75.352.75.75v7.875c0 .21.164.375.375.375h5.766c.164.563.422 1.078.797 1.5H1.875A1.85 1.85 0 0 1 0 12.875zm2.46 3.984L4.337 7.11a.723.723 0 0 1 1.055 0L6.75 8.445 8.836 6.36l-.445-.445a.53.53 0 0 1-.141-.375c0-.281.234-.539.516-.539h2.109c.188 0 .375.188.375.375v2.109c0 .282-.258.516-.54.516a.53.53 0 0 1-.374-.14l-.445-.446-2.625 2.625a.723.723 0 0 1-1.055 0L4.875 8.703l-1.36 1.336a.723.723 0 0 1-1.054 0 .723.723 0 0 1 0-1.055m5.79 3.141c0-1.852 1.5-3.375 3.375-3.375A3.39 3.39 0 0 1 15 12.125a3.376 3.376 0 0 1-3.375 3.375 3.36 3.36 0 0 1-3.375-3.375m3-1.5v1.5c0 .21.164.375.375.375h1.125a.385.385 0 0 0 .375-.375.4.4 0 0 0-.375-.375H12v-1.125a.4.4 0 0 0-.375-.375.385.385 0 0 0-.375.375' />
    </g>
    <defs>
      <clipPath id='3de6aa4cca0c2867eefeb274ac98871f__a'>
        <path d='M0 0h15v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLightChartLineUpDownClockCaptionFillIcon);
export default ForwardRef;

import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChartLineUpDownCaptionFillIcon = (
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
      <path d='M1.5 5v7.875c0 .21.164.375.375.375h9.375c.398 0 .75.352.75.75 0 .422-.352.75-.75.75H1.875A1.85 1.85 0 0 1 0 12.875V5c0-.398.328-.75.75-.75.398 0 .75.352.75.75m7.336 1.36-.445-.446a.53.53 0 0 1-.141-.375c0-.281.234-.539.516-.539h2.109c.188 0 .375.188.375.375v2.109c0 .282-.258.516-.54.516a.53.53 0 0 1-.374-.14l-.445-.446-2.625 2.625a.723.723 0 0 1-1.055 0L4.875 8.703l-1.36 1.336a.723.723 0 0 1-1.054 0 .723.723 0 0 1 0-1.055L4.336 7.11a.723.723 0 0 1 1.055 0L6.75 8.445zm1.5 3.304a.55.55 0 0 1 .375-.164c.305 0 .539.258.539.54v2.085c0 .21-.187.375-.375.375h-2.11a.52.52 0 0 1-.515-.516c0-.14.047-.28.14-.375l.446-.445-.82-.82 1.078-1.055.797.82z' />
    </g>
    <defs>
      <clipPath id='2b8a33a9b1bd5491b605701b04bbdfb2__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartLineUpDownCaptionFillIcon);
export default ForwardRef;

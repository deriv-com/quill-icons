import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChartOhlcCaptionRegularIcon = (
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
      <path d='M7.5 3.5c.188 0 .375.188.375.375V5H9c.188 0 .375.188.375.375 0 .21-.187.375-.375.375H7.875v7.875c0 .21-.187.375-.375.375a.37.37 0 0 1-.375-.375V12.5H6a.37.37 0 0 1-.375-.375c0-.187.164-.375.375-.375h1.125V3.875c0-.187.164-.375.375-.375M12.375 5c.188 0 .375.188.375.375v4.875h1.125c.188 0 .375.188.375.375 0 .21-.187.375-.375.375H12.75v1.125c0 .21-.187.375-.375.375a.37.37 0 0 1-.375-.375V7.25h-1.125a.37.37 0 0 1-.375-.375c0-.187.164-.375.375-.375H12V5.375c0-.187.164-.375.375-.375m-9.75 3c.188 0 .375.188.375.375v4.875h1.125c.188 0 .375.188.375.375 0 .21-.187.375-.375.375H3v1.125c0 .21-.187.375-.375.375a.37.37 0 0 1-.375-.375V10.25H1.125a.37.37 0 0 1-.375-.375c0-.187.164-.375.375-.375H2.25V8.375c0-.187.164-.375.375-.375' />
    </g>
    <defs>
      <clipPath id='15689573b361bf18__a'>
        <path d='M0 0h15v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartOhlcCaptionRegularIcon);
export default ForwardRef;

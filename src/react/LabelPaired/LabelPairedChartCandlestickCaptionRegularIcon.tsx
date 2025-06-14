import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChartCandlestickCaptionRegularIcon = (
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
      <path d='M.75 4.625v8.25A1.11 1.11 0 0 0 1.875 14h9.75c.188 0 .375.188.375.375 0 .21-.187.375-.375.375h-9.75A1.85 1.85 0 0 1 0 12.875v-8.25c0-.187.164-.375.375-.375.188 0 .375.188.375.375m6.75 0v1.148c.422.094.75.47.75.915v1.875a.96.96 0 0 1-.75.937v1.125c0 .21-.187.375-.375.375a.37.37 0 0 1-.375-.375V9.5A.935.935 0 0 1 6 8.563V6.687c0-.445.305-.82.75-.914V4.625c0-.187.164-.375.375-.375.188 0 .375.188.375.375M4.125 5c.188 0 .375.188.375.375v1.148c.422.094.75.47.75.915v2.625A.96.96 0 0 1 4.5 11v1.125c0 .21-.187.375-.375.375a.37.37 0 0 1-.375-.375V11a.935.935 0 0 1-.75-.937V7.437c0-.445.305-.82.75-.914V5.375c0-.187.164-.375.375-.375M7.5 6.688a.2.2 0 0 0-.187-.188h-.375a.185.185 0 0 0-.188.188v1.875c0 .117.07.187.188.187h.375c.093 0 .187-.07.187-.187zM9.938 8.75a.185.185 0 0 0-.188.188v1.124c0 .118.07.188.188.188h.374c.094 0 .188-.07.188-.187V8.937a.2.2 0 0 0-.187-.187zM9.75 8V6.875c0-.187.164-.375.375-.375.188 0 .375.188.375.375v1.148c.422.094.75.47.75.915v1.124a.96.96 0 0 1-.75.938v1.125c0 .21-.187.375-.375.375a.37.37 0 0 1-.375-.375V11a.935.935 0 0 1-.75-.937V8.937c0-.445.305-.82.75-.914zm-5.437-.75h-.375a.185.185 0 0 0-.188.188v2.625c0 .117.07.187.188.187h.374c.094 0 .188-.07.188-.187V7.437a.2.2 0 0 0-.187-.187' />
    </g>
    <defs>
      <clipPath id='3070220f1ecf482e665ce14b96ed297b__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartCandlestickCaptionRegularIcon);
export default ForwardRef;

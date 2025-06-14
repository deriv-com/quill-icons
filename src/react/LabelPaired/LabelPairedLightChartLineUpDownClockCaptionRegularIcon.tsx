import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLightChartLineUpDownClockCaptionRegularIcon = (
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
      <path d='M0 4.625c0-.187.164-.375.375-.375.188 0 .375.188.375.375v8.25A1.11 1.11 0 0 0 1.875 14h6.07c.14.281.305.54.492.75H1.875A1.85 1.85 0 0 1 0 12.875zm2.344 4.992 2.25-2.25a.39.39 0 0 1 .281-.117c.094 0 .188.047.258.117L6.75 8.984A416 416 0 0 1 9.96 5.75H8.626a.37.37 0 0 1-.375-.375c0-.187.164-.375.375-.375h2.25c.188 0 .375.188.375.375v2.25c0 .21-.187.375-.375.375a.37.37 0 0 1-.375-.375V6.289C9.328 7.461 8.156 8.61 7.008 9.781a.397.397 0 0 1-.54 0c-.538-.539-1.077-1.078-1.593-1.617-.68.656-1.336 1.336-1.992 1.992a.397.397 0 0 1-.54 0 .397.397 0 0 1 0-.539m5.906 2.508c0-1.852 1.5-3.375 3.375-3.375A3.39 3.39 0 0 1 15 12.125a3.376 3.376 0 0 1-3.375 3.375 3.36 3.36 0 0 1-3.375-3.375m.75 0a2.62 2.62 0 0 0 2.625 2.625 2.636 2.636 0 0 0 2.625-2.625c0-1.43-1.195-2.625-2.625-2.625A2.636 2.636 0 0 0 9 12.125m2.25-1.5c0-.187.164-.375.375-.375.188 0 .375.188.375.375v1.125h.75c.188 0 .375.188.375.375 0 .21-.187.375-.375.375h-1.125a.37.37 0 0 1-.375-.375z' />
    </g>
    <defs>
      <clipPath id='fdf5321d3d12075554084e0bf565345d__a'>
        <path d='M0 0h15v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLightChartLineUpDownClockCaptionRegularIcon);
export default ForwardRef;

import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChartLineUpDownCaptionRegularIcon = (
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
      <path d='M.75 4.625v8.25A1.11 1.11 0 0 0 1.875 14h9.75c.188 0 .375.188.375.375 0 .21-.187.375-.375.375h-9.75A1.85 1.85 0 0 1 0 12.875v-8.25c0-.187.164-.375.375-.375.188 0 .375.188.375.375M8.625 5.75a.37.37 0 0 1-.375-.375c0-.187.164-.375.375-.375h2.25c.188 0 .375.188.375.375v2.25c0 .21-.187.375-.375.375a.37.37 0 0 1-.375-.375V6.289L7.008 9.781a.397.397 0 0 1-.54 0L4.876 8.164l-1.992 1.992a.397.397 0 0 1-.54 0 .397.397 0 0 1 0-.539l2.25-2.25a.39.39 0 0 1 .282-.117c.094 0 .188.047.258.117L6.75 8.984 9.96 5.75zm0 6.75a.37.37 0 0 1-.375-.375c0-.187.164-.375.375-.375h1.336l-1.617-1.594.539-.539 1.617 1.617V9.875c0-.187.164-.375.375-.375.188 0 .375.188.375.375v2.25c0 .21-.187.375-.375.375z' />
    </g>
    <defs>
      <clipPath id='78194e563c1de8abff3e61e7b7cba62d__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartLineUpDownCaptionRegularIcon);
export default ForwardRef;

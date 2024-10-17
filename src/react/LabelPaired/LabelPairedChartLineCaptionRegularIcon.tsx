import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChartLineCaptionRegularIcon = (
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
      <path d='M.75 4.625v8.25A1.11 1.11 0 0 0 1.875 14h9.75c.188 0 .375.188.375.375 0 .21-.187.375-.375.375h-9.75A1.85 1.85 0 0 1 0 12.875v-8.25c0-.187.164-.375.375-.375.188 0 .375.188.375.375m10.383 2.531-3.375 3.375a.397.397 0 0 1-.54 0L5.25 8.54l-2.367 2.367a.397.397 0 0 1-.54 0 .397.397 0 0 1 0-.539L4.97 7.742c.14-.14.398-.14.539 0L7.5 9.734l3.094-3.117c.14-.14.398-.14.539 0 .14.14.14.399 0 .54' />
    </g>
    <defs>
      <clipPath id='3c786386a4c02878ac900c9c853245bb__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartLineCaptionRegularIcon);
export default ForwardRef;

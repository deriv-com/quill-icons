import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPercentCaptionFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={9}
    height={18}
    viewBox='0 0 9 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m8.766 6.29-7.5 7.5a.723.723 0 0 1-1.055 0 .723.723 0 0 1 0-1.056l7.5-7.5a.723.723 0 0 1 1.055 0 .723.723 0 0 1 0 1.055M3 6.5c0 .54-.305 1.031-.75 1.313a1.55 1.55 0 0 1-1.5 0A1.52 1.52 0 0 1 0 6.5c0-.516.281-1.008.75-1.29a1.55 1.55 0 0 1 1.5 0c.445.282.75.774.75 1.29m6 6c0 .54-.305 1.031-.75 1.313a1.55 1.55 0 0 1-1.5 0A1.52 1.52 0 0 1 6 12.5c0-.516.281-1.008.75-1.29a1.55 1.55 0 0 1 1.5 0c.445.282.75.774.75 1.29' />
    </g>
    <defs>
      <clipPath id='87666bf7cfab5044199a4a656b4f001f__a'>
        <path d='M0 0h9v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPercentCaptionFillIcon);
export default ForwardRef;

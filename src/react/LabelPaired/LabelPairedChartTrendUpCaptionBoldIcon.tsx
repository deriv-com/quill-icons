import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChartTrendUpCaptionBoldIcon = (
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
      <path d='M14.484 3.758c.282.14.399.469.258.75l-2.25 4.5a.56.56 0 0 1-.515.305H8.578l-2.836 5.695a.555.555 0 0 1-.75.258l-4.5-2.25a.555.555 0 0 1-.258-.75.555.555 0 0 1 .75-.258L4.992 14l2.742-5.484a.58.58 0 0 1 .516-.328h3.398l2.086-4.172a.555.555 0 0 1 .75-.258' />
    </g>
    <defs>
      <clipPath id='4b2f807e714a920c__a'>
        <path d='M0 0h15v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartTrendUpCaptionBoldIcon);
export default ForwardRef;

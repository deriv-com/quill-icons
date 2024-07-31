import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedUserMinusCaptionFillIcon = (
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
      <path d='M2.25 6.5c0-1.055.563-2.04 1.5-2.578a2.99 2.99 0 0 1 3 0c.914.539 1.5 1.523 1.5 2.578a3.03 3.03 0 0 1-1.5 2.602c-.937.539-2.086.539-3 0A2.98 2.98 0 0 1 2.25 6.5M0 14.82a4.17 4.17 0 0 1 4.172-4.195h2.133A4.19 4.19 0 0 1 10.5 14.82c0 .375-.328.68-.703.68H.68a.68.68 0 0 1-.68-.68m11.063-6.632h3.374A.57.57 0 0 1 15 8.75a.555.555 0 0 1-.562.563h-3.376a.54.54 0 0 1-.562-.563c0-.305.234-.562.563-.562' />
    </g>
    <defs>
      <clipPath id='c4ccf7b03e7cfebb4ba6c900140f0618__a'>
        <path d='M0 0h15v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedUserMinusCaptionFillIcon);
export default ForwardRef;

import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLocationDotSmFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={11}
    height={22}
    viewBox='0 0 11 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M6.129 17.422a.825.825 0 0 1-1.285 0C3.449 15.645.25 11.406.25 9A5.25 5.25 0 0 1 5.5 3.75 5.25 5.25 0 0 1 10.75 9c0 2.406-3.2 6.645-4.621 8.422M5.5 7.25c-.629 0-1.203.355-1.531.875-.301.547-.301 1.23 0 1.75.328.547.902.875 1.531.875.602 0 1.176-.328 1.504-.875.3-.52.3-1.203 0-1.75-.328-.52-.902-.875-1.504-.875' />
    </g>
    <defs>
      <clipPath id='b50bb5f6605979c4f64dc6e242785ed5__a'>
        <path d='M0 0h11v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLocationDotSmFillIcon);
export default ForwardRef;

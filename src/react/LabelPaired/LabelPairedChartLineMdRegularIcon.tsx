import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChartLineMdRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={24}
    viewBox='0 0 16 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1 5.5v11c0 .844.656 1.5 1.5 1.5h13c.25 0 .5.25.5.5 0 .281-.25.5-.5.5h-13A2.47 2.47 0 0 1 0 16.5v-11c0-.25.219-.5.5-.5.25 0 .5.25.5.5m13.844 3.375-4.5 4.5a.53.53 0 0 1-.719 0L7 10.719l-3.156 3.156a.53.53 0 0 1-.719 0 .53.53 0 0 1 0-.719l3.5-3.5a.53.53 0 0 1 .719 0L10 12.312l4.125-4.156a.53.53 0 0 1 .719 0 .53.53 0 0 1 0 .719' />
    </g>
    <defs>
      <clipPath id='5be8b077e843e47a04506333b8764d9d__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartLineMdRegularIcon);
export default ForwardRef;

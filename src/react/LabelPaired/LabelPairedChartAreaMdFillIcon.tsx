import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChartAreaMdFillIcon = (
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
      <path d='M2 6v10.5c0 .281.219.5.5.5H15c.531 0 1 .469 1 1 0 .563-.469 1-1 1H2.5A2.47 2.47 0 0 1 0 16.5V6c0-.531.438-1 1-1 .531 0 1 .469 1 1m3 9v.031c-.562 0-1-.469-1-1v-2.625c0-.25.063-.5.219-.687l2.5-2.813a1.01 1.01 0 0 1 1.531 0l1.219 1.469a.732.732 0 0 0 1.094.063l.656-.657c.406-.406 1.094-.406 1.469.063l2.062 2.375c.156.187.25.437.25.656V14c0 .563-.469 1-1 1z' />
    </g>
    <defs>
      <clipPath id='215f35239ea7ee47559e01a3f397d052__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartAreaMdFillIcon);
export default ForwardRef;

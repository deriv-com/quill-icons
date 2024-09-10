import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChartLineMdFillIcon = (
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
      <path d='M2 6v10.5c0 .281.219.5.5.5H15c.531 0 1 .469 1 1 0 .563-.469 1-1 1H2.5A2.47 2.47 0 0 1 0 16.5V6c0-.531.438-1 1-1 .531 0 1 .469 1 1m12.688 2.719-4 4a.964.964 0 0 1-1.407 0L7.5 10.938l-2.812 2.78a.964.964 0 0 1-1.407 0 .964.964 0 0 1 0-1.405l3.5-3.5a.964.964 0 0 1 1.407 0L10 10.593l3.281-3.28a.964.964 0 0 1 1.406 0 .964.964 0 0 1 0 1.406' />
    </g>
    <defs>
      <clipPath id='e8e0bf2fc3ec300906eca502fdcd5a9e__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartLineMdFillIcon);
export default ForwardRef;

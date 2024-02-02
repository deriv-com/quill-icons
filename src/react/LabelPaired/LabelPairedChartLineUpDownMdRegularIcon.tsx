import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChartLineUpDownMdRegularIcon = (
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
      <path d='M1 5.5v11q.03.625.438 1.063.436.405 1.062.437h13q.47.031.5.5-.03.47-.5.5h-13q-1.062-.03-1.781-.719Q.03 17.562 0 16.5v-11q.031-.469.5-.5.47.031.5.5M11.5 7q-.469-.03-.5-.5.031-.469.5-.5h3q.47.031.5.5v3q-.03.47-.5.5-.469-.03-.5-.5V7.719l-4.656 4.625q-.345.312-.688 0L6.5 10.219l-2.656 2.625q-.345.312-.688 0-.312-.345 0-.688l3-3A.42.42 0 0 1 6.5 9q.218 0 .344.156L9 11.281 13.281 7zm0 9q-.469-.03-.5-.5.031-.469.5-.5h1.781l-2.125-2.156.688-.688L14 14.281V12.5q.031-.469.5-.5.47.031.5.5v3q-.03.47-.5.5z' />
    </g>
    <defs>
      <clipPath id='589be7b1ad8141ba5185cdea461236e4__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartLineUpDownMdRegularIcon);
export default ForwardRef;

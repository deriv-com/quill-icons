import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChartMixedSmFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={22}
    viewBox='0 0 14 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m13.672 6.184-4.375 3.5a.866.866 0 0 1-1.094.027L5.25 7.496 1.422 10.56a.87.87 0 0 1-1.23-.137.874.874 0 0 1 .136-1.23l4.375-3.5c.3-.247.738-.247 1.067 0l2.953 2.214 3.855-3.09c.356-.3.93-.218 1.23.137.301.383.22.93-.136 1.23M4.375 10.75c0-.465.383-.875.875-.875a.9.9 0 0 1 .875.875V16c0 .492-.41.875-.875.875A.864.864 0 0 1 4.375 16zm-3.5 2.625c0-.465.383-.875.875-.875a.9.9 0 0 1 .875.875V16c0 .492-.41.875-.875.875A.864.864 0 0 1 .875 16zm7.875-1.75a.9.9 0 0 1 .875.875V16c0 .492-.41.875-.875.875A.864.864 0 0 1 7.875 16v-3.5c0-.465.383-.875.875-.875m2.625-.875c0-.465.383-.875.875-.875a.9.9 0 0 1 .875.875V16c0 .492-.41.875-.875.875a.864.864 0 0 1-.875-.875z' />
    </g>
    <defs>
      <clipPath id='c0a350d1c56c4a16034edffc38ed9990__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartMixedSmFillIcon);
export default ForwardRef;

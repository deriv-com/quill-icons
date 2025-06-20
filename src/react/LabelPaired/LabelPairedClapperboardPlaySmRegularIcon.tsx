import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedClapperboardPlaySmRegularIcon = (
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
      <path d='M13.125 9H.875v6.125c0 .492.383.875.875.875h10.5a.88.88 0 0 0 .875-.875zm0-.875v-1.75a.82.82 0 0 0-.3-.629l-2.38 2.379zm-6.836 0h2.926L11.84 5.5H8.914zm-1.23 0L7.684 5.5H4.758L2.133 8.125zM1.75 5.5a.88.88 0 0 0-.875.875v1.75h.027L3.527 5.5zM14 8.125v7c0 .984-.793 1.75-1.75 1.75H1.75c-.984 0-1.75-.766-1.75-1.75v-8.75c0-.957.766-1.75 1.75-1.75h10.5c.957 0 1.75.793 1.75 1.75zM5.906 9.957l3.719 2.188a.43.43 0 0 1 .219.355c0 .164-.082.3-.219.383L5.906 15.07a.42.42 0 0 1-.437 0c-.137-.082-.246-.218-.246-.383v-4.374c0-.137.109-.301.246-.356a.42.42 0 0 1 .437 0M8.531 12.5l-2.406-1.422v2.844z' />
    </g>
    <defs>
      <clipPath id='e1c544b9f3d3ea03d03c1cdb71d83301__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedClapperboardPlaySmRegularIcon);
export default ForwardRef;

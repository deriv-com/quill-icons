import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedImageSmRegularIcon = (
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
      <path d='M1.75 5.5a.88.88 0 0 0-.875.875v6.398l1.832-1.859a1.14 1.14 0 0 1 1.559 0l1.859 1.86 3.582-3.61a1.14 1.14 0 0 1 1.559 0l1.859 1.86V6.374a.9.9 0 0 0-.875-.875zm-.875 8.504v1.121c0 .492.383.875.875.875h1.121l2.625-2.625-1.86-1.832a.214.214 0 0 0-.3 0zm9.762-4.211a.215.215 0 0 0-.301 0L4.102 16h8.148a.88.88 0 0 0 .875-.875v-2.871zM0 6.375c0-.957.766-1.75 1.75-1.75h10.5c.957 0 1.75.793 1.75 1.75v8.75c0 .984-.793 1.75-1.75 1.75H1.75c-.984 0-1.75-.766-1.75-1.75zm4.375 1.313a.47.47 0 0 0-.437-.438.45.45 0 0 0-.438.438c0 .246.191.437.438.437a.45.45 0 0 0 .437-.437m-1.75 0c0-.465.246-.875.656-1.122.383-.246.903-.246 1.313 0 .383.247.656.657.656 1.122 0 .492-.273.902-.656 1.148-.41.246-.93.246-1.313 0a1.31 1.31 0 0 1-.656-1.149' />
    </g>
    <defs>
      <clipPath id='d088d3f6888842caf86c75b3a5e9fa16__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedImageSmRegularIcon);
export default ForwardRef;

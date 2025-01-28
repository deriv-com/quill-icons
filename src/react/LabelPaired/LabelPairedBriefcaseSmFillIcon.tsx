import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBriefcaseSmFillIcon = (
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
      <path d='M5.031 5.063a.216.216 0 0 0-.218.218v1.094h4.375V5.281c0-.11-.11-.218-.22-.218zM3.5 5.28c0-.82.684-1.531 1.531-1.531H8.97c.82 0 1.531.71 1.531 1.531v1.094h1.75c.957 0 1.75.793 1.75 1.75v2.625H0V8.125c0-.957.766-1.75 1.75-1.75H3.5zM14 11.625v3.5c0 .984-.793 1.75-1.75 1.75H1.75c-.984 0-1.75-.766-1.75-1.75v-3.5h5.25v.875c0 .492.383.875.875.875h1.75a.88.88 0 0 0 .875-.875v-.875z' />
    </g>
    <defs>
      <clipPath id='bede423ac579a43fb5a8074ee29ce76a__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBriefcaseSmFillIcon);
export default ForwardRef;

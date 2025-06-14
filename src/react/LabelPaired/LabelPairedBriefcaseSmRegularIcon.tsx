import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBriefcaseSmRegularIcon = (
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
      <path d='M4.375 5.063v1.312h5.25V5.063a.47.47 0 0 0-.437-.438H4.812a.45.45 0 0 0-.437.438M3.5 6.375V5.063c0-.711.574-1.313 1.313-1.313h4.375c.71 0 1.312.602 1.312 1.313v1.312h1.75c.957 0 1.75.793 1.75 1.75v7c0 .984-.793 1.75-1.75 1.75H1.75c-.984 0-1.75-.766-1.75-1.75v-7c0-.957.766-1.75 1.75-1.75zm6.563.875H1.75a.88.88 0 0 0-.875.875v2.625h12.25V8.125a.9.9 0 0 0-.875-.875zm3.062 4.375H9.188v1.313c0 .492-.41.874-.876.874H5.688a.864.864 0 0 1-.875-.874v-1.313H.874v3.5c0 .492.383.875.875.875h10.5a.88.88 0 0 0 .875-.875zm-7.437 0v1.313h2.625v-1.313z' />
    </g>
    <defs>
      <clipPath id='b85ce29ad4457af42c49cbf3b3a1b7da__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBriefcaseSmRegularIcon);
export default ForwardRef;

import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLoaderMdBoldIcon = (
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
      <path d='M8.75 4.75v2.5A.74.74 0 0 1 8 8a.72.72 0 0 1-.75-.75v-2.5A.74.74 0 0 1 8 4a.76.76 0 0 1 .75.75m0 12v2.5A.74.74 0 0 1 8 20a.72.72 0 0 1-.75-.75v-2.5A.74.74 0 0 1 8 16a.76.76 0 0 1 .75.75M0 12a.74.74 0 0 1 .75-.75h2.5A.76.76 0 0 1 4 12a.74.74 0 0 1-.75.75H.75A.72.72 0 0 1 0 12m12.75-.75h2.5A.76.76 0 0 1 16 12a.74.74 0 0 1-.75.75h-2.5A.72.72 0 0 1 12 12a.74.74 0 0 1 .75-.75m.906-4.906c.281.312.281.781 0 1.062l-1.781 1.782a.774.774 0 0 1-1.062 0 .774.774 0 0 1 0-1.063l1.78-1.781c.282-.282.75-.282 1.063 0m-8.5 9.562-1.781 1.75a.684.684 0 0 1-1.031 0 .684.684 0 0 1 0-1.031l1.75-1.781a.774.774 0 0 1 1.062 0c.282.281.282.75 0 1.062M2.344 6.344a.736.736 0 0 1 1.031 0l1.781 1.781a.774.774 0 0 1 0 1.063c-.281.28-.75.28-1.062 0l-1.75-1.782c-.313-.281-.313-.75 0-1.062m9.531 8.5 1.781 1.781a.736.736 0 0 1 0 1.031c-.312.313-.781.313-1.062 0l-1.781-1.75a.774.774 0 0 1 0-1.062.774.774 0 0 1 1.062 0' />
    </g>
    <defs>
      <clipPath id='3eeebdcde0b9b78a452db56e62488674__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLoaderMdBoldIcon);
export default ForwardRef;

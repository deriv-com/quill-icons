import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPercentMdBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={24}
    viewBox='0 0 12 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m11.531 7.531-10.031 10a.684.684 0 0 1-1.031 0c-.313-.281-.313-.75 0-1.062l10-9.969c.281-.312.75-.312 1.062 0a.736.736 0 0 1 0 1.031M3.5 8c0 .563-.312 1.031-.75 1.313-.469.28-1.062.28-1.5 0A1.5 1.5 0 0 1 .5 8c0-.531.281-1 .75-1.281.438-.282 1.031-.282 1.5 0 .438.281.75.75.75 1.281m8 8c0 .563-.312 1.031-.75 1.313-.469.28-1.062.28-1.5 0A1.5 1.5 0 0 1 8.5 16c0-.531.281-1 .75-1.281.438-.281 1.031-.281 1.5 0 .438.281.75.75.75 1.281' />
    </g>
    <defs>
      <clipPath id='06a126ad85cab51217fc7e4fdb3b33aa__a'>
        <path d='M0 0h12v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPercentMdBoldIcon);
export default ForwardRef;

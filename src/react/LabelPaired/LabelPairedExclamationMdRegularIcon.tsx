import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedExclamationMdRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={2}
    height={24}
    viewBox='0 0 2 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.5 5.5V15q-.03.47-.5.5-.469-.03-.5-.5V5.5q.031-.469.5-.5.47.031.5.5M1 18.75Q.313 18.687.25 18q.063-.687.75-.75.687.063.75.75-.063.687-.75.75' />
    </g>
    <defs>
      <clipPath id='50aa0c1e196da028a38d567862e93e1f__a'>
        <path d='M0 0h2v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedExclamationMdRegularIcon);
export default ForwardRef;

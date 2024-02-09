import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSevenMdRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={10}
    height={24}
    viewBox='0 0 10 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M0 5.5q.031-.469.5-.5h9a.49.49 0 0 1 .438.25.53.53 0 0 1 0 .5l-8 13q-.282.375-.688.188-.375-.282-.156-.688L8.594 6H.5q-.469-.03-.5-.5' />
    </g>
    <defs>
      <clipPath id='ae717c704b4df626b54e884906ecfaa8__a'>
        <path d='M0 0h10v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSevenMdRegularIcon);
export default ForwardRef;

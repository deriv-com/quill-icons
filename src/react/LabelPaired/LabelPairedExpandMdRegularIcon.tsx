import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedExpandMdRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={24}
    viewBox='0 0 14 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M4.5 5q.47.031.5.5-.03.47-.5.5H1v3.5q-.03.47-.5.5-.469-.03-.5-.5v-4q.031-.469.5-.5zM0 14.5q.031-.469.5-.5.47.031.5.5V18h3.5q.47.031.5.5-.03.47-.5.5h-4q-.469-.03-.5-.5zM13.5 5q.47.031.5.5v4q-.03.47-.5.5-.469-.03-.5-.5V6H9.5q-.469-.03-.5-.5.031-.469.5-.5zm-.5 9.5q.031-.469.5-.5.47.031.5.5v4q-.03.47-.5.5h-4q-.469-.03-.5-.5.031-.469.5-.5H13z' />
    </g>
    <defs>
      <clipPath id='716ee0e69ccd66ee__a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedExpandMdRegularIcon);
export default ForwardRef;

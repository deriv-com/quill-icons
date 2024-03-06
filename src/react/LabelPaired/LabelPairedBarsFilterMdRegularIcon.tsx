import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBarsFilterMdRegularIcon = (
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
      <path d='M0 6.5q.031-.469.5-.5h13q.47.031.5.5-.03.47-.5.5H.5q-.469-.03-.5-.5m2 5q.031-.469.5-.5h9q.47.031.5.5-.03.47-.5.5h-9q-.469-.03-.5-.5m7 5q-.03.47-.5.5h-3q-.469-.03-.5-.5.031-.469.5-.5h3q.47.031.5.5' />
    </g>
    <defs>
      <clipPath id='e839117ba9ad1859f774da845ae7d811__a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBarsFilterMdRegularIcon);
export default ForwardRef;

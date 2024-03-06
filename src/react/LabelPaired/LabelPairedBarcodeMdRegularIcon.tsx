import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBarcodeMdRegularIcon = (
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
      <path d='M0 5.5q.031-.469.5-.5.47.031.5.5v13q-.03.47-.5.5-.469-.03-.5-.5zm2 0q.031-.469.5-.5.47.031.5.5v13q-.03.47-.5.5-.469-.03-.5-.5zM4.5 5q.47.031.5.5v13q-.03.47-.5.5-.469-.03-.5-.5v-13q.031-.469.5-.5m2.5.5q.031-.469.5-.5.47.031.5.5v13q-.03.47-.5.5-.469-.03-.5-.5zM9.5 5q.47.031.5.5v13q-.03.47-.5.5-.469-.03-.5-.5v-13q.031-.469.5-.5m2.5.5q.031-.469.5-.5.47.031.5.5v13q-.03.47-.5.5-.469-.03-.5-.5zm3.5-.5q.47.031.5.5v13q-.03.47-.5.5-.469-.03-.5-.5v-13q.031-.469.5-.5' />
    </g>
    <defs>
      <clipPath id='cd8e71eaba3062fa205a42fb1e462012__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBarcodeMdRegularIcon);
export default ForwardRef;

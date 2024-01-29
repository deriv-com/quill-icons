import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedQrcodeMdRegularIcon = (
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
      <path d='M4.5 6h-3q-.469.031-.5.5v3q.031.47.5.5h3q.47-.03.5-.5v-3q-.03-.469-.5-.5m-3-1h3q.624.03 1.063.438.405.436.437 1.062v3a1.63 1.63 0 0 1-.437 1.063A1.63 1.63 0 0 1 4.5 11h-3a1.63 1.63 0 0 1-1.062-.437A1.63 1.63 0 0 1 0 9.5v-3q.03-.625.438-1.062A1.63 1.63 0 0 1 1.5 5m3 9h-3q-.469.031-.5.5v3q.031.47.5.5h3q.47-.03.5-.5v-3q-.03-.469-.5-.5m-3-1h3q.624.03 1.063.438.405.437.437 1.062v3a1.63 1.63 0 0 1-.437 1.063A1.63 1.63 0 0 1 4.5 19h-3a1.63 1.63 0 0 1-1.062-.437A1.63 1.63 0 0 1 0 17.5v-3q.03-.625.438-1.062A1.63 1.63 0 0 1 1.5 13m8-7q-.469.031-.5.5v3q.031.47.5.5h3q.47-.03.5-.5v-3q-.03-.469-.5-.5zM8 6.5q.03-.625.438-1.062A1.63 1.63 0 0 1 9.5 5h3q.624.03 1.063.438.405.436.437 1.062v3a1.63 1.63 0 0 1-.437 1.063A1.63 1.63 0 0 1 12.5 11h-3a1.63 1.63 0 0 1-1.062-.437A1.63 1.63 0 0 1 8 9.5zm0 7q.031-.469.5-.5h2q.47.031.5.5v2.125h2V13.5q.031-.469.5-.5.47.031.5.5v2.625q-.03.47-.5.5h-3q-.469-.03-.5-.5V14H9v4.75q-.03.47-.5.5-.469-.03-.5-.5zM2.75 7.25h.5q.47.031.5.5v.5q-.03.47-.5.5h-.5q-.469-.03-.5-.5v-.5q.031-.469.5-.5m-.5 8.5q.031-.469.5-.5h.5q.47.031.5.5v.5q-.03.47-.5.5h-.5q-.469-.03-.5-.5zm8.5-8.5h.5q.47.031.5.5v.5q-.03.47-.5.5h-.5q-.469-.03-.5-.5v-.5q.031-.469.5-.5M10 18q.031-.469.5-.5h.5q.47.031.5.5v.5q-.03.47-.5.5h-.5q-.469-.03-.5-.5zm3-.5h.5q.47.031.5.5v.5q-.03.47-.5.5H13q-.469-.03-.5-.5V18q.031-.469.5-.5' />
    </g>
    <defs>
      <clipPath id='b908fd4aecfc4a10d2bb1945c6f8414e__a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedQrcodeMdRegularIcon);
export default ForwardRef;

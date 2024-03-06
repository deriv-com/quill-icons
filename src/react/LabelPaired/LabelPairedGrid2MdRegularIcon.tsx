import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedGrid2MdRegularIcon = (
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
      <path d='M2.5 6q-.469.031-.5.5v3q.031.47.5.5h3q.47-.03.5-.5v-3q-.03-.469-.5-.5zM1 6.5q.03-.625.438-1.062A1.63 1.63 0 0 1 2.5 5h3q.624.03 1.063.438.405.436.437 1.062v3a1.63 1.63 0 0 1-.437 1.063A1.63 1.63 0 0 1 5.5 11h-3a1.63 1.63 0 0 1-1.062-.437A1.63 1.63 0 0 1 1 9.5zM2.5 14q-.469.031-.5.5v3q.031.47.5.5h3q.47-.03.5-.5v-3q-.03-.469-.5-.5zm-1.5.5q.03-.625.438-1.062A1.63 1.63 0 0 1 2.5 13h3q.624.03 1.063.438.405.437.437 1.062v3a1.63 1.63 0 0 1-.437 1.063A1.63 1.63 0 0 1 5.5 19h-3a1.63 1.63 0 0 1-1.062-.437A1.63 1.63 0 0 1 1 17.5zM13.5 6h-3q-.469.031-.5.5v3q.031.47.5.5h3q.47-.03.5-.5v-3q-.03-.469-.5-.5m-3-1h3q.624.03 1.063.438.405.436.437 1.062v3a1.63 1.63 0 0 1-.437 1.063A1.63 1.63 0 0 1 13.5 11h-3a1.63 1.63 0 0 1-1.062-.437A1.63 1.63 0 0 1 9 9.5v-3q.03-.625.438-1.062A1.63 1.63 0 0 1 10.5 5m0 9q-.469.031-.5.5v3q.031.47.5.5h3q.47-.03.5-.5v-3q-.03-.469-.5-.5zm-1.5.5q.03-.625.438-1.062A1.63 1.63 0 0 1 10.5 13h3q.624.03 1.063.438.405.437.437 1.062v3a1.63 1.63 0 0 1-.437 1.063A1.63 1.63 0 0 1 13.5 19h-3a1.63 1.63 0 0 1-1.062-.437A1.63 1.63 0 0 1 9 17.5z' />
    </g>
    <defs>
      <clipPath id='17d7403b46a140652ba85a07aea18404__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedGrid2MdRegularIcon);
export default ForwardRef;

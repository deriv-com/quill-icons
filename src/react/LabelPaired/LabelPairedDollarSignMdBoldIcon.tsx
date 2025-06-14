import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedDollarSignMdBoldIcon = (
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
      <path d='M5.75 4.75v1.563c.844.093 1.625.25 2.219.375a.754.754 0 1 1-.344 1.468c-.969-.219-2.375-.5-3.562-.375q-.891.048-1.407.375c-.312.219-.531.5-.625.969-.094.344-.031.594.063.75.062.188.25.344.531.531.594.375 1.5.594 2.531.875l.094.031c.969.25 2.063.532 2.906 1.032.438.25.813.625 1.063 1.125.281.5.312 1.094.219 1.719-.22 1.124-1.032 1.843-2.032 2.218-.5.188-1.062.313-1.656.344v1.5A.74.74 0 0 1 5 20a.72.72 0 0 1-.75-.75v-1.531c-.125-.032-.219-.032-.312-.063-.782-.093-2.157-.406-3-.781-.375-.187-.563-.625-.375-1 .156-.375.593-.531.968-.375.688.281 1.907.594 2.594.688 1.125.156 2.063.062 2.75-.188.656-.25 1-.625 1.063-1.094.093-.344.03-.594-.063-.75-.062-.187-.25-.375-.531-.531-.594-.375-1.469-.625-2.532-.875l-.093-.031c-.969-.25-2.063-.531-2.907-1.031-.406-.282-.812-.626-1.062-1.126C.5 10.033.438 9.47.563 8.845c.156-.906.625-1.531 1.28-1.938.626-.406 1.376-.562 2.095-.625.093-.031.187-.031.312-.031v-1.5A.74.74 0 0 1 5 4a.76.76 0 0 1 .75.75' />
    </g>
    <defs>
      <clipPath id='9de68ccb012955752c9902b4d2ff1c5e__a'>
        <path d='M0 0h10v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedDollarSignMdBoldIcon);
export default ForwardRef;

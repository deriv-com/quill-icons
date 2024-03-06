import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChartAreaMdRegularIcon = (
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
      <path d='M1 5.5v11q.03.625.438 1.063.436.405 1.062.437h13q.47.031.5.5-.03.47-.5.5h-13q-1.062-.03-1.781-.719Q.03 17.562 0 16.5v-11q.031-.469.5-.5.47.031.5.5m8.281 5.219L7 8.406l-2.844 2.875a.42.42 0 0 0-.156.344V15h10v-2.937a.54.54 0 0 0-.125-.344l-1.937-2.25-1.22 1.25A1.04 1.04 0 0 1 10 11q-.405 0-.719-.281m0-1.438L10 10l.719-.719.531-.531q.312-.28.719-.281.437.03.719.344l1.937 2.28q.375.408.375.97V15a.97.97 0 0 1-.281.719A.97.97 0 0 1 14 16H4a.97.97 0 0 1-.719-.281A.97.97 0 0 1 3 15v-3.375q0-.625.438-1.062L6.28 7.719A.99.99 0 0 1 7 7.406q.405 0 .719.313z' />
    </g>
    <defs>
      <clipPath id='4c0eb20246e4e4a8764c9156b580d0e2__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartAreaMdRegularIcon);
export default ForwardRef;

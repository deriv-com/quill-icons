import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedAppStoreIosMdIcon = (
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
      <path d='M12.5 5q.624.03 1.063.438.405.436.437 1.062v11a1.63 1.63 0 0 1-.437 1.063A1.63 1.63 0 0 1 12.5 19h-11a1.63 1.63 0 0 1-1.062-.437A1.63 1.63 0 0 1 0 17.5v-11q.03-.625.438-1.062A1.63 1.63 0 0 1 1.5 5zM3.969 16.031l.594-1.062q-.47-.594-1.22-.344l-.468.781q-.218.5.25.844.5.219.844-.219m4.344-1.687a.93.93 0 0 0-.032-.844q-.187-.375-.687-.406H5.656l2.688-4.656q.25-.532-.219-.844-.531-.25-.875.218l-.281.47-.25-.47q-.344-.468-.875-.218-.47.313-.219.843l.625 1.094-2.031 3.563H2.625q-.562.03-.625.625.063.562.625.625zm3.062 0q.562-.063.625-.625-.063-.594-.625-.625H9.75a748 748 0 0 1-1.594-2.75 4 4 0 0 0-.25-.438q-.312.25-.437.813-.157.594.218 1.281.438.75 1.094 1.906.53.938 1.219 2.125.344.438.844.219.468-.344.25-.844l-.625-1.062z' />
    </g>
    <defs>
      <clipPath id='c02cd13cc630ecf49d1200f112b4d75a__a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedAppStoreIosMdIcon);
export default ForwardRef;

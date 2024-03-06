import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedTelegramMdIcon = (
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
      <path d='M8 4.25q2.157.03 3.906 1.063a7.74 7.74 0 0 1 2.781 2.78Q15.72 9.845 15.75 12q-.03 2.157-1.062 3.906a7.74 7.74 0 0 1-2.782 2.781Q10.156 19.72 8 19.75q-2.156-.03-3.906-1.062a7.74 7.74 0 0 1-2.782-2.782Q.283 14.156.25 12q.03-2.156 1.063-3.906a7.74 7.74 0 0 1 2.78-2.781Q5.845 4.28 8 4.25m3.594 5.281V9.22A.47.47 0 0 0 11.469 9a.6.6 0 0 0-.313-.094q-.156 0-.75.219-.562.187-2.125.844-1.125.468-4.531 1.937-.532.219-.562.438 0 .312.656.469.093 0 .187.03.282.126.625.188.345.094.563.094.375.03.843-.281 3.157-2.157 3.282-2.188.062-.03.156.031.063.095.031.126-.061.156-.687.718-.594.594-1.094 1.063-.312.249-.344.312l-.187.188q-.313.25-.375.5-.095.219.375.562.468.282.843.531.376.282.907.626l.25.187q.468.375.969.375.344.03.53-.781l.313-1.781q.188-1.063.344-2.094.156-1.063.219-1.688' />
    </g>
    <defs>
      <clipPath id='bd538fe5302fe882c4b7b901772b2663__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedTelegramMdIcon);
export default ForwardRef;
